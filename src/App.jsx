import profile from "./images/image.png";


export default function Portfolio() {
  const skills = [
    "Python",
    "Django",
    "React",
    "JavaScript",
    "SQL",
    "REST API",
    "Git",
    "Tailwind CSS",
  ];

  const projects = [
    {
      title: "Coaching Management SaaS",
      description:
        "A multi-tenant coaching management system with student management, fees, attendance, authentication, and dashboards.",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website built using React with modern UI and smooth sections.",
    },
    {
      title: "Student Dashboard",
      description:
        "Dashboard for managing student records, fee tracking, attendance, and analytics.",
    },
  ];

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <header style={styles.header}>
        <h2 style={styles.logo}>Ranjan</h2>

        <nav style={styles.nav}>
          <a href="#about" style={styles.link}>About</a>
          <a href="#skills" style={styles.link}>Skills</a>
          <a href="#projects" style={styles.link}>Projects</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroPhotoWrap}>
          <div style={styles.photoGlow}></div>
          <img
            src={profile}
            alt="Profile"
            style={styles.profilePhoto}
          />
        </div>

        <div>
          <h1 style={styles.title}>
            Hi, I'm <span style={{ color: '#38bdf8' }}>Ranjan</span>
          </h1>

          <p style={styles.subtitle}>
            Fullstack Developer focused on building modern web applications using React and Python.
          </p>

          <div style={styles.buttonGroup}>
            <a href="#projects" style={styles.primaryBtn}>
              View Projects
            </a>

            <a href="#contact" style={styles.secondaryBtn}>
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>

        <p style={styles.text}>
          I'm a fullstack developer passionate about creating scalable and clean web applications.
          I mainly work with React, Django, and REST APIs. Currently focused on improving backend
          architecture and SaaS development.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills</h2>

        <div style={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} style={styles.skillCard}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>

        <div style={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} style={styles.projectCard}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectText}>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact</h2>

        <div style={styles.contactBox}>
          <p>Email: yourmail@example.com</p>
          <p>GitHub: github.com/yourgithub</p>
          <p>LinkedIn: linkedin.com/in/yourprofile</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © 2026 Ranjan. All rights reserved.
      </footer>
    </div>
  );
}

const styles = {
  page: {
    margin: 0,
    background: '#020617',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#0f172a',
    color: 'white',
    minHeight: '100vh',
    scrollBehavior: 'smooth',
  },

  header: {
    backdropFilter: 'blur(12px)',
    background: 'rgba(17,24,39,0.8)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 10%',
    position: 'sticky',
    top: 0,
    backgroundColor: '#111827',
    borderBottom: '1px solid #1e293b',
    zIndex: 100,
  },

  logo: {
    margin: 0,
    fontSize: '28px',
    color: '#38bdf8',
  },

  nav: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },

  link: {
    color: '#e2e8f0',
    textDecoration: 'none',
    fontSize: '16px',
  },

  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '100vh',
    padding: '20px',
    position: 'relative',
    overflow: 'hidden',
    background:
      'radial-gradient(circle at top left, rgba(56,189,248,0.15), transparent 30%), radial-gradient(circle at bottom right, rgba(99,102,241,0.15), transparent 30%)',
  },

  title: {
    fontSize: 'clamp(52px, 9vw, 90px)',
    marginBottom: '20px',
    fontWeight: '900',
    letterSpacing: '-3px',
    lineHeight: 1,
  },

  subtitle: {
    fontSize: '22px',
    maxWidth: '700px',
    color: '#cbd5e1',
    lineHeight: 1.7,
    margin: '0 auto',
  },

  buttonGroup: {
    marginTop: '30px',
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  primaryBtn: {
    padding: '14px 28px',
    background: 'linear-gradient(135deg,#38bdf8,#6366f1)',
    color: '#0f172a',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },

  secondaryBtn: {
    padding: '14px 28px',
    border: '1px solid #38bdf8',
    color: '#38bdf8',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },

  section: {
    padding: '80px 10%',
  },

  sectionTitle: {
    fontSize: '48px',
    marginBottom: '30px',
    color: '#38bdf8',
  },

  text: {
    fontSize: '18px',
    lineHeight: 1.8,
    color: '#cbd5e1',
    maxWidth: '900px',
  },

  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
  },

  skillCard: {
    background: 'rgba(30,41,59,0.75)',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    fontWeight: 'bold',
    border: '1px solid rgba(148,163,184,0.15)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
  },

  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
  },

  projectCard: {
    background: 'rgba(30,41,59,0.75)',
    padding: '25px',
    borderRadius: '15px',
    border: '1px solid rgba(148,163,184,0.15)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
  },

  projectTitle: {
    fontSize: '24px',
    marginBottom: '15px',
  },

  projectText: {
    color: '#cbd5e1',
    lineHeight: 1.6,
  },

  contactBox: {
    background: 'rgba(30,41,59,0.75)',
    padding: '30px',
    borderRadius: '15px',
    lineHeight: 2,
    border: '1px solid rgba(148,163,184,0.15)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
    maxWidth: '600px',
  },

  heroPhotoWrap: {
    position: 'relative',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
  },

  profilePhoto: {
    width: '220px',
    height: '220px',
    marginRight: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '5px solid rgba(255,255,255,0.1)',
    position: 'relative',
    zIndex: 2,
    boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
  },

  photoGlow: {
    position: 'absolute',
    width: '260px',
    height: '260px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg,#38bdf8,#6366f1)',
    filter: 'blur(50px)',
    opacity: 0.2,
  },

  footer: {
    textAlign: 'center',
    padding: '30px',
    borderTop: '1px solid #1e293b',
    color: '#94a3b8',
  },
};
