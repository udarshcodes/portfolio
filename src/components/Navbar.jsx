import { Moon, Sun } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <header>
      <div className="container nav-container">
        <div className="logo" style={{ cursor: "pointer" }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Udarsh Goyal.
        </div>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certs</a>
        </nav>

        <div className="nav-actions">
          <a href="https://github.com/udarshcodes" target="_blank" rel="noreferrer" className="icon-btn">
            <FaGithub size={16} />
          </a>
          <a href="https://www.linkedin.com/in/udarsh-goyal-256095383/" target="_blank" rel="noreferrer" className="icon-btn">
            <FaLinkedin size={16} />
          </a>
          <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}
