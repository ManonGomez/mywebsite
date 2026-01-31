import { Column, Heading, Line, Meta, Row, Schema, SmartLink, Text } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

const path = "/mentions-legales";

export async function generateMetadata() {
  const title = `Mentions légales – ${person.name}`;
  const description = `Mentions légales et informations d’hébergement du site de ${person.name}.`;

  return Meta.generate({
    title,
    description,
    baseURL,
    path,
    image: "/images/og/home.jpg",
  });
}

export default function MentionsLegalesPage() {
  const title = "Mentions légales";

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={path}
        title={`${title} – ${person.name}`}
        description={`Mentions légales et informations d’hébergement du site de ${person.name}.`}
        image="/images/og/home.jpg"
        author={{
          name: person.name,
          url: `${baseURL}${path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column fillWidth maxWidth="s" gap="m" paddingX="l">
        <Heading wrap="balance" variant="display-strong-l">
          {title}
        </Heading>
        <Text wrap="balance" onBackground="neutral-weak" variant="body-default-m">
          Conformément à la réglementation en vigueur, vous trouverez ci-dessous les informations relatives à l’éditeur, à
          l’hébergeur et au fonctionnement de ce site vitrine.
        </Text>

        <Row fillWidth paddingY="24">
          <Line />
        </Row>

        <Heading wrap="balance" variant="heading-strong-l">
          Éditeur du site
        </Heading>
        <Column gap="8">
          <Text variant="body-default-m" onBackground="neutral-weak">
            <Text as="span" onBackground="neutral-weak">
              Nature du site :{" "}
            </Text>
            site vitrine (présentation d’activité/portfolio) — sans vente en ligne.
          </Text>
          <Text variant="body-default-m">
            <Text as="span" onBackground="neutral-weak">
              Raison sociale :{" "}
            </Text>
            {person.name}
          </Text>
          <Text variant="body-default-m">
            <Text as="span" onBackground="neutral-weak">
              Responsable de publication :{" "}
            </Text>
            Manon Gomez Mor
          </Text>
          <Text variant="body-default-m">
            <Text as="span" onBackground="neutral-weak">
              Email :{" "}
            </Text>
            <SmartLink href={`mailto:${person.email}`} suffixIcon="arrowUpRightFromSquare">
              {person.email}
            </SmartLink>
          </Text>
        </Column>

        <Row fillWidth paddingY="24">
          <Line />
        </Row>

        <Heading wrap="balance" variant="heading-strong-l">
          Hébergeur
        </Heading>
        <Column gap="8">
          <Text variant="body-default-m">
            <Text as="span" onBackground="neutral-weak">
              Hébergeur :{" "}
            </Text>
            Cloudflare, Inc.
          </Text>
          <Text variant="body-default-m">
            <Text as="span" onBackground="neutral-weak">
              Adresse :{" "}
            </Text>
            101 Townsend St, San Francisco, CA 94107, États-Unis
          </Text>
          <Text variant="body-default-m">
            <Text as="span" onBackground="neutral-weak">
              Site web :{" "}
            </Text>
            <SmartLink href="https://www.cloudflare.com" suffixIcon="arrowUpRightFromSquare">
              www.cloudflare.com
            </SmartLink>
          </Text>
        </Column>

        <Row fillWidth paddingY="24">
          <Line />
        </Row>

        <Heading wrap="balance" variant="heading-strong-l">
          Propriété intellectuelle
        </Heading>
        <Column gap="8">
          <Text variant="body-default-m" onBackground="neutral-weak">
            L’ensemble des contenus présents sur ce site (textes, images, illustrations, graphismes, logos, icônes, vidéos,
            animations, code, etc.) est, sauf mention contraire, la propriété de {person.name} et est protégé par le droit
            d’auteur et la législation relative à la propriété intellectuelle.
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle, de ces éléments
            (sur quelque support que ce soit) est interdite sans autorisation écrite préalable.
          </Text>
        </Column>

        <Row fillWidth paddingY="24">
          <Line />
        </Row>

        <Heading wrap="balance" variant="heading-strong-l">
          Responsabilité
        </Heading>
        <Column gap="8">
          <Text variant="body-default-m" onBackground="neutral-weak">
            {person.name} s’efforce de fournir des informations aussi précises que possible. Toutefois, {person.name} ne
            saurait garantir l’exactitude, la complétude et l’actualité des informations diffusées sur le site.
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            L’utilisateur utilise le site sous sa seule responsabilité. {person.name} ne pourra être tenue responsable des
            dommages directs ou indirects (perte de données, pertes d’exploitation, etc.) résultant de l’accès ou de
            l’utilisation du site.
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Des liens vers des sites tiers peuvent être proposés. {person.name} n’exerce aucun contrôle sur ces sites et ne
            peut être tenue responsable de leur contenu ou de leurs pratiques.
          </Text>
        </Column>

        <Row fillWidth paddingY="24">
          <Line />
        </Row>

        <Heading wrap="balance" variant="heading-strong-l">
          Données personnelles (RGPD)
        </Heading>
        <Column gap="8">
          <Text variant="body-default-m" onBackground="neutral-weak">
            Le responsable du traitement des données est : {person.name}. Les données susceptibles d’être collectées
            concernent principalement les informations transmises volontairement par l’utilisateur (ex. formulaire de contact
            ou prise de rendez-vous) afin de répondre aux demandes et d’assurer le suivi des échanges.
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Les données sont conservées pendant la durée nécessaire au traitement de la demande, puis archivées/supprimées
            selon les obligations légales applicables.
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Prestataires/tiers susceptibles d’intervenir selon votre navigation :
          </Text>
          <Column gap="8" paddingLeft="12">
            <Text variant="body-default-m" onBackground="neutral-weak">
              - Hébergement/CDN : Cloudflare
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              - Formulaire de contact embarqué :{" "}
              <SmartLink href="https://tally.so" suffixIcon="arrowUpRightFromSquare">
                Tally
              </SmartLink>
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              - Prise de rendez-vous :{" "}
              <SmartLink href="https://cal.com" suffixIcon="arrowUpRightFromSquare">
                Cal.com
              </SmartLink>
            </Text>
          </Column>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition
            et de portabilité. Pour exercer vos droits, contactez :{" "}
            <SmartLink href={`mailto:${person.email}`} suffixIcon="arrowUpRightFromSquare">
              {person.email}
            </SmartLink>
            . Vous pouvez également introduire une réclamation auprès de la CNIL.
          </Text>
        </Column>

        <Row fillWidth paddingY="24">
          <Line />
        </Row>

        <Heading wrap="balance" variant="heading-strong-l">
          Cookies et traceurs
        </Heading>
        <Column gap="8">
          <Text variant="body-default-m" onBackground="neutral-weak">
            Le site peut utiliser des cookies/traceurs strictement nécessaires à son fonctionnement et, selon les services
            tiers intégrés (ex. formulaire Tally, calendrier Cal.com, services Cloudflare), des cookies techniques ou de mesure
            d’audience peuvent être déposés.
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Vous pouvez paramétrer votre navigateur pour refuser tout ou partie des cookies. Le refus de certains cookies peut
            toutefois dégrader l’accès à certaines fonctionnalités (formulaire, prise de rendez-vous, etc.).
          </Text>
        </Column>

        <Row fillWidth paddingY="24">
          <Line />
        </Row>

        <Heading wrap="balance" variant="heading-strong-l">
          Droit applicable
        </Heading>
        <Column gap="8">
          <Text variant="body-default-m" onBackground="neutral-weak">
            Les présentes mentions légales sont soumises au droit français. En cas de litige et à défaut d’accord amiable, les
            tribunaux compétents seront ceux du ressort du domicile de l’éditeur, sauf disposition légale impérative contraire.
          </Text>
        </Column>
      </Column>
    </Column>
  );
}

