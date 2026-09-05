import { Link } from "react-router-dom";
import { certifications } from "../data/certifications";

export default function CertificationsPreview() {
  const featuredCerts = certifications.filter((cert) => cert.featured);
  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...featuredCerts, ...featuredCerts];

  return (
    <section id="certifications-preview" className="container pt-4 pb-4 overflow-hidden">
      <div className="reveal">
        <div className="metadata mb-1">SECTION 07</div>
        <div className="flex justify-between align-center mb-8 rule-thick-bottom pb-2">
          <h2 className="section-heading" style={{ margin: 0, border: 'none', padding: 0 }}>
            Featured Certifications
          </h2>
        </div>
      </div>

      <div className="cert-marquee-container reveal delay-1">
        <div className="cert-marquee-track">
          {marqueeItems.map((cert, idx) => {
            const Wrapper = cert.link ? "a" : "div";
            return (
              <Wrapper
                key={idx}
                href={cert.link}
                target={cert.link ? "_blank" : undefined}
                rel={cert.link ? "noreferrer" : undefined}
                className={`cert-card ${cert.link ? "clickable" : ""}`}
              >
                <div className="cert-card-inner">
                  {/* Badge or Initial Fallback */}
                  <div className="cert-card-badge-wrapper">
                    {cert.badge ? (
                      <img src={cert.badge} alt={cert.title} className="cert-card-img" />
                    ) : (
                      <div className="cert-card-fallback">
                        {cert.org.charAt(0)}
                      </div>
                    )}
                  </div>
                  
                  <div className="cert-card-org">{cert.org}</div>
                  <div className="cert-card-title">{cert.title}</div>
                  <div className="cert-card-footer">
                    <span className="cert-card-date">{cert.note.replace(/\d{4}/, "").trim()}</span>
                    {cert.link && <span className="cert-card-arrow">VIEW →</span>}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
      
      <div className="mt-8 flex justify-center reveal delay-2">
        <Link to="/certifications" className="dispatch-link" style={{ margin: 0, fontSize: '1rem' }}>
          VIEW FULL CERTIFICATION ARCHIVE →
        </Link>
      </div>
    </section>
  );
}
