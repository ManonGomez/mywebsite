import { About, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Manon",
  lastName: "Gomez Mor",
  name: "Manon Gomez Mor",
  role: "Cheffe de projet IT",
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
  <>Gestion complète de projets web en autonomie, de la prospection commerciale au suivi après mise en production.</>,
  <>Recherche de clients, qualification des demandes et conduite des premiers échanges afin d’identifier les objectifs, contraintes et priorités.</>,
  <>Audit et analyse des sites, outils et environnements techniques existants.</>,
  <>Recueil, clarification et traduction des besoins clients en solutions fonctionnelles et techniques adaptées.</>,
  <>Conseil et accompagnement dans les choix techniques, fonctionnels et stratégiques, en tenant compte du budget, des délais et des usages.</>,
  <>Élaboration des propositions commerciales, estimation des charges, chiffrage des projets, rédaction des devis et contractualisation.</>,
  <>Planification des étapes, organisation des tâches et suivi de l’avancement jusqu’à la livraison.</>,
  <>Conception, maquettage, intégration et développement de sites vitrines, plateformes web, fonctionnalités sur mesure et solutions e-commerce.</>,
  <>Organisation de réunions de suivi pour présenter les avancées, recueillir les retours et ajuster les solutions proposées.</>,
  <>Réalisation des recettes, correction des anomalies et mise en production.</>,
  <>Formation des clients à l’utilisation et à l’administration de leurs outils.</>,
  <>Maintenance corrective et évolutive, assistance technique et accompagnement dans la durée.</>,
  <>Optimisation de l’expérience utilisateur, du référencement naturel et des performances des sites.</>,
],
      },
      {
        company: "IT-Akademy",
        timeframe: "Janvier 2023 - Avril 2026",
        role: "Formatrice",
achievements: [
  <>Préparation et animation de formations en développement web, conception de projets numériques et expérience utilisateur.</>,
  <>Transmission de concepts techniques à des publics de niveaux variés, avec une approche progressive mêlant théorie et mises en pratique.</>,
  <>Accompagnement des apprenants dans l’acquisition de compétences, la compréhension des problématiques techniques et la résolution de difficultés.</>,
  <>Sensibilisation aux bonnes pratiques de développement, à la qualité du code, à l’accessibilité et à l’expérience utilisateur.</>,
  <>Formation aux étapes de préparation d’un projet web : analyse du besoin, spécifications, estimation des charges et initiation au chiffrage.</>,
  <>Accompagnement à la mise en place d’une veille technologique et professionnelle structurée.</>,
  <>Enseignements dispensés : Développement front-end (HTML5, CSS3, JavaScript) / Intégration web, UX et transition numérique / WordPress et WooCommerce / PHP procédural et orienté objet / Écosystème PHP et outils du marché / Spécifications fonctionnelles et techniques / Méthodologie et initiation au chiffrage / Veille technologique et professionnelle.</>,
],
      },
      {
        company: "OpenClassrooms",
        timeframe: "Octobre 2022 - Décembre 2024",
        role: "Mentor",
achievements: [
  <>Accompagnement individuel d’étudiants suivant les parcours Développeur WordPress et Intégrateur Web.</>,
  <>Suivi régulier de leur progression et de l’avancement de leurs projets.</>,
  <>Aide à l’organisation du travail, à la définition des prochaines étapes et au respect des objectifs pédagogiques.</>,
  <>Accompagnement dans l’analyse des problématiques rencontrées et la recherche de solutions adaptées.</>,
  <>Transmission des bonnes pratiques en développement web, intégration, méthodologie de projet et qualité du code.</>,
  <>Réalisation de retours constructifs sur les travaux présentés afin de favoriser la montée en compétences et l’autonomie.</>,
  <>Adaptation de l’accompagnement au niveau, au rythme et aux difficultés propres à chaque étudiant.</>,
],
      },
      {
        company: "CISS",
        timeframe: "Mai 2022 - Octobre 2022",
        role: "Développeuse Full Stack (Vue.js / Laravel)",
  achievements: [
  <>Participation à la tierce maintenance applicative (TMA) de solutions de paiement.</>,
  <>Prise en charge et suivi des tickets : analyse des demandes, identification des besoins techniques et réalisation des développements.</>,
  <>Développement de fonctionnalités et réalisation de corrections avec Vue.js et Laravel.</>,
  <>Participation au maquettage et à la conception d’interfaces utilisateur sur Figma.</>,
  <>Travail en équipe selon une organisation Kanban : suivi de l’avancement des tickets, gestion des priorités et mise à jour de leur statut.</>,
  <>Utilisation de Git et SVN pour la gestion des versions et le suivi des modifications.</>,
  <>Participation aux revues de code afin de garantir la qualité et la maintenabilité des développements.</>,
],
      },
      {
        company: "Synolia",
        timeframe: "Septembre 2021 - Mars 2022",
        role: "Développeuse e-commerce (Sylius)",
    achievements: [
  <>Participation à la tierce maintenance applicative (TMA) de plusieurs projets e-commerce développés avec Sylius.</>,
  <>Prise en charge des tickets : analyse du besoin, compréhension du contexte fonctionnel et identification de la solution technique.</>,
  <>Développement de correctifs et d’évolutions fonctionnelles, dans le respect des spécifications et contraintes propres à chaque projet.</>,
  <>Estimation, suivi et mise à jour de l’avancement des tâches dans Jira.</>,
  <>Participation aux cérémonies Agiles : réunions d’équipe, planification des sprints, points de suivi et rétrospectives.</>,
  <>Travail à partir d’un backlog structuré et respect des priorités définies par l’équipe projet.</>,
  <>Utilisation de Git pour le versionnement du code et participation aux processus de code review.</>,
  <>Collaboration avec les développeurs et les membres de l’équipe afin d’assurer la qualité et la bonne intégration des développements.</>,
],
      },
      {
        company: "Cyloé",
        timeframe: "Août 2019 - Septembre 2021",
        role: "Développement & intégration web",
       achievements: [
  <>Pilotage de projets web de A à Z, depuis le recueil du besoin jusqu’à la mise en production et au suivi après livraison.</>,
  <>Organisation et animation des échanges clients afin d’identifier leurs besoins, objectifs, contraintes et fonctionnalités attendues.</>,
  <>Planification des étapes, priorisation des tâches et suivi des délais pour garantir des livraisons conformes aux engagements.</>,
  <>Conception, développement et intégration de sites vitrines, plateformes avec fonctionnalités spécifiques et sites e-commerce.</>,
  <>Gestion de l’environnement technique : hébergement, installation, développement, paramétrage, déploiement et mise en production.</>,
  <>Réalisation des recettes, identification et correction des anomalies avant livraison.</>,
  <>Maintenance corrective et évolutive, résolution des incidents techniques et accompagnement des demandes d’évolution.</>,
  <>Analyse SEO, optimisation des performances, de l’affichage et de l’expérience utilisateur.</>,
  <>Formation des clients à l’utilisation et à l’administration de leurs outils, avec création de supports si nécessaire.</>,
  <>Gestion simultanée de projets variés pour différents clients, avec autonomie et responsabilité directe sur la qualité des livrables.</>,
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
