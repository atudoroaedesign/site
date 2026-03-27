import { Link } from 'react-router-dom'
import useScrollAnimations from '../components/useScrollAnimations'

function About() {
  useScrollAnimations()

  return (
    <>
      {/* ═══════ PAGE HERO ═══════ */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="hero__orb hero__orb--1"></div>
          <div className="hero__orb hero__orb--2"></div>
          <div className="hero__grid"></div>
        </div>
        <div className="page-hero__content">
          <p className="hero__eyebrow" data-animate="fade-up">ABOUT NEXUS / 01</p>
          <h1 className="page-hero__title" data-animate="fade-up" data-delay="100">
            We are the studio<br />behind the brands<br />people <em>remember.</em>
          </h1>
          <p className="page-hero__sub" data-animate="fade-up" data-delay="200">
            A design and marketing studio built for companies that have something real to say — and need the craft to say it.
          </p>
        </div>
      </section>

      {/* ═══════ STORY ═══════ */}
      <section className="about-story">
        <div className="about-story__inner">
          <div className="about-story__left" data-animate="fade-up">
            <p className="section__eyebrow">OUR STORY</p>
            <h2 className="section__title">Built from a<br />belief in <em>craft.</em></h2>
          </div>
          <div className="about-story__right" data-animate="fade-up" data-delay="150">
            <p>Nexus Studio was founded on a simple frustration: too many businesses were settling for generic visuals and hollow marketing strategies that looked the same as everyone else's.</p>
            <p>We set out to change that. Every project we take on starts with a deep understanding of who you are, what you're building, and who you're trying to reach. From there, we build with intention — whether that's a brand identity system, a high-converting website, or a full-scale digital marketing campaign.</p>
            <p>We are a small team by design. That means every client gets senior-level attention, direct communication, and work that's built to last — not outsourced or templated.</p>
          </div>
        </div>
      </section>

      {/* ═══════ CREDIBILITY ═══════ */}
      <section className="about-stats">
        <div className="about-stats__grid">
          <div className="stat__card" data-animate="fade-up">
            <span className="stat__num">✦</span>
            <span className="stat__label--title">Client-Focused Approach</span>
            <span className="stat__label">Clear communication, fast turnaround, and collaborative design process.</span>
          </div>
          <div className="stat__card" data-animate="fade-up" data-delay="80">
            <span className="stat__num">✦</span>
            <span className="stat__label--title">Custom-Built Solutions</span>
            <span className="stat__label">No templates — everything designed or coded specifically for each client.</span>
          </div>
          <div className="stat__card" data-animate="fade-up" data-delay="160">
            <span className="stat__num">✦</span>
            <span className="stat__label--title">Multi-Disciplinary Skills</span>
            <span className="stat__label">Branding, web design, motion graphics, and illustration.</span>
          </div>
          <div className="stat__card" data-animate="fade-up" data-delay="240">
            <span className="stat__num">✦</span>
            <span className="stat__label--title">Built From Code</span>
            <span className="stat__label">Fully custom-coded websites, not drag-and-drop shortcuts.</span>
          </div>
        </div>
      </section>

      {/* ═══════ VALUES ═══════ */}
      <section className="about-values">
        <div className="section__header">
          <p className="section__eyebrow">OUR VALUES</p>
          <div className="section__title-row">
            <h2 className="section__title">What We<br />Stand For</h2>
            <p className="section__desc">These aren't buzzwords on a wall. They're the standards we hold every project to.</p>
          </div>
        </div>
        <div className="values__grid">
          {[
            { num: '01', title: 'Craft Over Speed',              body: "We don't rush. Every pixel, headline, and strategy is considered. Quality is non-negotiable — and our clients feel that difference." },
            { num: '02', title: 'Honest Communication',          body: 'We say what we mean and mean what we say. No jargon, no overpromising. Just clear, direct collaboration from day one to delivery.' },
            { num: '03', title: 'Results-Driven Design',         body: "Beautiful work that doesn't perform is just decoration. Everything we create is designed with a clear goal — and we track whether it hits it." },
            { num: '04', title: 'Long-Term Thinking',            body: 'We build for longevity. Trends fade. Brands built on strong foundations, clear positioning, and quality craft endure.' },
            { num: '05', title: 'Partnership, Not Transactions', body: 'We invest in every project as if it were our own company. When you grow, we grow. That alignment drives everything we do.' },
            { num: '06', title: 'Fearless Creativity',           body: "Safe is forgettable. We push ideas past the obvious — then refine them until they're both bold and right for your audience." },
          ].map(({ num, title, body }, i) => (
            <div className="value__card" key={num} data-animate="fade-up" data-delay={i * 80}>
              <div className="value__num">{num}</div>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ TEAM ═══════ */}
      <section className="about-team">
        <div className="section__header">
          <p className="section__eyebrow">THE TEAM</p>
          <div className="section__title-row">
            <h2 className="section__title">The People<br />Behind the Work</h2>
            <p className="section__desc">A tight-knit group of designers, developers, strategists, and storytellers.</p>
          </div>
        </div>
        <div className="team__section-inner">
          <div className="team__grid">
            <div className="team__card" data-animate="fade-up">
              <img
                src="/jane-doe.jpg"
                alt="Jane Doe"
                className="team__photo"
              />
              <h4>Jane Doe</h4>
              <span className="team__role">Creative Director</span>
              <p>Specializes in brand identity and web design, crafting visual experiences that are both beautiful and strategic.</p>
            </div>
            <div className="team__card" data-animate="fade-up" data-delay="100">
              <img
                src="/john-doe.jpg"
                alt="John Doe"
                className="team__photo"
              />
              <h4>John Doe</h4>
              <span className="team__role">Lead Developer</span>
              <p>Specializes in web development and digital marketing, building fast, scalable solutions that drive real results.</p>
            </div>
          </div>
          <div className="team__side-text" data-animate="fade-up" data-delay="150">
            <h3>A small team.<br />A big <em>impact.</em></h3>
            <p>We believe the best work comes from people who genuinely care. Our team is intentionally small — every project gets our full attention, not a junior account manager and a template.</p>
            <p>We're not an agency of hundreds. We're a focused group of specialists who have chosen quality over volume, and long-term partnerships over quick transactions.</p>
          </div>
        </div>
      </section>

      {/* ═══════ CTA BAND ═══════ */}
      <section className="cta-band">
        <div className="cta-band__inner" data-animate="fade-up">
          <h2>Like what you see? Let's build<br />something <em>together.</em></h2>
          <Link to="/contact" className="btn btn--primary">Start a Project →</Link>
        </div>
      </section>
    </>
  )
}

export default About