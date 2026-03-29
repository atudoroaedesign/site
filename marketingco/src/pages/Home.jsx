import { Link } from 'react-router-dom'
import useScrollAnimations from '../components/useScrollAnimations'

function Home() {
  useScrollAnimations()

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="hero" id="hero">
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1"></div>
          <div className="hero__orb hero__orb--2"></div>
          <div className="hero__orb hero__orb--3"></div>
          <div className="hero__grid"></div>
        </div>
        <div className="hero__content">
          <p className="hero__eyebrow" data-animate="fade-up">CREATIVE STUDIO / 01</p>
          <h1 className="hero__headline" data-animate="fade-up" data-delay="100">
            Where bold ideas<br />
            meet <em>precise</em><br />
            execution.
          </h1>
          <p className="hero__sub" data-animate="fade-up" data-delay="200">
            We build brands, design experiences, and craft marketing strategies that move people — and move markets.
          </p>
          <div className="hero__actions" data-animate="fade-up" data-delay="300">
            <Link to="/services" className="btn btn--primary">Explore Services →</Link>
            <Link to="/process"  className="btn btn--ghost">Our Process</Link>
          </div>
          <div className="hero__badge" data-animate="fade-up" data-delay="400">
            <span className="hero__badge-dot"></span>
            <span>Trusted by growing companies worldwide</span>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__ring hero__ring--1"></div>
          <div className="hero__ring hero__ring--2"></div>
          <div className="hero__ring hero__ring--3"></div>
          <div className="hero__core">
            <div className="hero__core-inner"><span>Luxmus</span></div>
          </div>
        </div>
      </section>

      {/* ═══════ TRUSTED BY ═══════ */}
      <section className="trusted">
        <div className="trusted__inner">
          <p className="trusted__label">TRUSTED BY</p>
          <div className="trusted__logos">
            <span>Brandwave</span>
            <span>Crestline Co.</span>
            <span>Vero Labs</span>
            <span>Altus Group</span>
            <span>Meridian</span>
            <span>Stackpoint</span>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES PREVIEW ═══════ */}
      <section className="services-preview">
        <div className="section__header">
          <p className="section__eyebrow">WHAT WE DO</p>
          <div className="section__title-row">
            <h2 className="section__title">Two Pillars.<br />One Vision.</h2>
            <p className="section__desc">Design and marketing working together to give your brand a genuine, lasting edge.</p>
          </div>
        </div>
        <div className="preview__grid">
          <Link to="/services#design" className="preview__card" data-animate="fade-up">
            <div className="preview__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Graphic Design</h3>
            <p>Web development, web design, brand identity, packaging, and logo design.</p>
            <span className="preview__card-link">Explore →</span>
          </Link>
          <Link to="/services#marketing" className="preview__card" data-animate="fade-up" data-delay="120">
            <div className="preview__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <h3>Marketing</h3>
            <p>Ad development, photography, social media management, and digital marketing.</p>
            <span className="preview__card-link">Explore →</span>
          </Link>
          <Link to="/about" className="preview__card" data-animate="fade-up" data-delay="240">
            <div className="preview__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>
            <h3>About Nexus</h3>
            <p>Our story, mission, values, and the team behind every project.</p>
            <span className="preview__card-link">Meet Us →</span>
          </Link>
        </div>
      </section>

      {/* ═══════ PROCESS TEASER ═══════ */}
      <section className="process-teaser">
        <div className="process-teaser__inner">
          <div className="process-teaser__left" data-animate="fade-up">
            <p className="section__eyebrow">HOW WE WORK</p>
            <h2 className="section__title">A Process Built<br />for <em>Results</em></h2>
            <p>From discovery to launch, every step is intentional. No guesswork — just clear communication and measurable outcomes.</p>
            <Link to="/process" className="btn btn--primary process-teaser__btn">See Our Process →</Link>
          </div>
          <div className="process-teaser__steps" data-animate="fade-up" data-delay="150">
            <div className="teaser__step"><span>01</span><strong>Discovery &amp; Strategy</strong></div>
            <div className="teaser__step"><span>02</span><strong>Design &amp; Creation</strong></div>
            <div className="teaser__step"><span>03</span><strong>Refinement &amp; Review</strong></div>
            <div className="teaser__step"><span>04</span><strong>Launch &amp; Growth</strong></div>
          </div>
        </div>
      </section>

      {/* ═══════ PULL QUOTE ═══════ */}
      <section className="pullquote">
        <div className="pullquote__inner" data-animate="fade-up">
          <div className="pullquote__mark">"</div>
          <blockquote>Nexus completely transformed how our brand shows up online. The web design work alone tripled our inbound inquiries within 60 days.</blockquote>
          <div className="pullquote__author">
            <div className="testimonial__avatar">MR</div>
            <div>
              <strong>Marcus Reid</strong>
              <span>CEO, Crestline Co.</span>
            </div>
          </div>
          <Link to="/testimonials" className="btn btn--ghost pullquote__btn">Read All Reviews →</Link>
        </div>
      </section>

      {/* ═══════ CTA BAND ═══════ */}
      <section className="cta-band">
        <div className="cta-band__inner" data-animate="fade-up">
          <h2>Ready to build something <em>remarkable?</em></h2>
          <Link to="/contact" className="btn btn--primary">Start a Project →</Link>
        </div>
      </section>
    </>
  )
}

export default Home
