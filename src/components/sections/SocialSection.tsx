import Image from "next/image";
import { business } from "@/content/business";
import { whatsappHref } from "@/lib/links";
import { BrandedSocialButton } from "@/components/ui/BrandedSocialButton";

export function SocialSection() {
  return (
    <section className="social-section">
      <div className="container social-section__card">
        <div className="social-section__image">
          <Image src="/images/real/bar-night.webp" alt="L’Authentique illuminé en soirée" fill sizes="(max-width: 900px) 100vw, 44vw" />
        </div>
        <div className="social-section__copy">
          <p className="eyebrow">En direct du bar</p>
          <h2>Les plats du jour, les moments et les nouveautés.</h2>
          <p>Instagram reste le meilleur endroit pour suivre ce qui se passe aujourd’hui. Pour une question rapide, WhatsApp est juste à côté.</p>
          <div className="social-section__links">
            <BrandedSocialButton platform="whatsapp" href={whatsappHref(business.whatsapp)} label="Écrire sur WhatsApp" />
            <BrandedSocialButton platform="instagram" href={business.instagramUrl} label="Suivre sur Instagram" />
            {business.facebookUrl ? <BrandedSocialButton platform="facebook" href={business.facebookUrl} label="Voir notre Facebook" /> : null}
            <BrandedSocialButton platform="email" href={`mailto:${business.email}`} label="Envoyer un e-mail" />
          </div>
        </div>
      </div>
    </section>
  );
}
