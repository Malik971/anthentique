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

export interface RegulatedActivityAuthority {
  name: string;
  addressLines: string[];
  phone: string;
}

export interface LegalInfo {
  publisher: string;
  legalForm: string;
  shareCapital: string;
  siren: string;
  siret: string;
  rcs: string;
  vatNumber: string;
  officialBrand: string;
  domainName: string;
  publicationDirectors: string;
  managers: string[];
  host: string;
  hostLegalForm: string;
  hostShareCapital: string;
  hostRcs: string;
  hostVatNumber: string;
  hostAddress: string;
  hostPhone: string;
  regulatedActivityAuthority: RegulatedActivityAuthority;
  photoCredits: string;
  intellectualProperty: string;
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

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  category?: string;
  featured?: boolean;
}

export interface Review {
  quote: string;
  author: string;
  source: string;
  sourceUrl?: string;
  verified: boolean;
}
