import { expect, test } from "@playwright/test";

test("index presents Tosin Joseph and primary sections", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Tosin");
  await expect(page.getByRole("heading", { name: "On the desk" })).toBeVisible();
  await expect(page.getByRole("link", { name: "This site" })).toBeVisible();
});

test("work register and a case file load", async ({ page }) => {
  await page.goto("/work");

  await expect(page.getByRole("heading", { name: "Register" })).toBeVisible();
  await page.getByRole("link", { name: "This site" }).click();
  await expect(page).toHaveURL(/\/work\/registration$/);
  await expect(
    page.getByRole("heading", { level: 1, name: "This site" }),
  ).toBeVisible();
});

test("about and contact pages are reachable", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByRole("heading", { name: "About" })).toBeVisible();

  await page.goto("/contact");
  await expect(page.getByRole("heading", { name: "The desk" })).toBeVisible();
  await expect(page.getByLabel("Name")).toBeVisible();
});

test("unknown work slugs render the blank plate", async ({ page }) => {
  await page.goto("/work/not-a-real-plate");
  await expect(
    page.getByRole("heading", { name: "This plate is blank." }),
  ).toBeVisible();
});
