import { expect, test } from "@playwright/test";

const pages = [
  { path: "/", title: "Tosin Joseph Amupitan — Web Developer" },
  { path: "/projects", title: "Projects — Tosin Joseph Amupitan" },
  { path: "/about", title: "About — Tosin Joseph Amupitan" },
  { path: "/resume", title: "Profile — Tosin Joseph Amupitan" },
  { path: "/notes", title: "Notes — Tosin Joseph Amupitan" },
  { path: "/contact", title: "Contact — Tosin Joseph Amupitan" },
  {
    path: "/projects/vantraclip",
    title: "VantraClip — Tosin Joseph Amupitan",
  },
  {
    path: "/projects/trove-calculator",
    title: "TROVE Calc — Tosin Joseph Amupitan",
  },
] as const;

test("every public page has unique canonical and sharing metadata", async ({
  page,
}) => {
  const titles = new Set<string>();

  for (const entry of pages) {
    await page.goto(entry.path);
    await expect(page).toHaveTitle(entry.title);
    titles.add(await page.title());

    const canonical = page.locator('link[rel="canonical"]');
    const canonicalHref = await canonical.getAttribute("href");
    expect(canonicalHref).not.toBeNull();
    expect(new URL(canonicalHref!).pathname).toBe(entry.path);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /Tosin Joseph Amupitan/,
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /opengraph-image/,
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image",
    );
  }

  expect(titles.size).toBe(pages.length);
});

test("home exposes Person and WebSite structured data", async ({ page }) => {
  await page.goto("/");
  const schemas = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  const types = schemas.map((schema) => JSON.parse(schema)["@type"]);

  expect(types).toEqual(expect.arrayContaining(["Person", "WebSite"]));
});

test("metadata routes expose sitemap, robots, and manifest", async ({
  request,
}) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain("/projects/trove-calculator");

  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain("Sitemap:");

  const manifest = await request.get("/manifest.webmanifest");
  expect(manifest.ok()).toBe(true);
  expect(await manifest.json()).toMatchObject({
    name: "Tosin Joseph Amupitan — Web Developer",
    start_url: "/",
  });
});
