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
  navy: "#050505",
  surface: "#0A0A0A",
  surfaceRaised: "#151515",
  foreground: "#F5F5F2",
  muted: "#A6A6A0",
  accent: "#F5F5F2",
  accentStrong: "#D9D9D4",
  accentForeground: "#050505",
  border: "#292929",
  borderStrong: "#73736F",
  danger: "#E5E5E0",
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
  card: "0 16px 48px rgb(0 0 0 / 0.42)",
} as const;

export const duration = {
  fast: "150ms",
  base: "220ms",
  slow: "400ms",
} as const;

export const easing = {
  out: "cubic-bezier(0.22, 1, 0.36, 1)",
} as const;
