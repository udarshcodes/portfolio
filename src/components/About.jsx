export default function About() {
  return (
    <section id="about" className="container pt-4 pb-4">
      
      {/* Section Header */}
      <div className="metadata mb-1 reveal">SECTION 01</div>
      <h2 className="section-heading rule-thick-bottom pb-2 reveal">Technical Profile</h2>

      <div className="editorial-grid mt-4 reveal delay-1">
        
        {/* Top Row: Intro & Bio */}
        <div className="col-span-5 pr-4">
          <p className="editorial-subtitle mb-4">
            "I build autonomous agentic pipelines and highly scalable web systems, bridging the gap between theoretical AI research and production engineering."
          </p>
        </div>

        <div className="col-span-7 rule-left pl-4">
          <p className="body-text mb-4" style={{ textIndent: 'clamp(1rem, 3vw, 3rem)' }}>
            I am a Computer Science undergraduate at VIT Chennai with a deep focus on AI/ML systems, agentic pipelines, and full stack engineering. I built CodeSentinel, a fully autonomous 10 agent LangGraph system for enterprise level code review and patching. I actively contribute to Microsoft Innovations Club, HackClub, and CYSCOM at VIT Chennai.
          </p>
          <p className="body-text mb-4">
            My coursework spans the Meta Back End Developer path, covering Django, Django REST Framework, React, Advanced React, databases, and API design, alongside certifications from Oracle, Microsoft, and MongoDB in AI and cloud fundamentals. Beyond coursework, I have judged hackathons, contributed to open source projects, and placed Top 10 in Nerds AI Quest, a competitive AI focused challenge.
          </p>
        </div>

        {/* Bottom Row: Currently & Stats */}
        <div className="col-span-5 pr-4 rule-top pt-6">
          <div className="metadata mb-4">CURRENTLY</div>
          <div className="metadata mb-2" style={{ color: 'var(--ink)' }}>SUMMER RESEARCH INTERN @ IIT ROPAR</div>
          <div className="metadata mb-2" style={{ color: 'var(--ink)' }}>GOOGLE STUDENT AMBASSADOR</div>
        </div>

        <div className="col-span-7 rule-left pl-4 rule-top pt-6">
          <div className="metadata mb-4">FIELD STATISTICS</div>
          <div className="editorial-grid rule-bottom pb-4" style={{ gap: '1rem' }}>
            <div className="col-span-3">
              <div className="masthead-title" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>10</div>
              <div className="metadata mt-1">AGENT PIPELINE</div>
            </div>
            <div className="col-span-3 rule-left pl-2">
              <div className="masthead-title" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>5+</div>
              <div className="metadata mt-1">PROJECTS BUILT</div>
            </div>
            <div className="col-span-3 rule-left pl-2">
              <div className="masthead-title" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>28+</div>
              <div className="metadata mt-1">CERTIFICATIONS</div>
            </div>
            <div className="col-span-3 rule-left pl-2">
              <div className="masthead-title" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', letterSpacing: '-0.05em' }}>#10</div>
              <div className="metadata mt-1">NERDS AI QUEST</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
