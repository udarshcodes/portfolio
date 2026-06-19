export default function Skills() {
  const categories = [
    { name: "Programming Languages", skills: ["Python", "R", "C", "C++", "Java", "HTML", "CSS", "JavaScript", "TypeScript", "C#", "Matlab"] },
    { name: "Frameworks & Libraries", skills: ["React.js", "Django", "Flask", "FastAPI", "Express.js", "Node.js", "MongoDB", "Scikit-learn", "Firebase"] },
    { name: "AI/ML & Domains", skills: ["Machine Learning", "Deep Learning", "Image Processing", "LangGraph", "Groq", "ChromaDB", "tree-sitter", "Data Structures & Algorithms"] },
    { name: "Cloud & Systems", skills: ["Linux", "Azure VM", "Vercel", "WSL2"] },
    { name: "Tools", skills: ["Git", "Semgrep", "Vite", "Jest"] }
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
