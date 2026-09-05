export default function Projects() {
  const featuredProjects = [
    {
      title: "ThreadCounty",
      subtitle: "AI POWERED TEXTILE ANALYSIS",
      hook: "A full stack platform for analyzing fabric images and estimating textile characteristics such as thread density and warp/weft structure. Built with computer vision processing, a modern web interface, authentication, and backend APIs.",
      tags: ["Next.js", "React", "FastAPI", "OpenCV", "Supabase", "Groq"],
      github: "https://github.com/udarshcodes/threadcounty",
      demo: "https://threadcounty-frontend.onrender.com/en"
    },
    {
      title: "QuantumLens",
      subtitle: "INTERACTIVE QUANTUM VISUALIZER",
      hook: "An interactive 3D Bloch Sphere simulator for exploring single qubit states in real time. Supports quantum gate operations, state visualization, measurement probabilities, and AI generated explanations.",
      tags: ["Dash", "Flask", "Plotly", "Qiskit", "Groq API"],
      github: "https://github.com/udarshcodes/quantumlens",
      demo: "https://quantumlens.onrender.com/"
    }
  ];

  const foundationalProjects = [
    {
      title: "StudyForge",
      subtitle: "SPACED REPETITION STUDY PLANNER",
      hook: "A full stack study management application featuring a simplified SM 2 inspired spaced repetition system, Pomodoro based study tracking, custom quiz generation, and learning analytics.",
      tags: ["Flask", "PostgreSQL", "Bootstrap 5", "Vanilla JS"],
      github: "https://github.com/udarshcodes/studyforge",
      demo: "https://studyforge-a99i.onrender.com/"
    },
    {
      title: "FinTrack",
      subtitle: "FULL STACK PERSONAL FINANCE",
      hook: "A full stack expense and budget management application built with Flask and SQLite. Implements authentication, transaction tracking, category budgets, and financial reporting.",
      tags: ["Python", "Flask", "PostgreSQL", "Werkzeug"],
      github: "https://github.com/udarshcodes/fintrack",
      demo: "https://fintrack-e9zt.onrender.com/"
    }
  ];

  const labsProjects = [
    {
      title: "IMDb Sentiment Classifier",
      subtitle: "CLASSICAL NLP",
      hook: "A machine learning pipeline for binary sentiment classification of movie reviews using text preprocessing, Bag of Words vectorization, and Logistic Regression with scikit learn.",
      tags: ["scikit learn", "pandas", "Logistic Regression"],
      github: "https://github.com/udarshcodes/imdb-sentiment"
    },
    {
      title: "Morse Code Encoder Decoder",
      subtitle: "BROWSER ↔ HARDWARE COMMUNICATION",
      hook: "A bidirectional hardware software communication prototype connecting a browser to an Arduino via the Web Serial API. Explores real time serial communication, Morse encoding and decoding, timing based input, and embedded interaction.",
      tags: ["Web Serial API", "Arduino", "C++"],
      github: "https://github.com/udarshcodes/morsecode_encoder_decoder"
    }
  ];

  return (
    <section id="projects" className="container pt-4 pb-4">
      <div className="metadata mb-1 reveal">SECTION 02</div>
      <h2 className="section-heading rule-thick-bottom pb-2 mb-8 reveal">Field Notes & Dispatches</h2>

      {/* Flagship Dispatch */}
      <div className="editorial-grid reveal delay-1 mb-8">
        <div className="col-span-12 dispatch rule-top rule-bottom rule-left rule-right">
          <div className="dispatch-meta">
            <span className="metadata">AUTONOMOUS AI SECURITY</span>
          </div>
          <h3 className="dispatch-title">CodeSentinel</h3>
          <div className="editorial-grid" style={{ gap: '1.5rem', marginTop: '1rem' }}>
            <div className="col-span-7">
              <p className="body-text-lg">
                A LangGraph powered multi agent system that analyzes repositories, investigates vulnerabilities, generates patches, validates fixes, and automates GitHub workflows. Combines deterministic static analysis with LLM driven reasoning and retrieval based context.
              </p>
              <div className="dispatch-tech mt-4">
                <span>Python</span><span>LangGraph</span><span>Groq</span><span>ChromaDB</span><span>tree sitter</span>
              </div>
            </div>
            <div className="col-span-5 flex-col" style={{ justifyContent: 'flex-end', gap: '0.5rem' }}>
              <a href="https://salmon-ground-0362fac00.7.azurestaticapps.net/" target="_blank" rel="noreferrer" className="dispatch-link">LIVE DEMONSTRATION →</a>
              <a href="https://github.com/udarshcodes/codesentinel" target="_blank" rel="noreferrer" className="dispatch-link" style={{ color: 'var(--ink)' }}>READ REPOSITORY →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="metadata mb-2 reveal">FEATURED PROJECTS</div>
      <div className="editorial-grid mb-8 reveal">
        {featuredProjects.map((proj, idx) => (
          <div key={idx} className="col-span-6 dispatch rule-top rule-bottom rule-left rule-right">
            <div className="dispatch-meta">
              <span className="metadata">{proj.subtitle}</span>
            </div>
            <h3 className="dispatch-title">{proj.title}</h3>
            <p className="body-text mb-4" style={{ flexGrow: 1 }}>{proj.hook}</p>
            <div className="dispatch-tech">
              {proj.tags.map((tag, tIdx) => (
                <span key={tIdx}>{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-4" style={{ flexWrap: 'wrap' }}>
              {proj.demo && <a href={proj.demo} target="_blank" rel="noreferrer" className="dispatch-link" style={{ margin: 0 }}>OPEN PROJECT →</a>}
              <a href={proj.github} target="_blank" rel="noreferrer" className="dispatch-link" style={{ margin: 0, color: 'var(--ink)' }}>GITHUB →</a>
            </div>
          </div>
        ))}
      </div>

      {/* Foundational Projects */}
      <div className="metadata mb-2 reveal">FOUNDATIONAL ARCHITECTURE</div>
      <div className="editorial-grid mb-8 reveal">
        {foundationalProjects.map((proj, idx) => (
          <div key={idx} className="col-span-6 dispatch rule-top rule-bottom rule-left rule-right">
            <div className="dispatch-meta">
              <span className="metadata">{proj.subtitle}</span>
            </div>
            <h3 className="dispatch-title">{proj.title}</h3>
            <p className="body-text mb-4" style={{ flexGrow: 1 }}>{proj.hook}</p>
            <div className="dispatch-tech">
              {proj.tags.map((tag, tIdx) => (
                <span key={tIdx}>{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-4" style={{ flexWrap: 'wrap' }}>
              {proj.demo && <a href={proj.demo} target="_blank" rel="noreferrer" className="dispatch-link" style={{ margin: 0 }}>OPEN PROJECT →</a>}
              <a href={proj.github} target="_blank" rel="noreferrer" className="dispatch-link" style={{ margin: 0, color: 'var(--ink)' }}>GITHUB →</a>
            </div>
          </div>
        ))}
      </div>

      {/* Labs Projects */}
      <div className="metadata mb-2 reveal">LABS & EXPLORATIONS</div>
      <div className="editorial-grid mb-8 reveal">
        {labsProjects.map((proj, idx) => (
          <div key={idx} className="col-span-6 dispatch rule-top rule-bottom rule-left rule-right">
            <div className="dispatch-meta">
              <span className="metadata">{proj.subtitle}</span>
            </div>
            <h3 className="dispatch-title">{proj.title}</h3>
            <p className="body-text mb-4" style={{ flexGrow: 1 }}>{proj.hook}</p>
            <div className="dispatch-tech">
              {proj.tags.map((tag, tIdx) => (
                <span key={tIdx}>{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-4" style={{ flexWrap: 'wrap' }}>
              <a href={proj.github} target="_blank" rel="noreferrer" className="dispatch-link" style={{ margin: 0, color: 'var(--ink)' }}>GITHUB →</a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
