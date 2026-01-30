import { Column, Heading, Line, Meta, Row, Schema, SmartLink, Text } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import TallyEmbed from "./TallyEmbed";
import CalEmbed from "./CalEmbed";

const path = "/contact";

export async function generateMetadata() {
  const title = `Contact – ${person.name}`;
  const description = `Me contacter pour un projet, une mission ou une opportunité.`;

  return Meta.generate({
    title,
    description,
    baseURL,
    path,
    image: "/images/og/home.jpg",
  });
}

export default function ContactPage() {
  const title = `Contact`;
  const description = `Décrivez votre besoin, je vous répondrai dans les plus brefs délais.`;

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={path}
        title={`${title} – ${person.name}`}
        description={description}
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
        <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
          {description}
        </Text>

        <TallyEmbed />

        <Row fillWidth paddingY="24">
          <Line />
        </Row>

        <Heading wrap="balance" variant="heading-strong-l">
          Prendre rendez-vous
        </Heading>
        <Text wrap="balance" onBackground="neutral-weak" variant="body-default-m">
          Choisissez un créneau directement dans mon calendrier.
        </Text>
        <CalEmbed />

        <Row fillWidth paddingY="24">
          <Line />
        </Row>

        <Text variant="body-default-s" onBackground="neutral-weak">
          Ou par email :{" "}
          <SmartLink href={`mailto:${person.email}`} suffixIcon="arrowUpRightFromSquare">
            {person.email}
          </SmartLink>
        </Text>
      </Column>
    </Column>
  );
}

