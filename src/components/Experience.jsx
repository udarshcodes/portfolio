export default function Experience() {
  const experiences = [
    {
      role: "Website Committee Member, TechnoVIT'26",
      org: "TechnoVIT Chennai",
      date: "Aug 2026 to Present",
      location: "Chennai, Tamil Nadu, India · On site",
      desc: "Selected as a Website Committee Member for TechnoVIT'26, the annual technical fest of VIT Chennai, from a pool of 60+ applicants after a shortlisting and interview process. Contributing to the design, development, and maintenance of the official TechnoVIT'26 website. Collaborating with a cross functional team to deliver a seamless web experience for the fest."
    },
    {
      role: "Summer Research Intern",
      org: "Indian Institute of Technology, Ropar",
      date: "May 2026 to Present",
      location: "Punjab, India · Hybrid",
      desc: "Conducting research in the domain of machine learning and AI under faculty supervision at IIT Ropar. Working on applied AI problems with a focus on building and evaluating intelligent systems."
    },
    {
      role: "Google Student Ambassador",
      org: "Google (GID 5745)",
      date: "Apr 2026 to Present",
      location: "Remote",
      desc: "Officially recognised Google Student Ambassador. Responsible for promoting Google developer tools, organising campus events around Google technologies, and bridging the student community with Google programs."
    },
    {
      role: "Core Member, AI/ML & Web Development",
      org: "Microsoft Innovations Club VITC",
      date: "Oct 2025 to Present",
      location: "Chennai, TN, India · On site",
      desc: "Serving as a Core Member across the AI/ML and Web Development departments. Spearheaded critical technical initiatives including the development of the club's main portal, recruitment platform, and the FFCS timetable system. Served as a panel judge for the Arcnight and Vibethon hackathons, evaluating projects from over 200 teams and 600+ participants. Drove community expansion by conducting technical interviews for AI/ML recruits and leading freshman onboarding at the annual REMICS event and Club Expo."
    },
    {
      role: "Full Stack & AI Contributor",
      org: "HackClub VIT Chennai",
      date: "Sep 2025 to Present",
      location: "Chennai, TN, India · On site",
      desc: "Building full stack projects and AI powered tools as part of HackClub's active developer community. Led the technical development of the club's official main website and the dedicated recruitment portal. Volunteered and received appreciation for contributions to the Zerodha Varsity Quiz Chennai Edition 2025 event."
    },
    {
      role: "Technical Team Member",
      org: "CYSCOM VIT Chennai",
      date: "Sep 2025 to Present",
      location: "Chennai, TN, India · On site",
      desc: "Part of the technical team at the cybersecurity community at VIT Chennai. Contributed to the development of the main CYSCOM website. Participated in the CyberConverge workshop (Aug 2025) covering offensive and defensive security concepts, threat modelling, and attack mitigations."
    }
  ];

  const extracurriculars = [
    {
      role: "College Ambassador",
      org: "Techfest, IIT Bombay",
      date: "May 2026 to Present"
    },
    {
      role: "Campus Mantri",
      org: "GeeksforGeeks",
      date: "Jun 2026 to Present"
    },
    {
      role: "Student Partner",
      org: "Internshala",
      date: "Jun 2026 to Present"
    }
  ];

  return (
    <section id="experience" className="container pt-4 pb-4">
      <div className="metadata mb-1 reveal">SECTION 04</div>
      <h2 className="section-heading rule-thick-bottom pb-2 mb-8 reveal">Service Record</h2>
      
      <div className="reveal delay-1">
        {experiences.map((exp, idx) => (
          <div key={idx} className="service-record">
            <div className="service-header" style={{ marginBottom: '0.5rem' }}>
              <h3 className="service-org">{exp.org}</h3>
              <span className="metadata mt-2" style={{ textAlign: 'right' }}>{exp.date}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              <h4 className="service-role" style={{ margin: 0 }}>{exp.role}</h4>
              {exp.location && <span className="metadata" style={{ textAlign: 'right' }}>{exp.location}</span>}
            </div>
            {exp.desc && <p className="body-text">{exp.desc}</p>}
          </div>
        ))}
      </div>

      <div className="metadata mt-8 mb-4 reveal">EXTRACURRICULARS</div>
      <div className="editorial-grid rule-top pt-4 reveal delay-1">
        {extracurriculars.map((exp, idx) => (
          <div key={idx} className="col-span-4 rule-bottom pb-4 mb-4">
            <div className="metadata mb-1">{exp.date}</div>
            <h3 className="service-org" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', marginBottom: '0.2rem' }}>{exp.org}</h3>
            <div className="body-text" style={{ fontSize: '1rem' }}>{exp.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
