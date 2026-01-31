import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Line,
  Media,
  RevealFx,
  SmartLink,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
  Card,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: "/images/og/home.jpg",
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image="/images/og/home.jpg"
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <RevealFx translateY="12">
              <Column fillWidth gap="m" horizontal="center">
            <Avatar src={person.avatar} size="xl" />
                <Column fillWidth gap="12" className={styles.contactBlock}>
                  {person.phone && (
                    <Row gap="8" vertical="center" className={styles.rowHover}>
                      <Icon onBackground="brand-weak" name="phone" />
                      <SmartLink
                        href={`tel:${person.phone.replace(/\s/g, "")}`}
                        suffixIcon="arrowUpRightFromSquare"
                      >
                        <Text variant="body-default-s">{person.phone}</Text>
                      </SmartLink>
                    </Row>
                  )}
                  <Row gap="8" vertical="center" className={styles.rowHover}>
                    <Icon onBackground="brand-weak" name="email" />
                    <SmartLink href={`mailto:${person.email}`} suffixIcon="arrowUpRightFromSquare">
                      <Text variant="body-default-s">{person.email}</Text>
                    </SmartLink>
                  </Row>
                <Row gap="8" vertical="center" className={styles.rowHover}>
                  <Icon onBackground="brand-weak" name="linkedin" />
                  <Text variant="body-default-s">@manon-gomez-mor</Text>
                </Row>
                  <Row gap="8" vertical="center" className={styles.rowHover}>
                    <Icon onBackground="brand-weak" name="globe" />
                    <Text variant="body-default-s">{person.location}</Text>
                  </Row>
                <Row gap="8" vertical="center" className={styles.rowHover}>
                  <Icon onBackground="brand-weak" name="car" />
                  <Text variant="body-default-s">Permis B — véhiculée</Text>
            </Row>
                </Column>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
              </Column>
            </RevealFx>
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <RevealFx translateY="8">
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            </RevealFx>
            <RevealFx translateY="8" delay={0.1}>
              <Text className={styles.textAlign} variant="display-default-xs" onBackground="neutral-weak">
              {person.role}
            </Text>
            </RevealFx>
            {social.some((item) => item.essential && Boolean(item.link)) && (
              <RevealFx translateY="8" delay={0.2}>
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                      .filter((item) => item.essential)
                      .map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
              </RevealFx>
            )}
          </Column>

          {about.intro.display && (
            <RevealFx translateY="12" delay={0.25}>
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
            </RevealFx>
          )}

          {about.work.display && (
            <>
              <RevealFx translateY="12" delay={0.15}>
                <Row fillWidth marginBottom="m">
                  <Row className={styles.sectionTitleCenter} gap="12" vertical="center">
                    <Icon name="rocket" onBackground="brand-weak" />
                    <Heading as="h2" id={about.work.title} variant="display-strong-s">
                {about.work.title}
              </Heading>
                  </Row>
                </Row>
                <Row fillWidth paddingY="24">
                  <Line background="brand-alpha-weak" />
                </Row>
              </RevealFx>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <RevealFx
                    key={`${experience.company}-${experience.role}-${index}`}
                    translateY="12"
                    delay={0.05 + index * 0.05}
                  >
                    <Column className={styles.hoverCard} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16" className={styles.arrowList}>
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            <Icon className={styles.liIcon} name="arrowRight" onBackground="brand-weak" />
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                  </RevealFx>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <RevealFx translateY="12" delay={0.15}>
                <Row fillWidth marginBottom="m">
                  <Row className={styles.sectionTitleCenter} gap="12" vertical="center">
                    <Icon name="document" onBackground="brand-weak" />
                    <Heading as="h2" id={about.studies.title} variant="display-strong-s">
                {about.studies.title}
              </Heading>
                  </Row>
                </Row>
                <Row fillWidth paddingY="24">
                  <Line background="brand-alpha-weak" />
                </Row>
              </RevealFx>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <RevealFx key={`${institution.name}-${index}`} translateY="12" delay={0.05 + index * 0.05}>
                    <Column className={styles.hoverCard} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                  </RevealFx>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <RevealFx translateY="12" delay={0.15}>
                <Row fillWidth marginBottom="40">
                  <Row className={styles.sectionTitleCenter} gap="12" vertical="center">
                    <Icon name="grid" onBackground="brand-weak" />
                    <Heading as="h2" id={about.technical.title} variant="display-strong-s">
                {about.technical.title}
              </Heading>
                  </Row>
                </Row>
                <Row fillWidth paddingY="24">
                  <Line background="brand-alpha-weak" />
                </Row>
              </RevealFx>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <RevealFx key={`${skill}-${index}`} translateY="12" delay={0.05 + index * 0.05}>
                    <Column className={styles.hoverCard} fillWidth gap="4">
                      <Row gap="12" vertical="center">
                        <Icon name="grid" onBackground="brand-weak" />
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                      </Row>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                  </RevealFx>
                ))}
              </Column>
            </>
          )}

          <RevealFx translateY="12" delay={0.2}>
            <Column fillWidth paddingTop="xl">
              <Card
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
                      <Icon name="calendar" onBackground="brand-weak" />
                      <Text variant="heading-strong-xl">Prendre rendez-vous</Text>
                    </Row>
                    <Text variant="body-default-l" onBackground="neutral-weak">
Envie d'échanger ? Je suis disponible pour un rendez-vous.
                    </Text>
                  </Column>
                  <Button href="/contact" variant="primary" size="m" arrowIcon>
                    Voir le calendrier
                  </Button>
                </Row>
              </Card>
            </Column>
          </RevealFx>
        </Column>
      </Row>
    </Column>
  );
}