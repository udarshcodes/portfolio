export default function Achievements() {
  const achievements = [
    {
      title: "Selected — Google Student Ambassador (GID 5745)",
      org: "Google",
      date: "April 2026",
      desc: "Officially selected and recognised as a Google Student Ambassador — a program reserved for student leaders who represent Google technologies and programs on campus."
    },
    {
      title: "Selected — Summer Research Internship",
      org: "IIT Ropar",
      date: "May 2026",
      desc: "Selected for a research internship at one of India's premier IITs, working on applied AI and machine learning projects under faculty guidance."
    },
    {
      title: "Top 10 — Nerds AI Quest 2.0",
      org: "Nerds AI Quest",
      date: "January 2026",
      desc: "Placed in the Top 10 out of a large competitive field in an AI-focused challenge that tested applied machine learning, prompt engineering, and problem-solving skills."
    },
    {
      title: "Open Source Contributor — 8 Merged Pull Requests",
      org: "Open Source",
      date: "Ongoing",
      desc: "Contributed to vicharanashala/cs9, HackclubVIT/hc-main-website, SugeethJSA/cyscom-finalised-upgraded-website, and Gowreesh-VT/FFCS-Timetable. Shipped UI overhauls, admin portal features, and performance fixes across four active repositories, spanning React, Next.js, and full stack feature work."
    }
  ];

  return (
    <section id="achievements" className="container">
      <h2 className="section-title">Achievements</h2>
      <div className="grid-320 gap-8">
        {achievements.map((item, idx) => (
          <div key={idx} className="card" style={{ padding: "2rem" }}>
            <div className="flex-between flex-wrap gap-2 align-start" style={{ marginBottom: "0.75rem" }}>
              <h3 style={{ margin: 0, fontSize: "1.05rem", color: "var(--text-primary)", lineHeight: 1.4 }}>{item.title}</h3>
              <span className="chip" style={{ background: "transparent", borderColor: "var(--border)", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>{item.date}</span>
            </div>
            <div style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.org}</div>
            <p className="text-muted-sm" style={{ margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
