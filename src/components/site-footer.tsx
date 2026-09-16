export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Pied de page">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-intro">
            <span className="footer-mark" aria-hidden="true">✳</span>
            <p>Senior full-stack engineer<br />& entrepreneur</p>
          </div>
          <nav className="footer-links" aria-label="Liens de contact">
            <a href="mailto:antoine@andrieu.me">Écrivez-moi <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/antoineand" target="_blank" rel="noopener noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </nav>
          <a href="#main" className="footer-back">
            <span>Retour en haut</span>
            <span className="footer-back-icon" aria-hidden="true"><span>↑</span></span>
          </a>
        </div>
        <p className="footer-wordmark" aria-label="Antoine Andrieu">
          <span>Antoine</span>{" "}<span>Andrieu<span className="footer-period">.</span></span>
        </p>
        <div className="footer-bottom">
          <p>2026 · Tous droits réservés.</p>
          <p className="footer-availability"><span aria-hidden="true" />Disponible pour de nouvelles missions</p>
        </div>
      </div>
    </footer>
  );
}
