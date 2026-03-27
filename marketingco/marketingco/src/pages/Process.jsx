import { Link } from 'react-router-dom'
import useScrollAnimations from '../components/useScrollAnimations'

const steps = [
  {
    num: '01', phase: 'PHASE ONE', title: 'Discovery & Strategy',
    body: 'Before anything is designed or written, we listen. We conduct a deep-dive into your brand, your audience, your competitors, and your goals. This phase produces a clear strategic brief that guides every decision that follows — eliminating costly revisions down the road.',
    deliverables: ['Brand & audience audit', 'Competitor landscape review', 'Strategic project brief', 'Scope, timeline & milestone plan'],
    last: false,
  },
  {
    num: '02', phase: 'PHASE TWO', title: 'Design & Creation',
    body: "With strategy locked in, we build. Concepts are developed with full rationale — you'll never see something without understanding why it was made that way. Every visual, every word, every interaction is intentional. We present work in stages, so feedback is focused and efficient.",
    deliverables: ['Initial concept presentations', 'Design mockups & prototypes', 'Copy drafts & content outlines', 'Creative direction rationale'],
    last: false,
  },
  {
    num: '03', phase: 'PHASE THREE', title: 'Refinement & Review',
    body: 'Collaboration is where the work gets exceptional. We run focused feedback rounds — no endless revision loops, no vague notes. Every round of refinement is structured to move toward a final product that genuinely exceeds your original expectations.',
    deliverables: ['Up to 3 structured revision rounds', 'Stakeholder review sessions', 'Quality assurance testing', 'Pre-launch checklist sign-off'],
    last: false,
  },
  {
    num: '04', phase: 'PHASE FOUR', title: 'Launch & Growth',
    body: 'Launch day is the beginning, not the end. We handle deployment, track performance from day one, and stay available for ongoing support. For marketing retainers, this phase is an ongoing cycle of data, iteration, and continued growth.',
    deliverables: ['Full project handoff & asset library', 'Analytics & tracking setup', 'Post-launch support window', 'Growth reporting & recommendations'],
    last: true,
  },
]

const whyCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'On-Time Delivery',
    body: "Every project begins with a realistic timeline that accounts for revisions and feedback. We hit our dates — and we tell you immediately if anything changes."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Clear Communication',
    body: "No waiting days for a response. You have a dedicated point of contact, regular check-ins, and a shared project dashboard throughout."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="1"/>
        <path d="M9 12h6M9 16h4"/>
      </svg>
    ),
    title: 'Scoped & Priced Upfront',
    body: "You know exactly what you're getting and what it costs before any work begins. No surprise invoices, no scope creep without your approval."
  },
]

function Process() {
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
          <p className="hero__eyebrow" data-animate="fade-up">PROCESS / 03</p>
          <h1 className="page-hero__title" data-animate="fade-up" data-delay="100">
            No guesswork.<br />No surprises.<br />Just <em>results.</em>
          </h1>
          <p className="page-hero__sub" data-animate="fade-up" data-delay="200">
            A proven four-phase framework that keeps every project on time, on brief, and above expectations.
          </p>
        </div>
      </section>

      {/* ═══════ PROCESS STEPS ═══════ */}
      <section className="process-full">
        <div className="process-full__inner">
          {steps.map(({ num, phase, title, body, deliverables, last }) => (
            <div className="process-full__step" key={num} data-animate="fade-up">
              <div className="process-full__step-aside">
                <div className="process-full__step-num">{num}</div>
                {!last && <div className="process-full__step-vline"></div>}
              </div>
              <div className="process-full__step-body">
                <p className="section__eyebrow">{phase}</p>
                <h3>{title}</h3>
                <p>{body}</p>
                <div className="process-full__deliverables">
                  <strong>Deliverables</strong>
                  <ul>
                    {deliverables.map(d => <li key={d}>{d}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ WHY IT WORKS ═══════ */}
      <section className="process-why">
        <div className="process-why__inner">
          <div className="process-why__left" data-animate="fade-up">
            <p className="section__eyebrow">WHY IT WORKS</p>
            <h2 className="section__title">Built to Eliminate<br />the Usual <em>Pain Points</em></h2>
          </div>
          <div className="process-why__grid">
            {whyCards.map(({ icon, title, body }, i) => (
              <div className="why__card" key={title} data-animate="fade-up" data-delay={i * 80}>
                <span className="why__icon">{icon}</span>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA BAND ═══════ */}
      <section className="cta-band">
        <div className="cta-band__inner" data-animate="fade-up">
          <h2>Ready to start the <em>process?</em></h2>
          <Link to="/contact" className="btn btn--primary">Let's Talk →</Link>
        </div>
      </section>
    </>
  )
}

export default Process
