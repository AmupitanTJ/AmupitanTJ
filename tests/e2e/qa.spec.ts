import { expect, test, type Page } from "@playwright/test";

const coreRoutes = [
  "/",
  "/projects",
  "/about",
  "/contact",
  "/resume",
  "/notes",
];

test("external links declare noreferrer", async ({ page }) => {
  for (const route of coreRoutes) {
    await page.goto(route);
    const externalLinks = page.locator(
      'a[href^="http://"], a[href^="https://"]',
    );

    for (let index = 0; index < (await externalLinks.count()); index += 1) {
      const link = externalLinks.nth(index);
      await expect(link).toHaveAttribute("rel", /(^|\s)noreferrer(\s|$)/);
    }
  }
});

test("all discoverable internal links resolve", async ({ page, request }) => {
  const paths = new Set<string>(coreRoutes);

  for (const route of coreRoutes) {
    await page.goto(route);
    const hrefs = await page
      .locator("a[href]")
      .evaluateAll((links) =>
        links.map((link) => (link as HTMLAnchorElement).href),
      );

    for (const href of hrefs) {
      const url = new URL(href);
      if (url.origin === new URL(page.url()).origin) {
        paths.add(`${url.pathname}${url.search}`);
      }
    }
  }

  for (const path of paths) {
    const response = await request.get(path);
    expect(response.status(), `${path} should resolve`).toBeLessThan(400);
  }
});

test("keyboard users can skip navigation and reach primary links", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1024, height: 800 });
  await page.goto("/");

  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();

  await page.goto("/");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: /Tosin Joseph Amupitan home/i }),
  ).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Projects", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/projects\/?$/);
});

test("key layouts remain readable without horizontal overflow", async ({
  page,
}) => {
  for (const width of [320, 375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth -
        document.documentElement.clientWidth,
    );
    expect(overflow, `${width}px viewport overflow`).toBeLessThanOrEqual(1);
  }
});

test("core pages emit no console errors or uncaught page errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  for (const route of coreRoutes) {
    await page.goto(route);
    await page.waitForLoadState("networkidle");
  }

  expect(errors).toEqual([]);
});

test("rendered public pages contain no placeholder or internal TODO copy", async ({
  page,
}) => {
  const suspiciousCopy = /TODO\(|lorem ipsum|fake client|placeholder text/i;
  const pagesToCheck = [...coreRoutes, ...(await discoverProjectPaths(page))];

  for (const route of pagesToCheck) {
    await page.goto(route);
    await expect(page.locator("body")).not.toContainText(suspiciousCopy);
  }
});

async function discoverProjectPaths(page: Page): Promise<string[]> {
  await page.goto("/projects");
  const hrefs = await page
    .locator('a[href^="/projects/"]')
    .evaluateAll((links) =>
      links.map((link) => (link as HTMLAnchorElement).pathname),
    );
  return [...new Set(hrefs)];
}
