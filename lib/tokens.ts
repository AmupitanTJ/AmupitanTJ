/**
 * Design tokens mirrored from `app/globals.css`.
 * CSS remains the runtime source of truth.
 *
 * Contrast notes (WCAG 2.2 AA):
 * - Off-white `#EDF1F7` on navy `#0B1220` exceeds 4.5:1 for body copy.
 * - Muted `#A7B2C6` on navy and on surface `#121A2C` exceeds 4.5:1.
 * - Accent `#4EA2E0` on navy exceeds 4.5:1 as text, and as a large
 *   control fill with navy type on top.
 * - Strong borders `#7B8BA6` exceed 3:1 against navy and surface —
 *   use them on interactive outlines (cards, inputs, secondary buttons).
 * - Subtle borders `#2C3A55` are for non-interactive rules only.
 */
export const color = {
  navy: "#FFFFFF",
  surface: "#FFFFFF",
  surfaceRaised: "#F3F3EF",
  foreground: "#0A0A0A",
  muted: "#5C5C57",
  accent: "#0A0A0A",
  accentStrong: "#2A2A2A",
  accentForeground: "#FFFFFF",
  border: "#DEDED8",
  borderStrong: "#8A8A84",
  danger: "#1F1F1F",
} as const;

export const type = {
  sans: "var(--font-instrument), ui-sans-serif, system-ui, sans-serif",
  mono: "var(--font-jetbrains), ui-monospace, monospace",
  displayWeight: "600",
  displayTracking: "-0.045em",
  displayLeading: "0.9",
  metaSize: "0.75rem",
  metaTracking: "0.04em",
  metaLeading: "1.4",
} as const;

export const radius = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
} as const;

export const space = {
  gutter: "1.5rem",
  section: "6rem",
  container: "72rem",
} as const;

export const shadow = {
  card: "0 12px 40px rgb(0 0 0 / 0.07)",
} as const;

export const duration = {
  fast: "150ms",
  base: "220ms",
  slow: "400ms",
} as const;

export const easing = {
  out: "cubic-bezier(0.22, 1, 0.36, 1)",
} as const;
