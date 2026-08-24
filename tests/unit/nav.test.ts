import { describe, expect, it } from "vitest";
import { hashTarget, isNavActive } from "@/lib/nav";

describe("isNavActive", () => {
  it("matches homepage hashes", () => {
    expect(isNavActive("/#work", "/", "#work")).toBe(true);
    expect(isNavActive("/#work", "/", "#about")).toBe(false);
    expect(isNavActive("/#about", "/", "")).toBe(false);
  });

  it("reads hash targets from in-page hrefs", () => {
    expect(hashTarget("#work")).toBe("work");
    expect(hashTarget("/#contact")).toBe("contact");
    expect(hashTarget("/projects")).toBeNull();
  });

  it("maps inner routes back to the homepage sections", () => {
    expect(isNavActive("/projects", "/projects/trove-calculator", "")).toBe(
      true,
    );
    expect(isNavActive("/notes", "/notes", "")).toBe(true);
    expect(isNavActive("/contact", "/contact", "")).toBe(true);
    expect(isNavActive("/about", "/about", "")).toBe(true);
  });
});
