import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { SiPytorch, SiTensorflow, SiDjango, SiMongodb } from "react-icons/si";

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
            I am a Computer Science undergraduate with a deep passion for Machine Learning, Generative AI, and Full-Stack Development. My journey started with building simple web interfaces and has evolved into orchestrating complex multi-agent LangGraph pipelines and conducting academic research.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
            When I'm not coding, I'm participating in hackathons, exploring the latest models on Hugging Face, or organizing tech events as a core member of multiple university clubs.
          </p>
        </div>

        <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <h3 style={{ margin: "0 0 1.5rem 0", color: "var(--text-primary)" }}>Core Technologies</h3>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontSize: "2.5rem", color: "var(--text-secondary)" }}>
               <FaPython title="Python" />
               <FaReact title="React" />
               <FaNodeJs title="Node.js" />
               <SiDjango title="Django" />
               <SiPytorch title="PyTorch" />
               <SiTensorflow title="TensorFlow" />
               <SiMongodb title="MongoDB" />
            </div>
          </div>
          <div style={{ marginTop: "2rem", padding: "1rem", background: "rgba(168, 85, 247, 0.05)", borderRadius: "0.5rem", border: "1px solid rgba(168, 85, 247, 0.1)" }}>
            <strong style={{ color: "var(--accent)" }}>Fun Fact:</strong> I love experimenting with prompting techniques to make AI models break their own rules (ethically, of course).
          </div>
        </div>
      </div>
    </section>
  );
}
