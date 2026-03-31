import { Link } from 'react-router-dom'
import useScrollAnimations from '../components/useScrollAnimations'

const stats = [
  { num: '5.0 ★', label: 'Client Satisfaction' },
  { num: '100%', label: 'Would Recommend Our Services' },
  { num: '< 24hrs', label: 'Average Response Time' },
]

const testimonials = [
  {
    quote: "Nexus completely transformed how our brand shows up online. The web design work alone tripled our inbound inquiries within 60 days. I've worked with agencies that charge five times as much and delivered a fraction of this quality.",
    initials: 'MR', name: 'Marcus Reid', company: 'CEO, Crestline Co.', tag: 'Web Design',
  },
]

function Testimonials() {
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
          <p className="hero__eyebrow" data-animate="fade-up">TESTIMONIALS / 04</p>
          <h1 className="page-hero__title" data-animate="fade-up" data-delay="100">
            Don't take<br />our word <em>for it.</em>
          </h1>
          <p className="page-hero__sub" data-animate="fade-up" data-delay="200">
            Real words from real clients. The results speak louder than any pitch we could give.
          </p>
        </div>
      </section>

      {/* ═══════ STATS BAR ═══════ */}
      <section className="testi-stats">
        <div className="testi-stats__inner">
          {stats.map(({ num, label }, i) => (
            <div className="testi-stat" key={label} data-animate="fade-up" data-delay={i * 80}>
              <span className="testi-stat__num">{num}</span>
              <span className="testi-stat__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ TESTIMONIALS GRID ═══════ */}
      <section className="testi-grid-section">
        <div className="testi-grid">
          {testimonials.map(({ quote, initials, name, company, tag }, i) => (
            <div className="testi-card--full" key={name} data-animate="fade-up" data-delay={(i % 3) * 80}>
              <div className="testimonial__stars">★★★★★</div>
              <blockquote>"{quote}"</blockquote>
              <div className="testimonial__author">
                <div className="testimonial__avatar">{initials}</div>
                <div>
                  <strong>{name}</strong>
                  <span>{company}</span>
                </div>
                <div className="testi-service__tag">{tag}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ CTA BAND ═══════ */}
      <section className="cta-band">
        <div className="cta-band__inner" data-animate="fade-up">
          <h2>Ready to become<br />our next <em>success story?</em></h2>
          <Link to="/contact" className="btn btn--primary">Start a Project →</Link>
        </div>
      </section>
    </>
  )
}

export default Testimonials
