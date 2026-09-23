export type Lang = "fr" | "en";

export interface Job {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
}

export interface Project {
  title: string;
  /** Display priority on the portfolio; lower values are shown first. */
  priority?: number;
  /** Maturity label: production, startup, internal tooling. Lets a visitor tell a side project from a shipped system. */
  stage: string;
  /** What I personally owned on it. */
  role: string;
  description: string;
  tags: string[];
}

export interface Line {
  title: string;
  description: string;
}

export interface ToolGroup {
  title: string;
  items: string[];
}

export interface HomeContent {
  lang: Lang;
  home: string;
  otherLang: { lang: Lang; href: string; label: string; aria: string };
  skipLink: string;
  header: {
    brandAria: string;
    nav: [string, string][];
    contactCta: string;
    contactAria: string;
    mobileLabel: string;
    mobileContact: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    titleCPrefix: string;
    titleCAccent: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge: string;
    alt: string;
  };
  trustedKicker: string;
  about: {
    kicker: string;
    captionRole: string;
    alt: string;
    statement: string;
    paragraphs: string[];
  };
  expertise: { kicker: string; heading: string; items: Line[] };
  projects: { kicker: string; heading: string; items: Project[] };
  experience: { kicker: string; heading: string; items: Job[] };
  tools: { kicker: string; heading: string; groups: ToolGroup[] };
  collaboration: {
    kicker: string;
    heading: string;
    items: Line[];
    problems: { label: string; items: string[] };
  };
  contact: {
    kicker: string;
    titleA: string;
    titleB: string;
    intro: string;
    availability: string;
    ctaPrimary: string;
    alt: string;
  };
  footer: {
    writeMe: string;
    backToTop: string;
    rights: string;
    availability: string;
    footerAria: string;
    linksAria: string;
  };
}

export const companies = [
  "Mycophyto",
  "Arise Travel",
  "Scircula",
  "Knap",
  "Meta IT",
  "Izargolf",
];

export const fr: HomeContent = {
  lang: "fr",
  home: "/",
  otherLang: { lang: "en", href: "/en", label: "EN", aria: "English version" },
  skipLink: "Aller au contenu",
  header: {
    brandAria: "Antoine Andrieu — Accueil",
    nav: [
      ["about", "À propos"],
      ["expertise", "Expertise"],
      ["projects", "Projets"],
      ["experience", "Expérience"],
      ["collaborer", "Collaborer"],
    ],
    contactCta: "Discutons",
    contactAria: "Discutons de votre projet",
    mobileLabel: "Explorer",
    mobileContact: "Discutons",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
  },
  hero: {
    eyebrow: "Product engineer · Hands-on CTO · Founding engineer",
    titleA: "Du problème métier",
    titleB: "au système",
    titleCPrefix: "en ",
    titleCAccent: "production",
    description:
      "Je prends un sujet là où il en est : problème métier encore flou, projet qui patine ou produit devenu fragile. Je clarifie ce qui compte, je construis ou je reprends, puis je le mets sous contrôle en production. 15 ans d'ingénierie, dont 5 en early-stage.",
    ctaPrimary: "Voir ce que j'ai construit",
    ctaSecondary: "Comment travailler ensemble",
    badge: "Nouveau système, projet à reprendre ou produit à fiabiliser.",
    alt: "Antoine Andrieu, en t-shirt blanc, regard caméra et tatouages visibles.",
  },
  trustedKicker: "J'ai construit chez",
  about: {
    kicker: "À propos",
    captionRole: "Product engineer & CTO hands-on",
    alt: "Antoine Andrieu souriant, en t-shirt noir, les bras croisés.",
    statement: "Je transforme le flou en systèmes fiables.",
    paragraphs: [
      "Je commence par le travail réel : comment l'activité fonctionne, qui décide, où l'information se perd et quelles règles restent dans les têtes. J'en fais des choix de produit, une architecture, un modèle de données et du code. Puis je reste jusqu'à ce que le système tourne — ou je reprends l'existant jusqu'à ce que l'équipe puisse à nouveau s'y fier.",
      "Depuis quinze ans, le fil est le même : comprendre une opération, rendre le problème lisible, puis construire ou fiabiliser le système qui la porte. Aujourd'hui, chez Mycophyto, je travaille sur les pipelines de données, l'entrepôt et les API qui alimentent les applications internes. Avant cela : ingénieur senior à distance chez Arise Travel, basée à San Francisco, cofondateur et CTO à distance de Scircula, basée à Amsterdam, puis des rôles backend chez Knap, Meta IT et Izargolf. Ce parcours s'est fait en anglais, avec des équipes aux États-Unis, aux Pays-Bas, en Afrique du Sud et au Brésil.",
      "Je ne pars pas d'un cahier des charges. Pour comprendre un métier, j'ai besoin de parler à celles et ceux qui font le travail comme à celles et ceux qui prennent les décisions. C'est là que se trouvent les vrais arbitrages.",
    ],
  },
  expertise: {
    kicker: "Expertise",
    heading: "Les situations où on m'appelle.",
    items: [
      {
        title: "Les opérations tournent sur des tableurs",
        description:
          "Je cartographie le processus réel, puis je choisis la bonne approche : adapter un ERP comme Odoo lorsqu'il fournit le bon socle, ou concevoir un produit full-stack sur mesure lorsque le métier le demande. Dans les deux cas, le système suit la façon de travailler des équipes et reprend l'historique utile.",
      },
      {
        title: "Vos systèmes ne se parlent pas",
        description:
          "API REST, webhooks, connecteurs : l'ERP, la facturation, la donnée et les outils métier arrêtent de se répondre par ressaisie. Interfaces versionnées et documentées, qu'une équipe interne ou un partenaire peut consommer.",
      },
      {
        title: "La donnée existe, personne ne l'exploite",
        description:
          "Modélisation, pipeline, qualité, entrepôt : une base relationnelle comme source de vérité, que les équipes interrogent elles-mêmes sans passer par un développeur.",
      },
      {
        title: "L'équipe refait les mêmes tâches",
        description:
          "Saisie, tri, relances, rapprochements : je les automatise, avec les règles métier écrites noir sur blanc plutôt qu'enfouies dans une tête.",
      },
      {
        title: "L'IA peut prendre une partie du système",
        description:
          "Des agents branchés sur vos données et vos outils, avec les règles métier explicites et une validation humaine là où une décision se prend. Je les fais tourner sur mes propres systèmes avant de les proposer.",
      },
    ],
  },
  projects: {
    kicker: "Projets",
    heading: "Du prototype à la production.",
    items: [
      {
        title: "Rosa Agri",
        stage: "Produit personnel · en développement",
        role: "Conçu et développé seul",
        description:
          "Jumeau numérique d'exploitation agricole : parcelles, itinéraires techniques, décisions de production, traçabilité. Le sujet est la chaîne de données : Postgres comme source de vérité, n8n pour l'orchestration, un agent qui normalise et enrichit les entrées avec leur provenance et un niveau de confiance, et une validation humaine avant publication.",
        tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "n8n"],
      },
      {
        title: "Système d'appels IA",
        stage: "Arise Travel · prototype",
        role: "Ingénieur senior, deux implémentations",
        description:
          "Les réservations d'hôtel se prenaient au téléphone, un humain par appel. Prototype de standard automatisé, de la première phrase à la réservation confirmée, sans opérateur. Deux implémentations explorées : composants open source, puis API. L'orchestration portait le risque : latence par tour de parole, reprise sur erreur, dashboard temps réel, déploiement conteneurisé.",
        tags: ["FastAPI", "React", "OpenAI", "Deepgram", "Kubernetes"],
      },
      {
        title: "Réseau décentralisé de réservation",
        stage: "Arise Travel · arrêté avec la startup",
        role: "Conception et implémentation",
        description:
          "Les réservations passaient par des intermédiaires, et chaque couche ajoutait ses erreurs de prix. Réseau privé Hyperledger Fabric : smart contracts pour la logique de réservation et registre distribué entre les organisations participantes, sans intermédiaire pour retraduire les tarifs.",
        tags: ["Hyperledger Fabric", "Blockchain", "Smart contracts"],
      },
      {
        title: "Digitalisation d'opérations",
        priority: 2,
        stage: "Clients · en production",
        role: "Modules sur mesure, connecteurs, reprise des données",
        description:
          "Des PME et une équipe agricole sur des tableurs ou des logiciels qui ne suivaient pas leur processus. Migration vers un ERP cadré sur leur façon de travailler : modules sur mesure, connecteurs avec les outils existants, reprise de l'historique. Ce qui décide du succès, c'est la reprise des données et l'adoption par les équipes.",
        tags: ["Odoo", "Python", "PostgreSQL", "Automatisation"],
      },
      {
        title: "Hermes Agent",
        stage: "Mes propres systèmes · usage quotidien",
        role: "Conçu et exploité par moi",
        description:
          "Hermes tourne sur mes systèmes plutôt que sur une démo : normalisation des données entrantes, veille de sources, préparation de déploiements, relecture de code. Chaque workflow suit la même chaîne : outils, données, règles métier explicites, validation humaine quand une décision est engagée, puis action. La même mécanique se branche sur les processus d'une entreprise.",
        tags: ["Agents IA", "MCP", "Python", "Automatisation"],
      },
      {
        title: "Scircula",
        priority: 1,
        stage: "Startup · 2020-2022",
        role: "Co-fondateur & CTO",
        description:
          "Le fit vestimentaire en ligne : les mesures d'un vêtement rapprochées de celles du client pour réduire les retours. Deux ans à construire le produit, l'équipe et le go-to-market avec une co-fondatrice sud-africaine. Le pari a buté sur la fiabilité des mesures et sur des marques difficiles à convaincre ; l'aventure s'est arrêtée en 2022.",
        tags: ["React", "Django", "PyTorch", "Shopify"],
      },
    ],
  },
  experience: {
    kicker: "Parcours",
    heading: "Quinze ans à livrer.",
    items: [
      {
        role: "Ingénieur Data & Développeur full-stack",
        company: "Mycophyto",
        period: "2024 — Présent",
        location: "Grasse, France",
        description:
          "Pipeline de données, entrepôt et API qui alimentent les applications internes : les questions des équipes agronomes deviennent des outils qu'elles utilisent tous les jours. Intégré à l'ERP.",
        tags: ["Data", "PostgreSQL", "Odoo", "Full-stack", "Agritech"],
      },
      {
        role: "Ingénieur Full Stack Senior",
        company: "Arise Travel",
        period: "2022 — 2024",
        location: "À distance · San Francisco, USA",
        description:
          "Prototype de standard téléphonique par IA et réseau privé Hyperledger Fabric pour la réservation d'hôtel, deux implémentations du standard. Dashboard temps réel, conteneurs orchestrés.",
        tags: ["Python", "FastAPI", "TypeScript", "Kubernetes", "OpenAI", "AWS"],
      },
      {
        role: "Co-fondateur & CTO",
        company: "Scircula",
        period: "2020 — 2022",
        location: "À distance · Amsterdam, Pays-Bas",
        description:
          "Roadmap produit, architecture, recrutement et code, jusqu'à la fin de l'aventure.",
        tags: ["Python", "Django", "Next.js", "React", "AWS"],
      },
      {
        role: "Ingénieur Backend Senior",
        company: "Knap",
        period: "2018 — 2020",
        location: "Nice, France",
        description:
          "Backend d'un caddie connecté : API REST, middlewares, packaging embarqué, CI/CD et exploitation serveur.",
        tags: ["JavaScript", "Node.js", "PostgreSQL", "Linux"],
      },
      {
        role: "Développeur Backend",
        company: "Meta Information Technology",
        period: "2016 — 2017",
        location: "Biarritz, France",
        description:
          "Intégration d'ERP chez des PME : modules sur mesure, connecteurs, API RESTful. C'est là que la digitalisation des opérations a commencé pour moi.",
        tags: ["Python", "Django", "Odoo", "PostgreSQL"],
      },
      {
        role: "Développeur Backend et Mobile",
        company: "Izargolf",
        period: "2012 — 2015",
        location: "Biarritz, France",
        description:
          "Applications web et mobiles pour golfeurs, de la logique métier aux API REST et aux applications iOS et Android ; coordination des sous-traitants électroniques.",
        tags: ["PHP", "Symfony", "PostgreSQL", "iOS", "Android"],
      },
    ],
  },
  tools: {
    kicker: "Outils",
    heading: "Ce que j'utilise, couche par couche",
    groups: [
      { title: "Digitalisation & ERP", items: ["Odoo", "Python", "n8n"] },
      { title: "Backend & API", items: ["TypeScript", "Node.js", "NestJS", "FastAPI", "Django", "GraphQL"] },
      { title: "Données", items: ["PostgreSQL", "dbt", "Prefect", "Airbyte", "SQL"] },
      { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
      { title: "Infra & delivery", items: ["Docker", "Kubernetes", "AWS", "GitLab CI/CD", "Linux"] },
      { title: "IA & agents", items: ["Hermes Agent", "MCP", "OpenAI", "OpenRouter", "Anthropic"] },
    ],
  },
  collaboration: {
    kicker: "Collaboration",
    heading: "Les systèmes que je construis, reprends ou fiabilise.",
    items: [
      {
        title: "Construire un nouveau système",
        description:
          "Un problème métier à transformer en produit ou en outil : cadrage, architecture, développement et mise en production. Le bon système avant la bonne stack.",
      },
      {
        title: "Reprendre un projet qui patine",
        description:
          "Un projet existe déjà, mais les décisions, la dette ou la livraison le ralentissent. Je cartographie l'existant, tranche les priorités et remets une trajectoire de livraison en place.",
      },
      {
        title: "Fiabiliser un produit existant",
        description:
          "Code fragile, dépendances risquées, flux mal compris ou dette qui empêche d'avancer : je sécurise l'essentiel et je refactore sans bloquer l'activité.",
      },
    ],
    problems: {
      label: "Types de problèmes que je prends",
      items: [
        "Digitalisation métier",
        "Produits complexes",
        "Systèmes data-heavy",
        "Architecture",
        "Reprise de projet",
        "Refactoring & fiabilisation",
        "Automatisation",
        "IA & agents",
      ],
    },
  },
  contact: {
    kicker: "Contact",
    titleA: "Parlons du",
    titleB: "problème",
    intro:
      "Décrivez la situation en quelques lignes : ce qui coince, ce qui tourne encore à la main, ce que vous n'arrivez pas à trancher. Je réponds avec ma lecture du problème et la première chose que je construirais.",
    availability:
      "Je prends peu de missions à la fois. Mission freelance, CTO fractionné ou founding engineer : pour construire, reprendre ou fiabiliser un système qui vaut l'effort technique. antoine@andrieu.me",
    ctaPrimary: "Discutons",
    alt: "Antoine Andrieu assis, souriant, en col roulé beige.",
  },
  footer: {
    writeMe: "Écrivez-moi",
    backToTop: "Retour en haut",
    rights: "2026 · Tous droits réservés.",
    availability: "Construire · Reprendre · Fiabiliser",
    footerAria: "Pied de page",
    linksAria: "Liens de contact",
  },
};

export const en: HomeContent = {
  lang: "en",
  home: "/en",
  otherLang: { lang: "fr", href: "/", label: "FR", aria: "Version française" },
  skipLink: "Skip to content",
  header: {
    brandAria: "Antoine Andrieu — Home",
    nav: [
      ["about", "About"],
      ["expertise", "Expertise"],
      ["projects", "Projects"],
      ["experience", "Experience"],
      ["collaborer", "Work together"],
    ],
    contactCta: "Start a conversation",
    contactAria: "Start a conversation about your project",
    mobileLabel: "Explore",
    mobileContact: "Start a conversation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    eyebrow: "Product engineer · Hands-on CTO · Founding engineer",
    titleA: "From business problem",
    titleB: "to a system",
    titleCPrefix: "in ",
    titleCAccent: "production",
    description:
      "I take a subject from wherever it stands: an unclear business problem, a stalled project, or a product that has become fragile. I clarify what matters, build or take it over, then bring it under control in production. 15 years of engineering, 5 of them in early-stage.",
    ctaPrimary: "See what I built",
    ctaSecondary: "How we can work together",
    badge: "A new system, a project to take over, or a product to make reliable.",
    alt: "Antoine Andrieu, in a white t-shirt, looking at the camera, tattoos visible.",
  },
  trustedKicker: "I built at",
  about: {
    kicker: "About",
    captionRole: "Product engineer & hands-on CTO",
    alt: "Antoine Andrieu smiling, in a black t-shirt, arms crossed.",
    statement: "I turn uncertainty into reliable systems.",
    paragraphs: [
      "I start from the real work: how the operation runs, who decides, where information gets lost and which rules live only in people's heads. I turn that into product decisions, an architecture, a data model and code. Then I stay until the system runs — or take over what exists until the team can rely on it again.",
      "For fifteen years, the thread has been the same: understand an operation, make the problem legible, then build or make reliable the system that carries it. Today, at Mycophyto, I work on the data pipelines, warehouse and APIs that feed internal applications. Before that: senior engineer remotely at Arise Travel, based in San Francisco, co-founder and CTO remotely at Scircula, based in Amsterdam, then backend roles at Knap, Meta IT and Izargolf. That work has been in English, with teams in the United States, the Netherlands, South Africa and Brazil.",
      "I do not start from a specification document. To understand a business, I need to speak with the people doing the work as well as the people making the decisions. That is where the real trade-offs are.",
    ],
  },
  expertise: {
    kicker: "Expertise",
    heading: "The situations I get called in for.",
    items: [
      {
        title: "Operations run on spreadsheets",
        description:
          "I map the real process, then choose the right approach: adapt an ERP such as Odoo when it provides the right foundation, or build a custom full-stack product when the business calls for it. In both cases, the system follows how teams work and carries across useful history.",
      },
      {
        title: "Your systems don't talk to each other",
        description:
          "REST APIs, webhooks, connectors: the ERP, billing, data and business tools stop answering each other through re-keying. Versioned, documented interfaces an internal team or a partner can consume.",
      },
      {
        title: "The data exists, nobody uses it",
        description:
          "Modeling, pipelines, quality, warehouse: a relational database as the source of truth, which the teams query themselves without going through a developer.",
      },
      {
        title: "The team repeats the same manual work",
        description:
          "Data entry, sorting, follow-ups, reconciliations: I automate them, with the business rules written down instead of stored in someone's head.",
      },
      {
        title: "AI can take over part of the system",
        description:
          "Agents wired into your data and your tools, with explicit business rules and human validation where a decision is taken. I run them on my own systems before offering them.",
      },
    ],
  },
  projects: {
    kicker: "Projects",
    heading: "From prototype to production.",
    items: [
      {
        title: "Rosa Agri",
        stage: "Personal product · in development",
        role: "Designed and built alone",
        description:
          "Digital twin of a farm: plots, technical itineraries, production decisions, traceability. The work is the data chain: Postgres as the source of truth, n8n orchestrating, an agent normalizing and enriching incoming data with its provenance and a confidence level, and human validation before publication.",
        tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "n8n"],
      },
      {
        title: "AI call system",
        stage: "Arise Travel · prototype",
        role: "Senior engineer, two implementations",
        description:
          "Hotel bookings came in by phone, one human per call. Prototype of an automated switchboard, from the first sentence to the confirmed booking, with no operator. Two implementations explored: open-source components, then an API. Orchestration carried the risk: latency per turn, error recovery, real-time dashboard, containerized deployment.",
        tags: ["FastAPI", "React", "OpenAI", "Deepgram", "Kubernetes"],
      },
      {
        title: "Decentralized booking network",
        stage: "Arise Travel · shut down with the startup",
        role: "Design and implementation",
        description:
          "Bookings went through intermediaries, and every layer added its own price errors. Private Hyperledger Fabric network: smart contracts for the booking logic and a distributed ledger shared across the participating organizations, with no intermediary re-translating the rates.",
        tags: ["Hyperledger Fabric", "Blockchain", "Smart contracts"],
      },
      {
        title: "Operations digitalization",
        priority: 2,
        stage: "Clients · in production",
        role: "Custom modules, connectors, data migration",
        description:
          "SMEs and a farm team on spreadsheets or on software that did not match how they worked. Migration to an ERP shaped around their process: custom modules, connectors to existing tools, history migrated. Success comes down to the data migration and whether the team adopts it.",
        tags: ["Odoo", "Python", "PostgreSQL", "Automation"],
      },
      {
        title: "Hermes Agent",
        stage: "My own systems · daily use",
        role: "Built and operated by me",
        description:
          "Hermes runs on my systems rather than in a demo: normalizing incoming data, watching sources, preparing deployments, reviewing code. Every workflow follows the same chain: tools, data, explicit business rules, human validation where a decision is at stake, then action. The same mechanics plug into a company's processes.",
        tags: ["AI agents", "MCP", "Python", "Automation"],
      },
      {
        title: "Scircula",
        priority: 1,
        stage: "Startup · 2020-2022",
        role: "Co-founder & CTO",
        description:
          "Online garment fit: matching a garment's measurements to the customer's to cut returns. Two years building the product, the team and the go-to-market with a South African co-founder. The bet ran into unreliable measurements and fashion brands that were hard to sell; the company stopped in 2022.",
        tags: ["React", "Django", "PyTorch", "Shopify"],
      },
    ],
  },
  experience: {
    kicker: "Experience",
    heading: "Fifteen years of shipping.",
    items: [
      {
        role: "Data Engineer & Full-Stack Developer",
        company: "Mycophyto",
        period: "2024 — Present",
        location: "Grasse, France",
        description:
          "Data pipeline, warehouse and APIs feeding the internal applications: the agronomy teams' questions become tools they use every day. Integrated with the ERP.",
        tags: ["Data", "PostgreSQL", "Odoo", "Full-stack", "Agritech"],
      },
      {
        role: "Senior Full-Stack Engineer",
        company: "Arise Travel",
        period: "2022 — 2024",
        location: "Remote · San Francisco, USA",
        description:
          "AI switchboard prototype and a private Hyperledger Fabric network for hotel bookings, two implementations of the switchboard. Real-time dashboard, container orchestration.",
        tags: ["Python", "FastAPI", "TypeScript", "Kubernetes", "OpenAI", "AWS"],
      },
      {
        role: "Co-founder & CTO",
        company: "Scircula",
        period: "2020 — 2022",
        location: "Remote · Amsterdam, Netherlands",
        description:
          "Product roadmap, architecture, hiring and code, through to the end of the adventure.",
        tags: ["Python", "Django", "Next.js", "React", "AWS"],
      },
      {
        role: "Senior Backend Engineer",
        company: "Knap",
        period: "2018 — 2020",
        location: "Nice, France",
        description:
          "Backend for a connected shopping cart: REST API, middlewares, embedded packaging, CI/CD and server operations.",
        tags: ["JavaScript", "Node.js", "PostgreSQL", "Linux"],
      },
      {
        role: "Backend Developer",
        company: "Meta Information Technology",
        period: "2016 — 2017",
        location: "Biarritz, France",
        description:
          "ERP integration at SMEs: custom modules, connectors, RESTful APIs. This is where operations digitalization started for me.",
        tags: ["Python", "Django", "Odoo", "PostgreSQL"],
      },
      {
        role: "Backend & Mobile Developer",
        company: "Izargolf",
        period: "2012 — 2015",
        location: "Biarritz, France",
        description:
          "Web and mobile apps for golfers, from business logic to REST APIs and iOS and Android apps; coordinated the electronics contractors.",
        tags: ["PHP", "Symfony", "PostgreSQL", "iOS", "Android"],
      },
    ],
  },
  tools: {
    kicker: "Tools",
    heading: "What I use, layer by layer",
    groups: [
      { title: "Digitalization & ERP", items: ["Odoo", "Python", "n8n"] },
      { title: "Backend & API", items: ["TypeScript", "Node.js", "NestJS", "FastAPI", "Django", "GraphQL"] },
      { title: "Data", items: ["PostgreSQL", "dbt", "Prefect", "Airbyte", "SQL"] },
      { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
      { title: "Infra & delivery", items: ["Docker", "Kubernetes", "AWS", "GitLab CI/CD", "Linux"] },
      { title: "AI & agents", items: ["Hermes Agent", "MCP", "OpenAI", "OpenRouter", "Anthropic"] },
    ],
  },
  collaboration: {
    kicker: "Working together",
    heading: "The systems I build, take over, or make reliable.",
    items: [
      {
        title: "Build a new system",
        description:
          "A business problem to turn into a product or tool: scoping, architecture, development and production. The right system before the right stack.",
      },
      {
        title: "Take over a stalled project",
        description:
          "A project already exists, but decisions, technical debt or delivery are slowing it down. I map the existing system, set priorities and restore a delivery path.",
      },
      {
        title: "Make an existing product reliable",
        description:
          "Fragile code, risky dependencies, poorly understood flows or debt that prevents progress: I secure what matters and refactor without stopping the business.",
      },
    ],
    problems: {
      label: "Problems I take on",
      items: [
        "Business digitalization",
        "Complex products",
        "Data-heavy systems",
        "Architecture",
        "Project takeover",
        "Refactoring & reliability",
        "Automation",
        "AI & agents",
      ],
    },
  },
  contact: {
    kicker: "Contact",
    titleA: "Let's talk about",
    titleB: "the problem",
    intro:
      "Describe the situation in a few lines: what is stuck, what is still done by hand, what you cannot decide. I reply with how I read the problem and the first thing I would build.",
    availability:
      "I take few engagements at a time. Freelance engagement, fractional CTO or founding engineer: to build, take over or make reliable a system worth the technical effort. antoine@andrieu.me",
    ctaPrimary: "Start a conversation",
    alt: "Antoine Andrieu seated, smiling, in a beige turtleneck.",
  },
  footer: {
    writeMe: "Write me",
    backToTop: "Back to top",
    rights: "2026 · All rights reserved.",
    availability: "Build · Take over · Make reliable",
    footerAria: "Footer",
    linksAria: "Contact links",
  },
};
