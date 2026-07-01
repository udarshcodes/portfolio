import { FaReact, FaPython } from "react-icons/fa";
import { SiDjango, SiFastapi } from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="container reveal">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid-300 gap-12">
        <div className="card">
          <div className="flex-wrap gap-6 flex-align-center mb-6">
            <img 
              src="/images/udarsh.jpg" 
              alt="Udarsh Goyal" 
              className="avatar"
              width="100"
              height="100"
            />
            <div className="flex-wrap gap-4">
              <span className="badge-pill"><span className="badge-dot"></span> Summer Research Intern @ IIT Ropar</span>
              <span className="badge-pill"><span className="badge-dot"></span> Google Student Ambassador</span>
            </div>
          </div>
          
          <p className="text-muted mb-6">
            I am a Computer Science undergraduate at VIT Chennai with a deep focus on AI/ML systems, agentic pipelines, and full-stack engineering. I built CodeSentinel — a fully autonomous 10-agent LangGraph system for enterprise-level code review and patching. I am currently a Summer Research Intern at IIT Ropar and a Google Student Ambassador (GID 5745), and I actively contribute to Microsoft Innovations Club, HackClub, and CYSCOM at VIT Chennai.
          </p>
          <p className="text-muted">
            I completed the Meta Back-End Developer Professional Certificate on Coursera, covering Django, Django REST Framework, React, Advanced React, databases, and API design. I hold 13+ certifications from Oracle, Microsoft, Google, IIT Madras, and HackerRank. I compete in hackathons, experiment with open-source LLMs on Hugging Face, and help organise tech events on campus.
          </p>
        </div>

        <div className="card flex-col flex-between">
          <div>
            <h3 className="card-header-sm">Core Technologies</h3>
            <div className="flex-wrap gap-6 text-muted text-4xl flex-align-center">
               <FaPython title="Python" />
               <FaReact title="React" />
               <SiDjango title="Django" />
               <SiFastapi title="FastAPI" />
               <span className="chip chip-lg">LangGraph</span>
               <span className="chip chip-lg">Groq</span>
               <span className="chip chip-lg">tree-sitter</span>
            </div>
          </div>
          <div className="stat-container">
            <div className="flex-wrap gap-8 flex-center">
              <div className="stat-block">
                <div className="stat-number">10</div>
                <div className="stat-label">Agent Pipeline</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">13+</div>
                <div className="stat-label">Certifications</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">Top 10</div>
                <div className="stat-label">Nerds AI Quest</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
