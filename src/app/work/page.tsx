import { Button, Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { PortfolioExplorer } from "@/components/work/PortfolioExplorer";
import { getPosts } from "@/utils/utils";
import styles from "./page.module.scss";

export async function generateMetadata() {
  return Meta.generate({ title: work.title, description: work.description, baseURL, image: "/images/og/home.jpg", path: work.path });
}

export default function Work() {
  const projects = getPosts(["src", "app", "work", "projects"]).filter(post => post.metadata.selected).sort((a, b) => a.metadata.order - b.metadata.order);
  return (
    <Column maxWidth="m" paddingTop="24" gap="40" className={styles.page}>
      <Schema as="webPage" baseURL={baseURL} path={work.path} title={work.title} description={work.description} image="/images/og/home.jpg" author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }} />
      <section className={styles.hero} aria-labelledby="portfolio-title">
        <p className={styles.eyebrow}>Portfolio · Développement, projet & produit</p>
        <h1 id="portfolio-title">Des projets web,<br />du besoin à la mise en production.</h1>
        <p className={styles.intro}>En freelance et en collaboration avec différentes équipes, j’ai travaillé sur <strong>plus de 34 projets web</strong> : applications métier, plateformes de formation, e-commerce, sites vitrines et corporate, interfaces interactives, maintenance et optimisation.</p>
        <p className={styles.intro}>Selon les besoins, mes interventions couvrent le conseil, la conception, le développement, les tests, la mise en production et l’accompagnement des utilisateurs. Ces six projets donnent un aperçu concret de ma façon de relier les enjeux métier à leur réalisation technique.</p>
        <div className={styles.actions}>
          <Button href="#projets" variant="primary" size="m" arrowIcon>Explorer les 6 projets</Button>
          <Button href={about.path} variant="secondary" size="m">Découvrir mon parcours</Button>
        </div>
        <div className={styles.approach}>
          <div><span>01 / Comprendre</span><p>Analyser le besoin et les usages pour définir une réponse adaptée.</p></div>
          <div><span>02 / Construire</span><p>Concevoir les parcours et développer les interfaces et la logique métier.</p></div>
          <div><span>03 / Accompagner</span><p>Vérifier, mettre en production et faire évoluer les outils selon la mission.</p></div>
        </div>
      </section>
      <PortfolioExplorer projects={projects.map(({ slug, metadata }) => ({ slug, metadata }))} />
      <section className={styles.contact} aria-labelledby="contact-title">
        <div><p className={styles.eyebrow}>Un projet à réaliser ou une équipe à rejoindre ?</p><h2 id="contact-title">Parlons de vos besoins.</h2><p>Une mission de développement, un projet web à piloter ou un rôle orienté produit : échangeons sur les besoins de votre activité et de votre équipe.</p></div>
        <Button href="/contact" variant="primary" size="m" arrowIcon>Prendre contact</Button>
      </section>
    </Column>
  );
}
