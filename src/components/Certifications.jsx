export default function Certifications() {
  const certs = [
    {
      title: "OCI Generative AI Professional",
      org: "Oracle",
      logoDomain: "oracle.com",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C1FD30C170AC9404C85A3DB2494DC7F2C7CB7F28AAE24331D42E807FF8C3C73F",
      note: "Valid till Oct 2027"
    },
    {
      title: "OCI AI Foundations Associate",
      org: "Oracle",
      logoDomain: "oracle.com",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D58F99D1651D2A343A897612FEFCC6BBF59E71CDD3AE9C8807FE967E0E832356",
      note: "Valid till Oct 2027"
    },
    {
      title: "Harvard CS50x",
      org: "Harvard University (via edX)",
      logoDomain: "harvard.edu",
      link: "https://certificates.cs50.io/03151a38-8bcc-4fad-a62d-be78d665636f.pdf?size=letter",
      note: ""
    },
    {
      title: "Harvard CS50P",
      org: "Harvard University (via edX)",
      logoDomain: "harvard.edu",
      link: "https://certificates.cs50.io/9e4da3bf-acdf-4c38-b286-2fa2353507ef.pdf?size=letter",
      note: ""
    },
    {
      title: "Azure Fundamentals (AI-900 track)",
      org: "Microsoft Azure",
      logoDomain: "azure.microsoft.com",
      link: "https://drive.google.com/file/d/1bDrhmJokjnfb4c9slEKqaIE1S0LU8SAJ/view?usp=sharing",
      note: "2025"
    },
    {
      title: "McKinsey Forward Program, Core Skills Badge",
      org: "McKinsey & Company",
      logoDomain: null,
      logoUrl: "https://github.com/mckinsey.png",
      link: "https://www.credly.com/badges/1e4a2d88-179b-48ab-bb50-8eb6d796ba76/public_url",
      note: ""
    },
    {
      title: "Building AI-Powered Search with MongoDB Vector Search",
      org: "MongoDB",
      logoDomain: "mongodb.com",
      link: "https://www.credly.com/badges/d27f3baf-b445-4e01-8903-436e2099b595/public_url",
      note: "Jun 2024"
    },
    {
      title: "Building RAG Apps Using MongoDB",
      org: "MongoDB",
      logoDomain: "mongodb.com",
      link: "https://www.credly.com/badges/776ab8a2-39b0-4711-91e6-f9fc47afe080/public_url",
      note: "Jun 2024"
    },
    {
      title: "MongoDB Overview: Core Concepts and Architecture",
      org: "MongoDB",
      logoDomain: "mongodb.com",
      link: "https://www.credly.com/badges/4a0b732e-73bb-46a7-9391-5c8b63396cd8/public_url",
      note: "Jun 2024"
    },
    {
      title: "Advanced React",
      org: "Meta",
      logoDomain: "meta.com",
      link: "https://www.coursera.org/account/accomplishments/verify/UG3TO1ER83AM",
      note: "May 2024"
    },
    {
      title: "Django Web Framework",
      org: "Meta",
      logoDomain: "meta.com",
      link: "https://www.coursera.org/account/accomplishments/verify/NYAIQQPO88W5",
      note: "Jun 2024"
    },
    {
      title: "APIs",
      org: "Meta",
      logoDomain: "meta.com",
      link: "https://www.coursera.org/account/accomplishments/verify/XMN6KMWKYRSU",
      note: "Jun 2024"
    },
    {
      title: "Introduction to Databases for Back-End Development",
      org: "Meta",
      logoDomain: "meta.com",
      link: "https://www.coursera.org/account/accomplishments/verify/OWLWR18DV9J1",
      note: "Jun 2024"
    },
    {
      title: "React Basics",
      org: "Meta",
      logoDomain: "meta.com",
      link: "https://www.coursera.org/account/accomplishments/verify/LU96Z6VFB3DE",
      note: "May 2024"
    },
    {
      title: "Programming with JavaScript",
      org: "Meta",
      logoDomain: "meta.com",
      link: "https://www.coursera.org/account/accomplishments/verify/9V0WSO3W992X",
      note: "May 2024"
    },
    {
      title: "Version Control",
      org: "Meta",
      logoDomain: "meta.com",
      link: "https://www.coursera.org/account/accomplishments/verify/XAEXZPCRPUXV",
      note: "May 2024"
    },
    {
      title: "HTML and CSS in depth",
      org: "Meta",
      logoDomain: "meta.com",
      link: "https://www.coursera.org/account/accomplishments/verify/9140OX4LBUG1",
      note: "May 2024"
    },
    {
      title: "Introduction to Front-End Development",
      org: "Meta",
      logoDomain: "meta.com",
      link: "https://www.coursera.org/account/accomplishments/verify/CXKD6K9X7ZZD",
      note: "May 2024"
    },
    {
      title: "C# Classes, Properties & Methods",
      org: "Microsoft Applied Skills",
      logoDomain: "microsoft.com",
      link: "https://drive.google.com/file/d/13uVTMEwqs0p1ZtWed5N0MtdwJX8cGOBJ/view",
      note: "Oct 2025"
    },
    {
      title: "Cybersecurity Threats, Attacks & Mitigations",
      org: "Microsoft",
      logoDomain: "microsoft.com",
      link: "https://drive.google.com/file/d/17Xmyn9ttBIJ8dfaYZf8FxLFmY7FOnRzY/view?usp=sharing",
      note: "Oct 2025"
    },
    {
      title: "Building and Experimenting with LLMs Workshop",
      org: "IIT Madras Shaastra",
      logoDomain: null,
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg",
      link: "https://drive.google.com/file/d/1kqA4aU8XLpT9kWEnlLQqpWd1uT9y4TS9/view?usp=sharing",
      note: "Jan 2026"
    },
    {
      title: "Prompt to Prototype",
      org: "Google for Startups Startup School",
      logoDomain: "google.com",
      note: "Dec 2025",
      link: "https://drive.google.com/file/d/1mLvpoq2as-UJqdCQRhTaaHUXK3D6EAQC/view?usp=sharing"
    },
    {
      title: "Explore Generative AI",
      org: "Microsoft",
      logoDomain: "microsoft.com",
      link: "https://drive.google.com/file/d/16NrSiYC1LN-c7YovYjQpUCj355l1f6xF/view?usp=sharing",
      note: "Oct 2025"
    },
    {
      title: "Get Started with Microsoft Copilot",
      org: "Microsoft",
      logoDomain: "microsoft.com",
      link: "https://drive.google.com/file/d/1TzXufBRV0tC3wOqkA1Kv3K4gxH-kfbHq/view?usp=sharing",
      note: "Oct 2025"
    },
    {
      title: "Write Effective Prompts",
      org: "Microsoft",
      logoDomain: "microsoft.com",
      link: "https://drive.google.com/file/d/1jSI4abarirTK002-qJXbscXXXbvcFyPm/view?usp=sharing",
      note: "Oct 2025"
    },
    {
      title: "Python Basic",
      org: "HackerRank",
      logoDomain: "hackerrank.com",
      note: "Jul 2025",
      link: "https://www.hackerrank.com/certificates/b1da9ee1971e"
    },
    {
      title: "CSS Basic",
      org: "HackerRank",
      logoDomain: "hackerrank.com",
      note: "Sep 2025",
      link: "https://www.hackerrank.com/certificates/f90ca0c58823"
    },
    {
      title: "DevTown Certification",
      org: "DevTown",
      logoDomain: null,
      logoUrl: "https://github.com/Devtown-India.png",
      link: "https://drive.google.com/file/d/1lAfkY-jLC2bUdENxUlS2-TKiBbFcKNwO/view?usp=sharing",
      note: "2025"
    }
  ];

  return (
    <section id="certifications" className="container">
      <h2 className="section-title">Certifications</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {certs.map((cert, idx) => {
          const Wrapper = cert.link ? "a" : "div";
          const href = cert.link;
          return (
            <Wrapper key={idx} href={href} target={href ? "_blank" : undefined} rel={href ? "noreferrer" : undefined} className="card" style={{ padding: "1.5rem", display: "flex", alignItems: "center", gap: "1.5rem", textDecoration: "none" }}>
              {cert.logoUrl ? (
                 <div style={{ minWidth: "50px", height: "50px", borderRadius: "12px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "6px" }}>
                   <img src={cert.logoUrl} alt={cert.org} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                 </div>
              ) : cert.logoDomain ? (
                 <div style={{ minWidth: "50px", height: "50px", borderRadius: "12px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "6px" }}>
                   <img src={`https://www.google.com/s2/favicons?domain=${cert.logoDomain}&sz=128`} alt={cert.org} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                 </div>
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
