import { Logo } from "./logo";
import type { HomeContent } from "@/content/home";

export function SiteFooter({ t }: { t: HomeContent }) {
  return (
    <footer className="site-footer" aria-label={t.footer.footerAria}>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-intro">
            <Logo variant="black" width={78} height={51} />
            <p>{t.footer.introLineA}<br />{t.footer.introLineB}</p>
          </div>
          <nav className="footer-links" aria-label={t.footer.linksAria}>
            <a href="mailto:antoine@andrieu.me">{t.footer.writeMe} <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/antoineand" target="_blank" rel="noopener noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/antoineandrieu" target="_blank" rel="noopener noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href="https://x.com/antoineandrie" target="_blank" rel="noopener noreferrer">
              X / Twitter <span aria-hidden="true">↗</span>
            </a>
          </nav>
          <a href="#main" className="footer-back">
            <span>{t.footer.backToTop}</span>
            <span className="footer-back-icon" aria-hidden="true"><span>↑</span></span>
          </a>
        </div>
        <p className="footer-wordmark">
          <span>Antoine</span><span>Andrieu</span>
        </p>
        <div className="footer-bottom">
          <p>{t.footer.rights}</p>
          <p className="footer-availability"><span aria-hidden="true" />{t.footer.availability}</p>
        </div>
      </div>
    </footer>
  );
}
