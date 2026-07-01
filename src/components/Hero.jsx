import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section id="home" className="container flex-col flex-center min-h-screen pt-24">
      <div className="text-center animate-fade-in flex-col flex-align-center w-full">

        <div className="badge-pill delay-1 mb-6">
          <span className="badge-dot"></span>
          Available for opportunities
        </div>

        <h1 className="hero-title delay-2" aria-label="Udarsh Goyal">
          Udarsh<br />Goyal.
        </h1>

        <div className="delay-3 hero-typewriter">
          <Typewriter
            options={{
              strings: ['CS Undergrad @ VIT Chennai', 'AI/ML Researcher @ IIT Ropar', 'Builder of CodeSentinel', 'Google Student Ambassador', 'Full-Stack Developer'],
              autoStart: true,
              loop: true,
              delay: 30,
              deleteSpeed: 15
            }}
          />
        </div>

        <div className="flex-wrap flex-center gap-6 delay-3 mb-12">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Hire Me / Contact
          </a>
          <a href="/pdf/OCI_FOUNDATIONS_ASSOCIATE.pdf" download className="btn btn-outline flex-align-center gap-2">
            <FiFileText /> Download Resume
          </a>
        </div>

        <div className="flex-center gap-6 delay-3 text-muted-sm">
          <a href="https://github.com/udarshcodes" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="flex-center gap-2 social-link">
            <span className="icon-btn icon-lg"><FaGithub size={16} /></span>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/udarsh-goyal-256095383/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="flex-center gap-2 social-link">
            <span className="icon-btn icon-lg"><FaLinkedin size={16} /></span>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
