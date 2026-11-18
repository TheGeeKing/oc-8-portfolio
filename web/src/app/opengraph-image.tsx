import { ImageResponse } from "next/og";
import { siteConfig } from "./seo";

export const alt = `${siteConfig.name} : développeur full-stack et DevOps`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "80px",
        background: "#101116",
        color: "#f4f1ea",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 30,
          color: "#b9a2d8",
          fontWeight: 600,
        }}
      >
        {siteConfig.name}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          Développeur full-stack et DevOps
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 36,
            color: "rgba(244,241,234,0.7)",
          }}
        >
          À la recherche d'une alternance · Montpellier
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 26,
          color: "rgba(244,241,234,0.55)",
        }}
      >
        React · TypeScript · Node.js · Docker
      </div>
    </div>,
    { ...size },
  );
}
