import { afterEach, describe, expect, it, vi } from "vitest";
import { cn, padIndex, siteUrl } from "@/lib/utils";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("cn", () => {
  it("merges conflicting tailwind classes", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });
});

describe("padIndex", () => {
  it("pads one-based indexes", () => {
    expect(padIndex(0)).toBe("01");
    expect(padIndex(9)).toBe("10");
  });

  it("supports custom padding widths", () => {
    expect(padIndex(6, 3)).toBe("007");
  });
});

describe("siteUrl", () => {
  it("joins the site origin with a path", () => {
    expect(siteUrl("/projects")).toMatch(/\/projects$/);
    expect(siteUrl("/")).not.toMatch(/\/$/);
  });

  it("normalizes trailing slashes and relative paths", () => {
    vi.stubEnv("SITE_URL", "https://portfolio.example/");

    expect(siteUrl()).toBe("https://portfolio.example");
    expect(siteUrl("projects/trove-calculator")).toBe(
      "https://portfolio.example/projects/trove-calculator",
    );
  });

  it("ignores blank deployment environment values", () => {
    vi.stubEnv("SITE_URL", "");
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");

    expect(siteUrl()).toBe("http://localhost:3000");
  });
});
