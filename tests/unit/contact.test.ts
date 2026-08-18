import { describe, expect, it } from "vitest";
import {
  buildMailto,
  hasContactErrors,
  validateContact,
} from "@/lib/contact";

describe("validateContact", () => {
  it("rejects empty or short fields", () => {
    const errors = validateContact({
      name: "A",
      email: "not-an-email",
      message: "Too short",
    });

    expect(errors.name).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.message).toBeDefined();
    expect(hasContactErrors(errors)).toBe(true);
  });

  it("accepts a complete message", () => {
    const errors = validateContact({
      name: "Ada Lovelace",
      email: "ada@example.com",
      message: "I would like to talk about a frontend interface.",
    });

    expect(errors).toEqual({});
    expect(hasContactErrors(errors)).toBe(false);
  });
});

describe("buildMailto", () => {
  it("encodes a draft for the configured inbox", () => {
    const href = buildMailto("hello@example.com", {
      name: "Ada",
      email: "ada@example.com",
      message: "Hello from the portfolio.",
    });

    expect(href.startsWith("mailto:hello@example.com?")).toBe(true);
    expect(href).toContain(encodeURIComponent("Ada"));
    expect(href).toContain(encodeURIComponent("Hello from the portfolio."));
  });
});
