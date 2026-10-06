import { Meta } from "@once-ui-system/core";
import { baseURL, about } from "@/resources";
import AboutPage from "@/components/about/AboutPage";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL,
    image: "/images/og/home.jpg",
    path: about.path,
  });
}

export default function About() {
  return <AboutPage about={about} />;
}
