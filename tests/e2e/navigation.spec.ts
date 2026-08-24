import { expect, test } from "@playwright/test";

test("index presents Tosin Joseph and primary sections", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "I build fast, thoughtful web experiences.",
  );
  await expect(page.getByRole("link", { name: "TROVE Calc" })).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Have a product, interface, or frontend role in mind?",
    }),
  ).toBeVisible();
  await expect(
    page.getByText("Use the form or reach me through GitHub or LinkedIn."),
  ).toBeVisible();
});

test("projects index and a case file load", async ({ page }) => {
  await page.goto("/projects");

  await expect(
    page.getByRole("heading", { name: "Selected work" }),
  ).toBeVisible();
  await page
    .getByRole("article")
    .filter({ hasText: "TROVE Calc" })
    .getByRole("link", { name: "TROVE Calc" })
    .click();
  await expect(page).toHaveURL(/\/projects\/trove-calculator$/);
  await expect(
    page.getByRole("heading", { level: 1, name: "TROVE Calc" }),
  ).toBeVisible();
});

test("legacy work paths redirect to projects", async ({ page }) => {
  await page.goto("/work");
  await expect(page).toHaveURL(/\/projects\/?$/);

  await page.goto("/work/trove-calculator");
  await expect(page).toHaveURL(/\/projects\/trove-calculator$/);
});

test("resume and notes structure are reachable", async ({ page }) => {
  await page.goto("/resume");
  await expect(page.getByRole("heading", { name: "Record" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Current practice" }),
  ).toBeVisible();

  await page.goto("/notes");
  await expect(page.getByRole("heading", { name: "Desk notes" })).toBeVisible();
  await expect(page.getByText(/writing is on the way/i)).toBeVisible();
});

test("about and contact pages are reachable", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByRole("heading", { name: "About" })).toBeVisible();

  await page.goto("/contact");
  await expect(page.getByRole("heading", { name: "The desk" })).toBeVisible();
  await expect(page.getByLabel("Name")).toBeVisible();
});

test("unknown project slugs render the blank plate", async ({ page }) => {
  await page.goto("/projects/not-a-real-plate");
  await expect(
    page.getByRole("heading", { name: "This plate is blank." }),
  ).toBeVisible();
});

test("homepage nav and 320px layout hold together", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/");

  await expect(
    page.getByRole("link", { name: /Tosin Joseph home/i }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Resume" })).toBeVisible();
  await page.getByRole("button", { name: "Open menu" }).press("Enter");
  const menu = page.getByRole("dialog");
  await expect(menu).toBeVisible();
  await expect(menu.getByRole("link", { name: "Projects" })).toBeVisible();
  await expect(menu.getByRole("link", { name: "About" })).toBeVisible();
  await expect(menu.getByRole("link", { name: "Notes" })).toBeVisible();
  await expect(menu.getByRole("link", { name: "Contact" })).toBeVisible();
  await expect(menu.getByRole("link", { name: "Resume" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(menu).toBeHidden();

  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth -
      document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(1);
});

test("reduced motion keeps homepage content visible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(page.getByRole("link", { name: "TROVE Calc" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Case studies" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Current practice" }),
  ).toBeVisible();
});

test("same-page links scroll smoothly without hiding content", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "View selected work" }).click();

  await expect(page).toHaveURL(/#work$/);
  await expect(
    page.getByRole("heading", { name: "Case studies" }),
  ).toBeInViewport();
});

test("mobile menu projects link opens the projects index", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page
    .getByRole("dialog")
    .getByRole("link", { name: "Projects" })
    .click();
  await expect(page.getByRole("dialog")).toBeHidden();
  await expect(page).toHaveURL(/\/projects\/?$/);
});

test("unknown note slugs render the blank plate", async ({ page }) => {
  await page.goto("/notes/not-a-real-note");
  await expect(
    page.getByRole("heading", { name: "This plate is blank." }),
  ).toBeVisible();
});
