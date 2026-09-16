import Link from "next/link";

const jobs = [
  {
    role: "Ingénieur Data | Développeur full-stack",
    company: "MYCOPHYTO",
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
    company: "SCIRCULA",
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

const strengths = [
  "Vision produit",
  "Analyse business",
  "Structuration technique",
  "Exécution rapide",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050410]/80 backdrop-blur-md border-b border-[#1e195a]">
        <div className="container-site flex items-center justify-between h-16">
          <Link href="/" className="font-heading font-bold text-lg tracking-tight">
            AA<span className="text-[#c3f73a]">.</span>
          </Link>
          <div className="flex gap-8 text-sm">
            <Link href="#about" className="text-[#85c0ff] hover:text-white transition-colors">
              À propos
            </Link>
            <Link href="#experience" className="text-[#85c0ff] hover:text-white transition-colors">
              Expérience
            </Link>
            <Link href="#projects" className="text-[#85c0ff] hover:text-white transition-colors">
              Projets
            </Link>
            <Link href="#contact" className="text-[#85c0ff] hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative section-pad pt-40 bg-grid">
        <div
          aria-hidden
          className="glow-indigo pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[42rem] w-[42rem] rounded-full"
        />
        <div
          aria-hidden
          className="glow-accent pointer-events-none absolute top-32 -right-40 h-[28rem] w-[28rem] rounded-full"
        />
        <div className="container-site relative">
          <p className="kicker">Full-Stack Engineer & Entrepreneur</p>
          <h1 className="display text-[clamp(3.5rem,12vw,9rem)] mb-8">
            Antoine
            <br />
            <span className="text-[#c3f73a]">Andrieu</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#85c0ff] max-w-2xl leading-relaxed">
            Je transforme la vision business en produits concrets et performants.
            À la croisée de la stratégie, de la donnée et de la technique.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="px-8 py-4 bg-[#c3f73a] text-[#050410] font-semibold rounded-full hover:bg-[#85c0ff] transition-colors"
            >
              Me contacter
            </Link>
            <Link
              href="#projects"
              className="px-8 py-4 border border-[#1e195a] rounded-full hover:border-[#85c0ff] transition-colors"
            >
              Voir mes projets
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-pad bg-[#0d0b1e] border-y border-[#1e195a]">
        <div className="container-site">
          <p className="section-index">01</p>
          <p className="kicker">À propos</p>
          <h2 className="display text-4xl md:text-6xl mb-10">
            De la vision business au produit
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-lg text-[#85c0ff] leading-relaxed">
            <p>
              Ingénieur Data chez Mycophyto (Agritech), architecte systèmes et
              développeur full-stack. Je conçois des solutions fiables, scalables
              et créatrices de valeur, notamment dans les secteurs en
              transformation.
            </p>
            <p>
              Mon approche : comprendre le terrain, structurer la donnée, et
              concevoir des outils qui améliorent la performance tout en
              soutenant la durabilité et la croissance.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {strengths.map((item, i) => (
              <div key={item} className="card p-6">
                <p className="section-index mb-3">0{i + 1}</p>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section-pad">
        <div className="container-site">
          <p className="section-index">02</p>
          <p className="kicker">Expérience</p>
          <h2 className="display text-4xl md:text-6xl mb-14">Parcours</h2>
          <div className="space-y-8">
            {jobs.map((job) => (
              <div key={job.company} className="card p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <span className="text-[#85c0ff] text-sm">{job.period}</span>
                </div>
                <p className="text-[#c3f73a] font-medium mb-1">{job.company}</p>
                <p className="text-[#85c0ff] text-sm mb-4">{job.location}</p>
                <p className="text-[#85c0ff] leading-relaxed mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs border border-[#1e195a] rounded-full text-[#85c0ff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-pad bg-[#0d0b1e] border-y border-[#1e195a]">
        <div className="container-site">
          <p className="section-index">03</p>
          <p className="kicker">Projets</p>
          <h2 className="display text-4xl md:text-6xl mb-14">
            Projets significatifs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={project.title} className="card p-8 group">
                <div className="flex items-start justify-between mb-3">
                  <p className="section-index">0{i + 1}</p>
                  <span
                    aria-hidden
                    className="text-[#85c0ff] opacity-0 group-hover:opacity-100 group-hover:text-[#c3f73a] transition-all text-xl leading-none"
                  >
                    ↗
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#c3f73a] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#85c0ff] leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs border border-[#1e195a] rounded-full text-[#85c0ff]"
                    >
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
      <section id="contact" className="relative section-pad">
        <div
          aria-hidden
          className="glow-blue pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[36rem] w-[36rem] rounded-full"
        />
        <div className="container-site relative text-center">
          <p className="section-index">04</p>
          <p className="kicker justify-center">Contact</p>
          <h2 className="display text-5xl md:text-7xl mb-8">
            Travaillons
            <br />
            <span className="text-[#c3f73a]">ensemble</span>
          </h2>
          <p className="text-xl text-[#85c0ff] max-w-2xl mx-auto mb-12">
            Vous avez un projet, une idée, ou besoin d&apos;un regard neuf sur votre
            stack technique ? Discutons-en.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:antoine@andrieu.me"
              className="px-8 py-4 bg-[#c3f73a] text-[#050410] font-semibold rounded-full hover:bg-[#85c0ff] transition-colors"
            >
              antoine@andrieu.me
            </a>
            <a
              href="https://www.linkedin.com/in/antoineand"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#1e195a] rounded-full hover:border-[#85c0ff] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e195a] py-12">
        <div className="container-site flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#85c0ff] text-sm">
            © 2026 Antoine Andrieu. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="https://www.linkedin.com/in/antoineand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#85c0ff] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:antoine@andrieu.me"
              className="text-[#85c0ff] hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
