export default function Footer() {
  return (
    <footer style={{ padding: "2rem 0", borderTop: "1px solid var(--border)", marginTop: "2rem", textAlign: "center", position: "relative", zIndex: 10 }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
        <div>
          &copy; {new Date().getFullYear()} Udarsh Goyal. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="https://github.com/udarshcodes" target="_blank" rel="noreferrer" style={{ transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>GitHub</a>
          <a href="https://www.linkedin.com/in/udarsh-goyal-256095383/" target="_blank" rel="noreferrer" style={{ transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>LinkedIn</a>
          <a href="#" style={{ transition: "color 0.2s" }} onClick={(e) => { e.preventDefault(); alert("Resume upload pending!"); }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>Resume PDF</a>
        </div>
      </div>
    </footer>
  );
}
