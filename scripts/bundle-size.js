const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const BUILD_DIR = path.join(__dirname, "..", "build");
const MAX_SIZE = Number(process.env.BUNDLE_SIZE_LIMIT) || 350 * 1024;
const MAX_TOTAL = Number(process.env.BUNDLE_TOTAL_LIMIT) || 250 * 1024;

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      getFiles(fullPath, files);
    } else if (/\.(js|css)$/i.test(item.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

function main() {
  const files = getFiles(BUILD_DIR);

  if (files.length === 0) {
    console.log("No JS/CSS bundles found in build/. Skipping check.");
    return;
  }

  let failed = false;
  let total = 0;

  for (const file of files) {
    const size = zlib.gzipSync(fs.readFileSync(file)).length;
    total += size;
    const sizeKb = (size / 1024).toFixed(2);
    const relative = path.relative(BUILD_DIR, file);

    if (size > MAX_SIZE) {
      console.error(
        `Bundle too large: ${relative} (${sizeKb} KB gzipped) exceeds ${MAX_SIZE / 1024} KB`
      );
      failed = true;
    } else {
      console.log(`OK: ${relative} (${sizeKb} KB gzipped)`);
    }
  }

  if (total > MAX_TOTAL) {
    console.error(
      `Total bundle too large: ${(total / 1024).toFixed(2)} KB gzipped exceeds ${MAX_TOTAL / 1024} KB`
    );
    failed = true;
  } else {
    console.log(
      `Total: ${(total / 1024).toFixed(2)} KB gzipped (limit ${MAX_TOTAL / 1024} KB)`
    );
  }

  if (failed) {
    process.exit(1);
  }
}

main();
