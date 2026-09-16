import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Pied de page">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-intro">
            <Logo variant="black" width={78} height={51} />
            <p>Product engineer, CTO hands-on<br />& founding engineer</p>
          </div>
          <nav className="footer-links" aria-label="Liens de contact">
            <a href="mailto:antoine@andrieu.me">Écrivez-moi <span aria-hidden="true">↗</span></a>
            <a href="https://github.com/antoineandrieu" target="_blank" rel="noopener noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href="https://x.com/antoineandrie" target="_blank" rel="noopener noreferrer">
              X / Twitter <span aria-hidden="true">↗</span>
            </a>
          </nav>
          <a href="#main" className="footer-back">
            <span>Retour en haut</span>
            <span className="footer-back-icon" aria-hidden="true"><span>↑</span></span>
          </a>
        </div>
        <p className="footer-wordmark">
          <span>Antoine</span><span>Andrieu<span className="footer-period">.</span></span>
        </p>
        <div className="footer-bottom">
          <p>2026 · Tous droits réservés.</p>
          <p className="footer-availability"><span aria-hidden="true" />Freelance · CTO fractionné · Founding engineer</p>
        </div>
      </div>
    </footer>
  );
}
