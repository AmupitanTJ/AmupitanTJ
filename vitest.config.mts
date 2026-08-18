import path from "node:path";
import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@": root,
    },
  },
  test: {
    environment: "node",
    include: ["tests/unit/**/*.test.ts"],
    exclude: ["tests/e2e/**", "node_modules/**"],
  },
});
