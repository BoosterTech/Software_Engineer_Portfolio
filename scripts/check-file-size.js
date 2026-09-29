const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(__dirname, "..", "src");
const LINE_LIMIT = 300;

// Content data files are verified by src/content/translations.test.js
// instead of the 300-line rule because they are data, not logic.
const EXCLUDED_FILES = new Set([path.join("src", "content", "projects.js")]);

// projects.js is kept as a single module because each project is a structured
// object with per-language fields; splitting by language would force heavy
// duplication and re-composition. Re-evaluate if it grows past 450 lines.

function getFiles(dir, files = []) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      getFiles(fullPath, files);
    } else if (
      item.isFile() &&
      (item.name.endsWith(".js") || item.name.endsWith(".jsx"))
    ) {
      files.push(fullPath);
    }
  }
  return files;
}

function main() {
  const files = getFiles(SRC_DIR);
  const offenders = [];

  for (const file of files) {
    const relative = path.relative(process.cwd(), file);
    if (EXCLUDED_FILES.has(relative)) continue;

    const content = fs.readFileSync(file, "utf-8");
    const lines = content.split(/\r?\n/).length;
    if (lines > LINE_LIMIT) {
      offenders.push({ file: relative, lines });
    }
  }

  if (offenders.length === 0) {
    console.log(`All source files are under ${LINE_LIMIT} lines.`);
    return;
  }

  console.warn(
    `Warning: the following source files exceed ${LINE_LIMIT} lines:`
  );
  for (const { file, lines } of offenders) {
    console.warn(`  - ${file} (${lines} lines)`);
  }

  process.exit(1);
}

main();
