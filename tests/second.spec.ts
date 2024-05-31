import { test, expect } from "@playwright/test";

test("first test in second file", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});
