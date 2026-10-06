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
  description: `Développeuse Full-Stack : conception, développement et pilotage de projets web, du besoin à la mise en production.`,
  headline: <>Donner vie à votre site de rêve, de la conception à la mise en ligne</>,
  featured: {
    display: false,
    title: <Row />,
    href: "/work",
  },
  subline: (
    <>
      Je suis{" "}
      <Text as="span" size="xl" weight="strong">
        {person.firstName}
      </Text>
      , développeuse{" "}
      <Text as="span" size="xl" weight="strong">
        Full-Stack
      </Text>{" "}
      spécialisée dans la conception et la réalisation de projets web.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description:
    "Manon Gomez Mor : développement full-stack et pilotage de projets web depuis 2019. Expériences, compétences techniques, gestion de projet et formation.",
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: false, link: "" },
  tagline: "Du besoin métier à la mise en production",
  intro: {
    display: true,
    title: "Présentation",
    description: (
      <>
        Développeuse full-stack depuis 2019, je conçois, réalise et pilote des sites, plateformes
        web et solutions e-commerce. Mon expérience en agence, en équipe et en freelance associe
        développement front-end et back-end, cadrage, chiffrage, planification et relation client.
        <br />
        <br />
        J’aime relier les attentes métiers, les usages et les contraintes techniques pour livrer des
        solutions utiles et durables. La formation et le mentorat ont renforcé ma capacité à
        expliquer, accompagner et faire progresser les autres. Je souhaite mettre ce parcours au
        service d’une équipe, en développement full-stack ou en gestion de projet IT / produit.
      </>
    ),
  },
  work: {
    display: true,
    title: "Expériences",
    experiences: [
      {
        company: "Freelance",
        timeframe: "Février 2022 - Aujourd’hui",
        role: "Développeuse full-stack",
        logo: "/images/about/freelance.png",
        highlights: ["Plus de 34 projets réalisés"],
        achievements: [
          "Qualifier les demandes et traduire les objectifs, usages et contraintes clients en solutions fonctionnelles et techniques.",
          "Cadrer les projets : audit de l’existant, conseil, estimation des charges, chiffrage et propositions commerciales.",
          "Planifier les étapes, organiser les priorités et animer les échanges de suivi : avancement, retours clients et ajustements.",
          "Développer des sites, plateformes et boutiques sur mesure : front-end, back-end et intégration de services tiers.",
          "Assurer la maintenance : analyser les incidents, corriger les anomalies et optimiser les performances et l’UX.",
          "Environnement : PHP, JavaScript, React, Next.js, Laravel, Tailwind CSS, WordPress, WooCommerce, Shopify et MySQL.",
          "Réaliser la recette et la mise en production ; former les clients et assurer l’assistance technique.",
        ],
      },
      {
        company: "IT-Akademy",
        timeframe: "Janvier 2023 - Avril 2026",
        role: "Formatrice",
        logo: "/images/about/it-akademy.png",
        highlights: ["Plus de 17 sessions • Plus de 255 étudiants"],
        achievements: [
          "Enseigner HTML/CSS, JavaScript, PHP procédural et orienté objet, WordPress et WooCommerce, de Bac+2 à Bac+5.",
          "Concevoir les exercices et aider à résoudre les difficultés techniques en adaptant la pédagogie.",
          "Transmettre les bonnes pratiques de qualité du code, d’accessibilité et d’UX, ainsi que la rédaction de spécifications.",
          "Enseigner le recueil des besoins, les spécifications et le chiffrage, de Bac+2 à Bac+5.",
        ],
      },
      {
        company: "OpenClassrooms",
        timeframe: "Octobre 2022 - Décembre 2024",
        role: "Mentor",
        logo: "/images/about/openclassrooms.png",
        highlights: ["Plus de 30 étudiants accompagnés"],
        achievements: [
          "Accompagner les projets des parcours Développeur WordPress et Intégrateur Web : analyse des difficultés et recherche de solutions.",
          "Faire des retours sur les travaux et transmettre des bonnes pratiques de développement, de qualité et d’organisation.",
          "Adapter l’accompagnement et les retours aux difficultés rencontrées pour développer les compétences et l’autonomie.",
        ],
      },
      {
        company: "CISS",
        timeframe: "Mai 2022 - Novembre 2022",
        role: "Développeuse front-end",
        logo: "/images/about/ciss.png",
        highlights: [],
        achievements: [
          "Développer des fonctionnalités et correctifs en Vue.js et Laravel pour la maintenance de solutions de paiement.",
          "Analyser et suivre les tickets en Kanban ; concevoir des interfaces sur Figma et collaborer avec Git, SVN et les revues de code.",
        ],
      },
      {
        company: "Synolia",
        timeframe: "Septembre 2021 - Mars 2022",
        role: "Développeuse Symfony / Sylius",
        logo: "/images/about/synolia.png",
        highlights: [],
        achievements: [
          "Maintenir et faire évoluer plusieurs projets e-commerce sous Symfony / Sylius, PHP et Twig, selon les spécifications.",
          "Analyser et estimer les tickets ; collaborer en Scrum avec Jira, Git et les revues de code.",
          "Développer sous Symfony / Sylius selon les priorités du backlog ; participer aux planifications de sprint et rétrospectives.",
        ],
      },
      {
        company: "Cyloé",
        timeframe: "Août 2019 - Septembre 2021",
        role: "Développeuse web",
        logo: "/images/about/cyloe.png",
        highlights: [],
        achievements: [
          "Développer des sites et boutiques avec WordPress, WooCommerce, Shopify, WiziShop, Joomla et PHP.",
          "Gérer l’hébergement, le paramétrage et le déploiement ; assurer la recette, les corrections et les évolutions.",
          "Optimiser le SEO, les performances et l’affichage multi-écrans ; former les clients et résoudre les incidents techniques.",
          "Piloter plusieurs projets clients : besoins, planification, priorisation et suivi des délais, en autonomie.",
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formation",
    institutions: [
      {
        name: "Mastère 1 - Développeuse d’applications full-stack",
        logo: "/images/about/it-akademy.png",
        description: (
          <>
            {"IT-AKADEMY / 2019 - 2021 • RNCP niveau 6 • En apprentissage"}
            <ul>
              <li>
                {
                  "Développement web et POO : PHP, JavaScript, Node.js, Python, Java, API, frameworks et design patterns."
                }
              </li>
              <li>
                {
                  "Bases de données : conception, administration et optimisation ; architecture, sécurité et performance."
                }
              </li>
              <li>
                {
                  "Gestion de projet : besoins, spécifications, cahiers des charges, chiffrage, planification et coordination."
                }
              </li>
              <li>{"Qualité logicielle, DevOps, cloud AWS, UX design, SEO et e-commerce."}</li>
            </ul>
          </>
        ),
      },
      {
        name: "Développeuse web",
        logo: "/images/about/openclassrooms.png",
        description: (
          <>
            {"OPENCLASSROOMS / 2018 - 2019 • RNCP niveau 5 (Bac+2)"}
            <ul>
              <li>{"Intégration de sites responsives en HTML5/CSS3."}</li>
              <li>
                {"Développement de fonctionnalités dynamiques en JavaScript et intégration d’API."}
              </li>
              <li>
                {
                  "Programmation orientée objet, gestion des erreurs et bonnes pratiques de développement."
                }
              </li>
              <li>{"Conception et exploitation de bases de données."}</li>
              <li>{"Optimisation SEO, performances et compatibilité multi-écrans."}</li>
            </ul>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Compétences",
    skills: [
      {
        title: "Gestion de projet",
        description:
          "Analyser les besoins, cadrer et chiffrer les projets, organiser les priorités et suivre la livraison. Méthodes Agile, Scrum et Kanban.",
        tags: [
          {
            name: "Analyse des besoins",
          },
          {
            name: "Audit de l’existant",
          },
          {
            name: "Spécifications fonctionnelles et techniques",
          },
          {
            name: "Cahier des charges",
          },
          {
            name: "Estimation des charges",
          },
          {
            name: "Chiffrage & devis",
          },
          {
            name: "Planification",
          },
          {
            name: "Priorisation",
          },
          {
            name: "Suivi d’avancement",
          },
          {
            name: "Recette",
          },
          {
            name: "Relation client",
          },
          {
            name: "Agile",
          },
          {
            name: "Scrum",
          },
          {
            name: "Kanban",
          },
          {
            name: "Revues de code",
          },
          {
            name: "Jira",
            icon: "jira",
          },
          {
            name: "Linear",
            icon: "linear",
          },
        ],
      },
      {
        title: "Développement web",
        description:
          "Concevoir et maintenir des sites, applications et boutiques : interfaces, back-end, bases de données et intégration d’API.",
        tags: [
          {
            name: "HTML5",
            icon: "html",
          },
          {
            name: "CSS3",
            icon: "css",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Vue.js",
            icon: "vue",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwind",
          },
          {
            name: "Bootstrap",
            icon: "bootstrap",
          },
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "Laravel",
            icon: "laravel",
          },
          {
            name: "Symfony",
            icon: "symfony",
          },
          {
            name: "Sylius",
            icon: "sylius",
          },
          {
            name: "Twig",
            icon: "code",
          },
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "API REST",
            icon: "code",
          },
          {
            name: "WordPress",
            icon: "wordpress",
          },
          {
            name: "WooCommerce",
            icon: "woocommerce",
          },
          {
            name: "Shopify",
            icon: "shopify",
          },
          {
            name: "WiziShop",
            icon: "cart",
          },
          {
            name: "Joomla",
            icon: "joomla",
          },
        ],
      },
      {
        title: "Outils & automatisation",
        description: "Maquettage, versionnement, mise en production, optimisation et outils d’IA.",
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "SVN",
            icon: "svn",
          },
          {
            name: "DNS",
            icon: "dns",
          },
          {
            name: "SSL",
            icon: "ssl",
          },
          {
            name: "FTP",
            icon: "ftp",
          },
          {
            name: "SEO",
            icon: "seo",
          },
          {
            name: "Performance",
            icon: "settings",
          },
          {
            name: "n8n",
            icon: "n8n",
          },
          {
            name: "ChatGPT",
            icon: "openai",
          },
          {
            name: "Claude",
            icon: "claude",
          },
          {
            name: "Claude Code",
            icon: "claude",
          },
          {
            name: "Codex",
            icon: "openai",
          },
          {
            name: "Cursor",
            icon: "cursor",
          },
        ],
      },
      {
        title: "Savoir-être",
        description: "Organiser, communiquer et accompagner les clients comme les équipes.",
        tags: [
          {
            name: "Organisation",
          },
          {
            name: "Rigueur",
          },
          {
            name: "Autonomie",
          },
          {
            name: "Communication",
          },
          {
            name: "Pédagogie",
          },
          {
            name: "Résolution de problèmes",
          },
        ],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Portfolio",
  title: `Projets – ${person.name}`,
  description: `Six projets sélectionnés : développement web, conception fonctionnelle et gestion de projet, du besoin à la mise en production.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, work };
