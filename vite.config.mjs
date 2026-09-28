import fs from "node:fs";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import { transformWithOxc } from "vite";
import { defineConfig } from "vitest/config";

const srcDir = fileURLToPath(new URL("./src", import.meta.url)).replace(
  /\\/g,
  "/"
);

// CRA convention kept: bare specifiers resolve from src/ (jsconfig baseUrl).
// Alias each top-level entry of src/ — dirs as prefix, .js files as exact —
// generated dynamically so new top-level entries are covered automatically.
const srcAliases = fs
  .readdirSync(srcDir, { withFileTypes: true })
  .flatMap((entry) =>
    entry.isDirectory()
      ? [
          {
            find: new RegExp(`^${entry.name}/`),
            replacement: `${srcDir}/${entry.name}/`,
          },
        ]
      : entry.name.endsWith(".js")
        ? [
            {
              find: new RegExp(`^${entry.name.replace(/\.js$/, "")}$`),
              replacement: `${srcDir}/${entry.name}`,
            },
          ]
        : []
  );

// Source uses JSX inside .js files — CRA allowed it, rolldown's parser does
// not. Pre-transform .js under src/ with oxc so the builtin transform sees
// plain JS (ids on Windows use backslashes — normalize before matching).
const jsxInJs = {
  name: "jsx-in-js",
  enforce: "pre",
  transform(code, id) {
    const file = id.split("?")[0].replace(/\\/g, "/");
    if (file.includes("/src/") && file.endsWith(".js")) {
      return transformWithOxc(code, file, { lang: "jsx" });
    }
    return null;
  },
};

export default defineConfig({
  base: "/Software_Engineer_Portfolio/",
  plugins: [jsxInJs, react()],
  resolve: { alias: srcAliases },
  server: { port: 3000 },
  build: { outDir: "build" },
  optimizeDeps: {
    // index.html is the only real entry — lhci dumps localhost--*.report.html
    // at the root and public/cv.html exists; the default glob would scan them.
    entries: "index.html",
    rolldownOptions: {
      // The dep scanner doesn't run plugin transforms — parse .js as JSX.
      moduleTypes: { ".js": "jsx" },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.test.js"],
    setupFiles: "./src/setupTests.js",
    // LazyMotion's async features() import resolves through the vite pipeline;
    // under v8 coverage instrumentation the App-mount smoke test ran ~16s.
    testTimeout: 30000,
    css: false,
    coverage: {
      provider: "v8",
      include: ["src/**/*.js"],
      exclude: ["src/test-utils.js", "**/*.test.js"],
      thresholds: {
        branches: 70,
        functions: 70,
        lines: 70,
        statements: 70,
      },
    },
  },
});
