import { describe, expect, it } from "vitest";
import { cn, padIndex, siteUrl } from "@/lib/utils";

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
});

describe("siteUrl", () => {
  it("joins the site origin with a path", () => {
    expect(siteUrl("/work")).toMatch(/\/work$/);
    expect(siteUrl("/")).not.toMatch(/\/$/);
  });
});
