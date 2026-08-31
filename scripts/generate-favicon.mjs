import { writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

// Use Next.js's installed image encoder; the source is the existing logo artwork.
const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve("next/package.json"))("sharp");
const sizes = [16, 32, 48];
const images = await Promise.all(
  sizes.map((size) =>
    sharp(
      fileURLToPath(
        new URL("../public/images/brand-mark.png", import.meta.url),
      ),
    )
      .resize(size, size)
      .removeAlpha()
      .ensureAlpha(1)
      .png()
      .toBuffer(),
  ),
);

const header = Buffer.alloc(6 + images.length * 16);
header.writeUInt16LE(1, 2); // ICO, not CUR.
header.writeUInt16LE(images.length, 4);
let offset = header.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  header[entry] = sizes[index];
  header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});

await writeFile(
  new URL("../public/favicon.ico", import.meta.url),
  Buffer.concat([header, ...images]),
);
console.log("Generated opaque logo favicons at 16, 32, and 48 pixels.");
