export default function Achievements() {
  const achievements = [
    {
      title: "Top 45 / 818 Teams — Smart India Hackathon",
      org: "Smart India Hackathon, VIT Chennai",
      date: "August 2026",
      desc: "Cleared two selection rounds at VIT Chennai's internal Smart India Hackathon screening — advanced from 818 teams to the top 201 after an idea pitching round judged on concept, then to the final 45 after a 24 hour build round presented live to judges."
    },
    {
      title: "2nd Place — Nerds AI Quest 2.0",
      org: "Nerds AI Quest, [CONFIRM INSTITUTION NAME]",
      date: "January 2026",
      desc: "Placed 2nd out of 815 participants in a national AI challenge hosted on Unstop, testing applied machine learning, prompt engineering, and problem solving under time pressure."
    },
    {
      title: "Open Source Contributor — 10 Merged Pull Requests",
      org: "Open Source",
      date: "Ongoing",
      desc: "Contributed to multiple major open source repositories including the main HackClub website, the CYSCOM upgraded portal, the FFCS Timetable system, the MIC official website, and AI Hub. Shipped UI overhauls, admin portal features, auth systems, and performance fixes."
    },
    {
      title: "Selected — TechnoVIT'26 Website Committee",
      org: "VIT Chennai",
      date: "August 2026",
      desc: "Selected as a Website Committee member/volunteer for TechnoVIT'26, VIT Chennai's annual technical fest, out of 60+ applicants."
    }
  ];

  return (
    <section id="achievements" className="container pt-4 pb-4">
      <div className="metadata mb-1 reveal">SECTION 06</div>
      <h2 className="section-heading rule-thick-bottom pb-2 mb-8 reveal">Honors & Achievements</h2>
      
      <div className="editorial-grid">
        {achievements.map((item, idx) => (
          <div key={idx} className={`col-span-6 rule-top rule-bottom rule-left rule-right achievement-card reveal delay-${(idx % 3) + 1}`} style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            <div className="metadata mb-4 flex justify-between" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
              <span>NO. 0{idx + 1}</span>
              <span>{item.date}</span>
            </div>
            <h3 className="dispatch-title" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', marginBottom: '0.5rem' }}>
              {item.title}
            </h3>
            <div className="metadata mb-4" style={{ color: 'var(--stamp)' }}>{item.org}</div>
            <p className="body-text" style={{ fontSize: '1rem' }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
