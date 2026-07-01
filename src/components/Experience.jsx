export default function Experience() {
  const experiences = [
    {
      role: "Summer Research Intern",
      org: "Indian Institute of Technology, Ropar · Internship",
      date: "May 2026 – Present",
      location: "Punjab, India · Hybrid",
      desc: "Conducting research in the domain of machine learning and AI under faculty supervision at IIT Ropar. Working on applied AI problems with a focus on building and evaluating intelligent systems."
    },
    {
      role: "Google Student Ambassador (GID 5745)",
      org: "Google · Part-time",
      date: "Apr 2026 – Present",
      location: "Remote",
      desc: "Officially recognised Google Student Ambassador (GID: 5745). Responsible for promoting Google developer tools, organising campus events around Google technologies, and bridging the student community with Google programs."
    },
    {
      role: "Web Development and AI/ML Contributor",
      org: "Microsoft Innovations Club VITC · Part-time",
      date: "Oct 2025 – Present",
      location: "Chennai, Tamil Nadu, India · On-site",
      desc: "Contributing to internal projects in the AI/ML and web development departments. Building tools and conducting workshops on prompt engineering, generative AI, and full-stack development for club members."
    },
    {
      role: "Full-Stack and AI/ML Contributor",
      org: "HackClub VIT Chennai · Part-time",
      date: "Sep 2025 – Present",
      location: "Chennai, Tamil Nadu, India · On-site",
      desc: "Building full-stack projects and AI-powered tools as part of HackClub's active developer community. Volunteered and received appreciation for contributions to the Zerodha Varsity Quiz Chennai Edition 2025 event."
    },
    {
      role: "Technical Team Member",
      org: "CYSCOM VIT Chennai · Part-time",
      date: "Sep 2025 – Present",
      location: "Chennai, Tamil Nadu, India · On-site",
      desc: "Part of the technical team at the cybersecurity community at VIT Chennai. Participated in the CyberConverge workshop (Aug 2025) covering offensive and defensive security concepts, threat modelling, and attack mitigations."
    }
  ];

  const extracurriculars = [
    {
      role: "College Ambassador",
      org: "Techfest, IIT Bombay · Part-time",
      date: "May 2026 – Present"
    },
    {
      role: "Campus Mantri",
      org: "GeeksforGeeks · Part-time",
      date: "Jun 2026 – Present"
    },
    {
      role: "Student Partner",
      org: "Internshala · Part-time",
      date: "Jun 2026 – Present"
    }
  ];

  return (
    <section id="experience" className="container reveal">
      <h2 className="section-title">Experience</h2>
      <div className="card max-w-800 mx-auto">
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="flex-wrap flex-between gap-4 align-start mb-2">
                <h3 className="card-header-xs m-0">{exp.role}</h3>
                <span className="chip chip-outline">{exp.date}</span>
              </div>
              <h4 className="org-title">{exp.org}</h4>
              <div className="text-muted-sm mb-2">{exp.location}</div>
              {exp.desc && (
                <p className="text-muted-sm mt-2">
                  {exp.desc}
                </p>
              )}
            </div>
          ))}
        </div>
        
        <h3 className="section-subtitle section-subtitle-sm mt-12 mb-8">Extracurriculars</h3>
        <div className="timeline">
          {extracurriculars.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="flex-wrap flex-between gap-4 align-start mb-2">
                <h3 className="card-header-xs m-0 text-md">{exp.role}</h3>
                <span className="chip chip-outline chip-sm">{exp.date}</span>
              </div>
              <h4 className="org-title-sm">{exp.org}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
