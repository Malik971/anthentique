import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/content/business";
import { PrintButton } from "@/components/ui/PrintButton";
import { DynamicQrCode } from "@/components/ui/DynamicQrCode";
import { pageMetadata } from "@/lib/seo";
import { BrandIcon } from "@/components/ui/BrandIcon";

export const metadata: Metadata = pageMetadata(
  "QR code de la carte",
  "Support imprimable pour accéder à la carte de L’Authentique à Sainte-Anne.",
  "/qr-menu",
);

export default function QrMenuPage() {
  return (
    <main className="qr-page" id="contenu">
      <div className="qr-page__toolbar container"><Link href="/carte">Voir la carte en ligne</Link><PrintButton /></div>
      <article className="qr-sheet">
        <div className="qr-sheet__brand">
          <Image src="/images/brand/logo-lauthentique-horizontal.webp" alt="Logo de L’Authentique" width={755} height={206} />
        </div>
        <p className="qr-sheet__eyebrow">La carte, simplement</p>
        <h1>Scannez pour découvrir notre carte</h1>
        <p>Plats, snacking, cocktails, jus frais, glaces et boissons du moment.</p>
        <div className="qr-sheet__code"><DynamicQrCode size={580} /></div>
        <div className="qr-sheet__place"><strong>L’Authentique</strong><span>Village Artisanal · Sainte-Anne</span></div>
        <a className="qr-sheet__instagram" href={business.instagramUrl} target="_blank" rel="noopener noreferrer"><BrandIcon platform="instagram" aria-hidden="true" />snack.lauthentique</a>
      </article>
    </main>
  );
}
