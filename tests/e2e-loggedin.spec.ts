import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("menu", async ({ page }) => {
  await page.getByLabel("Search Wikipedia").click();
  await page.getByLabel("Search Wikipedia").fill("testing");
  await page.getByRole("button", { name: "Search" }).click();
});
