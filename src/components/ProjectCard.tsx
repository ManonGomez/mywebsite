"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import {
  AvatarGroup,
  Card,
  Column,
  Heading,
  Icon,
  Media,
  SmartLink,
  Text,
  Row,
} from "@once-ui-system/core";

import styles from "@/components/ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  publishedAt?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  priority,
  images = [],
  title,
  description,
  avatars,
  link,
  publishedAt,
}) => {
  const router = useRouter();
  const coverImage = images?.[0];

  const navigateToCase = useCallback(() => {
    router.push(href);
  }, [router, href]);

  return (
    <Card
      className={styles.card}
      fillWidth
      background="surface"
      border="brand-alpha-weak"
      radius="l"
      padding="m"
      shadow="m"
      cursor="interactive"
      onClick={navigateToCase}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigateToCase();
        }
      }}
      role="link"
      tabIndex={0}
    >
      <Column fillWidth gap="m">
        <Column fillWidth gap="m">
          {coverImage && (
            <div className={styles.mediaWrap}>
              <Media
                priority={priority}
                radius="l"
                aspectRatio="16 / 9"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                alt={title}
                src={coverImage}
              />
            </div>
          )}

          <Column fillWidth gap="12">
            <Row className={styles.titleRow} fillWidth gap="12" vertical="start">
              <Heading as="h2" wrap="balance" variant="heading-strong-l" className={styles.title}>
                {title}
              </Heading>
              <Icon name="arrowUpRight" onBackground="neutral-weak" className={styles.arrow} />
            </Row>

            {publishedAt && (
              <Text variant="label-default-s" onBackground="neutral-weak">
                {publishedAt}
              </Text>
            )}

            {description?.trim() && (
              <Text variant="body-default-m" onBackground="neutral-weak" className={styles.description}>
                {description}
              </Text>
            )}

            <Row fillWidth vertical="center" horizontal="between" wrap gap="12">
              {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="s" reverse />}
              <Row className={styles.cta} gap="8" vertical="center">
                <Text variant="label-strong-s" onBackground="brand-weak">
                  Voir le cas
                </Text>
              </Row>
            </Row>
          </Column>
        </Column>

        {link && (
          <Row className={styles.metaRow}>
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
              href={link}
              onClick={(e) => e.stopPropagation()}
            >
              <Text variant="body-default-s">Voir le site</Text>
            </SmartLink>
          </Row>
        )}
      </Column>
    </Card>
  );
};
