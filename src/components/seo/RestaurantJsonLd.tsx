import { business } from "@/content/business";

export function RestaurantJsonLd() {
  const openingHoursSpecification = Object.entries(business.openingHours)
    .filter(([, slot]) => !slot.closed)
    .map(([day, slot]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${day.charAt(0).toUpperCase()}${day.slice(1)}`,
      opens: slot.open,
      closes: slot.close,
    }));
  const sameAs = [business.instagramUrl, business.facebookUrl].filter(Boolean);
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: business.brandName,
    legalName: business.legalName,
    url: business.siteUrl,
    image: `${business.siteUrl}/opengraph-image`,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      postalCode: business.address.postalCode,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    openingHoursSpecification,
    menu: `${business.siteUrl}/carte`,
    servesCuisine: ["Restauration traditionnelle", "Snacking", "Cocktails", "Jus frais", "Glaces"],
    sameAs,
    hasMap: business.mapsUrl,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
