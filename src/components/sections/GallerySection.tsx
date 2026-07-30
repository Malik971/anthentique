import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { business } from "@/content/business";
import { galleryImages } from "@/content/gallery";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function GallerySection() {
  return (
    <section className="gallery section-pad" id="galerie" aria-labelledby="gallery-title">
      <div className="container">
        <div className="gallery__heading">
          <div>
            <p className="eyebrow">L’ambiance</p>
            <h2 id="gallery-title">Des couleurs, du mouvement, du vrai.</h2>
          </div>
          <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer">
            <BrandIcon platform="instagram" aria-hidden="true" />
            <span>Voir plus sur Instagram</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="gallery__mosaic">
          {galleryImages.map((image, index) => (
            <figure className={`gallery__item gallery__item--${index + 1}`} key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
              <figcaption>{image.category}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
