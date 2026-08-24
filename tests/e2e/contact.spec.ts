import { expect, test } from "@playwright/test";

test("contact form exposes labels and useful validation", async ({ page }) => {
  await page.goto("/contact");

  await expect(page.getByLabel("Name")).toBeVisible();
  await expect(page.getByLabel("Email")).toBeVisible();
  await expect(page.getByLabel("Subject")).toBeVisible();
  await expect(page.getByLabel("Message")).toBeVisible();

  await page.getByRole("button", { name: "Send message" }).click();

  await expect(
    page.getByText("Enter your name using at least two characters."),
  ).toBeVisible();
  await expect(page.getByText("Email is required.")).toBeVisible();
  await expect(
    page.getByText("Subject must be at least three characters."),
  ).toBeVisible();
  await expect(
    page.getByText("Tell me a little more—use at least 20 characters."),
  ).toBeVisible();
});

test("contact form shows loading and success states", async ({ page }) => {
  await page.route("**/api/contact", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true }),
    });
  });
  await page.goto("/contact");
  await fillContactForm(page);

  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByRole("button", { name: "Sending…" })).toBeDisabled();
  await expect(page.getByRole("status")).toContainText(
    "your message has been sent successfully",
  );
});

test("contact form shows a recoverable failure state", async ({ page }) => {
  await page.route("**/api/contact", async (route) => {
    await route.fulfill({
      status: 503,
      contentType: "application/json",
      body: JSON.stringify({
        ok: false,
        message:
          "The contact form is temporarily unavailable. Please use the email link instead.",
      }),
    });
  });
  await page.goto("/contact");
  await fillContactForm(page);

  await page.getByRole("button", { name: "Send message" }).click();
  await expect(
    page.getByText(/contact form is temporarily unavailable/i),
  ).toBeVisible();
});

async function fillContactForm(page: import("@playwright/test").Page) {
  await page.getByLabel("Name").fill("Ada Lovelace");
  await page.getByLabel("Email").fill("ada@example.com");
  await page.getByLabel("Subject").fill("Frontend collaboration");
  await page
    .getByLabel("Message")
    .fill("I would like to talk about a frontend interface.");
}
