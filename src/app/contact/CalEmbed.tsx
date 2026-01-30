"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Cal
      namespace="30min"
      calLink="manon-gomez-mor-x4qgzz/30min"
      style={{ width: "100%", height: "800px", overflow: "auto" }}
      config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
    />
  );
}

