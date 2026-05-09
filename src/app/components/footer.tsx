export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="brand" href="#top" aria-label="Homepage">
            <span className="logo-dot" aria-hidden="true"></span>
            <span className="brand-text">SYED ABDUL RAFAY</span>
          </a>
          <p className="muted small">AI Engineer & Full Stack Developer</p>
          <p className="muted small">© {new Date().getFullYear()} Syed Abdul Rafay. All rights reserved.</p>
        </div>
        <nav aria-label="Footer">
          <a href="#projects">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/Rafay100" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/syed-abdul-rafay-80b185282/" target="_blank" rel="noopener">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}