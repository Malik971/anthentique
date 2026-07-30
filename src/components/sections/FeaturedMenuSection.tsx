import Image from "next/image";
import Link from "next/link";
import { ArrowRight, QrCode } from "lucide-react";
import { DynamicQrCode } from "@/components/ui/DynamicQrCode";

const highlights = [
  {
    title: "À manger",
    subtitle: "Plats du jour, snacking, salades et petites faims",
    image: "/images/food/croque-monsieur.webp",
    href: "/carte#salades",
  },
  {
    title: "À partager",
    subtitle: "Des assiettes généreuses pour les journées qui s’étirent",
    image: "/images/food/assiette-a-partager.webp",
    href: "/carte",
  },
  {
    title: "À boire",
    subtitle: "Cocktails, jus frais, boissons chaudes et fraîches",
    image: "/images/drinks/cocktail-aperol-terrasse.webp",
    href: "/carte#boissons",
  },
];

export function FeaturedMenuSection() {
  return (
    <section className="menu-showcase section-pad" aria-labelledby="menu-showcase-title">
      <div className="container">
        <div className="menu-showcase__heading">
          <div>
            <p className="eyebrow">La carte</p>
            <h2 id="menu-showcase-title">Une envie, une pause, un verre.</h2>
          </div>
          <p>Pas besoin de chercher longtemps : la carte, les horaires et l’itinéraire sont accessibles immédiatement, surtout sur mobile.</p>
        </div>

        <div className="menu-showcase__grid">
          {highlights.map((item, index) => (
            <Link className={`menu-showcase__card menu-showcase__card--${index + 1}`} href={item.href} key={item.title}>
              <Image src={item.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" />
              <div className="menu-showcase__veil" aria-hidden="true" />
              <div className="menu-showcase__content">
                <span>0{index + 1}</span>
                <div><h3>{item.title}</h3><p>{item.subtitle}</p></div>
                <ArrowRight aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

        <div className="menu-showcase__qr">
          <div className="menu-showcase__qr-preview" aria-hidden="true">
            <Image src="/images/menu/menu-recto.webp" alt="" fill sizes="180px" />
            <Image src="/images/menu/menu-verso.webp" alt="" fill sizes="180px" />
          </div>
          <div className="menu-showcase__qr-copy">
            <p className="eyebrow">Menu mobile</p>
            <h3>Scannez pour consulter la carte.</h3>
            <p>Le QR code ouvre directement la page contenant le menu recto et la carte des boissons. Il s’adapte automatiquement au domaine sur lequel le site est ouvert.</p>
            <Link className="text-link" href="/carte"><QrCode aria-hidden="true" />Ouvrir la carte</Link>
          </div>
          <Link className="menu-showcase__qr-code" href="/carte" aria-label="Ouvrir la carte complète">
            <DynamicQrCode size={170} />
          </Link>
        </div>

        <div className="menu-showcase__footer">
          <p>Sandwichs · paninis · omelettes · salades · desserts · glaces · cocktails · jus</p>
          <Link className="text-link" href="/carte">Découvrir la carte <ArrowRight aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
