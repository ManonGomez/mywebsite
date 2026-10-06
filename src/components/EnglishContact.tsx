import { Button, Column, Text } from "@once-ui-system/core";
import TallyEmbed from "@/app/contact/TallyEmbed";
import { person } from "@/resources";

export default function EnglishContact() {
  const form = process.env.NEXT_PUBLIC_TALLY_EN_FORM_URL;
  if (form) {
    return <TallyEmbed src={form} title="Contact form" />;
  }
  return (
    <Column gap="16" padding="l" radius="l" border="neutral-alpha-weak" fillWidth>
      <Text variant="heading-strong-m">Tell me about your project</Text>
      <Text variant="body-default-m" onBackground="neutral-weak">
        Send me a few details about your needs, your team and your timeline.
      </Text>
      <Button
        href={`mailto:${person.email}?subject=${encodeURIComponent("Project or opportunity — website enquiry")}`}
        prefixIcon="email"
        variant="primary"
      >
        Email me
      </Button>
      <Text variant="body-default-s" onBackground="neutral-weak">
        Opens your email app. You can also write directly to {person.email}.
      </Text>
    </Column>
  );
}
