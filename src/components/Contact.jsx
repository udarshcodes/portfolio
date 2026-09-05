export default function Contact() {
  return (
    <section id="contact" className="container pt-4 pb-8 mb-8">
      <div className="metadata mb-1 reveal">SECTION 08</div>
      <h2 className="section-heading rule-thick-bottom pb-2 mb-8 reveal">Correspondence</h2>
      
      <div className="editorial-grid reveal delay-1">
        <div className="col-span-12 rule-top rule-bottom rule-left rule-right" style={{ padding: 'clamp(2rem, 8vw, 6rem) clamp(1.5rem, 4vw, 3rem)', textAlign: 'center', background: 'var(--paper-bright)' }}>
          <div className="metadata mb-6" style={{ letterSpacing: '0.1em' }}>OPEN FOR OPPORTUNITIES</div>
          <h3 className="masthead-title" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', textTransform: 'none', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Let's build something useful.
          </h3>
          <p className="body-text" style={{ maxWidth: '540px', margin: '0 auto', marginBottom: '3.5rem', textAlign: 'center', fontSize: '1.1rem' }}>
            Whether you have a question, a project idea, or just want to discuss engineering, my inbox is always open.
          </p>
          
          <div className="flex justify-center">
            <a href="mailto:udarshgoyal3@gmail.com" className="dispatch-link" style={{ fontSize: '1rem', padding: '1rem 2rem', background: 'var(--ink)', color: 'var(--paper)', textDecoration: 'none', letterSpacing: '0.05em' }}>
              WRITE AN EMAIL →
            </a>
          </div>
          
          <div className="metadata mt-12 flex justify-center" style={{ flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>
            <span style={{ color: 'var(--ink-soft)' }}>CHENNAI, INDIA</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--rule)' }}></span>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="https://github.com/udarshcodes" target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s' }}>GITHUB</a>
              <a href="https://www.linkedin.com/in/udarsh-goyal-256095383/" target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s' }}>LINKEDIN</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
