import { expect, test } from "@playwright/test";

test("contact form surfaces validation errors", async ({ page }) => {
  await page.goto("/contact");
  const submit = page.getByRole("button", {
    name: /prepare message|open mail draft/i,
  });
  await expect(submit).toBeEnabled();

  await submit.click();

  await expect(page.getByText("Name needs at least two characters.")).toBeVisible();
  await expect(page.getByText("Enter a valid email address.")).toBeVisible();
  await expect(
    page.getByText("Message needs at least twenty characters."),
  ).toBeVisible();
});

test("valid contact form prepares a message", async ({ page }) => {
  await page.goto("/contact");

  await page.getByLabel("Name").fill("Ada Lovelace");
  await page.getByLabel("Email").fill("ada@example.com");
  await page
    .getByLabel("Message")
    .fill("I would like to talk about a frontend interface.");
  await page.getByRole("button", { name: /prepare message|open mail draft/i }).click();

  await expect(page.getByRole("status")).toBeVisible();
});
