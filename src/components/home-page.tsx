import { Portrait } from "@/components/portrait";
import { SiteHeader, headerScript } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { companies, type HomeContent } from "@/content/home";
import type { ReactNode } from "react";

function EditorialHeading({ children, accent }: { children: string; accent: string }): ReactNode {
  const start = children.toLocaleLowerCase().indexOf(accent.toLocaleLowerCase());

  if (start < 0) return children;

  return (
    <>
      {children.slice(0, start)}
      <span className="heading-accent">{children.slice(start, start + accent.length)}</span>
      {children.slice(start + accent.length)}
    </>
  );
}

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
              {t.hero.titleCPrefix}<span className="title-accent">{t.hero.titleCAccent}</span>
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
          <p className="kicker !mb-6"><span className="kicker-index" aria-hidden="true">00</span><span>{t.trustedKicker}</span></p>
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
          <p className="kicker"><span className="kicker-index" aria-hidden="true">01</span><span>{t.about.kicker}</span></p>
          <div className="about-grid">
            <figure className="about-portrait">
              <Portrait name="about" alt={t.about.alt} />
              <figcaption>Antoine Andrieu <span>{t.about.captionRole}</span></figcaption>
            </figure>
            <div className="about-copy">
              <h2 className="statement text-4xl md:text-6xl mb-8">
                <EditorialHeading
                  accent={t.lang === "fr" ? "problèmes" : "problems"}
                >
                  {t.about.statement}
                </EditorialHeading>
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
          <p className="kicker"><span className="kicker-index" aria-hidden="true">02</span><span>{t.expertise.kicker}</span></p>
          <h2 className="statement text-4xl md:text-6xl mb-14 max-w-3xl">
            <EditorialHeading accent={t.lang === "fr" ? "situations" : "situations"}>{t.expertise.heading}</EditorialHeading>
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
          <p className="kicker"><span className="kicker-index" aria-hidden="true">03</span><span>{t.projects.kicker}</span></p>
          <h2 className="statement text-4xl md:text-6xl mb-14">
            <EditorialHeading accent="production">{t.projects.heading}</EditorialHeading>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[...t.projects.items]
              .sort((a, b) => (a.priority ?? Number.MAX_SAFE_INTEGER) - (b.priority ?? Number.MAX_SAFE_INTEGER))
              .map((project, i) => (
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
                <p className="border-l-2 border-[#2a5c4f] pl-4 text-sm leading-relaxed mb-6">
                  {project.delivery}
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
          <p className="kicker"><span className="kicker-index" aria-hidden="true">04</span><span>{t.experience.kicker}</span></p>
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
          <p className="kicker"><span className="kicker-index" aria-hidden="true">05</span><span>{t.tools.kicker}</span></p>
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
          <p className="kicker"><span className="kicker-index" aria-hidden="true">06</span><span>{t.collaboration.kicker}</span></p>
          <h2 className="statement text-4xl md:text-6xl mb-14 max-w-3xl">{t.collaboration.heading}</h2>
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
            <p className="kicker"><span className="kicker-index" aria-hidden="true">07</span><span>{t.contact.kicker}</span></p>
            <h2 className="display text-[clamp(3.5rem,7vw,6.5rem)] mb-8">
              {t.contact.titleA}
              <br />
              <EditorialHeading accent={t.lang === "fr" ? "problème" : "problem"}>
                {t.contact.titleB}
              </EditorialHeading>
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

      {/* Header interactions without hydrating React: the page ships no client component. */}
      <script dangerouslySetInnerHTML={{ __html: headerScript }} />
    </main>
  );
}
