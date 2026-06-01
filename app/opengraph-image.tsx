import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Claire Kim | Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#05050f",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Purple glow — top left */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Pink glow — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 450,
            height: 450,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Cyan glow — top right */}
        <div
          style={{
            position: "absolute",
            top: 80,
            right: 60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 20px",
            borderRadius: 999,
            border: "1px solid rgba(168,85,247,0.3)",
            backgroundColor: "rgba(168,85,247,0.08)",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#34d399",
            }}
          />
          <span style={{ color: "#a855f7", fontSize: 18, fontWeight: 500 }}>
            Frontend Developer
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: "-2px",
            background: "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #06b6d4 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 16,
            lineHeight: 1,
          }}
        >
          Claire Kim
        </div>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #a855f7, #ec4899)",
            marginBottom: 28,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: "#64748b",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.6,
          }}
        >
          Designing payment & auth flows · Performance optimization · Team-first collaboration
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#a855f7" }} />
          <span style={{ color: "#475569", fontSize: 16 }}>
            github.com/HI-CLAIRE
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
