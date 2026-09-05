export default function Skills() {
  const categories = [
    {
      name: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C", "C++", "Java", "C#", "HTML", "CSS", "SQL", "R"]
    },
    {
      name: "Frontend",
      skills: ["React.js", "Next.js", "Vite", "Bootstrap", "Tailwind CSS", "CSS Animations", "Canvas API", "Responsive Design", "Accessibility (a11y)", "React Router", "Context API"]
    },
    {
      name: "Backend & APIs",
      skills: ["Django", "Django REST Framework", "FastAPI", "Flask", "Node.js", "Express.js", "REST APIs", "JWT Auth", "Session Auth", "WebSockets"]
    },
    {
      name: "Databases",
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Firebase", "Supabase", "ChromaDB", "SQL (DDL/DML/DQL)", "Relational DB Design", "Normalization (3NF)", "Django ORM"]
    },
    {
      name: "AI / ML & Agentic Systems",
      skills: ["Machine Learning", "Deep Learning", "LangGraph", "Groq", "tree sitter", "ChromaDB", "Prompt Engineering", "Generative AI", "LLM Fine tuning", "Scikit learn", "Hugging Face", "OpenCV", "Qiskit"]
    },
    {
      name: "Cloud & DevOps",
      skills: ["Azure VM", "Azure Container Apps", "Azure Static Web Apps", "Vercel", "GitHub Pages", "WSL2", "Linux", "Docker (basics)", "Semgrep", "Git", "GitHub"]
    },
    {
      name: "Testing & Tooling",
      skills: ["Jest", "React Testing Library", "Vite", "ESLint", "Postman", "Chrome DevTools"]
    }
  ];

  return (
    <section id="skills" className="container pt-4 pb-4">
      <div className="metadata mb-1 reveal">SECTION 03</div>
      <h2 className="section-heading rule-thick-bottom pb-2 mb-8 reveal">Technical Competencies</h2>
      
      <div className="skills-columns">
        {categories.map((cat, idx) => {
          const numStr = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
          return (
            <div key={idx} className={`rule-top rule-bottom py-4 mb-6 reveal delay-${(idx % 3) + 1}`} style={{ paddingRight: '1rem', breakInside: 'avoid', pageBreakInside: 'avoid' }}>
              <h3 className="dispatch-title uppercase" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', marginBottom: '1rem' }}>
                <span className="font-mono text-ink-soft mr-2">{numStr} /</span> {cat.name}
              </h3>
              <p className="body-text font-sans" style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, fontWeight: 500 }}>
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx}>
                    <span className="skill-inline-item cursor-default">{skill}</span>
                    {sIdx < cat.skills.length - 1 && (
                      <span style={{ color: 'var(--stamp)', margin: '0 0.5rem' }}>·</span>
                    )}
                    {" "}
                  </span>
                ))}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
