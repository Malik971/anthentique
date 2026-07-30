import type { Metadata } from "next";
import { business } from "@/content/business";
import { pageMetadata } from "@/lib/seo";
import { phoneHref } from "@/lib/links";

export const metadata: Metadata = pageMetadata(
  "Mentions légales",
  "Mentions légales du site de L’Authentique à Sainte-Anne, Guadeloupe.",
  "/mentions-legales",
);

function Todo({ children }: { children: React.ReactNode }) {
  return <span className="legal-todo">À confirmer — {children}</span>;
}

export default function LegalPage() {
  return (
    <main className="legal-page" id="contenu">
      <div className="container legal-page__inner">
        <p className="eyebrow">Informations juridiques</p>
        <h1>Mentions légales</h1>
        <p className="legal-intro">Les informations marquées « à confirmer » doivent être validées sur le Kbis et avec le propriétaire avant la mise en production.</p>

        <section><h2>Éditeur du site</h2><dl className="legal-list">
          <div><dt>Éditeur</dt><dd>{business.legal.publisher}</dd></div>
          <div><dt>Forme juridique</dt><dd>{business.legal.legalForm}</dd></div>
          <div><dt>Capital social</dt><dd>{business.legal.shareCapital}</dd></div>
          <div><dt>Enseigne</dt><dd>{business.legal.officialBrand}</dd></div>
          <div><dt>Nom commercial</dt><dd>{business.brandName}</dd></div>
          <div><dt>Adresse</dt><dd>{business.address.street}, {business.address.postalCode} {business.address.locality}, {business.address.region}</dd></div>
          <div><dt>SIREN</dt><dd>{business.legal.siren}</dd></div>
          <div><dt>SIRET</dt><dd>{business.legal.siret}</dd></div>
          <div><dt>Téléphone</dt><dd><a href={phoneHref(business.phone)}>{business.phone}</a> <small>(provisoire)</small></dd></div>
          <div><dt>E-mail</dt><dd><a href={`mailto:${business.email}`}>{business.email}</a> <small>(provisoire)</small></dd></div>
          <div><dt>Directeur ou directrice de publication</dt><dd><Todo>nom non validé</Todo></dd></div>
          <div><dt>TVA intracommunautaire</dt><dd><Todo>à ajouter si le client souhaite l’afficher</Todo></dd></div>
        </dl></section>

        <section><h2>Nom de domaine</h2><p><Todo>domaine final à définir ; le contrôle de snack-bar-lauthentique.fr n’est pas confirmé</Todo></p></section>
        <section><h2>Hébergement</h2><dl className="legal-list"><div><dt>Hébergeur</dt><dd><Todo>raison sociale à définir</Todo></dd></div><div><dt>Adresse</dt><dd><Todo>adresse de l’hébergeur</Todo></dd></div><div><dt>Téléphone</dt><dd><Todo>téléphone de l’hébergeur</Todo></dd></div></dl></section>
        <section><h2>Propriété intellectuelle</h2><p><Todo>clause de propriété intellectuelle à valider</Todo>. Les marques, textes, visuels et éléments graphiques restent la propriété de leurs titulaires respectifs. Toute réutilisation doit faire l’objet d’une autorisation préalable.</p></section>
        <section><h2>Crédits photographiques</h2><p><Todo>photographe et crédits à renseigner après livraison des images originales</Todo>.</p></section>
        <section><h2>Responsabilité</h2><p>Les horaires, la carte et les disponibilités peuvent évoluer. Les informations provisoires publiées sur ce site doivent être confirmées directement auprès de L’Authentique avant un déplacement.</p></section>
      </div>
    </main>
  );
}
