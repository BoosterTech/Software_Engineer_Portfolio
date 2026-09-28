// Scratch: identify the dark-theme contrast violators axe flagged.
const { chromium } = require("@playwright/test");
const { AxeBuilder } = require("@axe-core/playwright");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  await context.addInitScript(() => {
    localStorage.setItem("theme", "dark");
  });
  const page = await context.newPage();
  await page.goto("http://localhost:3100/");
  await page.waitForSelector('[data-testid="nav-link-home"]');

  const theme = await page.evaluate(() =>
    document.documentElement.getAttribute("data-theme")
  );
  const bodyBg = await page.evaluate(
    () => getComputedStyle(document.body).backgroundColor
  );
  console.log("theme:", theme, "| body bg:", bodyBg);

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  for (const v of results.violations) {
    console.log(`\n${v.id} (${v.impact}): ${v.help}`);
    for (const n of v.nodes) {
      console.log("  target:", n.target.join(" "));
      console.log("  ", n.failureSummary.split("\n").slice(0, 4).join("\n   "));
      const info = await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const cs = getComputedStyle(el);
        return {
          tag: el.tagName,
          text: el.textContent.trim().slice(0, 80),
          color: cs.color,
          bg: cs.backgroundColor,
          outer: el.outerHTML.slice(0, 200),
        };
      }, n.target[0]);
      console.log("   element:", JSON.stringify(info, null, 2));
    }
  }
  console.log("\ntotal violations:", results.violations.length);
  await browser.close();
})();
