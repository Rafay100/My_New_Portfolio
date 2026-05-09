"use client"
export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="section-hero" id="hero">
        <div className="container grid-2">
          <div className="hero-copy">
            <p className="eyebrow">AI Development · Full Stack · Automation</p>
            <h1>Building intelligent systems that transform businesses</h1>
            <p className="lede">
              AI Engineer & Full Stack Developer specializing in autonomous agents, intelligent automation, and scalable web applications. I turn complex business challenges into elegant AI-powered solutions that deliver measurable ROI.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">View Work</a>
              <a className="btn btn-ghost" href="#contact">Hire Me</a>
              <a className="btn btn-secondary" href="/assests/Rafay Resume.pdf" download>Download CV</a>
            </div>
            <div className="socials" aria-label="Social links">
              <a aria-label="GitHub" href="https://github.com/Rafay100" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M12 .5A12 12 0 0 0 0 12.7c0 5.4 3.4 9.9 8.2 11.5.6.1.8-.3.8-.6v-2c-3.3.8-4-1.6-4-1.6-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8-1.7 2.9-2.4-2.7-.3-5.6-1.4-5.6-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6.2 0C17.3 2.9 18.3 3.2 18.3 3.2c.6 1.6.2 2.7.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.9 5.7-5.6 6 .9.8 1.6 2.2 1.6 4.4v3.3c0 .3.2.7.8.6A12.2 12.2 0 0 0 24 12.7 12 12 0 0 0 12 .5Z"/></svg>
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/syed-abdul-rafay-80b185282/" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4zM8.5 8.5h3.8v2h.1c.5-1 1.9-2.1 3.9-2.1 4.2 0 5 2.7 5 6.2V23h-4v-6.5c0-1.5 0-3.4-2.1-3.4-2.2 0-2.6 1.7-2.6 3.3V23h-4z"/></svg>
              </a>
              <a aria-label="Email" href="mailto:srafay2021@gmail.com">
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
            <h2>Expertise that delivers results</h2>
            <p className="muted">AI Engineer and Full Stack Developer building production-ready intelligent systems that solve real business problems.</p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>Core Competencies</h3>
              <p>I specialize in developing AI-powered automation systems, intelligent agents, and full-stack web applications. My expertise spans from natural language processing and machine learning to modern web frameworks and cloud deployment. I focus on creating solutions that are not just technically impressive, but deliver tangible business value—reducing costs, increasing efficiency, and driving growth.</p>
              <ul className="tags">
                <li>Python</li><li>JavaScript</li><li>TypeScript</li><li>React</li><li>Next.js</li><li>Node.js</li><li>FastAPI</li><li>LangChain</li><li>OpenAI API</li><li>Machine Learning</li><li>NLP</li><li>RAG Systems</li><li>Vector Databases</li><li>PostgreSQL</li><li>MongoDB</li><li>Docker</li><li>AWS</li><li>Vercel</li><li>Git</li><li>REST APIs</li>
              </ul>
            </div>

            <div className="stats">
              <div className="stat">
                <span className="stat-num">25+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-num">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat">
                <span className="stat-num">2025</span>
                <span className="stat-label">Started Journey</span>
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
            <h2>Professional Journey</h2>
            <p className="muted">Building AI solutions and delivering value to clients worldwide</p>
          </div>

          <ol className="timeline">
            <li className="timeline-item">
              <div className="time">2025 - Present</div>
              <div className="content">
                <h3>AI Solutions Developer & Consultant</h3>
                <p>Developing custom AI automation systems, intelligent agents, and full-stack applications for businesses. Specializing in LangChain, OpenAI API integration, RAG systems, and conversational AI. Successfully delivered 5+ production-ready AI solutions that reduced operational costs by an average of 60%.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="time">2025</div>
              <div className="content">
                <h3>Front-End Developer Intern</h3>
                <p>Built responsive web applications using React, Next.js, and modern JavaScript frameworks. Collaborated on client projects, implemented UI/UX designs, and optimized application performance. Gained hands-on experience with Git workflows, API integration, and agile development practices.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="time">2024 - 2025</div>
              <div className="content">
                <h3>Freelance Web Developer</h3>
                <p>Delivered custom websites and web applications for small businesses and startups. Managed full project lifecycle from requirements gathering to deployment. Built responsive, SEO-optimized sites using HTML, CSS, JavaScript, and modern frameworks.</p>
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
              <a className="media" href="https://my-weather-app-six-eta.vercel.app/" target="_blank" rel="noopener">
                <img src="/assests/Case01.PNG" alt="Weather App" />
              </a>
              <div className="project-content">
                <h3>Weather App</h3>
                <p>A responsive weather application built with React and modern APIs. Users can search for any city to view real-time weather data, including temperature, humidity, and forecasts. The app features a clean UI, fast performance, and adapts to both desktop and mobile devices.</p>
                <ul className="tags"><li>HTML</li><li>CSS</li><li>JavaScript</li><li>React</li><li>OpenWeatherMap API</li></ul>
                <div className="links">
                  <a href="https://github.com/Rafay100/My_Weather_App.git" className="text-link">Case Study →</a>
                  <a href="https://my-weather-app-six-eta.vercel.app/" className="text-link">Live Site ↗</a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <a className="media" href="https://digital-clock-beta-navy.vercel.app/" target="_blank" rel="noopener">
                <img src="/assests/Case study02.PNG" alt="Digital Clock" />
              </a>
              <div className="project-content">
                <h3>Digital Clock</h3>
                <p>Developed a real-time digital clock that displays the current hours, minutes, and seconds, updating every second in synchronization with the system time. Designed with a simple and responsive user interface for clarity and ease of use.</p>
                <ul className="tags"><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>
                <div className="links">
                  <a href="https://github.com/Rafay100/Digital_Clock.git" className="text-link">Case Study →</a>
                  <a href="https://digital-clock-beta-navy.vercel.app/" className="text-link">Live Site ↗</a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <a className="media" href="https://rafay100.github.io/BM-Banas_Marine/" target="_blank" rel="noopener">
                <img src="/assests/Case03.png" alt="Banas Marine Website" />
              </a>
              <div className="project-content">
                <h3>Banas Marine Website</h3>
                <p>I developed and deployed the website &quot;Banas Marine&quot; as a full-stack project. The site presents a logistics and marine-services company offering container handling, vessel repair, freight forwarding and global supply-chain solutions. I handled the design, front-end implementation, content integration and live hosting on GitHub Pages. The result: a clean, professional web presence that demonstrates my ability to deliver real-world sites from concept through production.</p>
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
              <h2>Ready to transform your business with AI?</h2>
              <p className="muted">I&apos;m available for freelance projects, consulting, and full-time opportunities. Whether you need an AI automation system, intelligent chatbot, data analysis tool, or custom web application—let&apos;s discuss how I can help you achieve your goals.</p>
              <div style={{marginTop: '1.5rem'}}>
                <p><strong>What I can help you with:</strong></p>
                <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem'}}>
                  <li>AI Agent Development & Automation</li>
                  <li>Custom ChatGPT & LLM Integration</li>
                  <li>Data Analysis & Business Intelligence Tools</li>
                  <li>Full-Stack Web Applications</li>
                  <li>API Development & Integration</li>
                  <li>Technical Consulting & Strategy</li>
                </ul>
              </div>
            </div>
            <div className="contact-actions">
              <a className="btn btn-primary" href="https://mail.google.com/mail/?view=cm&fs=1&to=srafay2021@gmail.com" target="_blank" rel="noopener">Email Me</a>
              <a className="btn btn-outline" href="https://www.linkedin.com/in/syed-abdul-rafay-80b185282/" target="_blank" rel="noopener">LinkedIn</a>
            </div>
            <div style={{marginTop: '1rem', textAlign: 'center'}}>
              <p style={{fontSize: '0.95rem', color: 'var(--text-muted)'}}>
                <strong>Email:</strong> srafay2021@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
