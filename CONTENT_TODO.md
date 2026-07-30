# Contenu à valider avant mise en production

> **Important :** le site contient actuellement des horaires, coordonnées et intitulés provisoires. Ne pas publier sur le domaine final avant validation de cette liste avec le propriétaire.

## Identité et visuels

- [ ] Ajouter le logo original `e63ab224-1e9f-4208-906f-5e7ed7e9cc66.png` (fichier annoncé mais absent du dépôt et de la pièce jointe)
- [ ] Ajouter les quatre photos du Village Artisanal au coucher du soleil (fichiers annoncés mais absents du dépôt et de la pièce jointe)
- [ ] Confirmer les droits d’utilisation des photos
- [ ] Confirmer les crédits du photographe
- [ ] Remplacer les visuels publics temporaires par les fichiers originaux du propriétaire
- [ ] Remplacer ou valider l’image Open Graph 1200 × 630

## Carte et services

- [ ] Confirmer que la carte publique 2024 est encore valable ou fournir le menu actuel
- [ ] Obtenir tous les prix
- [ ] Confirmer les catégories
- [ ] Confirmer les moyens de paiement
- [ ] Confirmer la vente à emporter
- [ ] Confirmer l’accessibilité PMR
- [ ] Confirmer les services pour les groupes
- [ ] Confirmer les petits-déjeuners
- [ ] Confirmer la présence d’une terrasse
- [ ] Ajouter les allergènes uniquement à partir des informations validées

## Horaires et contact

- [x] Horaires confirmés du lundi au samedi : 9 h–20 h
- [ ] Confirmer l’horaire provisoire du dimanche : 9 h–15 h
- [ ] Confirmer les horaires de cuisine
- [ ] Confirmer les jours de fermeture
- [ ] Confirmer le téléphone
- [ ] Confirmer que le téléphone est aussi le numéro WhatsApp
- [ ] Confirmer l’adresse e-mail
- [x] URL Facebook publique retrouvée — à faire confirmer par le propriétaire
- [ ] Obtenir le lien Google Maps officiel
- [ ] Obtenir les éventuelles coordonnées GPS

## Juridique, domaine et SEO

- [ ] Confirmer le nom du directeur ou de la directrice de publication
- [ ] Vérifier le Kbis de SNACK’ADY
- [ ] Confirmer si les noms des gérants doivent apparaître dans les mentions légales
- [ ] Vérifier la propriété de `snack-bar-lauthentique.fr`
- [ ] Définir le domaine final
- [ ] Définir l’hébergeur
- [ ] Renseigner l’adresse et le téléphone de l’hébergeur
- [ ] Décider si le numéro de TVA intracommunautaire doit être affiché
- [ ] Valider la clause de propriété intellectuelle
- [ ] Vérifier toutes les mentions légales
- [ ] Configurer `NEXT_PUBLIC_SITE_URL` avec le domaine final
- [ ] Tester les canonicales, `robots.txt` et `sitemap.xml` sur le domaine final
- [ ] Valider les données structurées Restaurant avec le Rich Results Test
- [ ] Vérifier que le JSON-LD ne contient que des données confirmées
- [ ] Ajouter le lien Facebook au JSON-LD une fois validé
- [ ] Ne renseigner `priceRange`, coordonnées GPS, avis ou note moyenne qu’avec des données confirmées
- [ ] Tester le QR code après mise en ligne

## Recette finale

- [ ] Tester les liens téléphone, WhatsApp, Instagram et Google Maps sur mobile
- [ ] Tester la navigation au clavier et le lien d’évitement
- [ ] Vérifier le rendu à 320, 375, 430, 768, 1024 et 1440 px
- [ ] Vérifier l’absence de débordement horizontal
- [ ] Lancer `npm run lint`
- [ ] Lancer `npm run build`
- [ ] Imprimer `/qr-menu` en A5 et scanner le QR code imprimé
