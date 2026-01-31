import { Row, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Row gap="8" wrap vertical="center" horizontal="center">
          <Text variant="body-default-s" onBackground="neutral-weak">
            © {currentYear}
          </Text>
          <Text variant="body-default-s" onBackground="neutral-strong">
            {person.name}
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            •
          </Text>
          <SmartLink href="/mentions-legales">
            <Text variant="body-default-s" onBackground="neutral-weak">
              Mentions légales
            </Text>
          </SmartLink>
        </Row>
        <Row gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
