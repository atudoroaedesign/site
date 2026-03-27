import { Link } from 'react-router-dom'
import useScrollAnimations from '../components/useScrollAnimations'

const designServices = [
  {
    num: '01', title: 'Web Development',
    desc: 'Custom-built websites engineered for speed, SEO, and growth. Every line of code is written with purpose — no bloated templates, no cookie-cutter CMS setups.',
    items: ['Custom front-end & back-end development', 'CMS integration (WordPress, Webflow, custom)', 'Performance optimization & Core Web Vitals', 'Responsive, accessible, cross-browser builds'],
  },
  {
    num: '02', title: 'Web Design',
    desc: 'Interfaces that convert. We design digital experiences that balance aesthetic sophistication with intuitive usability — making visitors into customers.',
    items: ['UI/UX strategy and wireframing', 'High-fidelity mockups and prototypes', 'Landing page design & A/B testing', 'Design systems and component libraries'],
  },
  {
    num: '03', title: 'Brand Identity & Packaging',
    desc: 'A complete visual identity that works everywhere — from your website header to your product shelf. Cohesive, intentional, and built for the long haul.',
    items: ['Brand strategy & positioning', 'Color, typography & visual language systems', 'Packaging design for retail & e-commerce', 'Brand guidelines and asset libraries'],
  },
  {
    num: '04', title: 'Logo Design',
    desc: "A mark that carries your company's identity through every touchpoint. Timeless, versatile, and entirely yours — never clip art, never generic.",
    items: ['Discovery & concept exploration', 'Multiple concepts with rationale', 'Full vector files in all formats', 'Logo usage guidelines included'],
  },
]

const marketingServices = [
  {
    num: '01', title: 'Ad Development',
    desc: 'Creative ad campaigns built to stop the scroll and start conversions. We handle strategy, copywriting, design, and production — across every platform.',
    items: ['Meta, Google, LinkedIn & TikTok ads', 'Ad copywriting & creative direction', 'A/B testing and performance iteration', 'Monthly reporting and optimization'],
  },
  {
    num: '02', title: 'Company Photography',
    desc: "Professional imagery that tells your brand's authentic story. From team headshots to product campaigns — visuals that make people stop and pay attention.",
    items: ['Brand & lifestyle photography', 'Team and executive portraits', 'Product and e-commerce photography', 'Event and behind-the-scenes coverage'],
  },
  {
    num: '03', title: 'Social Media Management',
    desc: 'Consistent presence, engaged audiences, measurable growth. We manage your social channels end-to-end so you can focus on running your business.',
    items: ['Content calendar & strategy', 'Graphic and video content creation', 'Community management & engagement', 'Monthly analytics and growth reports'],
  },
  {
    num: '04', title: 'Digital Marketing',
    desc: 'Full-funnel digital strategy from awareness to loyal customer. SEO, email, paid media — all working together toward a single goal: your growth.',
    items: ['SEO audit, strategy & implementation', 'Email marketing & automation flows', 'Funnel design & conversion optimization', 'Analytics setup, tracking & reporting'],
  },
]

function ServiceCard({ num, title, desc, items, delay }) {
  return (
    <div className="svc__card" data-animate="fade-up" data-delay={delay}>
      <div className="svc__card-num">{num}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul className="svc__card-list">
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
      <Link to="/contact" className="btn btn--outline svc__cta">Get a Quote →</Link>
    </div>
  )
}

function Services() {
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
          <p className="hero__eyebrow" data-animate="fade-up">SERVICES / 02</p>
          <h1 className="page-hero__title" data-animate="fade-up" data-delay="100">
            Everything your brand<br />needs to <em>stand out.</em>
          </h1>
          <p className="page-hero__sub" data-animate="fade-up" data-delay="200">
            Two core disciplines — Design and Marketing — offered individually or as a complete, integrated solution.
          </p>
        </div>
      </section>

      {/* ═══════ DESIGN PILLAR ═══════ */}
      <section className="services-full" id="design">
        <div className="services-full__header">
          <div className="services-full__label">
            <div className="services__pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <p className="section__eyebrow">PILLAR ONE</p>
              <h2 className="section__title">Graphic Design</h2>
            </div>
          </div>
          <p className="services-full__desc">Visual language built to last. We create identities, interfaces, and systems that communicate who you are — clearly, beautifully, and consistently.</p>
        </div>
        <div className="services-full__cards">
          {designServices.map((svc, i) => (
            <ServiceCard key={svc.num} {...svc} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* ═══════ MARKETING PILLAR ═══════ */}
      <section className="services-full services-full--alt" id="marketing">
        <div className="services-full__header">
          <div className="services-full__label">
            <div className="services__pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div>
              <p className="section__eyebrow">PILLAR TWO</p>
              <h2 className="section__title">Marketing</h2>
            </div>
          </div>
          <p className="services-full__desc">Strategy and execution that drives real, measurable results. We don't run campaigns — we build systems that grow your business.</p>
        </div>
        <div className="services-full__cards">
          {marketingServices.map((svc, i) => (
            <ServiceCard key={svc.num} {...svc} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* ═══════ CTA BAND ═══════ */}
      <section className="cta-band">
        <div className="cta-band__inner" data-animate="fade-up">
          <h2>Not sure which service<br />you need? <em>Let's talk.</em></h2>
          <Link to="/contact" className="btn btn--primary">Book a Free Consultation →</Link>
        </div>
      </section>
    </>
  )
}

export default Services
