import './Footer.css';

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <span className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              Vedant Sagare
              <span className="footer__logo-bracket"> /&gt;</span>
            </span>
            <p className="footer__tagline">Building scalable backend systems</p>
          </div>
          <div className="footer__links">
            {['hero', 'about', 'skills', 'experience', 'projects', 'contact'].map((id) => (
              <button key={id} className="footer__link" onClick={() => scrollTo(id)}>
                {id === 'hero' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="footer__divider"></div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Vedant Sagare. All rights reserved.</p>
          <p className="footer__built">Built with React &amp; Spring Boot</p>
        </div>
      </div>
    </footer>
  );
}
