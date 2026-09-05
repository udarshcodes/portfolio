import { Link } from "react-router-dom";
import { certifications } from "../data/certifications";

export default function CertificationsPage() {

  // Group by year
  const groupedCerts = certifications.reduce((acc, cert) => {
    // Extract year from string like "Oct 2025" or "2025"
    const match = cert.note.match(/\d{4}/);
    const year = match ? match[0] : "Previous";
    if (!acc[year]) acc[year] = [];
    acc[year].push(cert);
    return acc;
  }, {});

  // Sort years descending
  const sortedYears = Object.keys(groupedCerts).sort((a, b) => b.localeCompare(a));

  let globalIndex = 0; // For padding out the certification number (01, 02, etc.) and stagger delays

  // Helper to get logo for all orgs
  const getOrgLogo = (org, badge) => {
    if (badge) return badge;
    const domains = {
      "Oracle": "oracle.com",
      "MongoDB": "mongodb.com",
      "Harvard University": "harvard.edu",
      "HackerRank": "hackerrank.com",
      "DevTown": "devtown.in",
      "Microsoft": "microsoft.com",
      "Microsoft Azure": "microsoft.com",
      "Microsoft Applied Skills": "microsoft.com"
    };
    if (org.includes('Meta')) return 'https://cdn.simpleicons.org/meta';
    if (org.includes('Google')) return 'https://cdn.simpleicons.org/google';
    if (org.includes('McKinsey')) return 'https://cdn.brandfetch.io/mckinsey.com/w/128/h/128';
    if (org === 'IIT Madras Shaastra') return 'https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg';
    if (domains[org]) return `https://www.google.com/s2/favicons?sz=64&domain=${domains[org]}`;
    return null;
  };

  return (
    <section id="certifications-page" className="container pt-12 pb-4">
      <div className="reveal">
        <Link to="/" className="metadata clickable" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "3rem", textDecoration: "none" }}>
          <span style={{ fontSize: "1.2rem" }}>←</span> BACK TO SITE
        </Link>
        <h2 className="masthead-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Certification Index
        </h2>
        <div className="cert-archive-rule"></div>
      </div>

      {sortedYears.map((year, yIdx) => (
        <div key={year} className={`reveal mb-8 delay-${(yIdx % 3) + 1}`}>
          <div className="cert-year-label">{year}</div>
          <div className="rule-thick-bottom mb-4"></div>
          
          <div className="cert-list">
            {groupedCerts[year].map((cert, cIdx) => {
              globalIndex++;
              const numStr = globalIndex < 10 ? `0${globalIndex}` : `${globalIndex}`;
              const staggerDelay = `${(globalIndex % 15) * 0.1}s`;
              
              const Wrapper = cert.link ? "a" : "div";
              const isClickable = !!cert.link;
              const logoSrc = getOrgLogo(cert.org, cert.badge);
              
              return (
                <Wrapper 
                  key={cIdx} 
                  href={cert.link} 
                  target={isClickable ? "_blank" : undefined}
                  rel={isClickable ? "noreferrer" : undefined}
                  className={`cert-row ${isClickable ? 'clickable' : ''}`}
                  style={{ animationDelay: staggerDelay }}
                >
                  <div className="cert-num">{numStr}</div>
                  <div className="cert-title">{cert.title}</div>
                  <div className="cert-org" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {logoSrc && <img src={logoSrc} alt={cert.org} className="cert-row-logo" />}
                    <span>{cert.org}</span> 
                    <span style={{ color: 'var(--rule)' }}>{cert.note.replace(/\d{4}/, '').trim()}</span>
                  </div>
                  <div className="cert-link-col">
                    {isClickable && <span className="cert-link">VIEW RECORD →</span>}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      ))}

      <div className="reveal mt-12 mb-12">
        <div className="metadata text-center" style={{ fontSize: '0.7rem' }}>END OF CERTIFICATION INDEX</div>
        <div className="rule-thick-bottom mt-4" style={{ margin: '0 auto', maxWidth: '400px' }}></div>
      </div>
    </section>
  );
}
