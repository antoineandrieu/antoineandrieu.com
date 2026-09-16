import { Portrait } from "@/components/portrait";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const jobs = [
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
];

const projects = [
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
];

const expertise = [
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
];

const collaboration = [
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
];

const tools = [
  {
    title: "Digitalisation & ERP",
    items: ["Odoo", "Python", "n8n"],
  },
  {
    title: "Backend & API",
    items: ["TypeScript", "Node.js", "NestJS", "FastAPI", "Django", "GraphQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Données",
    items: ["PostgreSQL", "Prisma", "dbt", "SQL"],
  },
  {
    title: "Infra & delivery",
    items: ["Docker", "Kubernetes", "AWS", "GitLab CI/CD", "Linux"],
  },
  {
    title: "IA & agents",
    items: ["Hermes Agent", "MCP", "OpenAI", "Deepgram", "Whisper"],
  },
];

const companies = [
  "Mycophyto",
  "Arise Travel",
  "Scircula",
  "Knap",
  "Meta IT",
  "Izargolf",
];

export default function Home() {
  return (
    <main id="main" className="min-h-screen">
      <a href="#content" className="skip-link">Aller au contenu</a>
      <SiteHeader />

      {/* The landscape composition and mobile crop share one picture request. */}
      <section id="content" className="hero border-b border-[#e2e0d9]">
        <div className="hero-stage">
          <div className="hero-copy">
            <p className="hero-eyebrow">Product engineer · Hands-on CTO · Founding engineer</p>
            <h1 className="display hero-title">
              Je conçois,<br />je construis,<br />je <span className="text-accent">livre.</span>
            </h1>
            <p className="hero-description text-muted-site">
              J&apos;arrive avant les specs : je discute le besoin, j&apos;arbitre ce qui mérite
              d&apos;être construit, puis je livre moi-même. 15 ans d&apos;ingénierie, dont 5 en
              early-stage : digitalisation des opérations, architecture et API, donnée, agents IA.
            </p>
            <div className="hero-actions flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">Voir ce que je construis <span aria-hidden>↗</span></a>
              <a href="#collaborer" className="btn-secondary">Comment travailler ensemble</a>
            </div>
            <p className="badge-available"><span className="dot" aria-hidden />Disponible en freelance, CTO fractionné ou founding engineer</p>
          </div>
          <Portrait name="hero" className="hero-photo" alt="Antoine Andrieu, en t-shirt blanc, regard caméra et tatouages visibles." />
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-10 border-b border-[#e2e0d9]">
        <div className="container-site">
          <p className="kicker !mb-6">Ils m&apos;ont fait confiance</p>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
            {companies.map((name) => (
              <span key={name} className="trusted-name text-2xl md:text-4xl">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-pad border-b border-[#e2e0d9]">
        <div className="container-site">
          <p className="kicker">À propos</p>
          <div className="about-grid">
            <figure className="about-portrait">
              <Portrait name="about" alt="Antoine Andrieu souriant, en t-shirt noir, les bras croisés." />
              <figcaption>Antoine Andrieu <span>Product engineer & CTO hands-on</span></figcaption>
            </figure>
            <div className="about-copy">
              <h2 className="statement text-4xl md:text-6xl mb-8">
                Décider et construire, dans la même personne.
              </h2>
              <div className="space-y-6 text-lg text-muted-site leading-relaxed">
                <p>Ingénieur data chez Mycophyto, où je construis la pipeline de données,
                  le data warehouse et les API qui alimentent les applications internes.
                  Avant : ingénieur senior à San Francisco chez Arise Travel, co-fondateur
                  et CTO de Scircula avec une co-fondatrice sud-africaine, ingénieur backend
                  chez Knap et Izargolf.</p>
                <p>Quinze ans à travailler en anglais, à distance, avec des équipes aux
                  États-Unis, aux Pays-Bas et en Afrique du Sud. Le décalage horaire change
                  la façon de spécifier et de livrer : tout s&apos;écrit, rien ne se rattrape
                  à l&apos;oral.</p>
                <p>Mon intérêt va aux problèmes qui n&apos;ont pas encore de forme logicielle :
                  un processus qui vit dans un tableur, une décision prise à l&apos;intuition faute
                  de données, une équipe qui perd des heures sur des tâches qu&apos;un agent peut
                  prendre en charge. Je commence par le modèle économique, j&apos;arbitre ce qui
                  mérite d&apos;être construit, puis j&apos;ouvre l&apos;éditeur et je le construis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="section-pad border-b border-[#e2e0d9]">
        <div className="container-site">
          <p className="kicker">Expertise</p>
          <h2 className="statement text-4xl md:text-6xl mb-14 max-w-3xl">
            Du processus métier au système, puis à l&apos;automatisation
          </h2>
          <div className="border-b border-[#e2e0d9]">
            {expertise.map((item, i) => (
              <div key={item.title} className="row-item">
                <p className="row-index">0{i + 1}</p>
                <h3 className="display text-2xl md:text-3xl">{item.title}</h3>
                <p className="text-muted-site leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-pad border-b border-[#e2e0d9]">
        <div className="container-site">
          <p className="kicker">Projets</p>
          <h2 className="statement text-4xl md:text-6xl mb-14">
            Des systèmes en production
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div key={project.title} className="project-entry py-8">
                <p className="row-index text-lg mb-6">0{i + 1}</p>
                <h3 className="display text-3xl mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-site leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="tech-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section-pad border-b border-[#e2e0d9]">
        <div className="container-site">
          <p className="kicker">Parcours</p>
          <h2 className="statement text-4xl md:text-6xl mb-14">Quinze ans à livrer</h2>
          <div className="border-b border-[#e2e0d9]">
            {jobs.map((job) => (
              <div key={job.company} className="row-item">
                <p className="row-index">{job.period}</p>
                <div>
                  <h3 className="display text-2xl md:text-3xl">
                    {job.company}
                  </h3>
                  <p className="text-sm font-medium mt-1">{job.role}</p>
                  <p className="text-sm text-muted-site">{job.location}</p>
                </div>
                <div>
                  <p className="text-muted-site leading-relaxed mb-4">
                    {job.description}
                  </p>
                  <div className="tech-list">
                    {job.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outils */}
      <section id="outils" className="section-pad border-b border-[#e2e0d9]">
        <div className="container-site">
          <p className="kicker">Outils</p>
          <h2 className="display text-2xl md:text-3xl mb-10">
            Ce que j&apos;utilise, couche par couche
          </h2>
          <div className="tools-grid">
            {tools.map((group) => (
              <div key={group.title} className="tool-group">
                <h3>{group.title}</h3>
                <div className="tech-list">
                  {group.items.map((tool) => (
                    <span key={tool} className="chip">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section id="collaborer" className="section-pad border-b border-[#e2e0d9]">
        <div className="container-site">
          <p className="kicker">Collaboration</p>
          <h2 className="statement text-4xl md:text-6xl mb-14 max-w-3xl">
            Comment on peut travailler ensemble
          </h2>
          <div className="border-b border-[#e2e0d9]">
            {collaboration.map((item, i) => (
              <div key={item.title} className="row-item">
                <p className="row-index">0{i + 1}</p>
                <h3 className="display text-2xl md:text-3xl">{item.title}</h3>
                <p className="text-muted-site leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-pad">
        <div className="container-site contact-grid">
          <Portrait name="contact" className="contact-portrait" alt="Antoine Andrieu assis, souriant, en col roulé beige." />
          <div>
            <p className="kicker">Contact</p>
            <h2 className="display text-[clamp(3.5rem,7vw,6.5rem)] mb-8">
              Parlons du
              <br />
              problème
            </h2>
            <p className="text-xl text-muted-site max-w-2xl mb-6">
              Un processus à digitaliser, une architecture à trancher, un produit à sortir,
              des données à exploiter, des agents à brancher sur votre métier. Écrivez-moi
              quelques lignes de contexte : je réponds avec ma lecture du problème et une
              première piste.
            </p>
            <p className="text-base text-muted-site max-w-2xl mb-10">
              Ouvert au freelance, au CTO fractionné et aux rôles de founding engineer, sur
              des produits qui ont un intérêt technique et business. antoine@andrieu.me
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:antoine@andrieu.me" className="btn-primary">
                Décrire votre problème <span aria-hidden>↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/antoineand"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
