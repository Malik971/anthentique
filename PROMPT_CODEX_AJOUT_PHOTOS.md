# Prompt Codex — intégrer de nouvelles photos validées

Utilise ce prompt après avoir déposé les photos autorisées du propriétaire dans `public/images/imports/`.

```text
Inspecte le projet Next.js existant de L’Authentique.

Des photographies autorisées ont été déposées dans `public/images/imports/`.
Ne télécharge aucune image générique et ne hotlinke aucun média Instagram, Google Maps, Tripadvisor ou Petit Futé.

1. Inventorie les nouvelles images avec leurs dimensions et leur orientation.
2. Renomme-les avec des noms descriptifs sans espaces.
3. Convertis-les en WebP avec une qualité raisonnable, sans agrandir les petites images.
4. Conserve les fichiers originaux dans un sous-dossier `public/images/imports/originals/`.
5. Sélectionne les meilleures images pour le hero, les produits, l’équipe, la terrasse, la façade, les cocktails, la cuisine et la galerie.
6. Mets à jour `src/content/gallery.ts` et les composants concernés.
7. Évite les doublons, les images presque identiques et les recadrages qui coupent les plats ou les personnes.
8. Ajoute des textes alternatifs factuels, sans inventer le nom d’un plat.
9. Vérifie le rendu à 390 px, 768 px et 1440 px.
10. Exécute `npm run lint` et `npm run build`, puis corrige toutes les erreurs.

Ne change pas l’architecture générale ni la logique d’ouverture dynamique et du QR code.
```
