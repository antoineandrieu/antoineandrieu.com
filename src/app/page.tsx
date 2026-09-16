import Link from "next/link";
import { Portrait } from "@/components/portrait";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const jobs = [
  {
    role: "Ingénieur Data | Développeur full-stack",
    company: "Mycophyto",
    period: "2024 — Présent",
    location: "Grasse, France",
    description:
      "Création et maintenance de la pipeline data et du data warehouse. Création d'applications web spécialisées. Intégration de l'ERP Odoo.",
    tags: ["Data", "Full-stack", "Odoo", "Agritech"],
  },
  {
    role: "Ingénieur Full Stack Senior",
    company: "Arise Travel",
    period: "2022 — 2024",
    location: "San Francisco, USA",
    description:
      "Système de conversation téléphonique automatisé avec IA générative. Architecture décentralisée et smart contracts. API GraphQL complexe pour blockchain Hyperledger.",
    tags: ["Node.js", "TypeScript", "Python", "AWS", "Kubernetes"],
  },
  {
    role: "Co-Founder & CTO",
    company: "Scircula",
    period: "2020 — 2022",
    location: "Amsterdam, Pays-Bas",
    description:
      "Fashion e-commerce fit via garment↔user measurements. Feuille de route produit, architecture technique, recrutement.",
    tags: ["Python", "Django", "Next.js", "React", "AWS"],
  },
  {
    role: "Ingénieur Backend Senior",
    company: "Knap",
    period: "2018 — 2020",
    location: "Nice, France",
    description:
      "Backend complexe avec API RESTful. Pipeline CI/CD. Système de packaging pour systèmes embarqués.",
    tags: ["Node.js", "GitLab CI/CD", "PostgreSQL"],
  },
];

const projects = [
  {
    title: "Rosa Agri",
    description:
      "Digital farm twin for crop production. Postgres/Prisma + NestJS + Next.js + Strapi.",
    tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
  },
  {
    title: "Système de conversation IA",
    description:
      "Système de conversation téléphonique automatisé utilisant l'IA générative pour Arise Travel.",
    tags: ["OpenAI", "Deepgram", "Node.js", "AWS"],
  },
  {
    title: "Architecture décentralisée",
    description:
      "Infrastructure décentralisée pour éliminer les intermédiaires entre hôtels et clients.",
    tags: ["Blockchain", "Smart Contracts", "GraphQL"],
  },
  {
    title: "Scircula",
    description:
      "Fashion e-commerce fit via garment↔user measurements. CTO et co-fondateur.",
    tags: ["React", "Django", "PyTorch", "Shopify"],
  },
];

const expertise = [
  {
    title: "Vision produit",
    description:
      "De l'idée à la roadmap : cadrage, priorisation et arbitrages pour construire le bon produit, pas juste un produit.",
  },
  {
    title: "Analyse business",
    description:
      "Compréhension du terrain et des enjeux métier avant toute ligne de code. La technique sert le business, jamais l'inverse.",
  },
  {
    title: "Structuration technique",
    description:
      "Architectures claires, données fiables, systèmes scalables et maintenables qui tiennent la route en production.",
  },
  {
    title: "Exécution rapide",
    description:
      "Livraison itérative, prototypes concrets et mise en production sans friction. La vitesse est une discipline.",
  },
];

const companies = ["Mycophyto", "Arise Travel", "Scircula", "Knap"];

export default function Home() {
  return (
    <main id="main" className="min-h-screen">
      <a href="#content" className="skip-link">Aller au contenu</a>
      <SiteHeader />

      {/* The landscape composition and mobile crop share one picture request. */}
      <section id="content" className="hero border-b border-[#e2e0d9]">
        <div className="hero-stage">
          <div className="hero-copy">
            <p className="hero-eyebrow">Senior full-stack engineer & entrepreneur</p>
            <h1 className="display hero-title">
              De la vision<br />business au<br />produit <span className="text-accent">concret.</span>
            </h1>
            <p className="hero-description text-muted-site">
              Je transforme les enjeux métier en produits concrets et performants,
              à la croisée de la stratégie, de la donnée et de la technique.
            </p>
            <div className="hero-actions flex flex-wrap gap-3">
              <Link href="#projects" className="btn-primary">Voir mes projets <span aria-hidden>↗</span></Link>
              <Link href="#about" className="btn-secondary">À propos</Link>
            </div>
            <p className="badge-available"><span className="dot" aria-hidden />Disponible pour de nouvelles missions</p>
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
              <figcaption>Antoine Andrieu <span>Ingénieur & entrepreneur</span></figcaption>
            </figure>
            <div className="about-copy">
              <h2 className="statement text-4xl md:text-6xl mb-8">
                De la vision business au produit concret — des solutions fiables,
                scalables et créatrices de valeur.
              </h2>
              <div className="space-y-6 text-lg text-muted-site leading-relaxed">
                <p>Ingénieur Data chez Mycophyto (Agritech), architecte systèmes et
                  développeur full-stack. Je conçois des solutions pour les secteurs
                  en transformation, avec un ancrage terrain fort.</p>
                <p>Mon approche : comprendre le terrain, structurer la donnée, et
                  concevoir des outils qui améliorent la performance tout en
                  soutenant la durabilité et la croissance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise — Frameblox numbered rows */}
      <section id="expertise" className="section-pad border-b border-[#e2e0d9]">
        <div className="container-site">
          <p className="kicker">Expertise</p>
          <h2 className="statement text-4xl md:text-6xl mb-14 max-w-3xl">
            Ce que j&apos;apporte à votre projet
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

      {/* Experience — awards-list style */}
      <section id="experience" className="section-pad border-b border-[#e2e0d9]">
        <div className="container-site">
          <p className="kicker">Expérience</p>
          <h2 className="statement text-4xl md:text-6xl mb-14">Parcours</h2>
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

      {/* Projects */}
      <section id="projects" className="section-pad border-b border-[#e2e0d9]">
        <div className="container-site">
          <p className="kicker">Projets</p>
          <h2 className="statement text-4xl md:text-6xl mb-14">
            Projets significatifs
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

      {/* Contact */}
      <section id="contact" className="section-pad">
        <div className="container-site contact-grid">
          <Portrait name="contact" className="contact-portrait" alt="Antoine Andrieu assis, souriant, en col roulé beige." />
          <div>
            <p className="kicker">Contact</p>
            <h2 className="display text-[clamp(3.5rem,7vw,6.5rem)] mb-8">
              Travaillons
              <br />
              ensemble
            </h2>
            <p className="text-xl text-muted-site max-w-2xl mb-10">
              Vous avez un projet, une idée, ou besoin d&apos;un regard neuf sur
              votre stack technique ? Discutons-en.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:antoine@andrieu.me" className="btn-primary">
                antoine@andrieu.me
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
