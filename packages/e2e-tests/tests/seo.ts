import { test, expect } from "@playwright/test";

export const shouldHavePageTitle = (options: { pageTitle: string }) => {
  return test("should have page title", async ({ page }) => {
    await page.goto("");
    await expect(page).toHaveTitle(options.pageTitle);
  });
};

export const clickContactButton = () => {
  return test("button clicked", async ({ page }) => {
    await page.goto("/contact");
    await page.getByTestId("contact-button");
  });
};