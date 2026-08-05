import Image from "next/image";
import { MapPin, UtensilsCrossed } from "lucide-react";
import { business } from "@/content/business";
import { whatsappHref } from "@/lib/links";
import { ActionLink } from "@/components/ui/ActionLink";
import { BrandedSocialButton } from "@/components/ui/BrandedSocialButton";
import { LiveOpeningPanel } from "@/components/ui/LiveOpeningPanel";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      {/*
        Visuel décoratif : l’image est appliquée en fond via --hero-image-desktop
        et --hero-image-mobile, afin que le thème clair ou sombre choisi
        manuellement change la photographie immédiatement, sans double
        téléchargement. Le nom, le lieu et les horaires sont déjà en texte.
      */}
      <div className="hero__media" aria-hidden="true" />
      <div className="hero__veil" aria-hidden="true" />
      <div className="container hero__content">
        <div className="hero__copy">
          <p className="hero__eyebrow">Village Artisanal · Galbas · Sainte-Anne</p>
          <Image
            className="hero__logo"
            src="/images/brand/logo-lauthentique-horizontal.webp"
            alt="Logo de L’Authentique"
            width={755}
            height={206}
            priority
          />
          <h1 className="sr-only" id="hero-title">L’Authentique</h1>
          <p className="hero__lead">{business.tagline}</p>
          <LiveOpeningPanel />
          <div className="hero__actions">
            <ActionLink href="/carte" icon={UtensilsCrossed}>Voir la carte</ActionLink>
            <ActionLink href={business.mapsUrl} icon={MapPin} variant="light" external>Nous trouver</ActionLink>
            <BrandedSocialButton
              platform="whatsapp"
              href={whatsappHref(business.whatsapp)}
              label="WhatsApp"
              variant="compact"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
