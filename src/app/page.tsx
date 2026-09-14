import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050410]/80 backdrop-blur-md border-b border-[#1e195a]">
        <div className="container-site flex items-center justify-between h-16">
          <Link href="/" className="font-heading font-bold text-lg tracking-tight">
            AA
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
      <section className="section-pad pt-40">
        <div className="container-site">
          <p className="kicker">Full-Stack Engineer & Entrepreneur</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Antoine
            <br />
            Andrieu
          </h1>
          <p className="text-xl md:text-2xl text-[#85c0ff] max-w-2xl leading-relaxed">
            Je transforme la vision business en produits concrets et performants.
            À la croisée de la stratégie, de la donnée et de la technique.
          </p>
          <div className="mt-12 flex gap-4">
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
      <section id="about" className="section-pad bg-[#0d0b1e]">
        <div className="container-site">
          <p className="kicker">À propos</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
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
            {[
              "Vision produit",
              "Analyse business",
              "Structuration technique",
              "Exécution rapide",
            ].map((item) => (
              <div
                key={item}
                className="p-6 border border-[#1e195a] rounded-lg hover:border-[#85c0ff] transition-colors"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section-pad">
        <div className="container-site">
          <p className="kicker">Expérience</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Parcours</h2>
          <div className="space-y-8">
            {[
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
            ].map((job) => (
              <div
                key={job.company}
                className="p-8 border border-[#1e195a] rounded-lg hover:border-[#85c0ff] transition-colors"
              >
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
      <section id="projects" className="section-pad bg-[#0d0b1e]">
        <div className="container-site">
          <p className="kicker">Projets</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Projets significatifs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
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
            ].map((project) => (
              <div
                key={project.title}
                className="p-8 border border-[#1e195a] rounded-lg hover:border-[#85c0ff] transition-colors group"
              >
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
      <section id="contact" className="section-pad">
        <div className="container-site text-center">
          <p className="kicker">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Travaillons ensemble
          </h2>
          <p className="text-xl text-[#85c0ff] max-w-2xl mx-auto mb-12">
            Vous avez un projet, une idée, ou besoin d'un regard neuf sur votre
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
