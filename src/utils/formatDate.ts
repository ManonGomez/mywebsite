export function formatDate(date: string, includeRelative = false) {
  const now = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const target = new Date(date);

  const fullDate = target.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (!includeRelative) return fullDate;

  const rtf = new Intl.RelativeTimeFormat("fr", { numeric: "auto" });
  const diffDays = Math.round((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  // Pick a human-friendly unit.
  const absDays = Math.abs(diffDays);
  if (absDays < 30) return `${fullDate} (${rtf.format(diffDays, "day")})`;

  const diffMonths = Math.round(diffDays / 30);
  if (Math.abs(diffMonths) < 18) return `${fullDate} (${rtf.format(diffMonths, "month")})`;

  const diffYears = Math.round(diffDays / 365);
  return `${fullDate} (${rtf.format(diffYears, "year")})`;
}
