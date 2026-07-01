import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar({ theme, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" }
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header>
      <div className="container nav-container">
        <div className="logo" style={{ cursor: "pointer" }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Udarsh Goyal.
        </div>

        <nav className="nav-links">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="https://github.com/udarshcodes" target="_blank" rel="noreferrer" className="icon-btn hide-on-mobile">
            <FaGithub size={16} />
          </a>
          <a href="https://www.linkedin.com/in/udarsh-goyal-256095383/" target="_blank" rel="noreferrer" className="icon-btn hide-on-mobile">
            <FaLinkedin size={16} />
          </a>
          <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <button 
            className="icon-btn mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", justifyContent: "center" }}>
            <a href="https://github.com/udarshcodes" target="_blank" rel="noreferrer" className="icon-btn">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/udarsh-goyal-256095383/" target="_blank" rel="noreferrer" className="icon-btn">
              <FaLinkedin size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
