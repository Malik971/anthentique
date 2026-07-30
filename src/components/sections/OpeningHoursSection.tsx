import Image from "next/image";
import { Clock3, MapPin, Navigation, Phone } from "lucide-react";
import { business } from "@/content/business";
import { phoneHref, whatsappHref } from "@/lib/links";
import { ActionLink } from "@/components/ui/ActionLink";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { OpeningHoursList } from "@/components/ui/OpeningHoursList";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function OpeningHoursSection() {
  return (
    <section className="practical section-pad" id="infos-pratiques" aria-labelledby="practical-title">
      <div className="container practical__shell">
        <div className="practical__visual">
          <Image src="/images/real/facade-close.webp" alt="Entrée du Village Artisanal des Galbas à Sainte-Anne, où se trouve L’Authentique." fill sizes="(max-width: 900px) 100vw, 52vw" />
          <div className="practical__visual-copy">
            <p>Village Artisanal</p>
            <strong>Local 16</strong>
            <span>Sainte-Anne · Guadeloupe</span>
          </div>
        </div>

        <div className="practical__content">
          <div className="practical__title-row">
            <div><p className="eyebrow">Venir à L’Authentique</p><h2 id="practical-title">Tout ce qu’il faut, sans chercher.</h2></div>
            <StatusBadge />
          </div>

          <div className="practical__columns">
            <div className="practical__hours">
              <div className="practical__mini-title"><Clock3 aria-hidden="true" /><h3>Horaires</h3></div>
              <OpeningHoursList />
              <p className="practical__note">Service cuisine jusqu’à 18h30 du lundi au samedi, information à confirmer avant mise en ligne définitive.</p>
            </div>

            <div className="practical__contact">
              <div className="practical__mini-title"><MapPin aria-hidden="true" /><h3>Accès & contact</h3></div>
              <p>{business.address.displayLines.join(" · ")}</p>
              <a href={phoneHref(business.phone)}><Phone aria-hidden="true" />{business.phone}</a>
              <a href={whatsappHref(business.whatsapp)} target="_blank" rel="noopener noreferrer"><BrandIcon platform="whatsapp" aria-hidden="true" />Écrire sur WhatsApp</a>
              <ActionLink href={business.mapsUrl} icon={Navigation} external>Ouvrir l’itinéraire</ActionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
