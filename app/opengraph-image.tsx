import { ImageResponse } from "next/og"

import { SITE_NAME } from "@/lib/site"

export const alt = "Tablanet — A Balkan classic, made for your pocket"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#171717",
        color: "#fafafa",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px 80px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#ff6347",
          borderRadius: "999px",
          display: "flex",
          height: "340px",
          opacity: 0.13,
          position: "absolute",
          right: "-90px",
          top: "-120px",
          width: "340px",
        }}
      />

      <div style={{ alignItems: "center", display: "flex", gap: "20px" }}>
        <div
          style={{
            alignItems: "center",
            background: "#f4f1ec",
            borderRadius: "14px",
            color: "#08070a",
            display: "flex",
            fontFamily: "Georgia",
            fontSize: "42px",
            height: "76px",
            justifyContent: "center",
            transform: "rotate(-5deg)",
            width: "58px",
          }}
        >
          ♣
        </div>
        <div style={{ display: "flex", fontSize: "38px", fontWeight: 700, letterSpacing: "-1.5px" }}>
          {SITE_NAME}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "78px",
            fontWeight: 600,
            letterSpacing: "-4px",
            lineHeight: 1.02,
          }}
        >
          <span>A Balkan classic,</span>
          <span>made for your pocket.</span>
        </div>
        <div style={{ color: "#a3a3a3", display: "flex", fontSize: "28px" }}>
          Private two-player matches. No ads. No strangers.
        </div>
      </div>

      <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
        <div style={{ color: "#a3a3a3", display: "flex", fontSize: "22px" }}>tablanet.com</div>
        <div
          style={{
            background: "#ff6347",
            borderRadius: "999px",
            color: "#ffffff",
            display: "flex",
            fontSize: "20px",
            fontWeight: 700,
            padding: "13px 22px",
          }}
        >
          Available on iOS
        </div>
      </div>
    </div>,
    size,
  )
}
