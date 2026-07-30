import { ImageResponse } from "next/og";
import { brandPalette } from "@/content/brand";

export const alt = "L’Authentique, restaurant, snack et cocktails à Sainte-Anne";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: brandPalette.sky200, color: brandPalette.ink, width: "100%", height: "100%", display: "flex", padding: "72px 84px", flexDirection: "column", justifyContent: "space-between", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}><div style={{ background: brandPalette.sky500, border: `2px solid ${brandPalette.ink}`, width: 86, height: 86, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 800 }}>L’A</div><span style={{ fontSize: 30, letterSpacing: 3, textTransform: "uppercase" }}>Village Artisanal · Galbas · Sainte-Anne</span></div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1 }}>L’Authentique</div><div style={{ color: brandPalette.sky700, fontSize: 42, marginTop: 22, maxWidth: 900 }}>Snack · Cocktails · Pause gourmande</div></div>
      <div style={{ display: "flex", gap: 28, alignItems: "center", color: brandPalette.ink, fontSize: 28 }}><span>Sur place & à emporter</span><span style={{ color: brandPalette.coral }}>•</span><span>Guadeloupe</span></div>
    </div>,
    size,
  );
}
