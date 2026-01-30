"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

export default function TallyEmbed() {
  useEffect(() => {
    const d = document;
    const scriptSrc = "https://tally.so/widgets/embed.js";

    const load = () => {
      if (typeof window !== "undefined" && window.Tally) {
        window.Tally.loadEmbeds();
        return;
      }

      d.querySelectorAll<HTMLIFrameElement>('iframe[data-tally-src]:not([src])').forEach((iframe) => {
        iframe.src = iframe.dataset.tallySrc ?? "";
      });
    };

    // If script already present, just load
    if (d.querySelector(`script[src="${scriptSrc}"]`)) {
      load();
      return;
    }

    const s = d.createElement("script");
    s.src = scriptSrc;
    s.async = true;
    s.onload = load;
    s.onerror = load;
    d.body.appendChild(s);

    load();
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/QK7Z7l?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="313"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="Formulaire de contact"
      style={{ border: 0 }}
    />
  );
}

