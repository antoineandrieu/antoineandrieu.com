import { Portrait } from "@/components/portrait";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { companies, type HomeContent } from "@/content/home";

export function HomePage({ t }: { t: HomeContent }) {
  return (
    <main id="main" className="min-h-screen">
      <a href="#content" className="skip-link">{t.skipLink}</a>
      <SiteHeader t={t} />

      {/* The landscape composition and mobile crop share one picture request. */}
      <section id="content" className="hero border-b border-[#e2e0d9]">
        <div className="hero-stage">
          <div className="hero-copy">
            <p className="hero-eyebrow">{t.hero.eyebrow}</p>
            <h1 className="display hero-title">
              {t.hero.titleA}<br />{t.hero.titleB}<br />
              {t.hero.titleCPrefix}<span className="text-accent">{t.hero.titleCAccent}</span>
            </h1>
            <p className="hero-description text-muted-site">
              {t.hero.description}
            </p>
            <div className="hero-actions flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">{t.hero.ctaPrimary} <span aria-hidden>↗</span></a>
              <a href="#collaborer" className="btn-secondary">{t.hero.ctaSecondary}</a>
            </div>
            <p className="badge-available"><span className="dot" aria-hidden />{t.hero.badge}</p>
          </div>
          <Portrait name="hero" className="hero-photo" alt={t.hero.alt} />
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-10 border-b border-[#e2e0d9]">
        <div className="container-site">
          <p className="kicker !mb-6">{t.trustedKicker}</p>
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
          <p className="kicker">{t.about.kicker}</p>
          <div className="about-grid">
            <figure className="about-portrait">
              <Portrait name="about" alt={t.about.alt} />
              <figcaption>Antoine Andrieu <span>{t.about.captionRole}</span></figcaption>
            </figure>
            <div className="about-copy">
              <h2 className="statement text-4xl md:text-6xl mb-8">
                {t.about.statement}
              </h2>
              <div className="space-y-6 text-lg text-muted-site leading-relaxed">
                {t.about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="section-pad border-b border-[#e2e0d9]">
        <div className="container-site">
          <p className="kicker">{t.expertise.kicker}</p>
          <h2 className="statement text-4xl md:text-6xl mb-14 max-w-3xl">
            {t.expertise.heading}
          </h2>
          <div className="border-b border-[#e2e0d9]">
            {t.expertise.items.map((item, i) => (
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
          <p className="kicker">{t.projects.kicker}</p>
          <h2 className="statement text-4xl md:text-6xl mb-14">
            {t.projects.heading}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.projects.items.map((project, i) => (
              <div key={project.title} className="project-entry py-8">
                <p className="row-index text-lg mb-6">0{i + 1}</p>
                <p className="project-stage">{project.stage}</p>
                <h3 className="display text-3xl mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-medium mb-4">{project.role}</p>
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
          <p className="kicker">{t.experience.kicker}</p>
          <h2 className="statement text-4xl md:text-6xl mb-14">{t.experience.heading}</h2>
          <div className="border-b border-[#e2e0d9]">
            {t.experience.items.map((job) => (
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
          <p className="kicker">{t.tools.kicker}</p>
          <h2 className="display text-2xl md:text-3xl mb-10">
            {t.tools.heading}
          </h2>
          <div className="tools-grid">
            {t.tools.groups.map((group) => (
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
          <p className="kicker">{t.collaboration.kicker}</p>
          <h2 className="statement text-4xl md:text-6xl mb-14 max-w-3xl">
            {t.collaboration.heading}
          </h2>
          <div className="border-b border-[#e2e0d9]">
            {t.collaboration.items.map((item, i) => (
              <div key={item.title} className="row-item">
                <p className="row-index">0{i + 1}</p>
                <h3 className="display text-2xl md:text-3xl">{item.title}</h3>
                <p className="text-muted-site leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <p className="text-sm font-medium mb-4">{t.collaboration.problems.label}</p>
            <div className="tech-list">
              {t.collaboration.problems.items.map((problem) => (
                <span key={problem} className="chip">
                  {problem}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-pad">
        <div className="container-site contact-grid">
          <Portrait name="contact" className="contact-portrait" alt={t.contact.alt} />
          <div>
            <p className="kicker">{t.contact.kicker}</p>
            <h2 className="display text-[clamp(3.5rem,7vw,6.5rem)] mb-8">
              {t.contact.titleA}
              <br />
              {t.contact.titleB}
            </h2>
            <p className="text-xl text-muted-site max-w-2xl mb-6">
              {t.contact.intro}
            </p>
            <p className="text-base text-muted-site max-w-2xl mb-10">
              {t.contact.availability}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:antoine@andrieu.me" className="btn-primary">
                {t.contact.ctaPrimary} <span aria-hidden>↗</span>
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

      <SiteFooter t={t} />
    </main>
  );
}
