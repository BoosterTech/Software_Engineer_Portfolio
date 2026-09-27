const { test, expect } = require("@playwright/test");

// Polls the section's viewport offset — a missing element yields Infinity so
// the assertion keeps retrying instead of passing on null.
const topOf = (page, id) =>
  page.evaluate(
    (sectionId) =>
      document.getElementById(sectionId)?.getBoundingClientRect().top ??
      Number.POSITIVE_INFINITY,
    id
  );

test.describe("Portfolio E2E", () => {
  test("navigates to About via scroll", async ({ page }) => {
    await page.goto("/");
    await page.locator('[data-testid="nav-link-about"]').click();
    await expect.poll(() => topOf(page, "about")).toBeLessThan(200);
  });

  test("switches language to Polish", async ({ page }) => {
    await page.goto("/");
    await page.locator('[aria-label="Select language"]').click();
    await page.getByRole("option", { name: "Polish" }).click();
    await expect(
      page.locator('[data-testid="nav-link-about"]')
    ).toHaveText("O mnie");
    await expect(
      page.locator('[data-testid="nav-link-home"]')
    ).toHaveText("Strona główna");
  });

  test("toggles dark mode", async ({ page }) => {
    await page.goto("/");
    await page.locator('[data-testid="dark-mode-toggle"]').click();
    const darkTheme = await page.evaluate(() =>
      document.documentElement.getAttribute("data-theme")
    );
    expect(darkTheme).toBe("dark");

    await page.locator('[data-testid="dark-mode-toggle"]').click();
    const lightTheme = await page.evaluate(() =>
      document.documentElement.getAttribute("data-theme")
    );
    expect(lightTheme).toBeNull();
  });

  test("carousel navigates to next project via arrow button", async ({ page }) => {
    await page.goto("/");
    await page.locator('[data-testid="nav-link-projects"]').click();

    const secondDot = page.locator('[aria-label="Go to project 2"]');
    const thirdDot = page.locator('[aria-label="Go to project 3"]');
    await expect(secondDot).toHaveAttribute("aria-current", "true");

    await page.locator('[aria-label="Next project"]').click();

    await expect(thirdDot).toHaveAttribute("aria-current", "true");
    await expect(secondDot).not.toHaveAttribute("aria-current");
  });

  test("carousel navigates to specific project via dot click", async ({ page }) => {
    await page.goto("/");
    await page.locator('[data-testid="nav-link-projects"]').click();

    const thirdDot = page.locator('[aria-label="Go to project 3"]');
    await expect(thirdDot).not.toHaveAttribute("aria-current");

    await thirdDot.click();

    await expect(thirdDot).toHaveAttribute("aria-current", "true");
  });

  test("project modal opens, locks focus, and restores on close", async ({
    page,
  }) => {
    await page.goto("/");
    await page.locator('[data-testid="nav-link-projects"]').click();

    const expandButton = page.locator('[aria-label*="Expand"]').first();
    await expandButton.click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(
      dialog.getByRole("button", { name: "Close" })
    ).toBeFocused();

    // Focus stays trapped inside the modal
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    const focusInside = await page.evaluate(
      () => document.activeElement?.closest('[role="dialog"]') !== null
    );
    expect(focusInside).toBe(true);

    // Escape closes and returns focus to the trigger
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await expect(expandButton).toBeFocused();
  });

  test("project modal navigates between projects with arrow keys", async ({
    page,
  }) => {
    await page.goto("/");
    await page.locator('[data-testid="nav-link-projects"]').click();

    await page.locator('[aria-label*="Expand"]').first().click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    const titleBefore = await dialog.getAttribute("aria-label");
    await page.keyboard.press("ArrowRight");
    await expect(dialog).not.toHaveAttribute("aria-label", titleBefore);
  });

  test("carousel arrow keys only work inside the carousel region", async ({
    page,
  }) => {
    await page.goto("/");
    await page.locator('[data-testid="nav-link-projects"]').click();

    const secondDot = page.locator('[aria-label="Go to project 2"]');
    const thirdDot = page.locator('[aria-label="Go to project 3"]');
    await expect(secondDot).toHaveAttribute("aria-current", "true");

    // Focus outside the region — arrows must be ignored
    await page.locator('[data-testid="nav-link-projects"]').focus();
    await page.keyboard.press("ArrowRight");
    await expect(secondDot).toHaveAttribute("aria-current", "true");
    await expect(thirdDot).not.toHaveAttribute("aria-current");

    // Focus inside the region — arrows navigate
    await page.locator('[aria-label="Previous project"]').first().focus();
    await page.keyboard.press("ArrowRight");
    await expect(thirdDot).toHaveAttribute("aria-current", "true");
  });
});

test.describe("Mobile viewport", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("hamburger menu opens and closes", async ({ page }) => {
    await page.goto("/");

    const toggle = page.locator('[aria-label="Toggle navigation menu"]');
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(
      page.locator('[data-testid="mobile-menu"]')
    ).toBeVisible();

    // Selecting a link navigates and closes the menu
    await page
      .locator('[data-testid="mobile-menu"] >> text=Projects')
      .click();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect.poll(() => topOf(page, "projects")).toBeLessThan(300);
  });

  test("Escape closes the open menu and refocuses the toggle", async ({
    page,
  }) => {
    await page.goto("/");

    const toggle = page.locator('[aria-label="Toggle navigation menu"]');
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");

    await page.keyboard.press("Escape");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(toggle).toBeFocused();
  });

  test("backdrop tap closes the open menu", async ({ page }) => {
    await page.goto("/");

    const toggle = page.locator('[aria-label="Toggle navigation menu"]');
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(
      page.locator('[data-testid="mobile-menu"]')
    ).toBeVisible();

    // Tap the backdrop, off the panel
    await page.mouse.click(20, 640);
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  test("mobile menu exposes a share row", async ({ page }) => {
    await page.goto("/");

    await page.locator('[aria-label="Toggle navigation menu"]').click();
    const shareRow = page.locator('[data-testid="mobile-share-item"]');
    await expect(shareRow).toBeVisible();
    await expect(shareRow).toHaveText("Share this portfolio");
  });
});
