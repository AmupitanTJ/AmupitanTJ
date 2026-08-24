import { describe, expect, it } from "vitest";
import { buildMailto, contactSchema } from "@/lib/contact";

describe("contactSchema", () => {
  it("rejects invalid public fields", () => {
    const result = contactSchema.safeParse({
      name: "A",
      email: "not-an-email",
      subject: "Hi",
      message: "Too short",
      website: "",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      expect(errors.name).toBeDefined();
      expect(errors.email).toBeDefined();
      expect(errors.subject).toBeDefined();
      expect(errors.message).toBeDefined();
    }
  });

  it("trims and accepts a complete message", () => {
    const result = contactSchema.safeParse({
      name: "  Ada Lovelace  ",
      email: "ada@example.com",
      subject: "Frontend collaboration",
      message: "I would like to talk about a frontend interface.",
      website: "",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("Ada Lovelace");
    }
  });
});

describe("buildMailto", () => {
  it("encodes the subject and draft for the configured inbox", () => {
    const href = buildMailto("hello@example.com", {
      name: "Ada",
      email: "ada@example.com",
      subject: "Frontend collaboration",
      message: "Hello from the portfolio.",
    });

    expect(href.startsWith("mailto:hello@example.com?")).toBe(true);
    expect(href).toContain(encodeURIComponent("Frontend collaboration"));
    expect(href).toContain(encodeURIComponent("Hello from the portfolio."));
  });
});
