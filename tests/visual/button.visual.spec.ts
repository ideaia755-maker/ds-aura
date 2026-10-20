import { expect, test } from "@playwright/test";

test.describe("AURA Button visual states", () => {
  test("captures button state references", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Button foundation" })).toBeVisible();
    await page.screenshot({ path: "tests/visual/button-dark.png", fullPage: true });
    await page.getByRole("button", { name: "Light Metal" }).click();
    await page.waitForFunction(() => document.documentElement.classList.contains("light"));
    await page.waitForTimeout(300);
    await page.screenshot({ path: "tests/visual/button-light.png", fullPage: true });
    await page.getByRole("button", { name: "Dark Glass" }).click();
    await page.waitForFunction(() => document.documentElement.classList.contains("dark"));
    await page.waitForTimeout(300);
    await page.getByRole("button", { name: "Default" }).first().hover();
    await page.screenshot({ path: "tests/visual/button-hover.png", fullPage: true });
    await page.mouse.down();
    await page.screenshot({ path: "tests/visual/button-pressed.png", fullPage: true });
    await page.mouse.up();
    await page.getByRole("button", { name: "Focus" }).focus();
    await page.screenshot({ path: "tests/visual/button-focus.png", fullPage: true });
    await page.screenshot({ path: "tests/visual/button-loading.png", fullPage: true });
    await page.screenshot({ path: "tests/visual/button-success.png", fullPage: true });
    await page.screenshot({ path: "tests/visual/button-error.png", fullPage: true });
  });
});
