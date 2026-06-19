export default function Experience() {
  const experiences = [
    {
      role: "Summer Research Intern",
      org: "Indian Institute of Technology, Ropar · Internship",
      date: "May 2026 - Present · 2 mos",
      location: "Punjab, India · Hybrid",
      skills: ""
    },
    {
      role: "Google Student Ambassador",
      org: "Google · Part-time",
      date: "Apr 2026 - Present · 3 mos",
      location: "Remote",
      skills: ""
    },
    {
      role: "Web Development and AI/ML Contributor",
      org: "Microsoft Innovations Club VITC · Part-time",
      date: "Oct 2025 - Present · 9 mos",
      location: "Chennai, Tamil Nadu, India · On-site",
      skills: "Prompt Engineering, Problem Solving and +5 skills"
    },
    {
      role: "Full Stack and AI/ML Contributor",
      org: "HackClub VIT Chennai · Part-time",
      date: "Sep 2025 - Present · 10 mos",
      location: "Chennai, Tamil Nadu, India · On-site",
      skills: "Problem Solving, Generative AI and +8 skills"
    },
    {
      role: "Technical Team Member",
      org: "CYSCOM VIT Chennai · Part-time",
      date: "Sep 2025 - Present · 10 mos",
      location: "Chennai, Tamil Nadu, India · On-site",
      skills: "Problem Solving, GitHub and +7 skills"
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
              <h4 style={{ margin: "0 0 0.5rem 0", color: "var(--accent)", fontSize: "1rem", fontWeight: 500 }}>{exp.org}</h4>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>{exp.location}</div>
              {exp.skills && <div style={{ color: "var(--text-primary)", fontSize: "0.9rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem" }}>❖ {exp.skills}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
