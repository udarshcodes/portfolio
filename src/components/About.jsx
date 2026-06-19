import { FaReact, FaPython } from "react-icons/fa";
import { SiDjango, SiFastapi } from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="container">
      <h2 className="section-title">About Me</h2>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
        <div className="card">
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <img 
              src="/images/udarsh.jpg" 
              alt="Udarsh Goyal" 
              style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", border: "2px solid var(--accent)", boxShadow: "0 0 15px rgba(168, 85, 247, 0.2)" }} 
            />
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <span className="badge-pill"><span className="badge-dot"></span> Summer Research Intern @ IIT Ropar</span>
              <span className="badge-pill"><span className="badge-dot"></span> Google Student Ambassador</span>
            </div>
          </div>
          
          <p style={{ color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
            I am a Computer Science undergraduate at VIT Chennai with a deep focus on AI/ML systems, agentic pipelines, and full-stack engineering. I built CodeSentinel — a fully autonomous 10-agent LangGraph system for enterprise-level code review and patching. I am currently a Summer Research Intern at IIT Ropar and a Google Student Ambassador (GID 5745), and I actively contribute to Microsoft Innovations Club, HackClub, and CYSCOM at VIT Chennai.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
            I completed the Meta Back-End Developer Professional Certificate on Coursera, covering Django, Django REST Framework, React, Advanced React, databases, and API design. I hold 13+ certifications from Oracle, Microsoft, Google, IIT Madras, and HackerRank. I compete in hackathons, experiment with open-source LLMs on Hugging Face, and help organise tech events on campus.
          </p>
        </div>

        <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <h3 style={{ margin: "0 0 1.5rem 0", color: "var(--text-primary)" }}>Core Technologies</h3>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontSize: "2.5rem", color: "var(--text-secondary)", alignItems: "center" }}>
               <FaPython title="Python" />
               <FaReact title="React" />
               <SiDjango title="Django" />
               <SiFastapi title="FastAPI" />
               <span className="chip" style={{ fontSize: "1rem", padding: "0.5rem 1rem" }}>LangGraph</span>
               <span className="chip" style={{ fontSize: "1rem", padding: "0.5rem 1rem" }}>Groq</span>
               <span className="chip" style={{ fontSize: "1rem", padding: "0.5rem 1rem" }}>tree-sitter</span>
            </div>
          </div>
          <div style={{ marginTop: "2rem", padding: "1rem", background: "rgba(168, 85, 247, 0.05)", borderRadius: "0.5rem", border: "1px solid rgba(168, 85, 247, 0.1)" }}>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--accent)" }}>10</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>Agent Pipeline</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--accent)" }}>5+</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>Projects Built</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--accent)" }}>13+</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>Certifications</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--accent)" }}>Top 10</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>Nerds AI Quest</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
