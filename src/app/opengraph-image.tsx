import { ImageResponse } from "next/og";

export const alt = "Techoverxe — the developer's learning platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "84px",
          background: "#fbfaf7",
          color: "#16151a",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              background: "#16151a",
              color: "#fbfaf7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            T
          </div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>Techoverxe</div>
        </div>

        <div style={{ display: "flex", fontSize: 82, fontWeight: 700, marginTop: 44, lineHeight: 1.05, maxWidth: 940 }}>
          Master the craft of modern tech
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#56545f", marginTop: 26, maxWidth: 860 }}>
          In-depth guides, honest AI-tool reviews, roadmaps, and real interview prep.
        </div>

        <div style={{ display: "flex", position: "absolute", bottom: 64, left: 84, fontSize: 26, color: "#3a45f0" }}>
          Learn. Build. Get hired.
        </div>
      </div>
    ),
    { ...size }
  );
}
