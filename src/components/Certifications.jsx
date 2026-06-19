export default function Certifications() {
  const certs = [
    { title: "OCI AI Foundations Associate", org: "Oracle", badge: "/images/oracle-ai-foundations-badge.png", file: "/pdf/OCI_FOUNDATIONS_ASSOCIATE.pdf" },
    { title: "OCI Generative AI Professional", org: "Oracle", badge: "/images/oracle-genai-badge.png", file: "/pdf/OCI_PROFESSIONAL.pdf" },
    { title: "CS50x + CS50P", org: "Harvard", file: null },
    { title: "Prompt to Prototype", org: "Google for Startups", file: null },
    { title: "Shaastra LLM Workshop", org: "IIT Madras", file: null },
    { title: "Applied Skills (4 Certs)", org: "Microsoft", file: "/pdf/MS CERT.pdf" },
    { title: "Python + CSS Basic", org: "HackerRank", file: null },
    { title: "Explore Gen AI", org: "DevTown", file: "/pdf/EXPLORE_GEN_AI.pdf" }
  ];

  return (
    <section id="certifications" className="container">
      <h2 className="section-title">Certifications</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {certs.map((cert, idx) => (
          <a key={idx} href={cert.file || "#"} target={cert.file ? "_blank" : "_self"} rel="noreferrer" className="card" style={{ padding: "1.5rem", display: "flex", alignItems: "center", gap: "1.5rem", textDecoration: "none" }}>
            {cert.badge ? (
               <img src={cert.badge} alt={cert.title} style={{ width: "50px", height: "50px", objectFit: "contain" }} />
            ) : (
               <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", fontSize: "1.5rem", fontWeight: 800 }}>
                 {cert.org.charAt(0)}
               </div>
            )}
            <div>
              <h4 style={{ margin: "0 0 0.25rem 0", color: "var(--text-primary)", fontSize: "0.95rem" }}>{cert.title}</h4>
              <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>{cert.org}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
