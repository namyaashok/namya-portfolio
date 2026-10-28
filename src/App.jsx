import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Technical skills
  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "C Programming", icon: "💻" },
    { name: "Data Structures", icon: "🧩" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Problem Solving", icon: "🧠" },
  ];

  // Projects
  const projects = [
    {
      number: "01",
      title: "Community Help Connect",
      icon: "🤝",
      description:
        "A web application designed to connect people who need assistance with volunteers who are ready to help their community.",
      technologies: ["React.js", "CSS", "Node.js", "MongoDB"],
    },
    {
      number: "02",
      title: "Tetris Game",
      icon: "🎮",
      description:
        "Developed a playable Tetris game using Python and Pygame, demonstrating programming logic and graphical user interface development.",
      technologies: ["Python", "Pygame"],
    },
    {
      number: "03",
      title: "Health Awareness Website",
      icon: "💚",
      description:
        "Designed a responsive website promoting health awareness with sections for health camps, fitness, diet plans, and contact forms.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      number: "04",
      title: "Footstep Power Generation",
      icon: "⚡",
      description:
        "Built a system to generate power from footsteps using an Arduino UNO and piezoelectric sensors, exploring renewable energy.",
      technologies: ["Arduino UNO", "Sensors", "Electronics"],
    },
  ];

  // Education
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "CMR University, Bangalore",
      duration: "September 2024 – July 2028",
      result: "CGPA: 8.79",
      icon: "🎓",
    },
    {
      degree: "Pre-University",
      institution: "SFS PU College, Kolar",
      duration: "May 2022 – March 2024",
      result: "548/600 — 91.3%",
      icon: "📚",
    },
    {
      degree: "School Education",
      institution: "Jain Global School, Bangarpet",
      duration: "Completed March 2022",
      result: "399/500 — 80.1%",
      icon: "🏫",
    },
  ];

  // Certifications
  const certifications = [
    {
      title: "Software Engineering and ALM",
      provider: "Infosys Springboard",
      icon: "🏆",
    },
    {
      title: "Python 101 for Data Science",
      provider: "IBM Cognitive Class",
      icon: "🐍",
    },
    {
      title: "Interfacing with the Arduino",
      provider: "Coursera",
      icon: "🔌",
    },
  ];

  const languages = ["English", "Hindi", "Kannada", "Telugu", "German"];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-icon">&lt;/&gt;</span>
          <span>
            Namya<span className="logo-dot">.</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#certifications" onClick={closeMenu}>Certifications</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      <main>
        {/* HOME SECTION */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              Computer Science Engineering Student
            </div>

            <p className="hero-intro">HELLO, I'M</p>

            <h1>
              Namya <span className="gradient-text">A</span>
            </h1>

            <h2>Aspiring Software Developer</h2>

            <p className="hero-description">
              I'm a Computer Science Engineering student passionate about
              programming, web development, and building technology that
              solves real-world problems. I'm always excited to learn,
              create, and explore new ideas.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore My Work <span>↗</span>
              </a>

              <a href="/resume.pdf" download="Namya_A_Resume.pdf" className="btn btn-secondary">
                📄 Download Resume
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/namya-a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:namyaashok15@gmail.com">
                Email ↗
              </a>
            </div>
          </div>

          {/* Decorative code card */}
          <div className="hero-visual">
            <div className="glow-circle"></div>

            <div className="code-card">
              <div className="code-card-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="file-name">developer.jsx</span>
              </div>

              <div className="code-content">
                <p>
                  <span className="code-purple">const</span> developer = {"{"}
                </p>

                <p className="code-indent">
                  name: <span className="code-green">"Namya A"</span>,
                </p>

                <p className="code-indent">
                  role: <span className="code-green">"Student"</span>,
                </p>

                <p className="code-indent">
                  skills: <span className="code-green">"Python, C"</span>,
                </p>

                <p className="code-indent">
                  passion: <span className="code-green">"Technology"</span>
                </p>

                <p>{"};"}</p>

                <br />

                <p>
                  <span className="code-purple">console</span>
                  .log(<span className="code-green">"Hello, world!"</span>);
                </p>

                <p className="code-comment">
                  // Learning something new every day!
                </p>
              </div>

              <div className="code-card-footer">
                <span>✦ Creative thinker</span>
                <span>⌘ Problem solver</span>
              </div>
            </div>

            <div className="floating-badge badge-top">
              <span>✦</span> Keep Learning
            </div>

            <div className="floating-badge badge-bottom">
              <span>💻</span> Code & Create
            </div>
          </div>

          <a href="#about" className="scroll-down">
            <span>Scroll to explore</span>
            <span className="scroll-arrow">↓</span>
          </a>
        </section>

        {/* ABOUT SECTION */}
        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="section-label">GET TO KNOW ME</p>
            <h2>
              About <span className="gradient-text">Me</span>
            </h2>
            <p>A little introduction to my journey in technology.</p>
          </div>

          <div className="about-card">
            <div className="about-symbol">&lt; / &gt;</div>

            <div className="about-text">
              <h3>Learning. Building. Growing.</h3>

              <p>
                Hello! I'm Namya A, a Computer Science Engineering student
                at CMR University, Bangalore. I'm passionate about learning
                how technology can solve real-world problems.
              </p>

              <p>
                My programming journey started with C and Python. Since
                then, I've explored game development, responsive websites,
                electronics projects, and full-stack web development.
                I enjoy strengthening my analytical thinking, learning
                new technologies, and working on practical projects.
              </p>

              <p>
                I'm looking for opportunities to apply my technical skills,
                gain industry experience, and grow as a software developer.
              </p>

              <div className="about-highlights">
                <div className="highlight">
                  <span className="highlight-icon">🎓</span>
                  <div>
                    <strong>8.79 CGPA</strong>
                    <span>B.Tech CSE</span>
                  </div>
                </div>

                <div className="highlight">
                  <span className="highlight-icon">💡</span>
                  <div>
                    <strong>Problem Solver</strong>
                    <span>Always Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="section-label">MY TECH TOOLKIT</p>

            <h2>
              Skills & <span className="gradient-text">Technologies</span>
            </h2>

            <p>Technologies and abilities I'm developing.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                className="skill-card"
                key={skill.name}
                style={{ "--delay": `${index * 0.05}s` }}
              >
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="section-label">WHAT I'VE BEEN BUILDING</p>

            <h2>
              My <span className="gradient-text">Projects</span>
            </h2>

            <p>A selection of projects from my learning journey.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-symbol">{project.icon}</span>
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <span>Project Showcase</span>
                  <span className="project-star">✦</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="section education-section" id="education">
          <div className="section-heading">
            <p className="section-label">MY ACADEMIC JOURNEY</p>

            <h2>
              Education <span className="gradient-text">Timeline</span>
            </h2>

            <p>The academic milestones that have shaped my journey.</p>
          </div>

          <div className="education-grid">
            {education.map((item, index) => (
              <article className="education-card" key={item.degree}>
                <div className="education-icon">{item.icon}</div>

                <span className="education-number">
                  0{index + 1}
                </span>

                <h3>{item.degree}</h3>
                <p className="education-institution">{item.institution}</p>
                <p className="education-duration">{item.duration}</p>

                <div className="education-result">{item.result}</div>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section
          className="section certifications-section"
          id="certifications"
        >
          <div className="section-heading">
            <p className="section-label">CONTINUOUS LEARNING</p>

            <h2>
              My <span className="gradient-text">Certifications</span>
            </h2>

            <p>Courses that have helped me expand my knowledge.</p>
          </div>

          <div className="certifications-grid">
            {certifications.map((certification, index) => (
              <article
                className="certification-card"
                key={certification.title}
              >
                <div className="certification-icon">
                  {certification.icon}
                </div>

                <div className="certification-number">
                  CERTIFICATION 0{index + 1}
                </div>

                <h3>{certification.title}</h3>
                <p>{certification.provider}</p>
              </article>
            ))}
          </div>
        </section>

        {/* LANGUAGES SECTION */}
        <section className="section languages-section" id="languages">
          <div className="section-heading">
            <p className="section-label">COMMUNICATION</p>

            <h2>
              Languages I <span className="gradient-text">Know</span>
            </h2>
          </div>

          <div className="languages-list">
            {languages.map((language) => (
              <span className="language-pill" key={language}>
                🌐 {language}
              </span>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div className="contact-decoration">✳</div>

            <p className="section-label">LET'S CONNECT</p>

            <h2>
              Let's build something
              <br />
              <span className="gradient-text">amazing together.</span>
            </h2>

            <p className="contact-description">
              I'm interested in internships, learning opportunities,
              collaborative projects, and connecting with fellow developers.
              Feel free to reach out!
            </p>

            <div className="contact-details">
              <a href="mailto:namyaashok15@gmail.com">
                <span>✉️</span>
                <div>
                  <small>Email</small>
                  <strong>namyaashok15@gmail.com</strong>
                </div>
              </a>

              <a href="tel:8310120137">
                <span>📞</span>
                <div>
                  <small>Phone</small>
                  <strong>8310120137</strong>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/namya-a"
                target="_blank"
                rel="noreferrer"
              >
                <span>💼</span>
                <div>
                  <small>LinkedIn</small>
                  <strong>Connect with me ↗</strong>
                </div>
              </a>
            </div>

            <a
              href="mailto:namyaashok15@gmail.com"
              className="btn btn-primary contact-button"
            >
              ✉ Get in Touch
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="footer-logo">
          &lt;/&gt; Namya<span className="logo-dot">.</span>
        </a>

        <p>Designed with 💜 and built with React.</p>

        <a href="#home" className="back-to-top" aria-label="Back to top">
          ↑
        </a>
      </footer>
    </div>
  );
}

export default App;