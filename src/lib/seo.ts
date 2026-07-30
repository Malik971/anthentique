import type { Metadata } from "next";
import { business } from "@/content/business";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${business.siteUrl}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: business.brandName,
      locale: "fr_GP",
      type: "website",
      images: [{ url: "/images/hero/opengraph-lauthentique.webp", width: 1200, height: 630, alt: `${business.brandName} au Village Artisanal de Sainte-Anne` }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/hero/opengraph-lauthentique.webp"] },
  };
}
