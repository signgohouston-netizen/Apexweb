import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background:
          "radial-gradient(1100px 700px at 10% -10%, #17694F 0%, transparent 60%), radial-gradient(900px 600px at 95% 10%, rgba(176,133,64,0.30) 0%, transparent 62%), #04180F",
        fontFamily: "sans-serif",
        color: "#F8F6F0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 68,
            height: 68,
            borderRadius: 999,
            background: "linear-gradient(135deg,#DDBE79,#8A6526)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 999,
              background: "#0B3B2D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
              color: "#DDBE79",
            }}
          >
            A
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>
            Apex Web Solutions UK
          </div>
          <div
            style={{
              fontSize: 16,
              letterSpacing: 6,
              color: "#B08540",
              marginTop: 4,
            }}
          >
            DESIGN · INNOVATE · DOMINATE
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          Websites that win
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            color: "#DDBE79",
          }}
        >
          you the work.
        </div>
        <div
          style={{
            fontSize: 26,
            color: "rgba(216,241,232,0.72)",
            marginTop: 22,
          }}
        >
          Custom web design · Social media · Managed hosting · Domains
        </div>
      </div>

      <div style={{ display: "flex", gap: 14 }}>
        {["From £865", "Live in 14 days", "99.9% uptime", "UK support"].map(
          (chip) => (
            <div
              key={chip}
              style={{
                border: "1px solid rgba(221,190,121,0.35)",
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: 20,
                color: "#EBD6A6",
              }}
            >
              {chip}
            </div>
          ),
        )}
      </div>
    </div>,
    size,
  );
}
