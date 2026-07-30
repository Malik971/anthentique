import Image from "next/image";
import { ArrowUpRight, MapPin, ShoppingBag, Waves } from "lucide-react";
import { business } from "@/content/business";

export function ExperienceSection() {
  return (
    <section className="experience section-pad" id="lieu" aria-labelledby="place-title">
      <div className="container experience__grid">
        <div className="experience__photos">
          <figure className="experience__photo experience__photo--large">
            <Image src="/images/location/terrasse-lauthentique.webp" alt="Terrasse colorée de L’Authentique au Village Artisanal" fill sizes="(max-width: 900px) 100vw, 52vw" />
          </figure>
          <figure className="experience__photo experience__photo--small">
            <Image src="/images/location/accueil-lauthentique.webp" alt="Accueil souriant derrière le bar de L’Authentique" fill sizes="(max-width: 900px) 55vw, 22vw" />
          </figure>
          <span className="experience__stamp">Sainte-Anne<br />Guadeloupe</span>
        </div>

        <div className="experience__copy">
          <p className="eyebrow">L’adresse</p>
          <h2 id="place-title">Au cœur du village, avec la plage juste à côté.</h2>
          <p>{business.longDescription}</p>
          <div className="experience__facts">
            <div><MapPin aria-hidden="true" /><span><strong>Village Artisanal</strong><small>Local 16 · Sainte-Anne</small></span></div>
            <div><Waves aria-hidden="true" /><span><strong>À deux pas du littoral</strong><small>Pratique après la plage</small></span></div>
            <div><ShoppingBag aria-hidden="true" /><span><strong>Sur place ou à emporter</strong><small>Selon vos envies du moment</small></span></div>
          </div>
          <a className="experience__link" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
            Ouvrir l’itinéraire <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
