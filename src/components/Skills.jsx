import { useState } from "react";

export default function Skills() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const categories = [
    {
      name: "Programming Languages",
      skills: [
        "Python", "JavaScript", "C++", "C#", "HTML", "CSS", "SQL", "TypeScript", "C", "Java", "R", "Arduino"
      ]
    },
    {
      name: "Frontend",
      skills: [
        "React.js", "Next.js", "Vite", "Bootstrap", "Canvas API", "Responsive Design", 
        "Accessibility", "React Router", "Jinja2", "Vanilla JavaScript", "Tailwind CSS", 
        "Shadcn UI", "Framer Motion", "Context API", "CSS Animations", "PWA", "next intl", 
        "React Email", "browser image compression", "Web Serial API"
      ]
    },
    {
      name: "Backend & APIs",
      skills: [
        "FastAPI", "Flask", "REST APIs", "Groq API", "Supabase Auth", "Session Authentication", 
        "Django", "Django REST Framework", "Node.js", "Express.js", "WebSockets", "Server Sent Events", 
        "JWT Authentication", "Webhooks", "Gunicorn", "Uvicorn", "Sarvam AI API", "Firebase Authentication", 
        "Resend", "Supabase SSR", "Flask Session", "Werkzeug"
      ]
    },
    {
      name: "Databases",
      skills: [
        "PostgreSQL", "SQLite", "MongoDB", "MongoDB Vector Search", "Supabase", "ChromaDB", "SQL", 
        "Database Design", "Relational Database Design", "Vector Databases", "MySQL", "MongoDB Atlas", 
        "Firebase", "Normalization 3NF", "Django ORM", "Raw SQL"
      ]
    },
    {
      name: "AI / ML & Agentic Systems",
      skills: [
        "Machine Learning", "Natural Language Processing", "Computer Vision", "Generative AI", 
        "Large Language Models", "RAG", "Retrieval Augmented Generation", "AI Agents", "Multi Agent Systems", 
        "LangGraph", "Groq", "Prompt Engineering", "Scikit Learn", "Pandas", "OpenCV", "Qiskit", 
        "Tree Sitter", "Classical NLP", "Text Classification", "Sentiment Analysis", "Quantum Computing", 
        "3D Data Visualization", "Deep Learning", "LLM Fine Tuning", "LLM Integration", "Embeddings", 
        "Semantic Search", "Vector Search", "Hugging Face", "NumPy", "Sentence Transformers", "DBSCAN", 
        "OCR", "MCP", "Ollama", "DeepSeek", "Qwen", "Sarvam AI", "Quantum Gate Simulation", "Dash", 
        "Plotly", "Tesseract.js"
      ]
    },
    {
      name: "Cloud & DevOps",
      skills: [
        "Azure Static Web Apps", "Render", "GitHub Actions", "Git", "GitHub", "Linux", "WSL2", "Azure VM", 
        "Azure Container Apps", "Vercel", "Google Cloud Run", "GitHub Pages", "Docker", "CI/CD", 
        "Infrastructure as Code", "Render Blueprint", "Azure Deployment", "Cloud Deployment"
      ]
    },
    {
      name: "Testing & Security Tooling",
      skills: [
        "ESLint", "Postman", "Chrome DevTools", "Semgrep", "Security Analysis", 
        "Static Application Security Testing", "Jest", "React Testing Library", "pytest", "Bandit", 
        "Flake8", "Pylint", "SonarQube", "Go Vet", "Cargo Clippy", "Dependency Vulnerability Scanning", 
        "API Testing"
      ]
    }
  ];

  return (
    <section id="skills" className="container pt-4 pb-4">
      <div className="metadata mb-1 reveal">SECTION 03</div>
      <h2 className="section-heading rule-thick-bottom pb-2 mb-8 reveal">Technical Competencies</h2>
      
      <div className="skills-accordion reveal delay-1">
        {categories.map((cat, idx) => {
          const numStr = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className={`skills-acc-item${isOpen ? ' skills-acc-item--open' : ''}`}>
              <button 
                className="skills-acc-trigger"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
              >
                <div className="skills-acc-left">
                  <span className="skills-acc-num">{numStr}</span>
                  <h3 className="skills-acc-name">{cat.name}</h3>
                </div>
                <div className="skills-acc-right">
                  <span className="skills-acc-count">{cat.skills.length} skills</span>
                  <span className={`skills-acc-icon${isOpen ? ' skills-acc-icon--open' : ''}`}>+</span>
                </div>
              </button>
              <div className={`skills-acc-panel${isOpen ? ' skills-acc-panel--open' : ''}`}>
                <div className="skills-acc-panel-inner">
                  <div className="skills-chips">
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skills-chip">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
