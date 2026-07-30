import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, Phone, QrCode, ZoomIn } from "lucide-react";
import { business } from "@/content/business";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { phoneHref, whatsappHref } from "@/lib/links";
import { compactTime } from "@/lib/opening-hours";
import { pageMetadata } from "@/lib/seo";
import { BrandIcon } from "@/components/ui/BrandIcon";

export const metadata: Metadata = pageMetadata(
  "Carte et menu | L’Authentique Sainte-Anne",
  "Consultez la carte de L’Authentique : snacking, salades, desserts, glaces, cocktails et boissons au Village Artisanal de Sainte-Anne.",
  "/carte",
);

const categories = [
  "Petit-déjeuner",
  "Snacking",
  "Sandwichs",
  "Omelettes",
  "Paninis",
  "Salades",
  "Desserts",
  "Glaces",
  "Boissons",
  "Cocktails",
];

export default function MenuPage() {
  const weekdayHours = business.openingHours.monday;
  const sundayHours = business.openingHours.sunday;

  return (
    <>
      <main className="menu-page" id="contenu">
        <section className="menu-hero">
          <div className="container menu-hero__inner">
            <div>
              <Link className="menu-hero__back" href="/"><ArrowLeft aria-hidden="true" />Retour à l’accueil</Link>
              <p className="eyebrow">La carte de L’Authentique</p>
              <h1>Tout voir, directement sur votre téléphone.</h1>
              <p>Snacking, salades, desserts, glaces, cocktails et boissons. Les visuels de carte ci-dessous proviennent de la carte publique 2024 et doivent être validés par le propriétaire avant publication définitive.</p>
              <div className="menu-hero__actions">
                <a href={phoneHref(business.phone)}><Phone aria-hidden="true" />Appeler</a>
                <a href={whatsappHref(business.whatsapp)} target="_blank" rel="noopener noreferrer"><BrandIcon platform="whatsapp" aria-hidden="true" />WhatsApp</a>
                <Link href="/qr-menu"><QrCode aria-hidden="true" />Voir le QR menu</Link>
              </div>
            </div>
            <div className="menu-hero__status">
              <StatusBadge />
              <span>Lundi–samedi · {compactTime(weekdayHours.open)}–{compactTime(weekdayHours.close)}</span>
              <span>Dimanche · {compactTime(sundayHours.open)}–{compactTime(sundayHours.close)} · à confirmer</span>
              <span>Village Artisanal · Sainte-Anne</span>
            </div>
          </div>
        </section>

        <section className="menu-category-strip" aria-label="Catégories de la carte">
          <div className="container">
            {categories.map((category) => <span key={category}>{category}</span>)}
          </div>
        </section>

        <section className="menu-documents section-pad">
          <div className="container">
            <div className="menu-documents__heading">
              <div><p className="eyebrow">Carte complète</p><h2>Deux pages, rien de caché.</h2></div>
              <p>Sur mobile, touchez ou zoomez directement sur les images. Une version structurée pourra remplacer ces supports dès réception du menu final.</p>
            </div>

            <div className="menu-documents__grid">
              <figure className="menu-sheet-card" id="salades">
                <a className="menu-sheet-card__image" href="/images/real/menu-recto.webp" target="_blank" rel="noopener noreferrer" aria-label="Agrandir la carte recto">
                  <Image src="/images/real/menu-recto.webp" alt="Carte recto de L’Authentique avec petit-déjeuner, snacking, sandwichs, omelettes, paninis, salades, desserts et glaces" fill sizes="(max-width: 900px) 100vw, 48vw" />
                </a>
                <figcaption><span>Carte · Recto</span><span><ZoomIn aria-hidden="true" />Zoomez pour lire</span></figcaption>
              </figure>

              <figure className="menu-sheet-card" id="boissons">
                <a className="menu-sheet-card__image" href="/images/real/menu-verso.webp" target="_blank" rel="noopener noreferrer" aria-label="Agrandir la carte des boissons et cocktails">
                  <Image src="/images/real/menu-verso.webp" alt="Carte verso de L’Authentique avec boissons sans alcool, boissons chaudes, vins, cocktails, bières et bières pression" fill sizes="(max-width: 900px) 100vw, 48vw" />
                </a>
                <figcaption><span>Carte · Boissons</span><span><ZoomIn aria-hidden="true" />Zoomez pour lire</span></figcaption>
              </figure>
            </div>

            <div className="menu-documents__notice">
              <div>
                <strong>Une carte plus récente existe ?</strong>
                <p>Remplacez simplement les deux fichiers dans <code>public/images/real</code> sans modifier la mise en page.</p>
              </div>
              <Link href="/qr-menu"><Download aria-hidden="true" />Support QR imprimable</Link>
            </div>
          </div>
        </section>

        <section className="menu-contact-band">
          <div className="container">
            <div><p className="eyebrow">Plat du jour & disponibilités</p><h2>Le plus rapide reste de nous écrire.</h2></div>
            <div>
              <a href={phoneHref(business.phone)}><Phone aria-hidden="true" />{business.phone}</a>
              <a href={whatsappHref(business.whatsapp)} target="_blank" rel="noopener noreferrer"><BrandIcon platform="whatsapp" aria-hidden="true" />Ouvrir WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
      <MobileActionBar />
    </>
  );
}
