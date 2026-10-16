import { ImageResponse } from "next/og";

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07090d",
          color: "#f4f4f5",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            color: "#b7ff4a",
          }}
        >
          PORTFOLIO
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 600,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            Damilola Ayoola
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 38,
              color: "rgba(244,244,245,0.7)",
            }}
          >
            Software Engineer · Data & Automation
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 64,
              height: 4,
              background: "#b7ff4a",
              marginRight: 20,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "rgba(244,244,245,0.55)",
            }}
          >
            Reliable systems for complex data and financial workflows
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
