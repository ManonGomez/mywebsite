import { About, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Manon",
  lastName: "Gomez Mor",
  name: "Manon Gomez Mor",
  role: "Cheffe de projet IT junior",
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
    link: "",
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
        Participer à des projets web innovants en mettant mon expérience technique et
        organisationnelle au service de votre société et en développant mes compétences en
        gestion de projet.
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
          <>Audit et analyse des environnements existants.</>,
          <>Recueil des besoins & accompagnement client.</>,
          <>Conseil et aide à la prise de décision.</>,
          <>Intégration & développement : HTML / CSS / PHP / React / WordPress.</>,
        ],
      },
      {
        company: "IT-Akademy",
        timeframe: "Janvier 2023 - Juillet 2025",
        role: "Formatrice",
        achievements: [
          <>Formation en développement web & gestion de projet.</>,
          <>Spécifications fonctionnelles & méthodologies projet.</>,
          <>UX Design, CMS/WordPress & veille technologique.</>,
        ],
      },
      {
        company: "OpenClassrooms",
        timeframe: "Octobre 2022 - Décembre 2024",
        role: "Mentor",
        achievements: [
          <>Accompagnement d’étudiants sur le parcours Développeur WordPress / Intégrateur Web.</>,
          <>Suivi de projets, bonnes pratiques, méthodologie et montée en compétences.</>,
        ],
      },
      {
        company: "CISS",
        timeframe: "Mai 2022 - Octobre 2022",
        role: "Développeuse Full Stack (Vue.js / Laravel)",
        achievements: [
          <>Participation à la TMA de solutions de paiement.</>,
          <>Développement Vue.js & Laravel.</>,
          <>Maquettage d’interfaces sur Figma.</>,
          <>Git, SVN & code review.</>,
        ],
      },
      {
        company: "Synolia",
        timeframe: "Septembre 2021 - Mars 2022",
        role: "Développeuse e-commerce (Sylius)",
        achievements: [
          <>Participation à la TMA de projets e-commerce.</>,
          <>Travail en environnement Agile : Sprint, Backlog & Jira.</>,
          <>Développement Sylius, Git & code review.</>,
        ],
      },
      {
        company: "Cyloé",
        timeframe: "Août 2019 - Septembre 2021",
        role: "Développement & intégration web",
        achievements: [
          <>Recueil des besoins & définition du cahier des charges client.</>,
          <>Développement & intégration de solutions web.</>,
          <>Analyse SEO & optimisation des performances.</>,
          <>Formation et accompagnement des clients.</>,
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
            -Génie logiciel (algorithmique, architectures<br />
-Bases de données (conception, administration, optimisation)<br />
-Développement web (Wordpress, Javascript, Design patterns PHP, Frameworks PHP, NodeJS, Green IT, sécurité, performance, API)<br />   
-Programmation orientée objet (PHP, Python, C++, JAVA)<br />
-Méthodes de développement (spécifications, qualité et industrialisation, DevOps)<br />
-Gestion et chiffrage de projets (recueil des besoins, rédaction de devis et de cahiers des charges, planification et suivi de planning, coordination des parties prenantes)<br />
-Développement mobile (hybride NodeJS, natif iOS, natif Android)<br />
-Programmation système (Shell, C)<br />
-Droit informatique<br />
-Marketing digital et e-commerce<br />
-SEO<br />
-Cloud computing (AWS)<br />
-UX Design<br />
-Initiation à l’IA , au Machine Learning et à la blockchain<br />
          </>
        ),
      },
      {
        name: "RNCP Niveau 5 (Bac +2) – Développeuse web — OpenClassrooms (2018 - 2019)",
        description: (
          <>
            -Intégration en HTML5 et CSS<br />
-Respect des standards et des normes du Web, référencement SEO, et optimisation pour tout type d’écran
-Développement de pages dynamique en JavaScript<br />
-Consommation de service API<br />
-Programmation en orienté objet, gestion des erreurs et exceptions<br />
-Créer, gérer et afficher le contenu d’une base de données
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
