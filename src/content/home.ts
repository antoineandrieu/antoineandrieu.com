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
  collaboration: { kicker: string; heading: string; items: Line[] };
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
    contactCta: "Parlons produit",
    contactAria: "Parlons de votre produit",
    mobileLabel: "Explorer",
    mobileContact: "Parlons de votre produit",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
  },
  hero: {
    eyebrow: "Product engineer · Hands-on CTO · Founding engineer",
    titleA: "Je conçois,",
    titleB: "je construis,",
    titleCPrefix: "je ",
    titleCAccent: "livre.",
    description:
      "J'arrive avant les specs : je discute le besoin, j'arbitre ce qui mérite d'être construit, puis je livre moi-même. 15 ans d'ingénierie, dont 5 en early-stage : digitalisation des opérations, architecture et API, donnée, agents IA.",
    ctaPrimary: "Voir ce que je construis",
    ctaSecondary: "Comment travailler ensemble",
    badge: "Disponible en freelance, CTO fractionné ou founding engineer",
    alt: "Antoine Andrieu, en t-shirt blanc, regard caméra et tatouages visibles.",
  },
  trustedKicker: "Ils m'ont fait confiance",
  about: {
    kicker: "À propos",
    captionRole: "Product engineer & CTO hands-on",
    alt: "Antoine Andrieu souriant, en t-shirt noir, les bras croisés.",
    statement: "Décider et construire, dans la même personne.",
    paragraphs: [
      "Ingénieur data chez Mycophyto, où je construis la pipeline de données, le data warehouse et les API qui alimentent les applications internes. Avant : ingénieur senior à San Francisco chez Arise Travel, co-fondateur et CTO de Scircula avec une co-fondatrice sud-africaine, ingénieur backend chez Knap et Izargolf.",
      "Quinze ans à travailler en anglais, à distance, avec des équipes aux États-Unis, aux Pays-Bas et en Afrique du Sud. Le décalage horaire change la façon de spécifier et de livrer : tout s'écrit, rien ne se rattrape à l'oral.",
      "Mon intérêt va aux problèmes qui n'ont pas encore de forme logicielle : un processus qui vit dans un tableur, une décision prise à l'intuition faute de données, une équipe qui perd des heures sur des tâches qu'un agent peut prendre en charge. Je commence par le modèle économique, j'arbitre ce qui mérite d'être construit, puis j'ouvre l'éditeur et je le construis.",
    ],
  },
  expertise: {
    kicker: "Expertise",
    heading: "Du processus métier au système, puis à l'automatisation",
    items: [
      {
        title: "Digitaliser les opérations",
        description:
          "Un ERP qui suit le processus réel de l'entreprise : modules sur mesure, connecteurs avec vos outils, reprise des données. La digitalisation commence par la cartographie du métier, pas par l'installation d'un logiciel.",
      },
      {
        title: "Concevoir le système",
        description:
          "Architecture backend, API, modèle de données, CI/CD, coût d'infrastructure. Des choix assumés et documentés, tenables dans trois ans, jamais une pile de frameworks à la mode.",
      },
      {
        title: "Brancher les systèmes entre eux",
        description:
          "API REST et GraphQL, webhooks, connecteurs : faire dialoguer l'ERP, la facturation, les données et les outils métier sans ressaisie. Documenté, versionné, consommable par un produit, un partenaire ou une équipe interne.",
      },
      {
        title: "Tenir la donnée",
        description:
          "Une base relationnelle comme source de vérité : modélisation, pipelines, qualité, exploitation. Un entrepôt que les équipes interrogent sans passer par un développeur.",
      },
      {
        title: "Étendre avec l'IA",
        description:
          "Agents et workflows qui reprennent la saisie, le tri, la relance, la normalisation. Utilisés au quotidien sur mes propres systèmes, branchés sur des processus métier réels, avec validation humaine aux points de décision.",
      },
    ],
  },
  projects: {
    kicker: "Projets",
    heading: "Des systèmes en production",
    items: [
      {
        title: "Rosa Agri",
        description:
          "Jumeau numérique d'exploitation agricole : parcelles, itinéraires techniques, décisions de production et traçabilité. La donnée du terrain devient la source de vérité partagée par toute l'équipe.",
        tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
      },
      {
        title: "Digitalisation d'opérations",
        description:
          "Des PME et une équipe agricole passées du tableur à un ERP qui suit leur vrai processus : modules sur mesure, connecteurs avec les outils existants, reprise de l'historique.",
        tags: ["Odoo", "Python", "PostgreSQL", "Automatisation"],
      },
      {
        title: "Système d'appels IA",
        description:
          "Conversation téléphonique automatisée pour les réservations hôtelières : deux versions, une en composants open source, une via API. Du premier mot à la réservation confirmée, sans passer par un standard.",
        tags: ["FastAPI", "React", "OpenAI", "Deepgram", "Kubernetes"],
      },
      {
        title: "Hermes Agent en production",
        description:
          "Agents autonomes branchés sur mes propres systèmes : normalisation de données, veille, déploiements, revue de code. La même mécanique se branche sur des processus métier, avec validation humaine aux décisions.",
        tags: ["Agents IA", "MCP", "Python", "Automatisation"],
      },
      {
        title: "Scircula",
        description:
          "SaaS B2B2C de fit vestimentaire : les mesures d'un vêtement rapprochées de celles du client pour réduire les retours. Co-fondateur et CTO, du premier schéma de base de données aux premières marques clientes.",
        tags: ["React", "Django", "PyTorch", "Shopify"],
      },
    ],
  },
  experience: {
    kicker: "Parcours",
    heading: "Quinze ans à livrer",
    items: [
      {
        role: "Ingénieur Data & Développeur full-stack",
        company: "Mycophyto",
        period: "2024 — Présent",
        location: "Grasse, France",
        description:
          "Pipeline de données et data warehouse pour l'agritech, applications métier internes, intégration de l'ERP. Partir des questions des équipes agronomes et livrer les outils qui y répondent.",
        tags: ["Data", "PostgreSQL", "Odoo", "Full-stack", "Agritech"],
      },
      {
        role: "Ingénieur Full Stack Senior",
        company: "Arise Travel",
        period: "2022 — 2024",
        location: "San Francisco, USA",
        description:
          "Système d'appels téléphoniques automatisé par IA générative pour gérer les réservations d'hôtels. Deux versions livrées : composants open source, puis API. Dashboard temps réel, orchestration de conteneurs, smart contracts sur une blockchain privée.",
        tags: ["Python", "FastAPI", "TypeScript", "Kubernetes", "OpenAI", "Deepgram", "AWS"],
      },
      {
        role: "Co-fondateur & CTO",
        company: "Scircula",
        period: "2020 — 2022",
        location: "Amsterdam, Pays-Bas",
        description:
          "SaaS de fit vestimentaire pour marques de mode : roadmap produit, architecture, recrutement de l'équipe, et le code. Deux ans à construire, vendre, et porter la dette technique jusqu'à la fin de l'aventure.",
        tags: ["Python", "Django", "Next.js", "React", "AWS"],
      },
      {
        role: "Ingénieur Backend Senior",
        company: "Knap",
        period: "2018 — 2020",
        location: "Nice, France",
        description:
          "Backend d'un caddie connecté : API REST et middlewares, packaging pour les systèmes embarqués, pipeline CI/CD, exploitation serveur.",
        tags: ["JavaScript", "Node.js", "PostgreSQL", "GitLab CI/CD", "Linux"],
      },
      {
        role: "Développeur Backend",
        company: "Meta Information Technology",
        period: "2016 — 2017",
        location: "Biarritz, Nouvelle-Aquitaine, France",
        description:
          "Intégration d'un ERP chez des PME : modules sur mesure, connecteurs avec les outils existants, API RESTful. Première exposition complète à la digitalisation des opérations.",
        tags: ["Python", "Django", "Odoo", "PostgreSQL", "Pytest", "GitLab CI/CD"],
      },
      {
        role: "Développeur Backend et Mobile",
        company: "Izargolf",
        period: "2012 — 2015",
        location: "Biarritz, Nouvelle-Aquitaine, France",
        description:
          "Applications web et mobiles pour golfeurs : traduction de la logique métier en API RESTful, applications iOS et Android, suivi des mouvements et des scores. Coordination des sous-traitants en charge de l'électronique.",
        tags: ["PHP", "Symfony", "PostgreSQL", "Java", "NeoMAD", "iOS", "Android"],
      },
    ],
  },
  tools: {
    kicker: "Outils",
    heading: "Ce que j'utilise, couche par couche",
    groups: [
      { title: "Digitalisation & ERP", items: ["Odoo", "Python", "n8n"] },
      { title: "Backend & API", items: ["TypeScript", "Node.js", "NestJS", "FastAPI", "Django", "GraphQL"] },
      { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
      { title: "Données", items: ["PostgreSQL", "Prisma", "dbt", "SQL"] },
      { title: "Infra & delivery", items: ["Docker", "Kubernetes", "AWS", "GitLab CI/CD", "Linux"] },
      { title: "IA & agents", items: ["Hermes Agent", "MCP", "OpenAI", "Deepgram", "Whisper"] },
    ],
  },
  collaboration: {
    kicker: "Collaboration",
    heading: "Comment on peut travailler ensemble",
    items: [
      {
        title: "Mission freelance",
        description:
          "Un problème métier à transformer en système : cadrage, architecture, implémentation, mise en production. Périmètre écrit et livrables qui tournent.",
      },
      {
        title: "CTO fractionné",
        description:
          "Un produit et une équipe, pas encore de direction technique. Je prends les décisions d'architecture, la roadmap technique et le recrutement, et je code avec l'équipe.",
      },
      {
        title: "Founding engineer",
        description:
          "Early-stage : tout est à construire et le temps manque. Du premier schéma de base de données aux premiers utilisateurs, en passant par les arbitrages produit.",
      },
      {
        title: "De la digitalisation à l'IA",
        description:
          "Des opérations pilotées dans des tableurs et des décisions prises à l'intuition. Je cartographie, j'automatise, puis je confie aux agents ce qui reste répétitif.",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    titleA: "Parlons du",
    titleB: "problème",
    intro:
      "Un processus à digitaliser, une architecture à trancher, un produit à sortir, des données à exploiter, des agents à brancher sur votre métier. Écrivez-moi quelques lignes de contexte : je réponds avec ma lecture du problème et une première piste.",
    availability:
      "Ouvert au freelance, au CTO fractionné et aux rôles de founding engineer, sur des produits qui ont un intérêt technique et business. antoine@andrieu.me",
    ctaPrimary: "Décrire votre problème",
    alt: "Antoine Andrieu assis, souriant, en col roulé beige.",
  },
  footer: {
    writeMe: "Écrivez-moi",
    backToTop: "Retour en haut",
    rights: "2026 · Tous droits réservés.",
    availability: "Freelance · CTO fractionné · Founding engineer",
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
    contactCta: "Let's talk",
    contactAria: "Let's talk about your product",
    mobileLabel: "Explore",
    mobileContact: "Let's talk about your product",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    eyebrow: "Product engineer · Hands-on CTO · Founding engineer",
    titleA: "I design,",
    titleB: "I build,",
    titleCPrefix: "I ",
    titleCAccent: "ship.",
    description:
      "I arrive before the specs: I listen to the need, decide what is worth building, then ship it myself. 15 years of engineering, 5 of them in early-stage: operations digitalization, architecture and APIs, data, AI agents.",
    ctaPrimary: "See what I build",
    ctaSecondary: "How we can work together",
    badge: "Available for freelance, fractional CTO or founding engineer roles",
    alt: "Antoine Andrieu, in a white t-shirt, looking at the camera, tattoos visible.",
  },
  trustedKicker: "Trusted by",
  about: {
    kicker: "About",
    captionRole: "Product engineer & hands-on CTO",
    alt: "Antoine Andrieu smiling, in a black t-shirt, arms crossed.",
    statement: "Deciding and building, in the same person.",
    paragraphs: [
      "Data engineer at Mycophyto, where I build the data pipeline, the data warehouse and the APIs that feed the internal applications. Before that: senior engineer in San Francisco at Arise Travel, co-founder and CTO of Scircula with a South African co-founder, backend engineer at Knap and Izargolf.",
      "Fifteen years working in English, remotely, with teams in the United States, the Netherlands and South Africa. Time zones change how you specify and deliver: everything gets written down, nothing gets fixed in a hallway chat.",
      "I am drawn to problems that do not have a software shape yet: a process living in a spreadsheet, a decision made on gut feeling for lack of data, a team losing hours on tasks an agent could take over. I start from the business model, decide what is worth building, then open the editor and build it.",
    ],
  },
  expertise: {
    kicker: "Expertise",
    heading: "From business process to system, then to automation",
    items: [
      {
        title: "Digitalize operations",
        description:
          "An ERP that follows the company's real process: custom modules, connectors to your tools, data migration. Digitalization starts with mapping the business, not with installing software.",
      },
      {
        title: "Design the system",
        description:
          "Backend architecture, APIs, data model, CI/CD, infrastructure cost. Deliberate, documented choices that still hold in three years, never a pile of trendy frameworks.",
      },
      {
        title: "Wire systems together",
        description:
          "REST and GraphQL APIs, webhooks, connectors: making the ERP, billing, data and business tools talk without re-keying. Documented, versioned, consumable by a product, a partner or an internal team.",
      },
      {
        title: "Own the data",
        description:
          "A relational database as the source of truth: modeling, pipelines, quality, operations. A warehouse teams can query without going through a developer.",
      },
      {
        title: "Extend with AI",
        description:
          "Agents and workflows that take over data entry, sorting, follow-ups, normalization. Used daily on my own systems, wired into real business processes, with human validation at decision points.",
      },
    ],
  },
  projects: {
    kicker: "Projects",
    heading: "Systems in production",
    items: [
      {
        title: "Rosa Agri",
        description:
          "Digital twin of a farm: plots, technical itineraries, production decisions and traceability. Field data becomes the source of truth shared by the whole team.",
        tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
      },
      {
        title: "Operations digitalization",
        description:
          "SMEs and a farm team moved from spreadsheets to an ERP that follows their real process: custom modules, connectors to existing tools, history migration.",
        tags: ["Odoo", "Python", "PostgreSQL", "Automatisation"],
      },
      {
        title: "AI call system",
        description:
          "Automated phone conversation for hotel bookings: two versions shipped, one as open-source components, one via API. From the first word to the confirmed booking, no front desk involved.",
        tags: ["FastAPI", "React", "OpenAI", "Deepgram", "Kubernetes"],
      },
      {
        title: "Hermes Agent in production",
        description:
          "Autonomous agents wired into my own systems: data normalization, monitoring, deployments, code review. The same mechanics plug into business processes, with human validation on decisions.",
        tags: ["Agents IA", "MCP", "Python", "Automatisation"],
      },
      {
        title: "Scircula",
        description:
          "B2B2C garment-fit SaaS: matching a garment's measurements with the customer's to cut returns. Co-founder and CTO, from the first database schema to the first client brands.",
        tags: ["React", "Django", "PyTorch", "Shopify"],
      },
    ],
  },
  experience: {
    kicker: "Experience",
    heading: "Fifteen years of shipping",
    items: [
      {
        role: "Data Engineer & Full-Stack Developer",
        company: "Mycophyto",
        period: "2024 — Present",
        location: "Grasse, France",
        description:
          "Data pipeline and data warehouse for agritech, internal business applications, ERP integration. Start from the agronomy teams' questions and ship the tools that answer them.",
        tags: ["Data", "PostgreSQL", "Odoo", "Full-stack", "Agritech"],
      },
      {
        role: "Senior Full-Stack Engineer",
        company: "Arise Travel",
        period: "2022 — 2024",
        location: "San Francisco, USA",
        description:
          "Generative-AI automated phone call system to handle hotel bookings. Two versions shipped: open-source components, then API. Real-time dashboard, container orchestration, smart contracts on a private blockchain.",
        tags: ["Python", "FastAPI", "TypeScript", "Kubernetes", "OpenAI", "Deepgram", "AWS"],
      },
      {
        role: "Co-founder & CTO",
        company: "Scircula",
        period: "2020 — 2022",
        location: "Amsterdam, Netherlands",
        description:
          "Garment-fit SaaS for fashion brands: product roadmap, architecture, team hiring, and the code. Two years building, selling, and carrying the technical debt until the end of the adventure.",
        tags: ["Python", "Django", "Next.js", "React", "AWS"],
      },
      {
        role: "Senior Backend Engineer",
        company: "Knap",
        period: "2018 — 2020",
        location: "Nice, France",
        description:
          "Backend for a connected shopping cart: REST API and middlewares, packaging for embedded systems, CI/CD pipeline, server operations.",
        tags: ["JavaScript", "Node.js", "PostgreSQL", "GitLab CI/CD", "Linux"],
      },
      {
        role: "Backend Developer",
        company: "Meta Information Technology",
        period: "2016 — 2017",
        location: "Biarritz, France",
        description:
          "ERP integration at SMEs: custom modules, connectors to existing tools, RESTful APIs. First full exposure to operations digitalization.",
        tags: ["Python", "Django", "Odoo", "PostgreSQL", "Pytest", "GitLab CI/CD"],
      },
      {
        role: "Backend & Mobile Developer",
        company: "Izargolf",
        period: "2012 — 2015",
        location: "Biarritz, France",
        description:
          "Web and mobile apps for golfers: business logic translated into RESTful APIs, iOS and Android apps, swing and score tracking. Coordinated the contractors in charge of the electronics.",
        tags: ["PHP", "Symfony", "PostgreSQL", "Java", "NeoMAD", "iOS", "Android"],
      },
    ],
  },
  tools: {
    kicker: "Tools",
    heading: "What I use, layer by layer",
    groups: [
      { title: "Digitalization & ERP", items: ["Odoo", "Python", "n8n"] },
      { title: "Backend & API", items: ["TypeScript", "Node.js", "NestJS", "FastAPI", "Django", "GraphQL"] },
      { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
      { title: "Data", items: ["PostgreSQL", "Prisma", "dbt", "SQL"] },
      { title: "Infra & delivery", items: ["Docker", "Kubernetes", "AWS", "GitLab CI/CD", "Linux"] },
      { title: "AI & agents", items: ["Hermes Agent", "MCP", "OpenAI", "Deepgram", "Whisper"] },
    ],
  },
  collaboration: {
    kicker: "Working together",
    heading: "How we can work together",
    items: [
      {
        title: "Freelance engagement",
        description:
          "A business problem to turn into a system: scoping, architecture, implementation, production. Written scope and deliverables that run.",
      },
      {
        title: "Fractional CTO",
        description:
          "A product and a team, no technical leadership yet. I take the architecture decisions, the technical roadmap and the hiring, and I code with the team.",
      },
      {
        title: "Founding engineer",
        description:
          "Early-stage: everything is to build and time is short. From the first database schema to the first users, through the product trade-offs.",
      },
      {
        title: "From digitalization to AI",
        description:
          "Operations run in spreadsheets and decisions made on intuition. I map, I automate, then I hand what is still repetitive to agents.",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    titleA: "Let's talk about",
    titleB: "the problem",
    intro:
      "A process to digitalize, an architecture to decide, a product to ship, data to exploit, agents to wire into your business. Write me a few lines of context: I reply with my reading of the problem and a first lead.",
    availability:
      "Open to freelance, fractional CTO and founding engineer roles, on products with real technical and business interest. antoine@andrieu.me",
    ctaPrimary: "Describe your problem",
    alt: "Antoine Andrieu seated, smiling, in a beige turtleneck.",
  },
  footer: {
    writeMe: "Write me",
    backToTop: "Back to top",
    rights: "2026 · All rights reserved.",
    availability: "Freelance · Fractional CTO · Founding engineer",
    footerAria: "Footer",
    linksAria: "Contact links",
  },
};
