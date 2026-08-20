import { ImageResponse } from "next/og";

// Apple touch icons must be a raster format, so this one is generated.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0B3B2D",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: 132,
          height: 132,
          borderRadius: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#DDBE79,#B08540 45%,#8A6526)",
        }}
      >
        <div
          style={{
            width: 116,
            height: 116,
            borderRadius: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0B3B2D",
            color: "#DDBE79",
            fontSize: 74,
            fontWeight: 700,
          }}
        >
          A
        </div>
      </div>
    </div>,
    size,
  );
}
