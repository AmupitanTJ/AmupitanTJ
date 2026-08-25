import { describe, expect, it } from "vitest";
import { color, duration, radius, shadow, type } from "@/lib/tokens";

describe("design tokens", () => {
  it("keeps a monochrome surface and accent", () => {
    expect(color.navy).toBe("#050505");
    expect(color.foreground).toBe("#F5F5F2");
    expect(color.accent).toBe("#F5F5F2");
    expect(color.accentForeground).toBe("#050505");
  });

  it("uses restrained radius, shadow, and timing", () => {
    expect(radius.lg).toBe("0.75rem");
    expect(shadow.card).toContain("0 16px 48px");
    expect(duration.fast).toBe("150ms");
    expect(duration.base).toBe("220ms");
    expect(duration.slow).toBe("400ms");
  });

  it("pairs editorial body type with JetBrains Mono metadata", () => {
    expect(type.sans).toContain("--font-instrument");
    expect(type.mono).toContain("--font-jetbrains");
    expect(type.metaSize).toBe("0.75rem");
    expect(type.displayTracking).toBe("-0.045em");
  });

  it("reserves the strong border for interactive outlines", () => {
    expect(color.borderStrong).toBe("#73736F");
    expect(color.border).not.toBe(color.borderStrong);
  });
});
