export default function Footer() {
  return (
    <footer className="mt-8 pt-4 rule-thick-top" style={{ paddingBottom: 'calc(1.5rem + var(--safe-bottom))' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <span className="nav-identity" style={{ fontSize: '1.25rem' }}>UDARSH GOYAL.</span>
          <span className="metadata">PUBLISHED IN {new Date().getFullYear()}</span>
        </div>
        
        <div className="metadata text-center">
          <span>© ALL RIGHTS RESERVED.</span>
        </div>

        <div className="flex gap-4" style={{ flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-end' }}>
          <a href="https://github.com/udarshcodes" target="_blank" rel="noreferrer" className="dispatch-link" style={{ margin: 0 }}>GITHUB</a>
          <a href="https://www.linkedin.com/in/udarsh-goyal-256095383/" target="_blank" rel="noreferrer" className="dispatch-link" style={{ margin: 0 }}>LINKEDIN</a>
          <a href="/pdf/OCI_FOUNDATIONS_ASSOCIATE.pdf" target="_blank" rel="noreferrer" className="dispatch-link" style={{ margin: 0 }}>RESUME</a>
        </div>
      </div>
    </footer>
  );
}
