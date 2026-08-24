import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { color } from "@/lib/tokens";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: color.navy,
        color: color.foreground,
        padding: 72,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 20, letterSpacing: 2, color: color.accent }}>
          TJA
        </span>
        <span style={{ fontSize: 18, color: color.muted }}>
          {site.location}
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 88, lineHeight: 0.92, letterSpacing: -3 }}>
          Tosin
        </span>
        <span style={{ fontSize: 72, lineHeight: 0.92, letterSpacing: -3 }}>
          Joseph Amupitan
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 22, color: color.muted }}>{site.role}</span>
        <span style={{ fontSize: 22 }}>{site.headline}</span>
      </div>
    </div>,
    size,
  );
}
