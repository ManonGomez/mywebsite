import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Icon,
  Card,
  Grid,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import styles from "./page.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="24">
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="4"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              arrow={false}
            >
              ✅ PHP • WordPress • Performance
            </Badge>
          </RevealFx>

          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>

          <RevealFx translateY="8" delay={0.15} fillWidth horizontal="center" paddingBottom="16">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>

          <RevealFx translateY="8" delay={0.25} fillWidth horizontal="center" paddingBottom="24">
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l">
              J’accompagne entrepreneurs, indépendants et agences dans la création, l’optimisation et la maintenance
              technique de leurs sites, avec un vrai souci de performance et de qualité de code.
            </Text>
          </RevealFx>

          <RevealFx translateY="8" delay={0.35} fillWidth horizontal="center" paddingBottom="24">
            <Row gap="12" wrap horizontal="center">
              <Badge background="surface" border="neutral-alpha-weak" radius="full" paddingX="12" paddingY="4">
                <Row gap="8" vertical="center">
                  <Icon name="rocket" onBackground="brand-weak" />
                  <Text variant="label-default-s">Esthétique</Text>
                </Row>
              </Badge>
              <Badge background="surface" border="neutral-alpha-weak" radius="full" paddingX="12" paddingY="4">
                <Row gap="8" vertical="center">
                  <Icon name="settings" onBackground="brand-weak" />
                  <Text variant="label-default-s">Efficacité</Text>
                </Row>
              </Badge>
              <Badge background="surface" border="neutral-alpha-weak" radius="full" paddingX="12" paddingY="4">
                <Row gap="8" vertical="center">
                  <Icon name="code" onBackground="brand-weak" />
                  <Text variant="label-default-s">Robustesse</Text>
                </Row>
              </Badge>
            </Row>
          </RevealFx>

          <RevealFx paddingTop="12" delay={0.45} horizontal="center" paddingLeft="12">
            <Row gap="12" wrap horizontal="center">
              <Button
                id="contact"
                data-border="rounded"
                href="/contact"
                variant="primary"
                size="m"
                weight="default"
                arrowIcon
              >
                📩 Échanger sur votre projet
              </Button>
              <Button
                id="portfolio"
                data-border="rounded"
                href="/work"
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                Voir des réalisations
              </Button>
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <Avatar
                      marginRight="8"
                      style={{ marginLeft: "-0.75rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  À propos
                </Row>
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>

      <RevealFx translateY="12" delay={0.55}>
        <Column fillWidth gap="24" paddingX="l">
          <Row fillWidth horizontal="center" marginBottom="8">
            <Row gap="12" vertical="center">
              <Icon name="code" onBackground="brand-weak" />
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Mes compétences techniques
              </Heading>
              <Line background="brand-alpha-weak" flex={1} />
            </Row>
          </Row>

          <Grid className={styles.skillsGrid} fillWidth gap="12" columns={3} m={{ columns: 2 }} s={{ columns: 1 }}>
            <Card
              className={styles.skillCard}
              fillWidth
              background="surface"
              border="brand-alpha-weak"
              radius="l"
              padding="m"
              shadow="m"
              cursor="interactive"
            >
              <RevealFx translateY="12" delay={0.05} fillWidth>
                <Column className={styles.skillCardContent} fillWidth gap="8">
                  <Row gap="12" vertical="center">
                    <Icon name="code" onBackground="brand-weak" />
                    <Text variant="heading-strong-m">Langages</Text>
                  </Row>
                  <Text className={styles.skillCardDescription} onBackground="neutral-weak" variant="body-default-m">
                    PHP (POO, MVC), Symfony, Laravel, JavaScript, HTML5, CSS3
                  </Text>
                </Column>
              </RevealFx>
            </Card>

            <Card
              className={styles.skillCard}
              fillWidth
              background="surface"
              border="brand-alpha-weak"
              radius="l"
              padding="m"
              shadow="m"
              cursor="interactive"
            >
              <RevealFx translateY="12" delay={0.1} fillWidth>
                <Column className={styles.skillCardContent} fillWidth gap="8">
                  <Row gap="12" vertical="center">
                    <Icon name="database" onBackground="brand-weak" />
                    <Text variant="heading-strong-m">Base de données</Text>
                  </Row>
                  <Text className={styles.skillCardDescription} onBackground="neutral-weak" variant="body-default-m">
                    MySQL
                  </Text>
                </Column>
              </RevealFx>
            </Card>

            <Card
              className={styles.skillCard}
              fillWidth
              background="surface"
              border="brand-alpha-weak"
              radius="l"
              padding="m"
              shadow="m"
              cursor="interactive"
            >
              <RevealFx translateY="12" delay={0.15} fillWidth>
                <Column className={styles.skillCardContent} fillWidth gap="8">
                  <Row gap="12" vertical="center">
                    <Icon name="wordpress" onBackground="brand-weak" />
                    <Text variant="heading-strong-m">CMS</Text>
                  </Row>
                  <Text className={styles.skillCardDescription} onBackground="neutral-weak" variant="body-default-m">
                    WordPress (Elementor, ACF, hooks, API REST), Shopify, Wizishop
                  </Text>
                </Column>
              </RevealFx>
            </Card>

            <Card
              className={styles.skillCard}
              fillWidth
              background="surface"
              border="brand-alpha-weak"
              radius="l"
              padding="m"
              shadow="m"
              cursor="interactive"
            >
              <RevealFx translateY="12" delay={0.2} fillWidth>
                <Column className={styles.skillCardContent} fillWidth gap="8">
                  <Row gap="12" vertical="center">
                    <Icon name="tools" onBackground="brand-weak" />
                    <Text variant="heading-strong-m">Outils</Text>
                  </Row>
                  <Text className={styles.skillCardDescription} onBackground="neutral-weak" variant="body-default-m">
                    Git, VSCode, cPanel, FileZilla
                  </Text>
                </Column>
              </RevealFx>
            </Card>

            <Card
              className={styles.skillCard}
              fillWidth
              background="surface"
              border="brand-alpha-weak"
              radius="l"
              padding="m"
              shadow="m"
              cursor="interactive"
            >
              <RevealFx translateY="12" delay={0.25} fillWidth>
                <Column className={styles.skillCardContent} fillWidth gap="8">
                  <Row gap="12" vertical="center">
                    <Icon name="seo" onBackground="brand-weak" />
                    <Text variant="heading-strong-m">Transverses</Text>
                  </Row>
                  <Text className={styles.skillCardDescription} onBackground="neutral-weak" variant="body-default-m">
                    SEO technique, UX/UI, optimisation des performances
                  </Text>
                </Column>
              </RevealFx>
            </Card>

            <Card
              className={styles.skillCard}
              fillWidth
              background="surface"
              border="brand-alpha-weak"
              radius="l"
              padding="m"
              shadow="m"
              cursor="interactive"
            >
              <RevealFx translateY="12" delay={0.3} fillWidth>
                <Column className={styles.skillCardContent} fillWidth gap="8">
                  <Row gap="12" vertical="center">
                    <Icon name="education" onBackground="brand-weak" />
                    <Text variant="heading-strong-m">Formation & pédagogie</Text>
                  </Row>
                  <Text className={styles.skillCardDescription} onBackground="neutral-weak" variant="body-default-m">
                    J’aime vulgariser la technique pour vous aider à comprendre votre outil.
                  </Text>
                </Column>
              </RevealFx>
            </Card>
          </Grid>
        </Column>
      </RevealFx>

      <RevealFx translateY="12" delay={0.65}>
        <Column fillWidth gap="24" paddingX="l">
          <Row fillWidth horizontal="center" marginBottom="8">
            <Row gap="12" vertical="center">
              <Icon name="settings" onBackground="brand-weak" />
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Mes missions principales
              </Heading>
              <Line background="brand-alpha-weak" flex={1} />
            </Row>
          </Row>
          <Column as="ul" gap="12" style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
            {[
              "Développement sur‑mesure en PHP / WordPress (thèmes & plugins personnalisés)",
              "Intégration d’APIs et automatisations",
              "Refonte ou optimisation de sites existants (vitesse, SEO, sécurité)",
              "Création de sites vitrines & e‑commerce (WordPress, Shopify, Wizishop)",
              "Configuration d’hébergement, migration, sauvegarde & HTTPS",
              "Formation client à la prise en main du site",
            ].map((item) => (
              <Text key={item} as="li" variant="body-default-l">
                <Icon name="arrowRight" onBackground="brand-weak" style={{ marginRight: "0.5rem" }} />
                {item}
              </Text>
            ))}
          </Column>
        </Column>
      </RevealFx>

      <RevealFx translateY="12" delay={0.75}>
        <Column fillWidth gap="24" paddingX="l">
          <Row fillWidth horizontal="center" marginBottom="8">
            <Row gap="12" vertical="center">
              <Icon name="person" onBackground="brand-weak" />
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Pourquoi travailler avec moi ?
              </Heading>
              <Line background="brand-alpha-weak" flex={1} />
            </Row>
          </Row>
          <Column as="ul" gap="12" style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
            {[
              "Écoute, clarté & accompagnement à chaque étape",
              "Code propre, commenté & maintenable",
              "Réactivité & disponibilité",
              "Double approche : technique & humaine (je suis aussi formatrice web)",
            ].map((item) => (
              <Text key={item} as="li" variant="body-default-l">
                <Icon name="arrowRight" onBackground="brand-weak" style={{ marginRight: "0.5rem" }} />
                {item}
              </Text>
            ))}
          </Column>
          <Row fillWidth horizontal="center" paddingTop="12">
            <Button href="/contact" variant="primary" size="m" arrowIcon>
              🚀 Prête à échanger dès aujourd’hui
            </Button>
          </Row>
        </Column>
      </RevealFx>

      <RevealFx translateY="12" delay={0.85}>
        <Column fillWidth paddingX="l">
          <Card
            href="/work"
            className={styles.portfolioCta}
            background="surface"
            border="brand-alpha-weak"
            radius="l"
            padding="xl"
            shadow="m"
            cursor="interactive"
          >
            <Row
              fillWidth
              horizontal="between"
              vertical="center"
              s={{ direction: "column", horizontal: "start" }}
              gap="16"
            >
              <Column gap="12">
                <Row gap="12" vertical="center">
                  <Icon className={styles.portfolioIcon} name="rocket" onBackground="brand-weak" />
                  <Text variant="heading-strong-xl">Découvrir mon portfolio</Text>
                </Row>
                <Text variant="body-default-l" onBackground="neutral-weak">
                  Retrouvez une sélection de projets et de réalisations : sites WordPress sur‑mesure, développements PHP, React,
                  optimisations performance & SEO technique, e‑commerce, et intégrations/automatisations.
                </Text>
                <Row gap="8" wrap>
                  <Badge background="surface" border="neutral-alpha-weak" radius="full" paddingX="12" paddingY="4">
                    WordPress
                  </Badge>
                  <Badge background="surface" border="neutral-alpha-weak" radius="full" paddingX="12" paddingY="4">
                    PHP
                  </Badge>
                  <Badge background="surface" border="neutral-alpha-weak" radius="full" paddingX="12" paddingY="4">
                    E‑commerce
                  </Badge>
                  <Badge background="surface" border="neutral-alpha-weak" radius="full" paddingX="12" paddingY="4">
                    Performance
                  </Badge>
                </Row>
              </Column>
              <Button href="/work" variant="primary" size="m" arrowIcon>
                Accéder au portfolio
              </Button>
            </Row>
          </Card>
        </Column>
      </RevealFx>
    </Column>
  );
}
