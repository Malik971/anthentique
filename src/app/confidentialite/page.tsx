import type { Metadata } from "next";
import { business } from "@/content/business";
import { pageMetadata } from "@/lib/seo";
import { phoneHref } from "@/lib/links";

export const metadata: Metadata = pageMetadata(
  "Politique de confidentialité",
  "Politique de confidentialité du site de L’Authentique à Sainte-Anne.",
  "/confidentialite",
);

const { legal } = business;

export default function PrivacyPage() {
  return (
    <main className="legal-page" id="contenu">
      <div className="container legal-page__inner">
        <p className="eyebrow">Vie privée</p>
        <h1>Politique de confidentialité</h1>
        <p className="legal-intro">
          Ce site est un site vitrine. Il ne collecte aucune donnée personnelle lors de sa simple
          consultation et n’utilise ni traceur publicitaire ni outil de mesure d’audience.
        </p>

        <section>
          <h2>Responsable du traitement</h2>
          <p className="legal-address">
            {legal.publisher}
            <span>{business.address.street}</span>
            <span>
              {business.address.postalCode} {business.address.locality}, {business.address.region}
            </span>
            <span><a href={`mailto:${business.email}`}>{business.email}</a></span>
            <span><a href={phoneHref(business.phone)}>{business.phone}</a></span>
          </p>
        </section>

        <section>
          <h2>Données collectées</h2>
          <p>Dans sa configuration actuelle, le site ne comporte :</p>
          <ul className="legal-bullets">
            <li>aucun compte utilisateur ;</li>
            <li>aucun formulaire ;</li>
            <li>aucune commande en ligne ;</li>
            <li>aucun outil publicitaire ;</li>
            <li>aucun outil de mesure d’audience ;</li>
            <li>aucun pixel Meta ;</li>
            <li>aucun contenu social intégré automatiquement.</li>
          </ul>
          <p>
            La consultation des pages n’entraîne donc aucun enregistrement de données personnelles
            par {legal.publisher}.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            Aucun cookie nécessitant le consentement de l’utilisateur n’est déposé par le site dans
            sa configuration actuelle. Aucune bannière de consentement n’est donc affichée.
          </p>
        </section>

        <section>
          <h2>Journaux techniques</h2>
          <p>
            L’hébergeur {legal.host} peut traiter des informations techniques liées à la diffusion du
            site, notamment l’adresse IP, la date et l’heure des requêtes, le navigateur utilisé et
            les journaux nécessaires à la sécurité, au diagnostic et au bon fonctionnement de
            l’hébergement. Ces traitements relèvent de l’exploitation technique du service
            d’hébergement.
          </p>
        </section>

        <section>
          <h2>Services externes</h2>
          <p>
            Le site propose des liens vers WhatsApp, Instagram, Facebook et Google Maps. Aucun
            contenu de ces services n’est chargé avant que l’utilisateur ne choisisse de suivre le
            lien. En ouvrant l’un de ces liens, vous quittez ce site et les politiques de
            confidentialité des plateformes concernées s’appliquent.
          </p>
        </section>

        <section>
          <h2>Droits</h2>
          <p>
            Vous disposez, lorsque ces droits sont applicables, d’un droit d’accès, de rectification,
            d’effacement, de limitation et d’opposition concernant les données vous concernant. Pour
            exercer ces droits, écrivez à{" "}
            <a href={`mailto:${business.email}`}>{business.email}</a>.
          </p>
          <p>
            Vous pouvez également introduire une réclamation auprès de la Commission nationale de
            l’informatique et des libertés (CNIL).
          </p>
        </section>

        <section>
          <h2>Mise à jour</h2>
          <p>
            La présente politique pourra être mise à jour en cas d’évolution des fonctionnalités ou
            des traitements mis en œuvre sur le site.
          </p>
        </section>
      </div>
    </main>
  );
}
