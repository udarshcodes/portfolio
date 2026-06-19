import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "QuantumLens",
      desc: "An interactive Bloch Sphere Visualizer that maps quantum states in 3D real-time.",
      tags: ["React", "Three.js", "Python"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Projects</h2>
      
      {/* Featured Banner: CodeSentinel */}
      <div className="card" style={{ marginBottom: "3rem", border: "2px solid rgba(168, 85, 247, 0.5)", background: "linear-gradient(to bottom right, var(--card-bg), rgba(168, 85, 247, 0.05))" }}>
        <div className="badge-pill" style={{ marginBottom: "1.5rem" }}>
          <span className="badge-dot"></span> Featured Project
        </div>
        <h3 style={{ fontSize: "2.2rem", color: "var(--accent)", margin: "0 0 1rem 0" }}>CodeSentinel</h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "1.5rem", maxWidth: "800px" }}>
          A massive 10-agent LangGraph pipeline designed to autonomously audit, refactor, and deploy enterprise-level codebases. This system differentiates between syntax errors and logical flaws using deep semantic searching.
        </p>
        <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          <span className="chip">Python</span>
          <span className="chip">LangGraph</span>
          <span className="chip">Groq</span>
          <span className="chip">ChromaDB</span>
          <span className="chip">tree-sitter</span>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="#" className="btn btn-primary" style={{ padding: "0.7rem 1.5rem" }}><FaExternalLinkAlt style={{ marginRight: "0.5rem" }}/> Live Demo</a>
          <a href="https://github.com/udarshcodes/CodeSentinel" className="btn btn-outline" style={{ padding: "0.7rem 1.5rem" }}><FaGithub style={{ marginRight: "0.5rem" }}/> GitHub</a>
        </div>
      </div>

      {/* 2-col card grid for remaining projects */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
        {projects.map((proj, idx) => (
          <div key={idx} className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "2rem" }}>
            <div>
              <h3 style={{ fontSize: "1.4rem", color: "var(--text-primary)", margin: "0 0 1rem 0" }}>{proj.title}</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.5rem" }}>{proj.desc}</p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="chip">{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href={proj.github} className="icon-btn" title="GitHub"><FaGithub /></a>
              <a href={proj.demo} className="icon-btn" title="Live Demo"><FaExternalLinkAlt /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
