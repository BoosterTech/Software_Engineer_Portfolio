// Shared Playwright fixture: wraps the default `page` with a console/pageerror
// watchdog. Any console error or uncaught page error collected during a test
// fails it in teardown — the app must produce zero console noise in e2e.
// Specs import `test`/`expect` from here instead of "@playwright/test".
const base = require("@playwright/test");

const test = base.test.extend({
  page: async ({ page }, use) => {
    const errors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(`console.error: ${msg.text()}`);
      }
    });
    page.on("pageerror", (err) => errors.push(`pageerror: ${err}`));
    await use(page);
    base
      .expect(
        errors,
        "page produced console errors (run the site and check DevTools)"
      )
      .toEqual([]);
  },
});

module.exports = { test, expect: base.expect };
