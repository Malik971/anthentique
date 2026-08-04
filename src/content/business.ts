import type { BusinessInfo, DayKey } from "@/lib/types";

export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100057598203786";

export const PRODUCTION_SITE_URL = "https://snack-bar-lauthentique.fr";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? PRODUCTION_SITE_URL).replace(/\/$/, "");
const mapsQuery = encodeURIComponent(
  "L'Authentique, Local 16, Village Artisanal Galbas, 97180 Sainte-Anne, Guadeloupe",
);

export const dayLabels: Record<DayKey, string> = {
  monday: "Lundi",
  tuesday: "Mardi",
  wednesday: "Mercredi",
  thursday: "Jeudi",
  friday: "Vendredi",
  saturday: "Samedi",
  sunday: "Dimanche",
};

export const business: BusinessInfo = {
  brandName: "L’Authentique",
  legalName: "SNACK’ADY",
  establishmentName: "AUTHENTIQUE",
  tagline: "Snack, cocktails et pause gourmande au cœur de Sainte-Anne.",
  shortDescription:
    "Restaurant, bar, snack et glacier convivial au Village Artisanal de Sainte-Anne.",
  longDescription:
    "Installé au cœur du Village Artisanal de Sainte-Anne, L’Authentique est une adresse pensée pour faire une pause, déjeuner, boire un verre ou profiter d’un moment détendu à quelques pas du littoral. Habitants, visiteurs et familles peuvent s’y retrouver autour d’une cuisine accessible et d’une sélection de boissons fraîches.",
  address: {
    street: "Local 16, Village Artisanal Galbas",
    locality: "Sainte-Anne",
    postalCode: "97180",
    region: "Guadeloupe",
    country: "GP",
    displayLines: [
      "Local 16 · Village Artisanal Galbas",
      "97180 Sainte-Anne · Guadeloupe",
    ],
  },
  phone: "+590 690 91 77 87",
  whatsapp: "590690917787",
  email: "authentiquesnackbar@icloud.com",
  instagramUrl: "https://www.instagram.com/snack.lauthentique",
  facebookUrl: FACEBOOK_URL,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  siteUrl,
  currency: "EUR",
  timezone: "America/Guadeloupe",
  openingHours: {
    monday: { open: "09:00", close: "20:00" },
    tuesday: { open: "09:00", close: "20:00" },
    wednesday: { open: "09:00", close: "20:00" },
    thursday: { open: "09:00", close: "20:00" },
    friday: { open: "09:00", close: "20:00" },
    saturday: { open: "09:00", close: "20:00" },
    sunday: { open: "09:00", close: "15:00" },
  },
  // Structure prête pour les jours fériés et fermetures exceptionnelles.
  openingExceptions: [],
  kitchenHours: {
    monday: { close: "18:30" },
    tuesday: { close: "18:30" },
    wednesday: { close: "18:30" },
    thursday: { close: "18:30" },
    friday: { close: "18:30" },
    saturday: { close: "18:30" },
  },
  services: ["Sur place", "À emporter", "Cocktails", "Jus frais", "Glaces"],
  legal: {
    publisher: "SNACK’ADY",
    legalForm: "EURL, entreprise unipersonnelle à responsabilité limitée",
    shareCapital: "20 000 €",
    siren: "953 066 370",
    siret: "953 066 370 00016",
    rcs: "953 066 370 RCS Pointe-à-Pitre",
    vatNumber: "FR59953066370",
    officialBrand: "AUTHENTIQUE ET L’AUTHENTIQUE",
    domainName: "snack-bar-lauthentique.fr",
    publicationDirectors:
      "Patrick Aloyse Léon SEYER et Adriana SEYER née CANNEDDU, cogérants de SNACK’ADY.",
    managers: ["Patrick Aloyse Léon SEYER", "Adriana SEYER née CANNEDDU"],
    host: "OVH SAS",
    hostLegalForm: "Société par actions simplifiée",
    hostShareCapital: "50 000 000 €",
    hostRcs: "424 761 419 00045 RCS Lille Métropole",
    hostVatNumber: "FR22424761419",
    hostAddress: "2 rue Kellermann, 59100 Roubaix, France",
    hostPhone: "+33 9 72 10 10 07",
    regulatedActivityAuthority: {
      name: "Mairie de Sainte-Anne",
      addressLines: ["Hôtel de Ville", "Place Schœlcher", "97180 Sainte-Anne", "Guadeloupe"],
      phone: "+590 590 85 48 60",
    },
    photoCredits:
      "L’Authentique / SNACK’ADY. Les photographies et vidéos présentes sur le site ont été fournies par l’établissement et sont utilisées avec son autorisation.",
    intellectualProperty:
      "Le présent site, sa structure, son identité visuelle, ses textes, ses logos et ses contenus sont protégés par la législation applicable à la propriété intellectuelle. Les marques, noms commerciaux, logos et contenus propres à L’Authentique sont la propriété de SNACK’ADY ou sont exploités avec l’autorisation de leurs titulaires. Toute reproduction, représentation, adaptation ou exploitation totale ou partielle sans autorisation préalable est interdite.",
  },
  contentValidation: {
    openingHoursConfirmed: true,
    breakfastConfirmed: false,
    terraceConfirmed: false,
    storyEnabled: false,
  },
};
