import { mkdir } from "node:fs/promises";
import path from "node:path";
import QRCode from "qrcode";

// Domaine de production par défaut : la génération du QR ne dépend d’aucun secret.
const PRODUCTION_SITE_URL = "https://snack-bar-lauthentique.fr";

const rawSiteUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_SITE_URL;

let siteUrl;
try {
  siteUrl = new URL(rawSiteUrl);
} catch {
  throw new Error(`L’URL fournie pour le QR code est invalide : ${rawSiteUrl}`);
}

if (!/^https?:$/.test(siteUrl.protocol)) {
  throw new Error("L’URL du QR code doit utiliser le protocole http ou https.");
}

if (["localhost", "127.0.0.1", "::1"].includes(siteUrl.hostname)) {
  throw new Error("Refus de générer un QR code permanent vers une adresse locale.");
}

// Le QR imprimé doit pointer explicitement vers /carte/ (export statique avec trailingSlash).
const menuUrl = new URL("/carte/", siteUrl).toString();
const outputDirectory = path.join(process.cwd(), "public", "qr");
await mkdir(outputDirectory, { recursive: true });

const options = {
  errorCorrectionLevel: "Q",
  margin: 3,
  color: { dark: "#162D38FF", light: "#FFFFFFFF" },
};

await Promise.all([
  QRCode.toFile(path.join(outputDirectory, "carte-lauthentique.svg"), menuUrl, { ...options, type: "svg" }),
  QRCode.toFile(path.join(outputDirectory, "carte-lauthentique.png"), menuUrl, { ...options, type: "png", width: 1200 }),
]);

console.log(`QR codes générés vers ${menuUrl}`);
