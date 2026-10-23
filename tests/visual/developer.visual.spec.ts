import { test, expect } from "@playwright/test";

for (const theme of ["dark", "light"] as const) {
  test(`Developer identity: ${theme}, keyboard, mobile, reduced motion`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    if (theme === "light") await page.getByRole("button", { name: "Light Metal", exact: true }).click();
    const badge = page.getByRole("button", { name: "О программе и разработчике" });
    await badge.focus(); await page.keyboard.press("Enter");
    const dialog = page.getByRole("dialog"); await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("heading", { name: "AI STUDIO ShenData" })).toBeVisible();
    await expect(dialog.getByText("Константин Шендрик", { exact: true })).toBeVisible();
    expect(await dialog.getByRole("img").evaluate(node => (node as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    await page.screenshot({ path: `verification/developer-${theme}.png` });
    await page.keyboard.press("Escape"); await expect(dialog).not.toBeVisible(); await expect(badge).toBeFocused();
    await page.setViewportSize({ width: 390, height: 844 }); await badge.click(); await expect(dialog).toBeVisible();
    expect(await dialog.evaluate(node => node.getBoundingClientRect().width)).toBeLessThanOrEqual(390);
    await page.screenshot({ path: `verification/developer-${theme}-mobile.png` });
    expect(errors).toEqual([]);
  });
}
