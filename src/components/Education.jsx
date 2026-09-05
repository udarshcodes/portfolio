export default function Education() {
  return (
    <section id="education" className="container pt-4 pb-4">
      <div className="metadata mb-1 reveal">SECTION 05</div>
      <h2 className="section-heading rule-thick-bottom pb-2 mb-8 reveal">Academia</h2>
      
      <div className="editorial-grid reveal delay-1">
        <div className="col-span-12 service-record" style={{ borderBottom: 'none' }}>
          <div className="service-header">
            <h3 className="masthead-title" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', textTransform: 'none' }}>
              Vellore Institute of Technology, Chennai
            </h3>
          </div>
          <div className="editorial-grid mt-4" style={{ rowGap: '1rem' }}>
            <div className="col-span-8">
              <h3 className="dispatch-title" style={{ fontSize: '1.25rem', marginBottom: '0.2rem' }}>
                B.Tech in Computer Science and Engineering
              </h3>
              <p className="body-text">
                Currently in second year. Coursework covers data structures, algorithms, computer networks,
                operating systems, database management, and machine learning. Actively involved in multiple
                technical clubs including Microsoft Innovations Club, HackClub, and CYSCOM alongside
                ongoing research and industry internships.
              </p>
            </div>
            <div className="col-span-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span className="metadata" style={{ display: 'block', marginBottom: '0.5rem' }}>JUL 2025 to 2029</span>
              <span className="metadata">CHENNAI, INDIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
