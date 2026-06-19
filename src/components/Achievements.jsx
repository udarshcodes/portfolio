export default function Achievements() {
  const achievements = [
    {
      title: "Top 10 — Nerds AI Quest 2.0",
      org: "Nerds AI Quest",
      date: "January 2026",
      desc: "Placed in the Top 10 out of a large competitive field in an AI-focused challenge that tested applied machine learning, prompt engineering, and problem-solving skills."
    },
    {
      title: "Google Student Ambassador",
      org: "Google",
      date: "April 2026",
      desc: "Officially selected and recognised as a Google Student Ambassador (GID: 5745) — a program reserved for student leaders who represent Google technologies and programs on campus."
    },
    {
      title: "Summer Research Internship — IIT Ropar",
      org: "IIT Ropar",
      date: "May 2026",
      desc: "Selected for a research internship at one of India's premier IITs, working on applied AI and machine learning projects under faculty guidance."
    },
    {
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      org: "Oracle",
      date: "October 2025 (valid till Oct 2027)",
      desc: "Industry-recognised certification validating foundational knowledge of AI and machine learning concepts on Oracle Cloud Infrastructure."
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
      org: "Oracle",
      date: "October 2025 (valid till Oct 2027)",
      desc: "Professional-level certification from Oracle validating expertise in Generative AI concepts, large language models, and OCI AI services."
    },
    {
      title: "IIT Madras Shaastra — Building and Experimenting with LLMs Workshop",
      org: "IIT Madras",
      date: "January 2026",
      desc: "Completed a hands-on workshop at IIT Madras Shaastra covering LLM architecture, fine-tuning techniques, prompt engineering, and practical experimentation with open-source models."
    }
  ];

  return (
    <section id="achievements" className="container">
      <h2 className="section-title">Achievements</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
        {achievements.map((item, idx) => (
          <div key={idx} className="card" style={{ padding: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <h3 style={{ margin: 0, fontSize: "1.05rem", color: "var(--text-primary)", lineHeight: 1.4 }}>{item.title}</h3>
              <span className="chip" style={{ background: "transparent", borderColor: "var(--border)", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>{item.date}</span>
            </div>
            <div style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.org}</div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.7", margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
