import type { Metadata, Viewport } from "next";
import { business } from "@/content/business";
import { brandPalette } from "@/content/brand";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RestaurantJsonLd } from "@/components/seo/RestaurantJsonLd";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeColorSync } from "@/components/theme/ThemeColorSync";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: { default: "L’Authentique | Restaurant, snack et cocktails à Sainte-Anne", template: "%s | L’Authentique" },
  description: "Découvrez L’Authentique au Village Artisanal de Sainte-Anne : plats, snacking, cocktails, jus frais, glaces, horaires, menu et accès.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "L’Authentique | Restaurant, snack et cocktails à Sainte-Anne",
    description: "Plats, snacking, cocktails, jus frais et glaces au Village Artisanal de Sainte-Anne.",
    url: business.siteUrl,
    siteName: business.brandName,
    locale: "fr_GP",
    type: "website",
    images: [{ url: "/images/hero/opengraph-lauthentique.webp", width: 1200, height: 630, alt: "L’Authentique au Village Artisanal de Sainte-Anne" }],
  },
  twitter: { card: "summary_large_image", title: business.brandName, description: business.shortDescription, images: ["/images/hero/opengraph-lauthentique.webp"] },
  icons: { icon: "/icon.svg" },
  other: { "msapplication-TileColor": brandPalette.sky300 },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: brandPalette.sky300 },
    { media: "(prefers-color-scheme: dark)", color: brandPalette.night },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ThemeColorSync />
          <a className="skip-link" href="#contenu">Aller au contenu</a>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <RestaurantJsonLd />
      </body>
    </html>
  );
}
