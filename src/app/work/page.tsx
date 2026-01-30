import { Button, Card, Column, Heading, Icon, Line, Meta, RevealFx, Row, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { getPosts } from "@/utils/utils";

import styles from "./page.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: "/images/og/home.jpg",
    path: work.path,
  });
}

export default function Work() {
  const projectsCount = getPosts(["src", "app", "work", "projects"]).length;

  return (
    <Column maxWidth="m" paddingTop="24" gap="40">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image="/images/og/home.jpg"
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <RevealFx translateY="12" delay={0.05}>
        <Column fillWidth paddingX="l">
          <Card
            className={styles.heroCard}
            fillWidth
            background="surface"
            border="brand-alpha-weak"
            radius="l"
            padding="l"
            shadow="m"
          >
            <Column fillWidth gap="16" align="center">
              <Row fillWidth horizontal="center" marginBottom="8">
                <Row gap="12" vertical="center">
                  <Icon name="grid" onBackground="brand-weak" />
                  <Heading variant="display-strong-s" align="center" wrap="balance">
                    {work.label}
                  </Heading>
                  <Line background="brand-alpha-weak" flex={1} />
                </Row>
              </Row>

              <Text
                className={styles.heroSubline}
                align="center"
                variant="body-default-l"
                onBackground="neutral-weak"
              >
                Une sélection de {projectsCount} réalisations (WordPress, PHP, Next.js) avec un focus sur la performance,
                l’accessibilité et l’UX.
              </Text>

              <Row gap="12" wrap horizontal="center">
                <Button href="/contact" variant="primary" size="m" weight="default" arrowIcon>
                  Me contacter
                </Button>
                <Button href="/" variant="secondary" size="m" weight="default">
                  Retour à l’accueil
                </Button>
              </Row>
            </Column>
          </Card>
        </Column>
      </RevealFx>

      <Projects />
    </Column>
  );
}
