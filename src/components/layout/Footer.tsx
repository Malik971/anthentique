import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/content/business";
import { phoneHref, whatsappHref } from "@/lib/links";
import { BrandedSocialButton } from "@/components/ui/BrandedSocialButton";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <Image src="/images/brand/logo-lauthentique-horizontal.webp" alt="Logo de L’Authentique" width={755} height={206} />
          <p>Une adresse conviviale au Village Artisanal de Sainte-Anne, pour manger, boire un verre et profiter du moment.</p>
        </div>
        <div>
          <p className="footer-title">Nous retrouver</p>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin aria-hidden="true" />Village Artisanal Galbas</a>
          <a href={phoneHref(business.phone)}><Phone aria-hidden="true" />{business.phone}</a>
          <a href={`mailto:${business.email}`}><Mail aria-hidden="true" />{business.email}</a>
        </div>
        <div>
          <p className="footer-title">Suivre & contacter</p>
          <BrandedSocialButton platform="whatsapp" href={whatsappHref(business.whatsapp)} label="WhatsApp" variant="footer" />
          <BrandedSocialButton platform="instagram" href={business.instagramUrl} label="Instagram" variant="footer" />
          {business.facebookUrl ? <BrandedSocialButton platform="facebook" href={business.facebookUrl} label="Facebook" variant="footer" /> : null}
          <BrandedSocialButton platform="email" href={`mailto:${business.email}`} label="E-mail" variant="footer" />
        </div>
        <div>
          <p className="footer-title">Le site</p>
          <Link href="/carte">La carte</Link>
          <Link href="/qr-menu">QR menu</Link>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} L’Authentique · Sainte-Anne, Guadeloupe</p>
        <p>Restaurant · Snack · Bar · Glacier au Village Artisanal.</p>
      </div>
    </footer>
  );
}
