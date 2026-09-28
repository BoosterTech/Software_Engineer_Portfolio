const { AxeBuilder } = require("@axe-core/playwright");
const { test, expect } = require("@playwright/test");

const formatViolations = (violations) =>
  violations
    .map(
      (v) =>
        `${v.id} (${v.impact}): ${v.help}\n` +
        v.nodes
          .map((n) => `  ${n.target.join(" ")}\n  ${n.failureSummary}`)
          .join("\n")
    )
    .join("\n\n");

const scan = async (page) => {
  // Entrance animations fade in from opacity 0 — axe samples rendered pixels,
  // so scanning mid-fade measures blended colors. Wait for finite
  // CSS/WAAPI animations to finish; infinite loops are excluded on purpose.
  await expect
    .poll(() =>
      page.evaluate(() =>
        document
          .getAnimations()
          .filter((a) => a.effect?.getComputedTiming().iterations !== Infinity)
          .every((a) => a.playState === "finished")
      )
    )
    .toBe(true);
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(formatViolations(results.violations)).toBe("");
};

test.describe("axe accessibility scans", () => {
  test("homepage, light theme", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator('[data-testid="nav-link-home"]')
    ).toBeVisible();
    await scan(page);
  });

  test("homepage, dark theme", async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem("theme", "dark"));
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await scan(page);
  });

  test("open project modal", async ({ page }) => {
    await page.goto("/");
    await page.locator('[data-testid="nav-link-projects"]').click();
    await page.locator('[aria-label*="Expand"]').first().click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await scan(page);
  });

  // Scrolling to Projects mounts the About terminal — covers the dark code
  // palette that homepage scans never reach (whileInView keeps it opacity:0).
  test("scrolled page + modal, dark theme", async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem("theme", "dark"));
    await page.goto("/");
    await page.locator('[data-testid="nav-link-projects"]').click();
    await page.locator('[aria-label*="Expand"]').first().click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await scan(page);
  });

  test.describe("mobile viewport", () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test("open mobile menu", async ({ page }) => {
      await page.goto("/");
      await page.locator('[aria-label="Toggle navigation menu"]').click();
      await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible();
      await scan(page);
    });
  });
});
