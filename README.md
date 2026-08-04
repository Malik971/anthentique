# L’Authentique — site vitrine

Site vitrine mobile-first de **L’Authentique** (SNACK’ADY), restaurant, bar, snack et glacier au Village Artisanal de Sainte-Anne en Guadeloupe. Le site présente la carte, les horaires, l’adresse et les moyens de contact. Il ne comporte ni paiement, ni commande, ni compte client, ni base de données, ni traceur tiers.

Domaine de production : **https://snack-bar-lauthentique.fr**

## Stack

- Next.js 16 (App Router) et React 19, exporté en site statique
- TypeScript strict
- Tailwind CSS 4 et styles CSS centralisés dans `src/app/globals.css`
- `next/image` en mode non optimisé (export statique)
- Lucide React pour les icônes d’interface, SVG locaux pour les logos de marque
- `qrcode` pour les supports de menu
- ESLint avec les règles Next.js Core Web Vitals

## Prérequis

- Node.js 20.9 ou supérieur (Node 22 recommandé)
- npm 10 ou supérieur

## Installation et développement

```bash
npm install
npm run dev
```

Le serveur de développement écoute sur le port 3000.

## Commandes

| Commande | Rôle |
| --- | --- |
| `npm run dev` | serveur de développement |
| `npm run lint` | ESLint sur tout le dépôt |
| `npm test` | tests du moteur d’horaires |
| `npm run build` | export statique dans `out/` |
| `npm run generate:qr` | régénère les fichiers QR de `public/qr/` |
| `npm run prepare:ovh` | copie `.htaccess` dans `out/` et vérifie l’export |
| `npm run build:ovh` | QR + build + préparation OVH, en une seule commande |

## Routes

- `/` : accueil
- `/carte/` : carte complète, destination du QR code
- `/qr-menu/` : support A5 imprimable
- `/mentions-legales/` : mentions légales
- `/confidentialite/` : politique de confidentialité
- `/robots.txt` et `/sitemap.xml` : SEO technique

## Modifier les informations

- `src/content/business.ts` : coordonnées, adresse, réseaux, horaires, services et informations légales (éditeur, immatriculation, hébergeur, autorité compétente pour l’activité réglementée, crédits photo) ;
- `src/content/gallery.ts` : images de la galerie et textes alternatifs ;
- `src/content/reviews.ts` : avis vérifiés uniquement. La section reste masquée si la liste est vide ;
- `src/content/brand.ts` : palette de marque partagée entre le CSS et les métadonnées.

Les pages `/mentions-legales/` et `/confidentialite/` lisent leurs données depuis `src/content/business.ts` : une correction juridique se fait à cet endroit unique.

### Horaires

`openingHours` et `kitchenHours` dans `src/content/business.ts`, au format `HH:mm`. Le statut « ouvert / fermé », la prochaine ouverture et la mise en évidence du jour courant sont calculés dans le fuseau `America/Guadeloupe`. Les fermetures exceptionnelles se déclarent dans `openingExceptions`.

Horaires en vigueur : lundi à samedi 09:00–20:00, dimanche 09:00–15:00, service cuisine jusqu’à 18:30 du lundi au samedi.

### Images

Les médias proviennent du dossier transmis par le client (voir `public/images/README.md`). Conserver le format WebP, des dimensions cohérentes, et mettre à jour `src/content/gallery.ts` en cas de remplacement.

## Configuration du domaine

Le domaine de production est utilisé par défaut. Pour le surcharger localement, créer un fichier **non versionné** `.env.production.local` :

```env
NEXT_PUBLIC_SITE_URL=https://snack-bar-lauthentique.fr
SITE_URL=https://snack-bar-lauthentique.fr
```

`NEXT_PUBLIC_SITE_URL` alimente les métadonnées, les canonicales, le sitemap, le JSON-LD et le QR code. Aucun secret n’est nécessaire pour construire le site.

## Génération du QR code

```bash
npm run generate:qr
```

Le script écrit `public/qr/carte-lauthentique.svg` et `public/qr/carte-lauthentique.png`, pointant vers `https://snack-bar-lauthentique.fr/carte/`. Les adresses locales sont refusées afin qu’aucun support imprimé ne pointe vers `localhost`. Scanner le fichier imprimé avant diffusion.

Le QR affiché sur l’accueil et sur `/qr-menu/` est généré dans le navigateur à partir de la même URL.

## Export et mise en ligne sur OVH

Le projet est configuré pour un hébergement mutualisé OVH sans serveur Node (`output: "export"`, `trailingSlash: true`, images non optimisées).

```bash
npm run build:ovh
```

Cette commande régénère le QR, produit `out/`, y copie `.htaccess` et vérifie la présence des fichiers indispensables (pages, QR, menus, `robots.txt`, `sitemap.xml`).

Mise en ligne :

1. lancer `npm run build:ovh` ;
2. téléverser **le contenu** de `out/` dans le dossier `www/` de l’hébergement OVH, en incluant le fichier caché `.htaccess` ;
3. associer le domaine `snack-bar-lauthentique.fr` à l’hébergement et activer le certificat SSL ;
4. vérifier `/`, `/carte/`, `/qr-menu/`, `/mentions-legales/`, `/confidentialite/`, `/robots.txt` et `/sitemap.xml` ;
5. vérifier la redirection de `www.snack-bar-lauthentique.fr` et le passage automatique en HTTPS ;
6. scanner le QR imprimé.

`public/.htaccess` force HTTPS, redirige `www` vers le domaine canonique en conservant chemin et paramètres, sert les pages exportées et laisse intacts les fichiers statiques.

## Tests

```bash
npm test
```

Les tests couvrent le moteur d’horaires : ouverture et fermeture aux bornes, dimanche, calcul de la prochaine ouverture et gestion du fuseau de la Guadeloupe.

## Statut d’ouverture dynamique

Le bandeau supérieur, le hero et la section des horaires calculent côté navigateur le jour en Guadeloupe, l’état « Ouvert maintenant » ou « Fermé actuellement », l’heure de fermeture du jour et la prochaine ouverture. Le rendu initial est neutre afin d’éviter toute erreur d’hydratation.

## Vérification SEO

- titres, descriptions et canonicales page par page ;
- `/robots.txt` et `/sitemap.xml` sur le domaine de production ;
- JSON-LD avec le test des résultats enrichis de Google ;
- aperçu Open Graph ;
- exactitude de l’adresse, du téléphone, des horaires et des liens sociaux.
