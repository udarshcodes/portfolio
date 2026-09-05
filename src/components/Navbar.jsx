import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ theme, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show only if theme is light and not dismissed in this session
    if (theme === "light" && !sessionStorage.getItem("themeTooltipDismissed")) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [theme]);

  const dismissTooltip = () => {
    setShowTooltip(false);
    sessionStorage.setItem("themeTooltipDismissed", "true");
  };

  const handleThemeToggle = () => {
    dismissTooltip();
    toggleTheme();
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "/certifications" },
    { label: "Contact", href: "#contact" }
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className={isSticky ? "sticky" : ""}>
      <div className="container nav-container">
        <div 
          className="nav-identity" 
          style={{ cursor: "pointer" }} 
          onClick={(e) => handleNavClick(e, "/")}
        >
          Udarsh Goyal.
        </div>

        <nav className="nav-links">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
              {link.label}
            </a>
          ))}
          <div style={{ position: "relative", display: "inline-block" }}>
            <button 
              onClick={handleThemeToggle} 
              className="theme-toggle" 
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "MORNING EDITION" : "NIGHT EDITION"}
            </button>
            {showTooltip && (
              <div className="theme-tooltip">
                switch to night edition for better experience
                <button className="tooltip-close" onClick={(e) => { e.stopPropagation(); dismissTooltip(); }} aria-label="Close tooltip">×</button>
              </div>
            )}
          </div>
        </nav>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <nav className="mobile-nav-links">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            ))}
            <button 
              onClick={() => { toggleTheme(); closeMenu(); }} 
              className="theme-toggle" 
              style={{ marginTop: "1rem" }}
            >
              {theme === "dark" ? "MORNING EDITION" : "NIGHT EDITION"}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
