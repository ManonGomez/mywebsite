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
              ✅ Développement Full-Stack • Gestion de projet • Produit
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
              De la définition du besoin à la mise en production, j’interviens sur l’ensemble du cycle d’un
              projet : conseil, choix de la solution, conception, développement, suivi, recette, déploiement
              et accompagnement des utilisateurs.
            </Text>
          </RevealFx>

          <RevealFx translateY="8" delay={0.3} fillWidth horizontal="center" paddingBottom="24">
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l">
              Mon profil technique me permet autant de développer une solution que de comprendre ses
              enjeux, anticiper les contraintes et faire le lien entre besoin métier et réalisation.
            </Text>
          </RevealFx>

          <RevealFx translateY="8" delay={0.35} fillWidth horizontal="center" paddingBottom="24">
            <Row gap="12" wrap horizontal="center">
              <Badge background="surface" border="neutral-alpha-weak" radius="full" paddingX="12" paddingY="4">
                <Row gap="8" vertical="center">
                  <Icon name="rocket" onBackground="brand-weak" />
                  <Text variant="label-default-s">Concevoir</Text>
                </Row>
              </Badge>
              <Badge background="surface" border="neutral-alpha-weak" radius="full" paddingX="12" paddingY="4">
                <Row gap="8" vertical="center">
                  <Icon name="settings" onBackground="brand-weak" />
                  <Text variant="label-default-s">Développer</Text>
                </Row>
              </Badge>
              <Badge background="surface" border="neutral-alpha-weak" radius="full" paddingX="12" paddingY="4">
                <Row gap="8" vertical="center">
                  <Icon name="code" onBackground="brand-weak" />
                  <Text variant="label-default-s">Piloter</Text>
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

      <RevealFx translateY="12" delay={0.55} fillWidth>
        <Column as="section" fillWidth gap="24" paddingX="l">
          <Row fillWidth horizontal="center" marginBottom="8">
            <Row gap="12" vertical="center">
              <Icon name="rocket" onBackground="brand-weak" />
              <Heading as="h2" variant="display-strong-xs" wrap="balance">De l’idée à la mise en ligne</Heading>
              <Line background="brand-alpha-weak" flex={1} />
            </Row>
          </Row>
          <Text onBackground="neutral-weak" variant="body-default-l">
            Un projet web ne commence pas par une ligne de code. J’accompagne chaque projet dans
            sa globalité, depuis la compréhension du besoin jusqu’à sa prise en main par les utilisateurs.
          </Text>
          <Grid fillWidth gap="12" columns={2} s={{ columns: 1 }}>
            <Card className={styles.skillCard} fillWidth background="surface" border="brand-alpha-weak" radius="l" padding="m" shadow="m">
              <Column className={styles.skillCardContent} fillWidth gap="12">
                <Row gap="12" vertical="center">
                  <Text variant="heading-strong-m" onBackground="brand-weak">01</Text>
                  <Heading as="h3" variant="heading-strong-m">Cadrage & conseil</Heading>
                </Row>
                <Text className={styles.skillCardDescription} onBackground="neutral-weak" variant="body-default-m">
                  Compréhension du besoin, des objectifs et des utilisateurs, analyse des contraintes, conseil sur les solutions possibles, définition du périmètre, estimation et planification.
                </Text>
              </Column>
            </Card>
            <Card className={styles.skillCard} fillWidth background="surface" border="brand-alpha-weak" radius="l" padding="m" shadow="m">
              <Column className={styles.skillCardContent} fillWidth gap="12">
                <Row gap="12" vertical="center">
                  <Text variant="heading-strong-m" onBackground="brand-weak">02</Text>
                  <Heading as="h3" variant="heading-strong-m">Conception & développement</Heading>
                </Row>
                <Text className={styles.skillCardDescription} onBackground="neutral-weak" variant="body-default-m">
                  Spécifications fonctionnelles et techniques, réflexion UX, conception des interfaces et développement de solutions web adaptées : applications, sites vitrines, e-commerce ou fonctionnalités sur mesure.
                </Text>
              </Column>
            </Card>
            <Card className={styles.skillCard} fillWidth background="surface" border="brand-alpha-weak" radius="l" padding="m" shadow="m">
              <Column className={styles.skillCardContent} fillWidth gap="12">
                <Row gap="12" vertical="center">
                  <Text variant="heading-strong-m" onBackground="brand-weak">03</Text>
                  <Heading as="h3" variant="heading-strong-m">Pilotage & qualité</Heading>
                </Row>
                <Text className={styles.skillCardDescription} onBackground="neutral-weak" variant="body-default-m">
                  Organisation et suivi du projet, priorisation des besoins, gestion des évolutions, échanges avec les différentes parties prenantes, tests, recette et corrections avant livraison.
                </Text>
              </Column>
            </Card>
            <Card className={styles.skillCard} fillWidth background="surface" border="brand-alpha-weak" radius="l" padding="m" shadow="m">
              <Column className={styles.skillCardContent} fillWidth gap="12">
                <Row gap="12" vertical="center">
                  <Text variant="heading-strong-m" onBackground="brand-weak">04</Text>
                  <Heading as="h3" variant="heading-strong-m">Mise en production & accompagnement</Heading>
                </Row>
                <Text className={styles.skillCardDescription} onBackground="neutral-weak" variant="body-default-m">
                  Déploiement, configuration de l’environnement, documentation, formation des utilisateurs et accompagnement après la mise en ligne pour faire évoluer la solution dans le temps.
                </Text>
              </Column>
            </Card>
          </Grid>
        </Column>
      </RevealFx>

      <RevealFx translateY="12" delay={0.65} fillWidth>
        <Column as="section" fillWidth gap="24" paddingX="l">
          <Row fillWidth horizontal="center" marginBottom="8">
            <Row gap="12" vertical="center">
              <Icon name="code" onBackground="brand-weak" />
              <Heading as="h2" variant="display-strong-xs" wrap="balance">Mes compétences</Heading>
              <Line background="brand-alpha-weak" flex={1} />
            </Row>
          </Row>
          <Grid className={styles.skillsGrid} fillWidth gap="12" columns={3} m={{ columns: 2 }} s={{ columns: 1 }}>
            <Card className={styles.skillCard} fillWidth background="surface" border="brand-alpha-weak" radius="l" padding="m" shadow="m">
              <Column className={styles.skillCardContent} fillWidth gap="12">
                <Row gap="12" vertical="center">
                  <Icon name="code" onBackground="brand-weak" />
                  <Heading as="h3" variant="heading-strong-m">Développement Full-Stack</Heading>
                </Row>
                <Text className={styles.skillCardDescription} onBackground="neutral-weak" variant="body-default-m">
                  HTML, CSS, JavaScript, PHP, Node.js, React, Vue.js, Next.js, Laravel, Symfony, Sylius, MySQL, Tailwind CSS.
                </Text>
              </Column>
            </Card>
            <Card className={styles.skillCard} fillWidth background="surface" border="brand-alpha-weak" radius="l" padding="m" shadow="m">
              <Column className={styles.skillCardContent} fillWidth gap="12">
                <Row gap="12" vertical="center">
                  <Icon name="wordpress" onBackground="brand-weak" />
                  <Heading as="h3" variant="heading-strong-m">CMS & e-commerce</Heading>
                </Row>
                <Text className={styles.skillCardDescription} onBackground="neutral-weak" variant="body-default-m">
                  WordPress, WooCommerce, Prestashop, Shopify, WiziShop, développement et intégration de fonctionnalités sur mesure.
                </Text>
              </Column>
            </Card>
            <Card className={styles.skillCard} fillWidth background="surface" border="brand-alpha-weak" radius="l" padding="m" shadow="m">
              <Column className={styles.skillCardContent} fillWidth gap="12">
                <Row gap="12" vertical="center">
                  <Icon name="settings" onBackground="brand-weak" />
                  <Heading as="h3" variant="heading-strong-m">Gestion de projet</Heading>
                </Row>
                <Text className={styles.skillCardDescription} onBackground="neutral-weak" variant="body-default-m">
                  Analyse des besoins, cahier des charges, spécifications fonctionnelles et techniques, chiffrage, planification, suivi de projet, recette, méthodes Agile, Scrum et Kanban, Jira et Linear.
                </Text>
              </Column>
            </Card>
            <Card className={styles.skillCard} fillWidth background="surface" border="brand-alpha-weak" radius="l" padding="m" shadow="m">
              <Column className={styles.skillCardContent} fillWidth gap="12">
                <Row gap="12" vertical="center">
                  <Icon name="seo" onBackground="brand-weak" />
                  <Heading as="h3" variant="heading-strong-m">Produit, UX & qualité</Heading>
                </Row>
                <Text className={styles.skillCardDescription} onBackground="neutral-weak" variant="body-default-m">
                  Expérience utilisateur, Figma, optimisation des parcours, performance web, accessibilité, SEO technique et amélioration continue.
                </Text>
              </Column>
            </Card>
            <Card className={styles.skillCard} fillWidth background="surface" border="brand-alpha-weak" radius="l" padding="m" shadow="m">
              <Column className={styles.skillCardContent} fillWidth gap="12">
                <Row gap="12" vertical="center">
                  <Icon name="tools" onBackground="brand-weak" />
                  <Heading as="h3" variant="heading-strong-m">Outils & automatisation</Heading>
                </Row>
                <Text className={styles.skillCardDescription} onBackground="neutral-weak" variant="body-default-m">
                  Git, outils de déploiement et d’hébergement, n8n, ChatGPT, Cursor et outils d’IA intégrés aux workflows de développement.
                </Text>
              </Column>
            </Card>
          </Grid>
        </Column>
      </RevealFx>

      <RevealFx translateY="12" delay={0.75} fillWidth>
        <Column as="section" fillWidth gap="24" paddingX="l">
          <Row fillWidth horizontal="center" marginBottom="8">
            <Row gap="12" vertical="center">
              <Icon name="person" onBackground="brand-weak" />
              <Heading as="h2" variant="display-strong-xs" wrap="balance">Un profil à la croisée de la technique et du projet</Heading>
              <Line background="brand-alpha-weak" flex={1} />
            </Row>
          </Row>
          <Text onBackground="neutral-weak" variant="body-default-l">
            Mon parcours de développeuse Full-Stack me permet de comprendre concrètement les
            contraintes techniques d’un projet, d’évaluer la faisabilité d’une demande et d’échanger
            efficacement avec des équipes de développement.
          </Text>
          <Text onBackground="neutral-weak" variant="body-default-l">
            Mon expérience en freelance m’a également amenée à gérer des projets en autonomie :
            compréhension du besoin, recommandations, devis, planification, développement, échanges
            clients, recette, livraison et maintenance.
          </Text>
          <Text onBackground="neutral-weak" variant="body-default-l">
            Enfin, mon expérience de formatrice en développement web m’a appris à rendre des sujets
            techniques accessibles, à adapter mon discours à différents interlocuteurs et à
            accompagner les utilisateurs dans la prise en main de leurs outils.
          </Text>
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
            className={styles.portfolioCta}
            background="surface"
            border="brand-alpha-weak"
            radius="l"
            padding="xl"
            shadow="m"
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
                  Sites vitrines, e-commerce, applications et fonctionnalités sur mesure : découvrez une
                  sélection de projets sur lesquels je suis intervenue en développement, conception,
                  optimisation ou pilotage.
                </Text>
                <Text variant="body-default-l" onBackground="neutral-weak">
                  Pour chaque projet, l’objectif reste le même : partir d’un besoin concret pour construire une
                  solution utile, fiable et adaptée à ses utilisateurs.
                </Text>
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
