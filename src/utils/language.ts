export type Language = "fr" | "en";

export function languageFromPath(path: string): Language {
  return /^\/en(?:\/|$)/.test(path) ? "en" : "fr";
}

export function pathInLanguage(path: string, language: Language): string {
  const bare = path.replace(/^\/en(?=\/|$)/, "") || "/";
  return language === "en" ? `/en${bare === "/" ? "" : bare}` : bare;
}
