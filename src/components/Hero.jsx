import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section id="home" className="container flex-center" style={{ minHeight: "100vh", paddingTop: "6rem", flexDirection: "column" }}>
      <div className="text-center animate-fade-in" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

        <div className="badge-pill delay-1" style={{ marginBottom: "1.5rem" }}>
          <span className="badge-dot"></span>
          Available for opportunities
        </div>

        <h1 className="hero-title delay-2">
          Udarsh<br />Goyal.
        </h1>

        <div className="delay-3" style={{ fontWeight: 600, color: "var(--accent)", fontSize: "1.3rem", marginBottom: "2.5rem", letterSpacing: "0.02em" }}>
          <Typewriter
            options={{
              strings: ['CS Undergrad @ VIT Chennai', 'AI/ML Researcher @ IIT Ropar', 'Builder of CodeSentinel', 'Google Student Ambassador', 'Full-Stack Developer'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30
            }}
          />
        </div>

        <div className="flex-center gap-6 delay-3" style={{ marginBottom: "3rem", flexWrap: "wrap" }}>
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Hire Me / Contact
          </a>
          <a href="/pdf/OCI_FOUNDATIONS_ASSOCIATE.pdf" download className="btn btn-outline" style={{ display: "flex", gap: "0.5rem" }}>
            <FiFileText /> Download Resume
          </a>
        </div>

        <div className="flex-center gap-6 delay-3" style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
          <a href="https://github.com/udarshcodes" target="_blank" rel="noreferrer" className="flex-center" style={{ gap: "0.5rem", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <span className="icon-btn" style={{ width: "2.2rem", height: "2.2rem" }}><FaGithub size={16} /></span>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/udarsh-goyal-256095383/" target="_blank" rel="noreferrer" className="flex-center" style={{ gap: "0.5rem", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <span className="icon-btn" style={{ width: "2.2rem", height: "2.2rem" }}><FaLinkedin size={16} /></span>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
