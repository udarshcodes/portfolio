import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="container pb-12 reveal">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="card flex-col flex-align-center text-center contact-card">
        <div className="badge-pill mb-8">
          <span className="badge-dot"></span>
          Open to opportunities
        </div>
        
        <h3 className="contact-title">Let's build something great.</h3>
        <p className="text-muted max-w-600 mb-12">
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
        </p>

        <a href="mailto:udarshgoyal3@gmail.com" className="btn btn-primary btn-lg mb-12">
          <FaEnvelope style={{ marginRight: "0.5rem" }} /> Say Hello
        </a>

        <div className="flex-wrap flex-center gap-8 text-muted">
           <div className="flex-center gap-2"><FaMapMarkerAlt color="var(--accent)" /> Chennai</div>
           <a href="https://github.com/udarshcodes" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="flex-center gap-2 social-link-accent"><FaGithub color="var(--accent)" /> GitHub</a>
           <a href="https://www.linkedin.com/in/udarsh-goyal-256095383/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="flex-center gap-2 social-link-accent"><FaLinkedin color="var(--accent)" /> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
