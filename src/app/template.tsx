import type { ReactNode } from "react";
import { Flex } from "@once-ui-system/core";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <Flex fillWidth minHeight="0" horizontal="center" className="page-enter">
      {children}
    </Flex>
  );
}
