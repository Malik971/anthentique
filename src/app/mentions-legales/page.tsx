import type { Metadata } from "next";
import { business } from "@/content/business";
import { pageMetadata } from "@/lib/seo";
import { phoneHref } from "@/lib/links";

export const metadata: Metadata = pageMetadata(
  "Mentions légales",
  "Mentions légales du site de L’Authentique à Sainte-Anne, Guadeloupe.",
  "/mentions-legales",
);

const { legal } = business;
const authority = legal.regulatedActivityAuthority;

export default function LegalPage() {
  return (
    <main className="legal-page" id="contenu">
      <div className="container legal-page__inner">
        <p className="eyebrow">Informations juridiques</p>
        <h1>Mentions légales</h1>
        <p className="legal-intro">
          Informations relatives à l’éditeur, à l’hébergement et aux conditions d’utilisation du site
          de {business.brandName}.
        </p>

        <section>
          <h2>Éditeur du site</h2>
          <dl className="legal-list">
            <div><dt>Dénomination sociale</dt><dd>{legal.publisher}</dd></div>
            <div><dt>Nom commercial</dt><dd>{business.brandName}</dd></div>
            <div><dt>Enseignes</dt><dd>{legal.officialBrand}</dd></div>
            <div><dt>Forme juridique</dt><dd>{legal.legalForm}</dd></div>
            <div><dt>Capital social</dt><dd>{legal.shareCapital}</dd></div>
            <div><dt>Cogérants</dt><dd>{legal.managers.join(" · ")}</dd></div>
          </dl>
        </section>

        <section>
          <h2>Direction de la publication</h2>
          <p>{legal.publicationDirectors}</p>
        </section>

        <section>
          <h2>Coordonnées</h2>
          <dl className="legal-list">
            <div>
              <dt>Adresse</dt>
              <dd>
                {business.address.street}, {business.address.postalCode} {business.address.locality},{" "}
                {business.address.region}
              </dd>
            </div>
            <div><dt>Téléphone</dt><dd><a href={phoneHref(business.phone)}>{business.phone}</a></dd></div>
            <div><dt>E-mail</dt><dd><a href={`mailto:${business.email}`}>{business.email}</a></dd></div>
          </dl>
        </section>

        <section>
          <h2>Immatriculation</h2>
          <dl className="legal-list">
            <div><dt>SIREN</dt><dd>{legal.siren}</dd></div>
            <div><dt>SIRET</dt><dd>{legal.siret}</dd></div>
            <div><dt>RCS</dt><dd>{legal.rcs}</dd></div>
            <div><dt>TVA intracommunautaire</dt><dd>{legal.vatNumber}</dd></div>
          </dl>
        </section>

        <section>
          <h2>Nom de domaine</h2>
          <p>
            Le site est publié sous le nom de domaine <strong>{legal.domainName}</strong>, exploité
            par {legal.publisher}.
          </p>
        </section>

        <section>
          <h2>Hébergement</h2>
          <dl className="legal-list">
            <div><dt>Hébergeur</dt><dd>{legal.host}</dd></div>
            <div><dt>Forme juridique</dt><dd>{legal.hostLegalForm}</dd></div>
            <div><dt>Capital social</dt><dd>{legal.hostShareCapital}</dd></div>
            <div><dt>RCS</dt><dd>{legal.hostRcs}</dd></div>
            <div><dt>TVA intracommunautaire</dt><dd>{legal.hostVatNumber}</dd></div>
            <div><dt>Adresse</dt><dd>{legal.hostAddress}</dd></div>
            <div><dt>Téléphone</dt><dd>{legal.hostPhone}</dd></div>
          </dl>
        </section>

        <section>
          <h2>Activité réglementée</h2>
          <p>
            L’établissement exerce une activité de restauration et de débit de boissons. La
            déclaration liée à l’exploitation d’un débit de boissons relève de l’autorité municipale
            compétente :
          </p>
          <p className="legal-address">
            {authority.name}
            {authority.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <span>Téléphone : {authority.phone}</span>
          </p>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>{legal.intellectualProperty}</p>
        </section>

        <section>
          <h2>Crédits photographiques</h2>
          <p>{legal.photoCredits}</p>
        </section>

        <section>
          <h2>Responsabilité</h2>
          <p>
            Les informations, horaires, produits, prix et disponibilités peuvent évoluer.
            {" "}{business.brandName} s’efforce de maintenir le site à jour, mais invite les visiteurs
            à le contacter directement pour toute information nécessitant une confirmation immédiate.
          </p>
        </section>

        <section>
          <h2>Liens externes</h2>
          <p>
            Le site propose des liens vers des services tiers, notamment WhatsApp, Instagram,
            Facebook et Google Maps. Ces services disposent de leurs propres conditions d’utilisation
            et de leurs propres politiques de confidentialité.{" "}{legal.publisher} n’exerce aucun
            contrôle sur leurs contenus et ne saurait être tenue responsable de leur fonctionnement.
          </p>
        </section>
      </div>
    </main>
  );
}
