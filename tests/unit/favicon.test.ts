import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const require = createRequire(import.meta.url);
const sharp: typeof import("sharp").default = createRequire(
  require.resolve("next/package.json"),
)("sharp");

describe("browser favicon", () => {
  it("keeps the public brand mark visible without an automatic ICO override", async () => {
    expect(existsSync(resolve("app/favicon.ico"))).toBe(false);
    const icon = sharp(resolve("public/images/brand-mark.png"));
    const metadata = await icon.metadata();
    expect(metadata.width).toBe(256);
    expect(metadata.height).toBe(256);
    expect((await icon.stats()).isOpaque).toBe(true);
  });

  it("contains an opaque, visible logo in every ICO frame", async () => {
    const ico = readFileSync(resolve("public/favicon.ico"));
    expect(ico.readUInt16LE(0)).toBe(0);
    expect(ico.readUInt16LE(2)).toBe(1);
    const count = ico.readUInt16LE(4);
    expect(count).toBeGreaterThan(0);

    for (let index = 0; index < count; index++) {
      const entry = 6 + index * 16;
      const length = ico.readUInt32LE(entry + 8);
      const offset = ico.readUInt32LE(entry + 12);
      const { data, info } = await sharp(ico.subarray(offset, offset + length))
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

      expect(info.width).toBe(ico[entry]);
      expect(info.height).toBe(ico[entry + 1]);
      expect(info.channels).toBe(4);
      let darkPixels = 0;
      let lightPixels = 0;
      for (let pixel = 0; pixel < data.length; pixel += 4) {
        expect(data[pixel + 3], `Frame ${index}: alpha must be opaque`).toBe(
          255,
        );
        if (data[pixel]! < 128) darkPixels++;
        else lightPixels++;
      }
      expect(darkPixels).toBeGreaterThan(info.width);
      expect(lightPixels).toBeGreaterThan(info.width);
    }
  });
});
