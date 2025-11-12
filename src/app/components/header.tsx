"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  // Optional: keep internal state of theme (not required for icon switch since CSS uses [data-theme])
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as "light" | "dark") || "light";
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
    setTheme(next);
  };

  const closeNav = () => setNavOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="container">
        <Link className="brand" href="#top" aria-label="Homepage" onClick={closeNav}>
          <span className="logo-dot" aria-hidden="true"></span>
          <span className="brand-text">SYED ABDUL RAFAY</span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <button
            className="nav-toggle"
            aria-expanded={navOpen}
            aria-controls="primary-navigation"
            onClick={() => setNavOpen((s) => !s)}
          >
            <span className="sr-only">Menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div className={`nav-links ${navOpen ? "open" : ""}`} id="primary-navigation">
            <Link href="#projects" onClick={closeNav}>Work</Link>
            <Link href="#experience" onClick={closeNav}>Experience</Link>
            <Link href="#about" onClick={closeNav}>About</Link>
            <Link href="#contact" onClick={closeNav}>Contact</Link>
          </div>

          <div className="nav-actions">
            <button className="icon-btn theme-toggle" id="themeToggle" aria-label="Toggle theme" onClick={toggleTheme}>
              <svg className="icon-sun" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M12 4V2m0 20v-2M4 12H2m20 0h-2M5 5L3.5 3.5M20.5 20.5L19 19M5 19L3.5 20.5M20.5 3.5L19 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" fill="none"/>
              </svg>
              <svg className="icon-moon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M20 15.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 11.5Z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
              </svg>
            </button>
            <a className="btn btn-outline" href="/assests/Rafay Resume.pdf" target="_blank" rel="noopener">Resume</a>
          </div>
        </nav>
      </div>
    </header>
  );
}