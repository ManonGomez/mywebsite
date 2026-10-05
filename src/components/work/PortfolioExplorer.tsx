"use client";

import { useState } from "react";
import Link from "next/link";
import { Media } from "@once-ui-system/core";
import styles from "./PortfolioExplorer.module.scss";

type Project = {
  slug: string;
  metadata: { title: string; subtitle?: string; summary: string; images: string[]; product: string; development: string; stack: string };
};

const filters = ["Tous", "Applications & produit", "WordPress & e-commerce", "Front-end & intégration"];
const groups: Record<string, string[]> = {
  "Applications & produit": ["bridge-it", "pro-pattes"],
  "WordPress & e-commerce": ["canissimo-en-ligne", "web-adn", "rouf-wouf"],
  "Front-end & intégration": ["bridge-it", "web-adn", "adms-plus"],
};

export function PortfolioExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("Tous");
  const visible = projects.filter(project => filter === "Tous" || groups[filter].includes(project.slug));

  return (
    <section id="projets" className={styles.section} aria-labelledby="projects-title">
      <div className={styles.sectionHeader}>
        <div><p className={styles.eyebrow}>Des besoins différents, une même exigence</p><h2 id="projects-title">Projets sélectionnés</h2></div>
        <p>Découvrez le contexte, mon rôle et les contributions concrètes de chaque mission.</p>
      </div>
      <div className={styles.filters} role="group" aria-label="Filtrer les projets par domaine">
        {filters.map(item => <button type="button" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <p className={styles.count} role="status" aria-live="polite" aria-atomic="true">{visible.length} projet{visible.length > 1 ? "s" : ""} affiché{visible.length > 1 ? "s" : ""} sur {projects.length}</p>
      <div className={styles.grid}>
        {visible.map(project => (
          <article key={project.slug} className={styles.card}>
            {project.metadata.images[0] ? <div className={styles.preview}><Media src={project.metadata.images[0]} alt={`Aperçu du projet ${project.metadata.title}`} aspectRatio="16 / 9" sizes="(max-width: 700px) 100vw, 480px" /></div> :
              <div className={`${styles.preview} ${styles.typographic}`} aria-hidden="true"><span>{project.metadata.subtitle}</span><strong>{project.metadata.title}</strong><span>Conception · Développement</span></div>}
            <div className={styles.cardBody}>
              <p className={styles.eyebrow}>{project.metadata.subtitle}</p>
              <h3><Link href={`/work/${project.slug}`}>{project.metadata.title}<span aria-hidden="true"> ↗</span></Link></h3>
              <p className={styles.summary}>{project.metadata.summary}</p>
              <dl className={styles.contributions}>
                <div><dt>Projet & produit</dt><dd>{project.metadata.product}</dd></div>
                <div><dt>Développement</dt><dd>{project.metadata.development}</dd></div>
              </dl>
              <p className={styles.stack}><span className={styles.srOnly}>Technologies : </span>{project.metadata.stack}</p>
              <Link className={styles.caseLink} href={`/work/${project.slug}`} aria-label={`Découvrir le projet ${project.metadata.title}`}>Découvrir le projet <span aria-hidden="true">→</span></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
