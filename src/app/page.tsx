"use client"
export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="section-hero" id="hero">
        <div className="container grid-2">
          <div className="hero-copy">
            <p className="eyebrow">Design · Code · Strategy</p>
            <h1>Building delightful experiences that ship</h1>
            <p className="lede">
              I’m a Product Designer/Full Stack Engineer focused on accessible, performant interfaces and measurable outcomes.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">View Work</a>
              <a className="btn btn-ghost" href="#contact">Contact Me</a>
              <a className="btn btn-secondary" href="/assests/Rafay Resume.pdf" download>Download CV</a>
            </div>
            <div className="socials" aria-label="Social links">
              <a aria-label="GitHub" href="https://github.com/Rafay100" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M12 .5A12 12 0 0 0 0 12.7c0 5.4 3.4 9.9 8.2 11.5.6.1.8-.3.8-.6v-2c-3.3.8-4-1.6-4-1.6-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8-1.7 2.9-2.4-2.7-.3-5.6-1.4-5.6-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6.2 0C17.3 2.9 18.3 3.2 18.3 3.2c.6 1.6.2 2.7.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.9 5.7-5.6 6 .9.8 1.6 2.2 1.6 4.4v3.3c0 .3.2.7.8.6A12.2 12.2 0 0 0 24 12.7 12 12 0 0 0 12 .5Z"/></svg>
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/syed-abdul-rafay-80b185282/" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4zM8.5 8.5h3.8v2h.1c.5-1 1.9-2.1 3.9-2.1 4.2 0 5 2.7 5 6.2V23h-4v-6.5c0-1.5 0-3.4-2.1-3.4-2.2 0-2.6 1.7-2.6 3.3V23h-4z"/></svg>
              </a>
              <a aria-label="Email" href="srafay2021@gmail.com">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.5l-10 6.25L2 6.5V6Zm0 2.75v8.25a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.75l-9.43 5.9a2 2 0 0 1-2.14 0L2 8.75Z"/></svg>
              </a>
            </div>
          </div>
          <div className="hero-media">
            <div className="avatar">
              <img src="/assests/MY PIC .jpg" alt="Syed Abdul Rafay" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">About</p>
            <h2>A bit about me</h2>
            <p className="muted">Multi‑disciplinary designer/developer crafting products end‑to‑end—from discovery to delivery.</p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>What I do</h3>
              <p></p>
              <ul className="tags">
                <li>HTML</li><li>CSS</li><li>Java</li><li>JavaScript</li><li>Python</li><li>React</li><li>Next.js</li><li>Git</li><li>GitHub</li><li>AI</li>
              </ul>
            </div>

            <div className="stats">
              <div className="stat">
                <span className="stat-num">FRESHER</span>
                
              </div>
              <div className="stat">
                <span className="stat-num">25+</span>
                <span className="stat-label">Projects</span>
              </div>
            
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Experience</p>
            <h2>Roles and highlights</h2>
          </div>

          <ol className="timeline">
            <li className="timeline-item">
              <div className="time">2025</div>
              <div className="content">
                <h3>Intern Front-End Developer</h3> 
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Work</p>
            <h2>Selected projects</h2>
          </div>

          <div className="projects-grid">
            <article className="project-card">
              <a className="media" href="#" target="_blank" rel="noopener">
                <img src="/assests/Case01.PNG" alt="case study #01" />
              </a>
              <div className="project-content">
                <h3>Weather App</h3>
                <p>A responsive weather application built with React and modern APIs. Users can search for any city to view real-time weather data, including temperature, humidity, and forecasts. The app features a clean UI, fast performance, and adapts to both desktop and mobile devices.</p>
                <ul className="tags"><li>HTML,CSS,JAVASCRIPT</li><li>OpenWeatherMap API</li><li>React</li></ul>
                <div className="links">
                  <a href="https://github.com/Rafay100/My_Weather_App.git" className="text-link">Case Study →</a>
                  <a href="https://my-weather-app-six-eta.vercel.app/" className="text-link">Live Site ↗</a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <a className="media" href="#" target="_blank" rel="noopener">
                <img src="/assests/Case study02.PNG" alt="Case Study 2" />
              </a>
              <div className="project-content">
                <h3>Digital Clock</h3>
                <p>Developed a real-time digital clock that displays the current hours, minutes, and seconds, updating every second in synchronization with the system time. Designed with a simple and responsive user interface for clarity and ease of use.</p>
                <ul className="tags"><li>HTML</li><li>CSS</li><li>JAVA SCRIPT</li></ul>
                <div className="links">
                  <a href="https://github.com/Rafay100/Digital_Clock.git" className="text-link">Case Study →</a>
                  <a href="https://digital-clock-beta-navy.vercel.app/" className="text-link">Live site↗</a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <a className="media" href="#" target="_blank" rel="noopener">
                <img src="/assests/Case03.png" alt="Case Study 3" />
              </a>
              <div className="project-content">
                <h3>Bnas Marine Website</h3>
                <p>I developed and deployed the website “Banas Marine”as a full-stack project. The site presents a logistics and marine-services company offering container handling, vessel repair, freight forwarding and global supply-chain solutions. I handled the design, front-end implementation, content integration and live hosting on GitHub Pages. The result: a clean, professional web presence that demonstrates my ability to deliver real-world sites from concept through production.</p>
                <ul className="tags"><li>HTML</li><li>CSS</li><li>Web</li></ul>
                <div className="links">
                  <a href="https://github.com/Rafay100/BM-Banas_Marine.git" className="text-link">Case Study →</a>
                  <a href="https://rafay100.github.io/BM-Banas_Marine/" className="text-link">Live Site ↗</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s work together</h2>
              <p className="muted">Open to freelance or full‑time roles. Tell me about your project or team.</p>
            </div>
            <div className="contact-actions">
              <a className="btn btn-primary" href="srafay2021@gmail.com">Email me</a>
             
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}