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
    <section id="projects" className="container reveal">
      <h2 className="section-title">Projects</h2>
      
      {/* Featured Banner: CodeSentinel */}
      <div className="card card-flagship mb-12">
        <div className="badge-pill mb-6">
          <span className="badge-dot"></span> Flagship Project
        </div>
        <h3 className="card-header card-header-lg">CodeSentinel</h3>
        <p className="text-muted text-lg mb-6 max-w-800">
          A massive 10-agent LangGraph pipeline designed to autonomously audit, refactor, and deploy enterprise-level codebases. This system differentiates between syntax errors and logical flaws using deep semantic searching.
        </p>
        <div className="flex-wrap gap-3 mb-10">
          <span className="chip">Python</span>
          <span className="chip">LangGraph</span>
          <span className="chip">Groq</span>
          <span className="chip">ChromaDB</span>
          <span className="chip">tree-sitter</span>
        </div>
        <div className="flex-wrap gap-4">
          <a href="#" className="btn btn-primary btn-md"><FaExternalLinkAlt className="mr-2"/> Live Demo</a>
          <a href="https://github.com/udarshcodes/CodeSentinel" className="btn btn-outline btn-md"><FaGithub className="mr-2"/> GitHub</a>
        </div>
      </div>

      {/* Featured Projects Tier */}
      <h3 className="section-subtitle">Featured Work</h3>
      <div className="flex-col gap-12">
        {featuredProjects.map((proj, idx) => (
          <div key={idx} className="card flex-col p-10">
            <h3 className="card-header">{proj.title}</h3>
            <p className="text-muted text-lg mb-6">{proj.hook}</p>
            <ul className="text-muted mb-8 pl-5">
              {proj.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="mb-2">{bullet}</li>
              ))}
            </ul>
            <div className="flex-wrap gap-3 mb-10">
              {proj.tags.map((tag, tIdx) => (
                <span key={tIdx} className="chip">{tag}</span>
              ))}
            </div>
            <div className="flex-wrap gap-4">
              {proj.demo && (
                <a href={proj.demo} className="btn btn-primary btn-md"><FaExternalLinkAlt className="mr-2"/> Live Demo</a>
              )}
              <a href={proj.github} className="btn btn-outline btn-md"><FaGithub className="mr-2"/> GitHub</a>
            </div>
          </div>
        ))}
      </div>

      {/* Foundational Projects Tier */}
      <h3 className="section-subtitle">Foundational Projects</h3>
      <div className="grid-350 gap-8">
        {foundationalProjects.map((proj, idx) => (
          <div key={idx} className="card flex-col flex-between p-8">
            <div>
              <h3 className="card-header-sm">{proj.title}</h3>
              <p className="text-muted mb-6">{proj.hook}</p>
              <ul className="text-muted mb-8 pl-5">
                {proj.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="mb-2">{bullet}</li>
                ))}
              </ul>
              <div className="flex-wrap gap-2 mb-8">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="chip">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex-wrap gap-4">
              <a href={proj.github} className="icon-btn" title="GitHub" aria-label={`GitHub Repository for ${proj.title}`}><FaGithub /></a>
              {proj.demo && (
                <a href={proj.demo} className="icon-btn" title="Live Demo" aria-label={`Live Demo for ${proj.title}`}><FaExternalLinkAlt /></a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Labs Projects Tier */}
      <h3 className="section-subtitle">Labs and Explorations</h3>
      <div className="grid-300 gap-6">
        {labsProjects.map((proj, idx) => (
          <div key={idx} className="card flex-col flex-between p-6">
            <div>
              <h4 className="card-header-xs">{proj.title}</h4>
              <p className="text-muted-sm mb-6">{proj.hook}</p>
              <div className="flex-wrap gap-2 mb-6">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="chip chip-sm">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex-wrap gap-4">
              <a href={proj.github} className="icon-btn icon-btn-sm" title="GitHub" aria-label={`GitHub Repository for ${proj.title}`}><FaGithub /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
