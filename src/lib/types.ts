export type DayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export interface OpeningSlot {
  open: string;
  close: string;
  closed?: boolean;
  needsClientConfirmation?: boolean;
}

export type OpeningHours = Record<DayKey, OpeningSlot>;

export interface OpeningException {
  date: string;
  label?: string;
  closed?: boolean;
  open?: string;
  close?: string;
}

export interface Address {
  street: string;
  locality: string;
  postalCode: string;
  region: string;
  country: string;
  displayLines: string[];
}

export interface LegalInfo {
  publisher: string;
  legalForm: string;
  shareCapital: string;
  siren: string;
  siret: string;
  officialBrand: string;
  publicationDirector?: string;
  managers?: string[];
  host?: string;
  hostAddress?: string;
  hostPhone?: string;
  vatNumber?: string;
  photoCredits?: string;
  intellectualProperty?: string;
}

export interface BusinessInfo {
  brandName: string;
  legalName: string;
  establishmentName: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  address: Address;
  phone: string;
  whatsapp: string;
  email: string;
  instagramUrl: string;
  facebookUrl: string | null;
  mapsUrl: string;
  siteUrl: string;
  currency: "EUR";
  timezone: "America/Guadeloupe";
  openingHours: OpeningHours;
  openingExceptions: OpeningException[];
  kitchenHours: Partial<Record<DayKey, { close: string }>>;
  services: string[];
  legal: LegalInfo;
  contentValidation: {
    openingHoursConfirmed: boolean;
    breakfastConfirmed: boolean;
    terraceConfirmed: boolean;
    storyEnabled: boolean;
  };
}

export interface MenuCategory {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  order: number;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: string;
  description?: string;
  price?: number;
  image?: string;
  featured: boolean;
  available?: boolean;
  tags?: string[];
  allergens?: string[];
  editorialStatus: "draft" | "confirmed";
}

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  category?: string;
  featured?: boolean;
  placeholder: boolean;
}

export interface Review {
  quote: string;
  author: string;
  source: string;
  sourceUrl?: string;
  verified: boolean;
}
