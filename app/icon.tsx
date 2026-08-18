import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#16120e",
          color: "#f3ead8",
          fontSize: 16,
          fontFamily: "Georgia, serif",
          letterSpacing: -0.5,
        }}
      >
        TJ
      </div>
    ),
    size,
  );
}
