export default function Hero() {
  return (
    <section id="home" className="container pt-2 pb-2 mt-4 mb-8">
      
      {/* Metadata Row */}
      <div className="metadata flex justify-between rule-thick-bottom pb-2 mb-4 animate-fade-in delay-1" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
        <span>ENGINEERING PORTFOLIO</span>
        <span>2026 EDITION</span>
      </div>

      {/* Large Name */}
      <h1 className="masthead-title mb-2 animate-fade-in delay-2">
        Udarsh Goyal.
      </h1>

      {/* Sub-metadata */}
      <div className="metadata flex justify-between rule-bottom pb-2 mb-8 animate-fade-in delay-2" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
        <span>SOFTWARE ENGINEER & AI RESEARCHER</span>
        <span>AVAILABLE FOR OPPORTUNITIES</span>
      </div>

      {/* Split Content */}
      <div className="editorial-grid animate-fade-in delay-3">
        <div className="col-span-8 hero-text-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
           <p className="editorial-subtitle mb-4">
             CS Undergrad @ VIT Chennai, AI/ML Researcher @ IIT Ropar, and Full Stack Developer.
           </p>
           <p className="body-text-lg mb-8">
             Builder of CodeSentinel and Google Student Ambassador. I specialize in crafting technical systems, engineering intelligent platforms, and pushing the boundaries of web experiences.
           </p>
           
           <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
             <a href="#projects" className="dispatch-link" style={{fontSize: 'clamp(0.8rem, 1.5vw, 1rem)'}}>VIEW PROJECTS →</a>
             <a href="#contact" className="dispatch-link" style={{fontSize: 'clamp(0.8rem, 1.5vw, 1rem)', color: 'var(--ink)'}}>HIRE ME →</a>
             <a href="/pdf/OCI_FOUNDATIONS_ASSOCIATE.pdf" download className="dispatch-link" style={{fontSize: 'clamp(0.8rem, 1.5vw, 1rem)', color: 'var(--ink-soft)'}}>RESUME ↓</a>
           </div>
        </div>
        
        <div className="col-span-4 hero-img-col">
           <div className="editorial-photo-wrapper" style={{ minHeight: '300px' }}>
             <img src="/images/udarsh.jpg" alt="Udarsh Goyal" className="editorial-photo" />
           </div>
           <div className="metadata mt-2 text-center">FIG 1. PORTRAIT</div>
        </div>
      </div>

    </section>
  );
}
