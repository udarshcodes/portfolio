import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const featuredProjects = [
    {
      title: "ThreadCounty",
      hook: "AI powered textile analysis platform automating fabric thread density, warp and weft counts, and composition analysis from images.",
      bullets: [
        "Two tier architecture: Next.js 16 (React 19, Turbopack) frontend decoupled from a FastAPI backend so OpenCV processing never blocks the frontend",
        "Built a validation layer using OpenCV color histograms and Hough line detection to reject invalid uploads before they reach the LLM",
        "Shipped PWA support, a voice enabled Groq powered chatbot, Supabase driven notifications, i18n, and a role based admin panel"
      ],
      tags: ["Next.js 16", "React 19", "Tailwind v4", "FastAPI", "OpenCV", "Supabase", "Groq"],
      github: "https://github.com/udarshcodes/threadcounty",
      demo: "https://threadcounty-frontend.onrender.com/en"
    },
    {
      title: "QuantumLens",
      hook: "Interactive 3D Bloch Sphere simulator with real time quantum state visualization and a dual model LLM tutoring pipeline.",
      bullets: [
        "Applied Qiskit unitary matrix operations and projected quantum states into Cartesian coordinates for live 3D rendering",
        "Solved coordinate singularity and floating point instability at sphere poles with clamped trigonometric sampling",
        "Chained two Groq hosted LLaMA models for fast plus accurate AI explanations"
      ],
      tags: ["Dash", "Flask", "Plotly", "Qiskit", "Groq API"],
      github: "https://github.com/udarshcodes/quantumlens",
      demo: "https://quantumlens.onrender.com/"
    }
  ];

  const foundationalProjects = [
    {
      title: "StudyForge",
      hook: "Full stack spaced repetition study platform implementing the SM2 algorithm, a custom quiz engine, and analytics.",
      bullets: [
        "Implemented SM2 spaced repetition scheduling from scratch",
        "Built a custom glassmorphic UI system with hand written CSS"
      ],
      tags: ["Flask", "PostgreSQL", "Bootstrap 5", "Vanilla JS"],
      github: "https://github.com/udarshcodes/studyforge",
      demo: "https://studyforge-a99i.onrender.com/"
    },
    {
      title: "FinTrack",
      hook: "Full stack expense and budget tracker built as a Harvard CS50x final project, using a custom MVC architecture.",
      bullets: [
        "Used raw SQL over an ORM to strengthen relational schema design",
        "Server side session authentication and validation, deployed database agnostic across SQLite and PostgreSQL"
      ],
      tags: ["Python", "Flask", "PostgreSQL", "Werkzeug"],
      github: "https://github.com/udarshcodes/fintrack",
      demo: "https://fintrack-e9zt.onrender.com/"
    }
  ];

  const labsProjects = [
    {
      title: "IMDb Sentiment Classifier",
      hook: "Classical NLP baseline for movie review sentiment classification, built to understand bag of words pipelines before moving to transformer based approaches.",
      tags: ["scikit learn", "pandas", "Logistic Regression"],
      github: "https://github.com/udarshcodes/imdb-sentiment"
    },
    {
      title: "Morse Code Encoder Decoder",
      hook: "Bidirectional IoT transceiver connecting a browser directly to Arduino hardware over the Web Serial API, zero backend.",
      tags: ["Web Serial API", "Arduino", "C++"],
      github: "https://github.com/udarshcodes/morsecode_encoder_decoder"
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Projects</h2>
      
      {/* Featured Banner: CodeSentinel */}
      <div className="card" style={{ marginBottom: "3rem", border: "2px solid rgba(168, 85, 247, 0.5)", background: "linear-gradient(to bottom right, var(--card-bg), rgba(168, 85, 247, 0.05))" }}>
        <div className="badge-pill" style={{ marginBottom: "1.5rem" }}>
          <span className="badge-dot"></span> Flagship Project
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

      {/* Featured Projects Tier */}
      <h3 style={{ fontSize: "1.8rem", color: "var(--text-primary)", marginTop: "4rem", marginBottom: "2rem" }}>Featured Work</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {featuredProjects.map((proj, idx) => (
          <div key={idx} className="card" style={{ display: "flex", flexDirection: "column", padding: "2.5rem" }}>
            <h3 style={{ fontSize: "2rem", color: "var(--accent)", margin: "0 0 1rem 0" }}>{proj.title}</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>{proj.hook}</p>
            <ul style={{ color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "2rem", paddingLeft: "1.2rem" }}>
              {proj.bullets.map((bullet, bIdx) => (
                <li key={bIdx} style={{ marginBottom: "0.5rem" }}>{bullet}</li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              {proj.tags.map((tag, tIdx) => (
                <span key={tIdx} className="chip">{tag}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              {proj.demo && (
                <a href={proj.demo} className="btn btn-primary" style={{ padding: "0.7rem 1.5rem" }}><FaExternalLinkAlt style={{ marginRight: "0.5rem" }}/> Live Demo</a>
              )}
              <a href={proj.github} className="btn btn-outline" style={{ padding: "0.7rem 1.5rem" }}><FaGithub style={{ marginRight: "0.5rem" }}/> GitHub</a>
            </div>
          </div>
        ))}
      </div>

      {/* Foundational Projects Tier */}
      <h3 style={{ fontSize: "1.8rem", color: "var(--text-primary)", marginTop: "4rem", marginBottom: "2rem" }}>Foundational Projects</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
        {foundationalProjects.map((proj, idx) => (
          <div key={idx} className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "2rem" }}>
            <div>
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)", margin: "0 0 1rem 0" }}>{proj.title}</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.5rem" }}>{proj.hook}</p>
              <ul style={{ color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "2rem", paddingLeft: "1.2rem" }}>
                {proj.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} style={{ marginBottom: "0.5rem" }}>{bullet}</li>
                ))}
              </ul>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="chip">{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href={proj.github} className="icon-btn" title="GitHub"><FaGithub /></a>
              {proj.demo && (
                <a href={proj.demo} className="icon-btn" title="Live Demo"><FaExternalLinkAlt /></a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Labs Projects Tier */}
      <h3 style={{ fontSize: "1.8rem", color: "var(--text-primary)", marginTop: "4rem", marginBottom: "2rem" }}>Labs and Explorations</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
        {labsProjects.map((proj, idx) => (
          <div key={idx} className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "1.5rem" }}>
            <div>
              <h4 style={{ fontSize: "1.2rem", color: "var(--text-primary)", margin: "0 0 0.8rem 0" }}>{proj.title}</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.5", marginBottom: "1.5rem" }}>{proj.hook}</p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="chip" style={{ fontSize: "0.65rem", padding: "0.2rem 0.6rem" }}>{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href={proj.github} className="icon-btn" style={{ width: "2rem", height: "2rem" }} title="GitHub"><FaGithub /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
