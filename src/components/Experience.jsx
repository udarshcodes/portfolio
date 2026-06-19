export default function Experience() {
  const experiences = [
    {
      role: "Summer Research Intern",
      org: "IIT Ropar",
      date: "May 2024 - Present",
      impact: "Researching advanced Generative AI architectures and evaluating LLM performance metrics."
    },
    {
      role: "Google Student Ambassador",
      org: "Google",
      date: "Aug 2023 - Present",
      impact: "Evangelizing Google Cloud and leading campus-wide technical workshops for 500+ students."
    },
    {
      role: "Core Committee Member",
      org: "Microsoft Innovations Club VITC",
      date: "Dec 2022 - Present",
      impact: "Organized national-level hackathons and mentored freshmen in modern web development."
    },
    {
      role: "Technical Lead",
      org: "HackClub VIT Chennai",
      date: "Feb 2023 - Present",
      impact: "Architected internal club portals and guided teams in building open-source projects."
    },
    {
      role: "Member",
      org: "CYSCOM VIT Chennai",
      date: "Oct 2022 - Present",
      impact: "Participated in CTF challenges and contributed to cybersecurity awareness campaigns."
    }
  ];

  return (
    <section id="experience" className="container">
      <h2 className="section-title">Experience</h2>
      <div className="card" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "0.5rem", gap: "1rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.2rem", color: "var(--text-primary)" }}>{exp.role}</h3>
                <span className="chip" style={{ background: "transparent", borderColor: "var(--border)", color: "var(--text-secondary)" }}>{exp.date}</span>
              </div>
              <h4 style={{ margin: "0 0 1rem 0", color: "var(--accent)", fontSize: "1rem", fontWeight: 500 }}>{exp.org}</h4>
              <p style={{ margin: 0, color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>{exp.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
