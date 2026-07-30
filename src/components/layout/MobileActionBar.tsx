import Link from "next/link";
import { MapPinned, UtensilsCrossed } from "lucide-react";
import { business } from "@/content/business";
import { whatsappHref } from "@/lib/links";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function MobileActionBar() {
  return (
    <nav className="mobile-action-bar" aria-label="Actions rapides">
      <Link href="/carte"><UtensilsCrossed aria-hidden="true" /><span>Carte</span></Link>
      <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPinned aria-hidden="true" /><span>Itinéraire</span></a>
      <a className="mobile-action-bar__whatsapp" href={whatsappHref(business.whatsapp)} target="_blank" rel="noopener noreferrer"><BrandIcon platform="whatsapp" aria-hidden="true" /><span>WhatsApp</span></a>
    </nav>
  );
}
