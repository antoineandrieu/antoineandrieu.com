import { ImageResponse } from "next/og";

export const alt = "Antoine Andrieu — Software engineer & Product Engineer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f5f3ee",
          color: "#161616",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Antoine Andrieu · Software engineer & Product Engineer
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", fontSize: 86, fontWeight: 700, letterSpacing: "-0.06em", lineHeight: 0.96 }}>
            From business problem<br />to a product in production.
          </div>
          <div style={{ color: "#65635f", display: "flex", fontSize: 31, lineHeight: 1.25, maxWidth: 920 }}>
            Complex products · Full-stack · Data · Business systems
          </div>
        </div>
        <div style={{ borderTop: "2px solid #d7d2c8", display: "flex", fontSize: 26, justifyContent: "space-between", paddingTop: 24 }}>
          <span>antoineandrieu.com</span>
          <span>Design · Build · Make reliable</span>
        </div>
      </div>
    ),
    size,
  );
}
