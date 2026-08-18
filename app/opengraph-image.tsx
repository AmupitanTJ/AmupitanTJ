import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f3ead8",
          color: "#16120e",
          padding: 64,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 22, letterSpacing: 4 }}>TJ</span>
          <span style={{ fontSize: 18, letterSpacing: 3 }}>
            {site.location.toUpperCase()}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 92, lineHeight: 0.85 }}>Tosin</span>
          <span
            style={{
              fontSize: 92,
              lineHeight: 0.85,
              fontStyle: "italic",
            }}
          >
            Joseph
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 24 }}>{site.role}</span>
          <span style={{ fontSize: 24 }}>{site.headline}</span>
        </div>
      </div>
    ),
    size,
  );
}
