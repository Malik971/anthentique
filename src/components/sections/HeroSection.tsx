import Image, { getImageProps } from "next/image";
import { MapPin, UtensilsCrossed } from "lucide-react";
import { business } from "@/content/business";
import { whatsappHref } from "@/lib/links";
import { ActionLink } from "@/components/ui/ActionLink";
import { BrandedSocialButton } from "@/components/ui/BrandedSocialButton";
import { LiveOpeningPanel } from "@/components/ui/LiveOpeningPanel";

export function HeroSection() {
  const alt = "Façade de L’Authentique au Village Artisanal de Sainte-Anne";
  const desktop = getImageProps({
    src: "/images/hero/hero-lauthentique-village-arc-en-ciel.webp",
    alt,
    width: 1600,
    height: 900,
    sizes: "100vw",
    priority: true,
  });
  const mobile = getImageProps({
    src: "/images/hero/hero-lauthentique-mobile.webp",
    alt,
    width: 1350,
    height: 1800,
    sizes: "100vw",
    priority: true,
  });

  return (
    <section className="hero" aria-labelledby="hero-title">
      <picture className="hero__media">
        <source media="(max-width: 700px)" srcSet={mobile.props.srcSet} />
        <img {...desktop.props} alt={alt} />
      </picture>
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
