export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="brand" href="#top" aria-label="Homepage">
            <span className="logo-dot" aria-hidden="true"></span>
            <span className="brand-text">SYED ABDUL RAFAY</span>
          </a>
          <p className="muted small">© {new Date().getFullYear()} SYED ABDUL RAFAY. All rights reserved.</p>
        </div>
        <nav aria-label="Footer">
          <a href="#projects">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}