"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToggleButton } from "@once-ui-system/core";
import { languageFromPath, pathInLanguage } from "@/utils/language";

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const language = languageFromPath(pathname);
  const [suffix, setSuffix] = useState("");
  useEffect(() => {
    document.documentElement.lang = language;
    const updateSuffix = () => {
      const query = new URLSearchParams(window.location.search);
      query.delete("lang");
      setSuffix((query.size ? `?${query}` : "") + window.location.hash);
    };
    updateSuffix();
    window.addEventListener("hashchange", updateSuffix);
    return () => window.removeEventListener("hashchange", updateSuffix);
  }, [pathname, language]);
  return (
    <ToggleButton
      prefixIcon="globe"
      label={language === "fr" ? "EN" : "FR"}
      aria-label={language === "fr" ? "Switch to English" : "Passer en français"}
      href={pathInLanguage(pathname, language === "fr" ? "en" : "fr") + suffix}
      selected={false}
    />
  );
}
