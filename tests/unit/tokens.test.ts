import { describe, expect, it } from "vitest";
import { color, duration, radius, shadow, type } from "@/lib/tokens";

describe("design tokens", () => {
  it("keeps a single dark navy surface and one accent", () => {
    expect(color.navy).toBe("#0B1220");
    expect(color.foreground).toBe("#EDF1F7");
    expect(color.accent).toBe("#4EA2E0");
    expect(color.accentForeground).toBe(color.navy);
  });

  it("uses restrained radius, shadow, and timing", () => {
    expect(radius.lg).toBe("0.75rem");
    expect(shadow.card).toContain("0 10px 28px");
    expect(duration.fast).toBe("150ms");
    expect(duration.base).toBe("220ms");
    expect(duration.slow).toBe("400ms");
  });

  it("pairs Geist-family body type with JetBrains Mono metadata", () => {
    expect(type.sans).toContain("--font-geist-sans");
    expect(type.mono).toContain("--font-jetbrains");
    expect(type.metaSize).toBe("0.75rem");
    expect(type.displayTracking).toBe("-0.035em");
  });

  it("reserves the strong border for interactive outlines", () => {
    expect(color.borderStrong).toBe("#7B8BA6");
    expect(color.border).not.toBe(color.borderStrong);
  });
});
