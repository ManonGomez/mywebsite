import type { About } from "@/types";
import { about, person } from "./content";
import profiles from "./cv-profiles.json";

export function getAboutProfile(mode: "tech" | "project"): About {
  const profile = profiles[mode];
  const technical = mode === "tech";
  return {
    ...about,
    path: technical ? "/about/developpeur-full-stack" : "/about/chef-de-projet",
    label: technical ? "À propos · Développement full-stack" : "À propos · Gestion de projet",
    title: `${profile.role} – ${person.name}`,
    description: profile.intro,
    tagline: technical ? "Développement web, qualité du code et expérience utilisateur" : "Cadrage, planification et suivi de projets web",
    intro: { ...about.intro, description: profile.intro },
    work: {
      ...about.work,
      experiences: about.work.experiences.map((experience, index) => ({
        ...experience,
        achievements: profile.achievements[index],
      })),
    },
    studies: {
      ...about.studies,
      institutions: about.studies.institutions.map((institution, index) => ({
        ...institution,
        description: <>
          {index === 0 ? "IT-AKADEMY / 2019 - 2021 • RNCP niveau 6 • En apprentissage" : "OPENCLASSROOMS / 2018 - 2019 • RNCP niveau 5 (Bac+2)"}
          <ul>{profile.education[index]
            .filter((detail) => !technical || !detail.startsWith("Gestion de projet :"))
            .map((detail) => <li key={detail}>{detail}</li>)}</ul>
        </>,
      })),
    },
    technical: {
      ...about.technical,
      skills: profile.skills.map(([title, description]) => ({
        title,
        description,
        tags: description.split(/[,\n]/).map((name) => ({ name: name.trim() })),
      })),
    },
  };
}
