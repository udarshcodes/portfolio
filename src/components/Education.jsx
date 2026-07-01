export default function Education() {
  return (
    <section id="education" className="container">
      <h2 className="section-title">Education</h2>
      <div className="card" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "0.5rem", gap: "1rem" }}>
              <h3 style={{ margin: 0, fontSize: "1.2rem", color: "var(--text-primary)" }}>
                B.Tech — Computer Science and Engineering
              </h3>
              <span className="chip" style={{ background: "transparent", borderColor: "var(--border)", color: "var(--text-secondary)" }}>
                Jul 2025 – 2029
              </span>
            </div>
            <h4 style={{ margin: "0 0 0.5rem 0", color: "var(--accent)", fontSize: "1rem", fontWeight: 500 }}>
              Vellore Institute of Technology, Chennai (VIT Chennai)
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.7", margin: 0 }}>
              Currently in second year. Coursework covers data structures, algorithms, computer networks,
              operating systems, database management, and machine learning. Actively involved in multiple
              technical clubs including Microsoft Innovations Club, HackClub, and CYSCOM alongside
              ongoing research and industry internships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
