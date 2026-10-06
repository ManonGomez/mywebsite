import { Meta } from "@once-ui-system/core";
import { getAboutProfile } from "@/resources/about-profiles";
import profiles from "@/resources/cv-profiles.json";
import AboutPage from "@/components/about/AboutPage";

const about = getAboutProfile("tech");

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: "https://manongomezmor.fr",
    image: "/images/og/home.jpg",
    path: about.path,
  });
}

export default function Profile() {
  return <AboutPage
    about={about}
    siteBaseURL="https://manongomezmor.fr"
    role={profiles.tech.role}
    cv="/files/CV-Manon-Gomez-Mor-TECH-FR.pdf"
    contactMessage="Un poste en développement full-stack ? Échangeons sur les besoins de votre équipe."
  />;
}
