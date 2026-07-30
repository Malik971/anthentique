# L’Authentique — site vitrine

Site vitrine mobile-first de **L’Authentique**, restaurant, bar, snack et glacier au Village Artisanal de Sainte-Anne en Guadeloupe. Le site présente la carte, les horaires, l’adresse et les moyens de contact sans paiement, commande, compte client, base de données ni traceur tiers.

## Stack

- Next.js 16 avec App Router et React 19
- TypeScript strict
- Tailwind CSS 4 et styles CSS centralisés
- `next/image` et `next/font`
- Lucide React pour les icônes
- `qrcode` pour les supports de menu
- ESLint avec les règles Next.js Core Web Vitals

## Prérequis

- Node.js 20.9 ou supérieur (Node 22 recommandé)
- npm 10 ou supérieur

## Installation et commandes

```bash
npm install
npm run dev
npm run lint
npm run build
npm run generate:qr
```

Le serveur de développement est disponible par défaut sur `http://localhost:3000`.

## Routes

- `/` : accueil
- `/carte` : carte HTML mobile-first, destination du QR code
- `/qr-menu` : support A5 imprimable
- `/mentions-legales` : mentions légales avec champs TODO explicites
- `/confidentialite` : politique de confidentialité
- `/robots.txt` et `/sitemap.xml` : SEO technique natif Next.js

## Où modifier le contenu

- `src/content/business.ts` : coordonnées, adresse, réseaux, horaires, services, informations légales et drapeaux de validation ;
- `src/content/menu.ts` : catégories, produits, descriptions, prix facultatifs et éléments vedettes ;
- `src/content/gallery.ts` : images et textes alternatifs ;
- `src/content/reviews.ts` : avis validés uniquement. La section reste masquée si la liste est vide.

Tous les prix sont facultatifs. Lorsqu’un prix n’est pas défini, aucune ligne de prix n’est rendue. Ne jamais saisir `0`, un prix fictif ou un allergène non confirmé.

### Modifier les horaires

Mettre à jour `openingHours` et `kitchenHours` dans `src/content/business.ts`, puis passer `contentValidation.openingHoursConfirmed` à `true` après validation. Les heures utilisent le format `HH:mm` et le statut est calculé dans le fuseau `America/Guadeloupe`.

### Remplacer les images

Lire `public/images/README.md`. Les SVG présents sont des placeholders explicites. Utiliser des photos originales autorisées en WebP, AVIF ou JPEG, conserver des dimensions cohérentes et mettre à jour `src/content/gallery.ts`. Ne pas utiliser de captures Instagram ni de hotlink.

## Configuration du domaine

Copier `.env.example` vers `.env.local` et définir l’URL publique sans slash final :

```env
NEXT_PUBLIC_SITE_URL=https://domaine-final.example
SITE_URL=https://domaine-final.example
```

`NEXT_PUBLIC_SITE_URL` alimente les métadonnées, les canonicales, le sitemap et le JSON-LD. L’ancien domaine ne doit pas être utilisé tant que son contrôle n’est pas confirmé.

## Génération du QR code

Le script lit `SITE_URL` ou `NEXT_PUBLIC_SITE_URL`, ajoute `/carte`, puis écrit :

- `public/qr/carte-lauthentique.svg`
- `public/qr/carte-lauthentique.png`

Sous PowerShell :

```powershell
$env:SITE_URL="https://domaine-final.example"
npm.cmd run generate:qr
```

Le script échoue volontairement si l’URL n’est pas définie ou invalide. Régénérer les fichiers après configuration du domaine final et scanner le résultat imprimé avant diffusion.

## Déploiement Vercel

1. Importer le dépôt dans Vercel.
2. Conserver le preset Next.js et la commande `npm run build`.
3. Ajouter `NEXT_PUBLIC_SITE_URL` avec le domaine de production.
4. Régénérer puis versionner le QR code dirigé vers le domaine final.
5. Déployer, associer le domaine et vérifier chaque route.

Aucun backend ni service externe n’est nécessaire.

## Vérification SEO

- contrôler les titres, descriptions et canonicales page par page ;
- ouvrir `/robots.txt` et `/sitemap.xml` sur le domaine final ;
- tester le JSON-LD avec Google Rich Results Test ;
- vérifier l’aperçu Open Graph ;
- confirmer que l’adresse, le téléphone, les horaires et les liens sociaux sont exacts ;
- ne jamais ajouter de note, avis, gamme de prix ou coordonnées GPS non vérifiés.

## Avant production

Suivre intégralement [`CONTENT_TODO.md`](./CONTENT_TODO.md). Cette checklist fait partie de la livraison et recense les informations métier encore manquantes.

## Refonte visuelle V2

La page d’accueil a été reconstruite autour de photographies réelles et d’une composition éditoriale : hero en collage, cartes visuelles, présentation du lieu, galerie mosaïque, bloc pratique et appels à l’action mobiles.

Les images actuellement incluses sont temporaires. Lire `PHOTO_SOURCES.md`, `public/images/README.md` et `CONTENT_TODO.md` avant toute publication sur le domaine officiel.

## Statut d’ouverture dynamique

Le bandeau supérieur, le hero et la section des horaires calculent automatiquement :

- le jour et la date en Guadeloupe ;
- l’état `Ouvert maintenant` ou `Fermé actuellement` ;
- l’heure de fermeture du jour ;
- la prochaine ouverture ;
- la mise en évidence du jour courant dans le tableau des horaires.

Le calcul utilise le fuseau `America/Guadeloupe` et les données centralisées dans `src/content/business.ts`.

## QR code du menu

Le QR code affiché sur l’accueil et sur `/qr-menu` est généré dans le navigateur à partir de `NEXT_PUBLIC_SITE_URL`. Les adresses locales sont volontairement refusées afin qu’aucun support permanent ne pointe vers `localhost`.

```text
${NEXT_PUBLIC_SITE_URL}/carte
```

La route `/carte` contient les deux images du menu : le recto et la carte des boissons.

Pour générer également les fichiers SVG et PNG destinés à l’impression :

```bash
SITE_URL=https://domaine-du-site npm run generate:qr
```
