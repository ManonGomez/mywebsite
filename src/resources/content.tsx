import { About, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Manon",
  lastName: "Gomez Mor",
  name: "Manon Gomez Mor",
  role: "Cheffe de projet IT | Gestion de projet web | Développeuse Full-Stack",
  avatar: "/images/avatar.jpg",
  email: "manongomezdev@gmail.com",
  phone: "07 82 95 66 21",
  location: "Aix-les-Bains",
  timeZone: "Europe/Paris",
  languages: ["Français", "Anglais"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Newsletter</>,
  description: <>Inscription à la newsletter</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/manongomez-mor-251b0b170",
    essential: false,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: false,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `Portfolio – ${person.name}`,
  description: `Développeuse web spécialisée PHP & WordPress : création, optimisation et maintenance de sites performants.`,
  headline: <>Donner vie à votre site de rêve, de la conception à la mise en ligne</>,
  featured: {
    display: false,
    title: <Row />,
    href: "/work",
  },
  subline: (
    <>
      Je suis <Text as="span" size="xl" weight="strong">{person.firstName}</Text>, développeuse web passionnée,
      spécialisée en <Text as="span" size="xl" weight="strong">PHP</Text> et{" "}
      <Text as="span" size="xl" weight="strong">WordPress</Text> depuis 7 ans.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `Compétences et parcours de ${person.name} — ${person.role}, au service de votre équipe.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  tagline: "Gestion de projet • Coordination • Web & Digital • Développement",
  intro: {
    display: true,
    title: "Présentation",
    description: (
      <>
        Développeuse full-stack devenue passionnée de coordination et de pilotage de projets
        web, j&apos;aime faire le lien entre les besoins métiers, les utilisateurs et les
        équipes techniques pour faire avancer les projets de manière claire et pragmatique.
        Après plusieurs années en indépendante, je recherche aujourd&apos;hui un poste de
        cheffe de projet IT ou de coordinatrice de projets web, dans la continuité de mon
        parcours technique.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Expériences",
    experiences: [
      {
        company: "Freelance",
        timeframe: "Février 2022 - Aujourd'hui",
        role: "Développeuse Full Stack",
achievements: [
  <>Gestion complète de projets web en autonomie, de la prospection commerciale au suivi post-production.</>,
  <>Qualification des besoins clients (objectifs, contraintes, priorités) et audit technique de l’existant.</>,
  <>Traduction des besoins en solutions adaptées, avec conseil sur les choix techniques et stratégiques.</>,
  <>Chiffrage, devis et contractualisation, puis planification et suivi jusqu’à la livraison.</>,
  <>Conception et développement de sites vitrines, plateformes web et solutions e-commerce sur mesure.</>,
  <>Réunions de suivi, recette et correction des anomalies avant mise en production.</>,
  <>Formation des clients à l’utilisation et à l’administration de leurs outils.</>,
  <>Maintenance corrective et évolutive, assistance technique dans la durée.</>,
  <>Optimisation de l’expérience utilisateur, du SEO et des performances des sites.</>,
],
      },
      {
        company: "IT-Akademy",
        timeframe: "Janvier 2023 - Avril 2026",
        role: "Formatrice",
achievements: [
  <>Conception et animation de formations en développement web, projets numériques et UX, pour des publics variés (Bac+2 à Bac+5).</>,
  <>Accompagnement individuel des apprenants : acquisition de compétences, résolution de difficultés, bonnes pratiques de code et d’accessibilité.</>,
  <>Formation aux étapes clés d’un projet web (analyse du besoin, spécifications, chiffrage) et à la veille technologique.</>,
  <>Enseignements dispensés : Développement front-end (HTML5, CSS3 et JavaScript) / Intégration web, UX et nouveaux usages liés à la transition numérique / Création de sites avec WordPress et de boutiques e-commerce avec WooCommerce / Programmation procédurale et programmation orientée objet en PHP / Écosystème PHP et prise en main des principaux outils du marché / Conception et rédaction de spécifications fonctionnelles et techniques / Méthodologie et initiation au chiffrage de projets / Veille technologique et professionnelle.</>,
],
      },
      {
        company: "OpenClassrooms",
        timeframe: "Octobre 2022 - Décembre 2024",
        role: "Mentor",
achievements: [
  <>Accompagnement individuel d’étudiants des parcours Développeur WordPress et Intégrateur Web : suivi de progression, organisation du travail et résolution de difficultés.</>,
  <>Transmission des bonnes pratiques (développement, intégration, qualité du code) et retours constructifs pour favoriser la montée en compétences.</>,
  <>Adaptation de l’accompagnement au niveau et au rythme de chaque étudiant.</>,
],
      },
      {
        company: "CISS",
        timeframe: "Mai 2022 - Novembre 2022",
        role: "Développeuse Full Stack (Vue.js / Laravel)",
  achievements: [
  <>TMA de solutions de paiement : prise en charge des tickets, développement de fonctionnalités et correctifs avec Vue.js et Laravel.</>,
  <>Maquettage d’interfaces sur Figma et participation aux revues de code.</>,
  <>Travail en équipe en Kanban, gestion des versions avec Git et SVN.</>,
],
      },
      {
        company: "Synolia",
        timeframe: "Septembre 2021 - Mars 2022",
        role: "Développeuse e-commerce (Sylius)",
    achievements: [
  <>TMA de projets e-commerce Sylius : analyse des tickets, développement de correctifs et d’évolutions fonctionnelles.</>,
  <>Estimation et suivi des tâches dans Jira, participation aux cérémonies Agiles (sprints, rétrospectives) et au backlog d’équipe.</>,
  <>Versionnement avec Git, code review et collaboration avec l’équipe de développement.</>,
],
      },
      {
        company: "Cyloé",
        timeframe: "Août 2019 - Septembre 2021",
        role: "Développement & intégration web",
       achievements: [
  <>Pilotage de projets web de A à Z : recueil du besoin, planification et suivi jusqu’à la livraison.</>,
  <>Conception et développement de sites vitrines, plateformes sur mesure et sites e-commerce.</>,
  <>Gestion complète de l’environnement technique (hébergement, déploiement, mise en production) et recette avant livraison.</>,
  <>Maintenance corrective et évolutive, analyse SEO et optimisation des performances et de l’UX.</>,
  <>Formation des clients à l’utilisation de leurs outils, avec accompagnement dans la durée.</>,
  <>Gestion simultanée de plusieurs clients de l’agence, en forte autonomie.</>,
],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formation",
    institutions: [
      {
        name: "Mastère 1 – Développeuse d’application full-stack — IT-AKADEMY (2019 - 2021)",
        description: (
          <>
            -Génie logiciel, architectures et bases de données<br />
-Développement web (WordPress, JavaScript, frameworks PHP, Node.js, API, sécurité, performance)<br />
-Programmation orientée objet (PHP, Python, C++, Java) et développement mobile (iOS, Android, hybride)<br />
-Méthodes de développement (spécifications, qualité, DevOps) et gestion de projets (chiffrage, devis, planning)<br />
-Marketing digital, e-commerce, SEO et Cloud computing (AWS)<br />
-UX Design, droit informatique et initiation IA / Machine Learning / blockchain<br />
          </>
        ),
      },
      {
        name: "RNCP Niveau 5 (Bac +2) – Développeuse web — OpenClassrooms (2018 - 2019)",
        description: (
          <>
            -Intégration HTML5/CSS conforme aux standards du Web, SEO et responsive<br />
-Développement JavaScript dynamique et consommation d’API<br />
-Programmation orientée objet, gestion des erreurs et des bases de données
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Compétences",
    skills: [
      {
        title: "Hard skills",
        description: "Gestion de projet et méthodologie.",
        tags: [
          { name: "Gestion de projet" },
          { name: "Analyse des besoins" },
          { name: "Cahier des charges" },
          { name: "Chiffrage / estimation" },
          { name: "Spécifications fonctionnelles" },
          { name: "Méthodes Agile / Jira" },
          { name: "Linear" },
        ],
      },
      {
        title: "Technique",
        description: "Stack et outils de développement web.",
        tags: [
          { name: "HTML", icon: "html" },
          { name: "CSS", icon: "css" },
          { name: "Bootstrap", icon: "bootstrap" },
          { name: "Tailwind", icon: "tailwind" },
          { name: "JavaScript", icon: "javascript" },
          { name: "React", icon: "react" },
          { name: "Vue.js", icon: "vue" },
          { name: "JavaScript Vanilla", icon: "javascript" },
          { name: "PHP", icon: "php" },
          { name: "Laravel", icon: "laravel" },
          { name: "Symfony", icon: "symfony" },
          { name: "Sylius", icon: "cart" },
          { name: "PHP Vanilla", icon: "php" },
          { name: "Node.js", icon: "nodejs" },
          { name: "WordPress", icon: "wordpress" },
          { name: "Prestashop", icon: "prestashop" },
          { name: "Shopify", icon: "shopify" },
          { name: "WiziShop", icon: "cart" },
          { name: "MySQL", icon: "mysql" },
          { name: "DNS", icon: "dns" },
          { name: "SSL", icon: "ssl" },
          { name: "FTP", icon: "ftp" },
          { name: "Figma", icon: "figma" },
          { name: "Git", icon: "git" },
        ],
      },
      {
        title: "Soft skills",
        tags: [
          { name: "Organisation" },
          { name: "Rigueur" },
          { name: "Détermination" },
          { name: "Persévérance" },
          { name: "Communication" },
          { name: "Autonomie" },
        ],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Portfolio",
  title: `Projets – ${person.name}`,
  description: `Projets et réalisations de ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, work };
