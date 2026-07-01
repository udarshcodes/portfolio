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
      skills: ["Machine Learning", "Deep Learning", "LangGraph", "Groq", "tree-sitter", "ChromaDB", "Prompt Engineering", "Generative AI", "LLM Fine-tuning", "Scikit-learn", "Hugging Face", "OpenCV", "Qiskit"]
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
    <section id="skills" className="container">
      <h2 className="section-title">Skills</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
        {categories.map((cat, idx) => (
          <div key={idx} className="card" style={{ padding: "1.5rem" }}>
            <h3 style={{ color: "var(--accent)", margin: "0 0 1.5rem 0", fontSize: "1.2rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}>
              {cat.name}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="chip" style={{ background: "transparent", borderColor: "var(--border)", color: "var(--text-primary)" }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
