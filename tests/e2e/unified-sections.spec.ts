import { expect, test } from "@playwright/test";

test("desktop navigation uses homepage sections with keyboard focus and history", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Primary", exact: true });
  for (const [label, id] of [
    ["Projects", "work"],
    ["About", "about"],
    ["Contact", "contact"],
  ]) {
    await nav.getByRole("link", { name: label, exact: true }).press("Enter");
    await expect(page).toHaveURL(new RegExp(`/#${id}$`));
    await expect(page.locator(`#${id}`)).toBeFocused();
    await expect(
      page.locator(`#${id}-title, #selected-work-title`).filter({
        hasText:
          label === "Projects"
            ? "Projects I have built"
            : label === "About"
              ? "About me"
              : "Have a product worth building?",
      }),
    ).toBeInViewport();
    await expect(
      nav.getByRole("link", { name: label, exact: true }),
    ).toHaveAttribute("aria-current", "location");
  }
  await page.goBack();
  await expect(page).toHaveURL(/\/#about$/);
  await expect(
    nav.getByRole("link", { name: "About", exact: true }),
  ).toHaveAttribute("aria-current", "location");
});

test("navigation from a case study returns to the detailed homepage About section", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/projects/clarita");
  const nav = page.getByRole("navigation", { name: "Primary", exact: true });
  await expect(
    nav.getByRole("link", { name: "Projects", exact: true }),
  ).toHaveAttribute("aria-current", "page");
  await nav.getByRole("link", { name: "About", exact: true }).click();
  await expect(page).toHaveURL(/\/#about$/);
  await expect(
    page.getByRole("heading", { name: "About me", exact: true }),
  ).toBeInViewport();
  await expect(
    page.getByRole("heading", { name: "How I approach product work" }),
  ).toBeVisible();
});

test("mobile menu closes and focuses each chosen homepage section", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  for (const [label, id] of [
    ["Projects", "work"],
    ["About", "about"],
    ["Contact", "contact"],
  ]) {
    await page.getByRole("button", { name: "Open menu" }).click();
    await page
      .getByRole("dialog")
      .getByRole("link", { name: label })
      .press("Enter");
    await expect(page.getByRole("dialog")).toBeHidden();
    await expect(page).toHaveURL(new RegExp(`/#${id}$`));
    await expect(page.locator(`#${id}`)).toBeFocused();
  }
});

test("project cards have identical compact dimensions on home and the direct route", async ({
  page,
}) => {
  test.setTimeout(90_000);
  for (const width of [375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const measurements = [];
    for (const path of ["/", "/projects"]) {
      await page.goto(path);
      const grid = page.locator("[data-project-grid]");
      measurements.push(
        await grid.evaluate((node) => ({
          columns: getComputedStyle(node).gridTemplateColumns,
          cardWidth: node.querySelector("article")!.getBoundingClientRect()
            .width,
        })),
      );
      await expect(grid.getByRole("article")).toHaveCount(3);
    }
    expect(measurements[0]).toEqual(measurements[1]);
    expect(measurements[0]!.columns.split(" ")).toHaveLength(
      width >= 1280 ? 3 : width >= 640 ? 2 : 1,
    );
  }
});

test("About and contact content are shared with the direct routes", async ({
  page,
}) => {
  for (const id of ["about", "contact"]) {
    await page.goto(`/#${id}`);
    if (id === "contact")
      await expect(page.getByLabel("Name", { exact: true })).toBeVisible();
    const homeContent = await page.locator(`#${id}`).innerText();
    await page.goto(`/${id}`);
    if (id === "contact")
      await expect(page.getByLabel("Name", { exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator(`#${id}`)).toHaveText(homeContent, {
      useInnerText: true,
    });
  }
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "In regular use", exact: true }),
  ).toHaveCount(1);
});

test("homepage section links and detailed content work without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({
    baseURL,
    javaScriptEnabled: false,
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Primary", exact: true });
  await nav.getByRole("link", { name: "About", exact: true }).click();
  await expect(page).toHaveURL(/\/#about$/);
  await expect(
    page.getByRole("heading", { name: "About me", exact: true }),
  ).toBeInViewport();
  await expect(
    page.getByRole("heading", { name: "How I approach product work" }),
  ).toBeVisible();
  await nav.getByRole("link", { name: "Contact", exact: true }).click();
  await expect(page).toHaveURL(/\/#contact$/);
  await expect(
    page.getByRole("heading", { name: "Have a product worth building?" }),
  ).toBeInViewport();
  await expect(
    page.locator('#contact a[href="https://github.com/AmupitanTJ/"]'),
  ).toBeVisible();
  await context.close();
});
