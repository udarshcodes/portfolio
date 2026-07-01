import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="container" style={{ paddingBottom: "3rem" }}>
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="card flex-col flex-align-center text-center" style={{ padding: "4rem 2rem" }}>
        <div className="badge-pill" style={{ marginBottom: "2rem" }}>
          <span className="badge-dot"></span>
          Open to opportunities
        </div>
        
        <h3 style={{ fontSize: "2.5rem", color: "var(--text-primary)", margin: "0 0 1.5rem 0" }}>Let's build something great.</h3>
        <p className="text-muted" style={{ maxWidth: "600px", marginBottom: "3rem" }}>
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
        </p>

        <a href="mailto:udarshgoyal3@gmail.com" className="btn btn-primary" style={{ fontSize: "1.1rem", padding: "1rem 2.5rem", marginBottom: "3rem" }}>
          <FaEnvelope style={{ marginRight: "0.5rem" }} /> Say Hello
        </a>

        <div className="flex-wrap flex-center gap-8 text-muted">
           <div className="flex-center gap-2"><FaMapMarkerAlt color="var(--accent)" /> Chennai</div>
           <a href="https://github.com/udarshcodes" target="_blank" rel="noreferrer" className="flex-center gap-2" style={{ transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}><FaGithub color="var(--accent)" /> GitHub</a>
           <a href="https://www.linkedin.com/in/udarsh-goyal-256095383/" target="_blank" rel="noreferrer" className="flex-center gap-2" style={{ transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}><FaLinkedin color="var(--accent)" /> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
