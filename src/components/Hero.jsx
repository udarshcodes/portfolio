import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="container flex-center" style={{ minHeight: "100vh", paddingTop: "6rem" }}>
      <div className="text-center animate-fade-in" style={{ width: "100%" }}>
        
        <div className="badge-pill delay-1" style={{ marginBottom: "2rem" }}>
          <span className="badge-dot"></span>
          Available for opportunities
        </div>

        <h1 className="hero-title delay-2">
          Udarsh<br />Goyal.
        </h1>

        <p className="hero-subtitle delay-3">
          Engineering the future with Web, AI, and Cloud. Specializing in <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Full-Stack Development</strong>, <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Machine Learning</strong>, and <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Generative AI</strong>.
        </p>

        <div className="flex-center gap-6 delay-3" style={{ marginTop: "2.5rem", marginBottom: "4rem" }}>
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Hire Me / Contact
          </a>
        </div>

        {/* Bottom Social Links like in the screenshot */}
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
