import { Clock3, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { business } from "@/content/business";
import { phoneHref, whatsappHref } from "@/lib/links";
import { TodayHoursLink } from "@/components/ui/TodayHoursLink";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function QuickInfoSection() {
  const items = [
    { icon: UtensilsCrossed, platform: null, title: "La carte", text: "À consulter en ligne", href: "/carte" },
    { icon: MapPin, platform: null, title: "Local 16", text: "Village Artisanal", href: business.mapsUrl, external: true },
    { icon: Phone, platform: null, title: "Appelez-nous", text: business.phone, href: phoneHref(business.phone) },
    { icon: null, platform: "whatsapp" as const, title: "WhatsApp", text: "Réponse directe", href: whatsappHref(business.whatsapp), external: true },
  ];

  return (
    <section className="quick-info" id="essentiel" aria-label="Informations essentielles">
      <div className="container quick-info__inner">
        <div className="quick-info__today">
          <Clock3 aria-hidden="true" />
          <TodayHoursLink />
        </div>
        <div className="quick-info__links">
          {items.map(({ icon: Icon, platform, title, text, href, external }) => (
            <a href={href} key={title} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
              {platform ? <BrandIcon platform={platform} aria-hidden="true" /> : Icon ? <Icon aria-hidden="true" /> : null}
              <span><strong>{title}</strong><small>{text}</small></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
