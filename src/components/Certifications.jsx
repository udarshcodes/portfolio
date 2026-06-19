export default function Certifications() {
  const certs = [
    {
      title: "OCI AI Foundations Associate",
      org: "Oracle",
      badge: "/images/oracle-ai-foundations-badge.png",
      file: "/pdf/OCI_FOUNDATIONS_ASSOCIATE.pdf",
      note: "Valid till Oct 2027"
    },
    {
      title: "OCI Generative AI Professional",
      org: "Oracle",
      badge: "/images/oracle-genai-badge.png",
      file: "/pdf/OCI_PROFESSIONAL.pdf",
      note: "Valid till Oct 2027"
    },
    {
      title: "C# Classes, Properties & Methods",
      org: "Microsoft Applied Skills",
      badge: null,
      file: "/pdf/MS CERT.pdf",
      note: "Oct 2025"
    },
    {
      title: "Cybersecurity Threats, Attacks & Mitigations",
      org: "Microsoft",
      badge: null,
      file: "/pdf/DESCRIBE_BASIS_CYBERSECURITY_THREATS.pdf",
      note: "Oct 2025"
    },
    {
      title: "Explore Generative AI",
      org: "Microsoft",
      badge: null,
      file: "/pdf/EXPLORE_GEN_AI.pdf",
      note: "Oct 2025"
    },
    {
      title: "Get Started with Microsoft Copilot",
      org: "Microsoft",
      badge: null,
      file: "/pdf/GET_STARTED_WITH_MSCOPILOT.pdf",
      note: "Oct 2025"
    },
    {
      title: "Write Effective Prompts",
      org: "Microsoft",
      badge: null,
      file: "/pdf/WRITE_EFFECTIVE_PROMPT.pdf",
      note: "Oct 2025"
    },
    {
      title: "Prompt to Prototype",
      org: "Google for Startups Startup School",
      badge: null,
      file: null,
      note: "Dec 2025",
      link: "https://startupschool.google"
    },
    {
      title: "Building and Experimenting with LLMs Workshop",
      org: "IIT Madras Shaastra",
      badge: null,
      file: null,
      note: "Jan 2026"
    },
    {
      title: "Python Basic",
      org: "HackerRank",
      badge: null,
      file: null,
      note: "Jul 2025",
      link: "https://www.hackerrank.com/certificates"
    },
    {
      title: "CSS Basic",
      org: "HackerRank",
      badge: null,
      file: null,
      note: "Sep 2025",
      link: "https://www.hackerrank.com/certificates"
    },
    {
      title: "Azure Fundamentals (AI-900 track)",
      org: "Microsoft Azure",
      badge: null,
      file: "/pdf/AZURE.pdf",
      note: "2025"
    },
    {
      title: "DevTown Certification",
      org: "DevTown",
      badge: null,
      file: "/pdf/DEVTOWN.pdf",
      note: "2025"
    }
  ];

  return (
    <section id="certifications" className="container">
      <h2 className="section-title">Certifications</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {certs.map((cert, idx) => {
          const Wrapper = cert.file || cert.link ? "a" : "div";
          const href = cert.file ? cert.file : cert.link;
          return (
            <Wrapper key={idx} href={href} target={href ? "_blank" : undefined} rel={href ? "noreferrer" : undefined} className="card" style={{ padding: "1.5rem", display: "flex", alignItems: "center", gap: "1.5rem", textDecoration: "none" }}>
              {cert.badge ? (
                 <img src={cert.badge} alt={cert.title} style={{ width: "50px", height: "50px", objectFit: "contain" }} />
              ) : (
                 <div style={{ minWidth: "50px", height: "50px", borderRadius: "50%", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", fontSize: "1.5rem", fontWeight: 800 }}>
                   {cert.org.charAt(0)}
                 </div>
              )}
              <div>
                <h4 style={{ margin: "0 0 0.25rem 0", color: "var(--text-primary)", fontSize: "0.95rem" }}>{cert.title}</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>{cert.org}</span>
                  {cert.note && <span style={{ color: "var(--text-secondary)", fontSize: "0.75rem" }}>{cert.note}</span>}
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
