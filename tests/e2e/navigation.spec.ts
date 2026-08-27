import { expect, test } from "@playwright/test";

test("index presents Tosin Joseph Amupitan and primary sections", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "I build reliable web products that move ideas forward.",
  );
  await expect(page.getByRole("link", { name: "VantraClip" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Clarita" })).toBeVisible();
  await expect(page.getByRole("link", { name: "The Judge" })).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Have a product worth building?",
    }),
  ).toBeVisible();
  await expect(page.getByText("Start the conversation")).toBeVisible();
});

test("projects index and a case file load", async ({ page }) => {
  await page.goto("/projects");

  await expect(
    page.getByRole("heading", { name: "Projects I have built" }),
  ).toBeVisible();
  await page
    .getByRole("article")
    .filter({ hasText: "The Judge" })
    .getByRole("link", { name: "View case study", exact: true })
    .click();
  await expect(page).toHaveURL(/\/projects\/the-judge$/);
  await expect(
    page.getByRole("heading", { level: 1, name: "The Judge" }),
  ).toBeVisible();
});

test("legacy work paths redirect to projects", async ({ page }) => {
  await page.goto("/work");
  await expect(page).toHaveURL(/\/projects\/?$/);

  await page.goto("/work/the-judge");
  await expect(page).toHaveURL(/\/projects\/the-judge$/);
});

test("resume and notes structure are reachable", async ({ page }) => {
  await page.goto("/resume");
  await expect(
    page.getByRole("heading", { name: "Product work and expertise" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Selected product experience" }),
  ).toBeVisible();

  await page.goto("/notes");
  await expect(
    page.getByRole("heading", { name: "Engineering notes" }),
  ).toBeVisible();
  await expect(page.getByText(/writing is on the way/i)).toBeVisible();
});

test("about and contact pages are reachable", async ({ page }) => {
  await page.goto("/about");
  await expect(
    page.getByRole("heading", { name: "About me", exact: true }),
  ).toBeVisible();

  await page.goto("/contact");
  await expect(
    page.getByRole("heading", { name: "Have a product worth building?" }),
  ).toBeVisible();
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
    page.getByRole("link", { name: /Tosin Joseph Amupitan home/i }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Profile" })).toBeVisible();
  await page.getByRole("button", { name: "Open menu" }).press("Enter");
  const menu = page.getByRole("dialog");
  await expect(menu).toBeVisible();
  await expect(menu.getByRole("link", { name: "Projects" })).toBeVisible();
  await expect(menu.getByRole("link", { name: "About" })).toBeVisible();
  await expect(menu.getByRole("link", { name: "Contact" })).toBeVisible();
  await expect(menu.getByRole("link", { name: "Profile" })).toBeVisible();
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

  await expect(page.getByRole("link", { name: "The Judge" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Projects I have built" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Products and platforms" }),
  ).toBeVisible();
});

test("same-page links scroll smoothly without hiding content", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "See my projects" }).click();

  await expect(page).toHaveURL(/#work$/);
  await expect(
    page.getByRole("heading", { name: "Projects I have built" }),
  ).toBeInViewport();
});

test("mobile menu projects link scrolls to the shared projects section", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page
    .getByRole("dialog")
    .getByRole("link", { name: "Projects" })
    .click();
  await expect(page.getByRole("dialog")).toBeHidden();
  await expect(page).toHaveURL(/\/#work$/);
  await expect(page.locator("#work")).toBeFocused();
});

test("unknown note slugs render the blank plate", async ({ page }) => {
  await page.goto("/notes/not-a-real-note");
  await expect(
    page.getByRole("heading", { name: "This plate is blank." }),
  ).toBeVisible();
});
