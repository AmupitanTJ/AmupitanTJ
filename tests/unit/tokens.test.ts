import { describe, expect, it } from "vitest";
import { color, duration, radius, shadow, type } from "@/lib/tokens";

describe("design tokens", () => {
  it("keeps a monochrome surface and accent", () => {
    expect(color.navy).toBe("#FFFFFF");
    expect(color.foreground).toBe("#0A0A0A");
    expect(color.accent).toBe("#0A0A0A");
    expect(color.accentForeground).toBe("#FFFFFF");
  });

  it("uses restrained radius, shadow, and timing", () => {
    expect(radius.lg).toBe("0.75rem");
    expect(shadow.card).toContain("0 12px 40px");
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
    expect(color.borderStrong).toBe("#8A8A84");
    expect(color.border).not.toBe(color.borderStrong);
  });
});
