import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("menu", async ({ page }) => {
  await page.getByRole("button", { name: "Your alerts" }).click();
  await page.getByRole("link", { name: "All notifications" }).click();
});
