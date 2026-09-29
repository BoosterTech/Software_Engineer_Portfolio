const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(__dirname, "..", "src");

// Matches hex colors such as #00a3ff, #fff, and short/long forms.
const HEX_PATTERN = /#[0-9a-fA-F]{3,8}\b/g;

// Matches rgb/rgba() with numeric values, e.g. rgba(0, 163, 255, 0.6).
// It intentionally does not match rgb/rgba() that uses CSS variables.
const RGBA_PATTERN =
  /\brgba?\(\s*(?:\d{1,3}\s*,\s*){2,3}\d{1,3}(?:\s*,\s*(?:0?\.\d+|1|0))?\s*\)/g;

// Matches the bare word "white" or "black" as a color value (not inside a var()).
const BARE_COLOR_PATTERN = /(?<![\w-])white(?![\w-])|(?<![\w-])black(?![\w-])/g;

// rgb(var(--x-rgb) / a) is INVALID CSS: our rgb tokens are comma-separated
// ("248,250,252"), so this produces "rgb(248, 250, 252 / 0.85)" — comma syntax
// can't mix with slash-alpha, the browser drops the declaration silently, and
// the element ends up transparent. Use rgba(var(--x-rgb), a) instead.
const INVALID_RGB_SLASH_PATTERN = /\brgb\(var\(--[\w-]+\)\s*\/\s*[0-9.]+\)/g;

// Files that legitimately contain hardcoded color values.
const ALLOWLIST = [
  "src/styles/tokens.js",
  "src/features/portfolio/Contact/contactIcons.js",
  "src/common/animations.js",
];

function isAllowlisted(filePath) {
  const rel = path.relative(process.cwd(), filePath).replace(/\\/g, "/");
  return ALLOWLIST.includes(rel);
}

function getJsFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      getJsFiles(fullPath, files);
    } else if (item.isFile() && /\.jsx?$/.test(item.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

function main() {
  const files = getJsFiles(SRC_DIR);
  const offenders = [];

  for (const file of files) {
    if (isAllowlisted(file)) continue;

    const content = fs.readFileSync(file, "utf-8");
    const matches = [];

    let match;
    while ((match = HEX_PATTERN.exec(content)) !== null) {
      matches.push(match[0]);
    }
    while ((match = RGBA_PATTERN.exec(content)) !== null) {
      matches.push(match[0]);
    }
    while ((match = BARE_COLOR_PATTERN.exec(content)) !== null) {
      matches.push(match[0]);
    }
    while ((match = INVALID_RGB_SLASH_PATTERN.exec(content)) !== null) {
      matches.push(`${match[0]} (invalid syntax — use rgba(var(--x), a))`);
    }

    const unique = [...new Set(matches)];
    if (unique.length) {
      offenders.push({
        file: path.relative(process.cwd(), file),
        matches: unique,
      });
    }
  }

  if (offenders.length === 0) {
    console.log("No hardcoded colors found in src/ JS files.");
    return;
  }

  console.error("[check:colors] Hardcoded colors found in JS files:");
  for (const { file, matches } of offenders) {
    console.error(`  - ${file}: ${matches.join(", ")}`);
  }
  process.exit(1);
}

main();
