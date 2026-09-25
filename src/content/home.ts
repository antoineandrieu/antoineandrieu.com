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
  /** Concise, scannable statement of the thing that was actually delivered. */
  delivery: string;
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
    introLineA: string;
    introLineB: string;
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
    eyebrow: "Ingénieur logiciel · Product Engineer",
    titleA: "Du problème métier",
    titleB: "au produit",
    titleCPrefix: "en ",
    titleCAccent: "production",
    description:
      "J'aide les startups, scale-ups et équipes produit à transformer un problème métier complexe en produit fiable : cadrage, architecture, développement et mise en production.",
    ctaPrimary: "Voir les produits que j'ai construits",
    ctaSecondary: "Mes interventions",
    badge: "Produits complexes · Full-stack · Data · Systèmes métier",
    alt: "Antoine Andrieu, en t-shirt blanc, regard caméra et tatouages visibles.",
  },
  trustedKicker: "J'ai construit chez",
  about: {
    kicker: "À propos",
    captionRole: "Ingénieur logiciel & Product Engineer",
    alt: "Antoine Andrieu souriant, en t-shirt noir, les bras croisés.",
    statement: "Je transforme les problèmes complexes en produits fiables.",
    paragraphs: [
      "Je pars du travail réel : comment l'activité fonctionne, qui décide, où l'information se perd et quelles règles restent dans les têtes. J'en fais des choix de produit, une architecture, un modèle de données et du code. Puis je reste jusqu'à ce que le produit tourne — ou je reprends l'existant jusqu'à ce que l'équipe puisse à nouveau s'y fier.",
      "Depuis quinze ans, le fil est le même : comprendre un problème métier, le rendre lisible, puis construire ou fiabiliser le produit qui le porte. Mon parcours traverse le voyage, le retail, la mode, les outils métier et l'agritech — un domaine dans lequel je souhaite continuer à construire, sans m'y limiter. Aujourd'hui, chez Mycophyto, je travaille sur les pipelines de données, l'entrepôt et les API qui alimentent les applications internes. Avant cela : ingénieur senior à distance chez Arise Travel, basée à San Francisco, cofondateur et CTO à distance de Scircula, basée à Amsterdam, puis des rôles backend chez Knap, Meta IT et Izargolf. J'ai l'habitude de travailler dans des environnements multiculturels, grâce à des collaborations avec des équipes réparties dans plusieurs pays.",
      "Je ne pars pas d'un cahier des charges. Pour comprendre un métier, j'ai besoin de parler à celles et ceux qui font le travail comme à celles et ceux qui prennent les décisions. C'est là que se trouvent les vrais arbitrages.",
    ],
  },
  expertise: {
    kicker: "Expertise",
    heading: "Les moments où le produit doit avancer.",
    items: [
      {
        title: "Il faut passer de l'idée au produit",
        description:
          "Un problème métier est clair, mais le produit n'existe pas encore. Je cadre ce qui compte, choisis une architecture adaptée et construis jusqu'à une première version réellement utilisable. Le bon produit avant la bonne stack.",
      },
      {
        title: "Le produit existe, mais n'avance plus",
        description:
          "La codebase, la dette ou des décisions reportées ralentissent l'équipe. Je cartographie l'existant, tranche les priorités et remets une trajectoire de livraison en place, sans réécrire pour le principe.",
      },
      {
        title: "Les systèmes ne suivent plus la croissance",
        description:
          "API, ERP, facturation, produit et outils internes ne se parlent plus, ou les données ne sont plus fiables. Je remets une source de vérité et des interfaces documentées là où l'équipe en a besoin.",
      },
      {
        title: "L'équipe refait trop de travail manuel",
        description:
          "Saisie, tri, relances, rapprochements : j'automatise ce qui ne doit pas dépendre d'une personne, avec des règles métier explicites et un contrôle humain quand une décision est engagée.",
      },
      {
        title: "L'IA doit résoudre un problème réel",
        description:
          "Je construis des agents branchés sur vos données et vos outils lorsqu'ils améliorent réellement un flux. Les règles métier restent explicites, et la validation humaine reste là où une décision compte.",
      },
    ],
  },
  projects: {
    kicker: "Projets",
    heading: "De l'idée à la production.",
    items: [
      {
        title: "Rosa Agri",
        stage: "Produit personnel · en développement",
        role: "Conçu et développé seul",
        description:
          "Un jumeau numérique d'exploitation agricole pour relier parcelles, itinéraires techniques, décisions de production et traçabilité. Je conçois la chaîne de données de bout en bout : Postgres comme source de vérité, n8n pour l'orchestration, un agent qui normalise et enrichit les entrées avec leur provenance et un niveau de confiance, puis une validation humaine avant publication.",
        delivery: "Une chaîne de données traçable, avec validation humaine avant qu'une information devienne une décision.",
        tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "n8n"],
      },
      {
        title: "Système d'appels IA",
        stage: "Arise Travel · prototype",
        role: "Ingénieur senior, deux implémentations",
        description:
          "Chez Arise Travel, les réservations d'hôtel se prenaient au téléphone, un humain par appel. J'ai construit un prototype de standard automatisé, de la première phrase à la réservation confirmée, sans opérateur. Deux approches ont été explorées — composants open source, puis API — avec le même enjeu : maîtriser la latence, la reprise sur erreur, le suivi temps réel et le déploiement conteneurisé.",
        delivery: "Un parcours de réservation téléphonique automatisé, supervisable en temps réel et déployable en conteneurs.",
        tags: ["FastAPI", "React", "OpenAI", "Deepgram", "Kubernetes"],
      },
      {
        title: "Réseau décentralisé de réservation",
        stage: "Arise Travel · arrêté avec la startup",
        role: "Conception et implémentation",
        description:
          "Les réservations passaient par des intermédiaires, et chaque couche ajoutait des erreurs de prix. J'ai conçu et implémenté un réseau privé Hyperledger Fabric : smart contracts pour la logique de réservation et registre partagé entre les organisations participantes, sans intermédiaire pour retraduire les tarifs.",
        delivery: "Une logique de réservation partagée entre organisations, sans couche intermédiaire de traduction des tarifs.",
        tags: ["Hyperledger Fabric", "Blockchain", "Smart contracts"],
      },
      {
        title: "Digitalisation d'opérations",
        priority: 2,
        stage: "Clients · en production",
        role: "Modules sur mesure, connecteurs, reprise des données",
        description:
          "Des PME et une équipe agricole travaillaient sur des tableurs ou des logiciels qui ne suivaient pas leur processus. J'ai transformé ces opérations en ERP utilisables au quotidien : modules sur mesure, connecteurs avec les outils existants et reprise de l'historique. Le travail ne s'arrête pas à l'outil : la migration des données et l'adoption par les équipes décident du résultat.",
        delivery: "Des opérations sorties des tableurs et reprises dans un ERP réellement utilisable par les équipes.",
        tags: ["Odoo", "Python", "PostgreSQL", "Automatisation"],
      },
      {
        title: "Hermes Agent",
        stage: "Mes propres systèmes · usage quotidien",
        role: "Conçu et exploité par moi",
        description:
          "Hermes tourne sur mes propres systèmes, pas dans une démo : normalisation des données entrantes, veille de sources, préparation de déploiements et relecture de code. Chaque workflow suit la même chaîne : outils, données, règles métier explicites, validation humaine lorsqu'une décision est engagée, puis action. Cette mécanique se branche sur les processus d'une entreprise.",
        delivery: "Des workflows utilisés au quotidien qui automatisent sans retirer les contrôles humains importants.",
        tags: ["Agents IA", "MCP", "Python", "Automatisation"],
      },
      {
        title: "Scircula",
        priority: 1,
        stage: "Startup · 2020-2022",
        role: "Co-fondateur & CTO",
        description:
          "Avec ma co-fondatrice, nous avons construit un produit de fit vestimentaire en ligne : rapprocher les mesures d'un vêtement de celles du client pour réduire les retours. Pendant deux ans, j'ai porté la roadmap, l'architecture, le recrutement et le développement, jusqu'au go-to-market. L'aventure s'est arrêtée en 2022 : la fiabilité des mesures et la vente aux marques restaient les verrous du modèle.",
        delivery: "Un produit de fit construit jusqu'au go-to-market, avec la roadmap, l'architecture et l'équipe technique portées de bout en bout.",
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
    heading: "Les produits que je construis, reprends ou fiabilise.",
    items: [
      {
        title: "Construire un produit de zéro",
        description:
          "Un problème métier à transformer en produit : cadrage, architecture, développement et mise en production. J'interviens là où il faut à la fois décider, construire et livrer.",
      },
      {
        title: "Reprendre un produit qui patine",
        description:
          "Un produit existe déjà, mais les décisions, la dette ou la livraison le ralentissent. Je cartographie l'existant, tranche les priorités et remets une trajectoire de livraison en place.",
      },
      {
        title: "Fiabiliser un produit en croissance",
        description:
          "Code fragile, dépendances risquées, flux mal compris ou dette qui empêche d'avancer : je sécurise l'essentiel et je fais évoluer le produit sans bloquer l'activité.",
      },
    ],
    problems: {
      label: "Ce sur quoi j'interviens",
      items: [
        "Produit 0→1",
        "Startups & scale-ups",
        "SaaS & produits B2B",
        "Agritech (affinité)",
        "Architecture & API",
        "Systèmes data",
        "Reprise de projet",
        "Automatisation & IA",
      ],
    },
  },
  contact: {
    kicker: "Contact",
    titleA: "Parlons du",
    titleB: "problème",
    intro:
      "Décrivez le produit à construire, le système qui freine votre équipe ou la décision technique bloquée. Je réponds avec ma lecture du problème et la première chose que je construirais.",
    availability:
      "Échange confidentiel possible pour construire, reprendre ou fiabiliser un produit ou un système. antoine@andrieu.me",
    ctaPrimary: "Discutons",
    alt: "Antoine Andrieu assis, souriant, en col roulé beige.",
  },
  footer: {
    introLineA: "Ingénieur logiciel",
    introLineB: "& Product Engineer",
    writeMe: "Écrivez-moi",
    backToTop: "Retour en haut",
    rights: "2026 · Tous droits réservés.",
    availability: "Concevoir · Construire · Fiabiliser",
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
    eyebrow: "Software engineer · Product Engineer",
    titleA: "From business problem",
    titleB: "to a product",
    titleCPrefix: "in ",
    titleCAccent: "production",
    description:
      "I help startups, scale-ups and product teams turn complex business problems into reliable products: scoping, architecture, development and production.",
    ctaPrimary: "See the products I built",
    ctaSecondary: "How I can help",
    badge: "Complex products · Full-stack · Data · Business systems",
    alt: "Antoine Andrieu, in a white t-shirt, looking at the camera, tattoos visible.",
  },
  trustedKicker: "I built at",
  about: {
    kicker: "About",
    captionRole: "Software engineer & Product Engineer",
    alt: "Antoine Andrieu smiling, in a black t-shirt, arms crossed.",
    statement: "I turn complex problems into reliable products.",
    paragraphs: [
      "I start from the real work: how the operation runs, who decides, where information gets lost and which rules live only in people's heads. I turn that into product decisions, an architecture, a data model and code. Then I stay until the product works — or take over what exists until the team can rely on it again.",
      "For fifteen years, the thread has been the same: understand a business problem, make it legible, then build or make reliable the product that carries it. My work spans travel, retail, fashion, business tools and agritech — a field I am particularly drawn to, without limiting my work to it. Today, at Mycophyto, I work on the data pipelines, warehouse and APIs that feed internal applications. Before that: senior engineer remotely at Arise Travel, based in San Francisco, co-founder and CTO remotely at Scircula, based in Amsterdam, then backend roles at Knap, Meta IT and Izargolf. I am used to working in multicultural environments, through collaborations with teams across several countries.",
      "I do not start from a specification document. To understand a business, I need to speak with the people doing the work as well as the people making the decisions. That is where the real trade-offs are.",
    ],
  },
  expertise: {
    kicker: "Expertise",
    heading: "The moments when the product needs to move.",
    items: [
      {
        title: "An idea needs to become a product",
        description:
          "The business problem is clear, but the product does not exist yet. I scope what matters, choose an architecture that fits and build through to a first version people can genuinely use. The right product before the right stack.",
      },
      {
        title: "The product exists, but has stopped moving",
        description:
          "The codebase, technical debt or deferred decisions are slowing the team down. I map the existing system, set priorities and restore a delivery path without rewriting for its own sake.",
      },
      {
        title: "The systems no longer support growth",
        description:
          "APIs, ERP, billing, product and internal tools no longer work together, or the data is no longer reliable. I restore a source of truth and documented interfaces where the team needs them.",
      },
      {
        title: "The team repeats too much manual work",
        description:
          "Data entry, sorting, follow-ups, reconciliations: I automate what should not depend on one person, with explicit business rules and human oversight whenever a decision is involved.",
      },
      {
        title: "AI needs to solve a real problem",
        description:
          "I build agents connected to your data and tools when they genuinely improve a workflow. Business rules stay explicit, and human validation stays where a decision matters.",
      },
    ],
  },
  projects: {
    kicker: "Projects",
    heading: "From idea to production.",
    items: [
      {
        title: "Rosa Agri",
        stage: "Personal product · in development",
        role: "Designed and built alone",
        description:
          "A digital twin for a farm, connecting plots, technical itineraries, production decisions and traceability. I am designing the data chain end to end: Postgres as the source of truth, n8n for orchestration, an agent that normalizes and enriches incoming data with its provenance and confidence level, then human validation before publication.",
        delivery: "A traceable data chain, with human validation before information becomes a decision.",
        tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "n8n"],
      },
      {
        title: "AI call system",
        stage: "Arise Travel · prototype",
        role: "Senior engineer, two implementations",
        description:
          "At Arise Travel, hotel bookings came in by phone, one person per call. I built a prototype automated switchboard, from the first sentence to a confirmed booking, without an operator. We explored two approaches — open-source components, then an API — with the same challenge: controlling latency, error recovery, real-time monitoring and containerized deployment.",
        delivery: "An automated phone-booking flow, monitorable in real time and deployable in containers.",
        tags: ["FastAPI", "React", "OpenAI", "Deepgram", "Kubernetes"],
      },
      {
        title: "Decentralized booking network",
        stage: "Arise Travel · shut down with the startup",
        role: "Design and implementation",
        description:
          "Bookings went through intermediaries, and every layer introduced price errors. I designed and implemented a private Hyperledger Fabric network: smart contracts for booking logic and a shared ledger between participating organizations, without an intermediary re-translating rates.",
        delivery: "Shared booking logic between organizations, without an intermediary layer translating rates.",
        tags: ["Hyperledger Fabric", "Blockchain", "Smart contracts"],
      },
      {
        title: "Operations digitalization",
        priority: 2,
        stage: "Clients · in production",
        role: "Custom modules, connectors, data migration",
        description:
          "SMEs and a farm team were working with spreadsheets or software that did not match their process. I turned those operations into ERP systems teams could use every day: custom modules, connectors to existing tools and migrated history. The work does not stop at the software: the data migration and team adoption determine the result.",
        delivery: "Operations moved out of spreadsheets and into ERP systems teams could genuinely use every day.",
        tags: ["Odoo", "Python", "PostgreSQL", "Automation"],
      },
      {
        title: "Hermes Agent",
        stage: "My own systems · daily use",
        role: "Built and operated by me",
        description:
          "Hermes runs on my own systems, not in a demo: normalizing incoming data, watching sources, preparing deployments and reviewing code. Every workflow follows the same chain: tools, data, explicit business rules, human validation where a decision is at stake, then action. This same mechanism plugs into a company's processes.",
        delivery: "Daily workflows that automate useful work without removing meaningful human controls.",
        tags: ["AI agents", "MCP", "Python", "Automation"],
      },
      {
        title: "Scircula",
        priority: 1,
        stage: "Startup · 2020-2022",
        role: "Co-founder & CTO",
        description:
          "With my co-founder, we built an online garment-fit product: matching a garment's measurements to a customer's to reduce returns. For two years, I owned the roadmap, architecture, hiring and development through to go-to-market. The company stopped in 2022: reliable measurements and selling to fashion brands remained the model's constraints.",
        delivery: "A garment-fit product built through to go-to-market, with the roadmap, architecture and engineering team owned end to end.",
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
    heading: "The products I build, take over, or make reliable.",
    items: [
      {
        title: "Build a product from scratch",
        description:
          "A business problem to turn into a product: scoping, architecture, development and production. I step in where decisions, building and delivery all need to happen.",
      },
      {
        title: "Take over a stalled product",
        description:
          "A product already exists, but decisions, technical debt or delivery are slowing it down. I map the existing system, set priorities and restore a delivery path.",
      },
      {
        title: "Make a growing product reliable",
        description:
          "Fragile code, risky dependencies, poorly understood flows or debt that prevents progress: I secure what matters and evolve the product without stopping the business.",
      },
    ],
    problems: {
      label: "Where I can help",
      items: [
        "0→1 product",
        "Startups & scale-ups",
        "SaaS & B2B products",
        "Agritech (a focus)",
        "Architecture & APIs",
        "Data systems",
        "Product takeover",
        "Automation & applied AI",
      ],
    },
  },
  contact: {
    kicker: "Contact",
    titleA: "Let's talk about",
    titleB: "the problem",
    intro:
      "Describe the product you need to build, the system slowing your team down, or the technical decision that is blocked. I reply with how I read the problem and the first thing I would build.",
    availability:
      "Confidential conversations welcome to build, take over or make a product or system reliable. antoine@andrieu.me",
    ctaPrimary: "Start a conversation",
    alt: "Antoine Andrieu seated, smiling, in a beige turtleneck.",
  },
  footer: {
    introLineA: "Software engineer",
    introLineB: "& Product Engineer",
    writeMe: "Write me",
    backToTop: "Back to top",
    rights: "2026 · All rights reserved.",
    availability: "Design · Build · Make reliable",
    footerAria: "Footer",
    linksAria: "Contact links",
  },
};
