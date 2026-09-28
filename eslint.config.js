const js = require("@eslint/js");
const globals = require("globals");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const jsxA11y = require("eslint-plugin-jsx-a11y");
const importPlugin = require("eslint-plugin-import");
const testingLibrary = require("eslint-plugin-testing-library");
const jestDom = require("eslint-plugin-jest-dom");

const testGlobals = Object.fromEntries(
  [
    "afterAll",
    "afterEach",
    "beforeAll",
    "beforeEach",
    "describe",
    "expect",
    "it",
    "test",
    "vi",
    "vitest",
    "global",
  ].map((name) => [name, "readonly"])
);

module.exports = [
  { ignores: ["build/**", "coverage/**", ".lighthouseci/**", "node_modules/**"] },
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  importPlugin.flatConfigs.recommended,
  testingLibrary.configs["flat/react"],
  jestDom.configs["flat/recommended"],
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
    settings: { react: { version: "detect" } },
    rules: {
      // Bare src/ specifiers (jsconfig baseUrl) resolve via vite.config's
      // src-absolute-imports plugin — the node resolver can't see them.
      // Bare src/ specifiers (jsconfig baseUrl) resolve via vite.config's
      // resolve.alias — the node resolver can't see them.
      "import/no-unresolved": "off",
      // Export-map rules crash: typescript is installed (for madge) so the
      // plugin tries to read a tsconfig that doesn't exist. CRA's config
      // never enabled these.
      "import/namespace": "off",
      "import/named": "off",
      "import/default": "off",
      "import/no-named-as-default": "off",
      "import/no-named-as-default-member": "off",
      "import/export": "off",
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          groups: [
            ["builtin", "external"],
            ["internal"],
            ["parent", "sibling", "index"],
          ],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/no-relative-parent-imports": "error",
      // Repo uses zero prop-types — parity with CRA's react-app config.
      "react/prop-types": "off",
      // The `...rest` destructure idiom drops keys intentionally (tests).
      "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    },
  },
  {
    files: ["src/**/*.test.js", "src/setupTests.js", "src/test-utils.js"],
    languageOptions: { globals: { ...testGlobals } },
  },
  {
    // Playwright specs use page.getByRole, not RTL queries
    files: ["e2e/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: { ...globals.node },
    },
    rules: {
      "testing-library/prefer-screen-queries": "off",
      "testing-library/no-await-sync-queries": "off",
      "testing-library/no-node-access": "off",
    },
  },
];
