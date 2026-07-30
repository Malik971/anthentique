import type { MenuCategory, MenuItem } from "@/lib/types";

// Contenu de démonstration : chaque intitulé doit être validé ou remplacé par la carte du propriétaire.
export const menuCategories: MenuCategory[] = [
  { id: "daily", slug: "plats-du-jour", name: "Plats du jour", shortName: "Plats", description: "La proposition du moment, à confirmer sur place.", order: 1 },
  { id: "sandwiches", slug: "sandwichs-paninis", name: "Sandwichs & paninis", shortName: "Paninis", description: "Une sélection pratique pour une pause déjeuner.", order: 2 },
  { id: "tapas", slug: "tapas-snacking", name: "Tapas & snacking", shortName: "Tapas", description: "Des formats à partager ou à savourer simplement.", order: 3 },
  { id: "omelettes", slug: "omelettes", name: "Omelettes", shortName: "Omelettes", description: "Les propositions d’omelettes seront précisées avec la carte finale.", order: 4 },
  { id: "cocktails", slug: "cocktails", name: "Cocktails", shortName: "Cocktails", description: "Avec alcool, sans alcool et créations à base de rhum.", order: 5 },
  { id: "juices", slug: "jus-frais", name: "Jus frais", shortName: "Jus", description: "Jus locaux ou fraîchement pressés selon disponibilité.", order: 6 },
  { id: "desserts", slug: "glaces-desserts", name: "Glaces & desserts", shortName: "Desserts", description: "Les douceurs et parfums disponibles au moment de votre visite.", order: 7 },
  { id: "hot-drinks", slug: "boissons-chaudes", name: "Boissons chaudes", shortName: "Chaudes", description: "La sélection de boissons chaudes de L’Authentique.", order: 8 },
];

export const menuItems: MenuItem[] = [
  { id: "daily-example", categoryId: "daily", name: "Plat du jour", description: "Intitulé et composition communiqués selon la proposition du jour.", featured: true, tags: ["Brouillon à valider"], editorialStatus: "draft" },
  { id: "panini-example", categoryId: "sandwiches", name: "Panini de la maison", description: "Recette et accompagnement à confirmer avec la carte définitive.", featured: true, tags: ["Brouillon à valider"], editorialStatus: "draft" },
  { id: "tapas-example", categoryId: "tapas", name: "Assiette tapas", description: "Sélection du moment, détail à venir.", featured: true, tags: ["Brouillon à valider"], editorialStatus: "draft" },
  { id: "omelette-example", categoryId: "omelettes", name: "Omelette du moment", description: "Intitulé provisoire en attente du menu complet.", featured: false, tags: ["Brouillon à valider"], editorialStatus: "draft" },
  { id: "cocktail-example", categoryId: "cocktails", name: "Cocktail signature", description: "Nom et recette à confirmer par L’Authentique.", featured: true, tags: ["Avec ou sans alcool", "Brouillon à valider"], editorialStatus: "draft" },
  { id: "juice-example", categoryId: "juices", name: "Jus frais", description: "Saveurs selon les fruits et la disponibilité.", featured: true, tags: ["Brouillon à valider"], editorialStatus: "draft" },
  { id: "dessert-example", categoryId: "desserts", name: "Glace ou dessert du moment", description: "Parfums et dessert à retrouver sur la carte finale.", featured: true, tags: ["Brouillon à valider"], editorialStatus: "draft" },
  { id: "hot-drink-example", categoryId: "hot-drinks", name: "Boisson chaude", description: "Sélection et formats à confirmer.", featured: false, tags: ["Brouillon à valider"], editorialStatus: "draft" },
];

export const featuredMenuItems = menuItems.filter((item) => item.featured).slice(0, 6);
