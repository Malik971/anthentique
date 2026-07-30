import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Politique de confidentialité",
  "Politique de confidentialité du site de L’Authentique à Sainte-Anne.",
  "/confidentialite",
);

export default function PrivacyPage() {
  return (
    <main className="legal-page" id="contenu">
      <div className="container legal-page__inner">
        <p className="eyebrow">Vie privée</p>
        <h1>Politique de confidentialité</h1>
        <p className="legal-intro">Dans sa configuration actuelle, ce site ne collecte pas de données personnelles et n’utilise aucun outil de mesure d’audience ou traceur publicitaire.</p>
        <section><h2>Données collectées</h2><p>Aucun compte, formulaire, espace client ou système de commande n’est présent. Aucune donnée personnelle n’est enregistrée par L’Authentique lors de la simple consultation du site.</p></section>
        <section><h2>Cookies</h2><p>Le site ne dépose aucun cookie publicitaire, de personnalisation ou de mesure d’audience. Un bandeau de consentement n’est donc pas nécessaire dans cette version.</p></section>
        <section><h2>Services externes</h2><p>Les liens vers WhatsApp, Instagram, Facebook et Google Maps conduisent vers des services tiers. En les ouvrant, vous quittez ce site et êtes soumis aux politiques de confidentialité de ces plateformes. Aucun contenu de ces services n’est chargé automatiquement ici.</p></section>
        <section><h2>Hébergement technique</h2><p>L’hébergeur du futur domaine pourra traiter les données techniques strictement nécessaires à la sécurité et au fonctionnement du service, notamment les journaux de connexion. Son identité et ses coordonnées doivent encore être confirmées dans les mentions légales.</p></section>
        <section><h2>Évolution du site</h2><p>Si un formulaire, un outil de mesure ou un autre traitement de données est ajouté, cette politique sera mise à jour avant son activation et les mécanismes de consentement nécessaires seront mis en place.</p></section>
        <section><h2>Contact</h2><p>Pour toute question relative à la confidentialité, écrivez à <a href="mailto:authentiquesnackbar@icloud.com">authentiquesnackbar@icloud.com</a> (adresse provisoire à confirmer).</p></section>
      </div>
    </main>
  );
}
