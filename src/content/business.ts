import type { BusinessInfo, DayKey } from "@/lib/types";

export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100057598203786";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
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
  // Horaires confirmés par le propriétaire du lundi au samedi.
  openingHours: {
    monday: { open: "09:00", close: "20:00" },
    tuesday: { open: "09:00", close: "20:00" },
    wednesday: { open: "09:00", close: "20:00" },
    thursday: { open: "09:00", close: "20:00" },
    friday: { open: "09:00", close: "20:00" },
    saturday: { open: "09:00", close: "20:00" },
    // Valeur provisoire issue de sources publiques concordantes, à confirmer avec le propriétaire.
    sunday: { open: "09:00", close: "15:00", needsClientConfirmation: true },
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
    legalForm: "SARL",
    shareCapital: "20 000 €",
    siren: "953 066 370",
    siret: "953 066 370 00016",
    officialBrand: "AUTHENTIQUE ET L’AUTHENTIQUE",
    // TODO: champs volontairement non publiés avant validation du Kbis et du propriétaire.
    publicationDirector: undefined,
    managers: undefined,
    host: undefined,
    hostAddress: undefined,
    hostPhone: undefined,
    vatNumber: undefined,
    photoCredits: undefined,
    intellectualProperty: undefined,
  },
  contentValidation: {
    openingHoursConfirmed: false,
    breakfastConfirmed: false,
    terraceConfirmed: false,
    storyEnabled: false,
  },
};
