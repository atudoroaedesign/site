import { Link } from 'react-router-dom'
import useScrollAnimations from '../components/useScrollAnimations'

const webDevServices = [
  {
    num: '01', title: 'Custom Web Development',
    desc: 'Custom-built websites engineered for speed, SEO, and growth. Every line of code is written with purpose — no bloated templates, no cookie-cutter CMS setups.',
    items: ['Custom front-end & back-end development', 'CMS integration (WordPress, Webflow, custom)', 'Performance optimization & Core Web Vitals', 'Responsive, accessible, cross-browser builds'],
    bgImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop'
  },
  {
    num: '02', title: 'Web Design & UX',
    desc: 'Interfaces that convert. We design digital experiences that balance aesthetic sophistication with intuitive usability — making visitors into customers.',
    items: ['UI/UX strategy and wireframing', 'High-fidelity mockups and prototypes', 'Landing page design & A/B testing', 'Design systems and component libraries'],
    bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop'
  },
  {
    num: '03', title: 'Landing Pages',
    desc: 'High-converting, single-purpose pages designed to capture leads and drive action. Fast to launch, easy to test, and built to perform from day one.',
    items: ['Lead generation & sales landing pages', 'Clear, compelling copywriting structure', 'Mobile-first, fast-loading builds', 'Analytics & conversion tracking setup'],
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    num: '04', title: 'Maintenance & Support',
    desc: 'Your website is a living product — we keep it fast, secure, and up to date so you never have to worry about downtime or technical debt.',
    items: ['Ongoing updates & content changes', 'Security patches & plugin management', 'Hosting, backups & uptime monitoring', 'Speed audits & Core Web Vitals tuning'],
    bgImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop'
  },
]

const graphicDesignServices = [
  {
    num: '01', title: 'Brand Identity & Logo Design',
    desc: 'A complete visual identity that works everywhere. From custom logo conception to comprehensive brand systems — cohesive, intentional, and built for the long haul.',
    items: ['Brand strategy & positioning', 'Custom logo design & visual identity', 'Color, typography & design systems', 'Comprehensive brand guidelines'],
    bgImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop'
  },
  {
    num: '02', title: 'Motion Graphics',
    desc: 'Dynamic animations and video content that bring your brand to life. Engaging, scroll-stopping, and crafted to tell your story in motion.',
    items: ['Promotional videos & animation', 'Logo animation & kinetic typography', 'Social media video content', 'Explainer videos & product demos'],
    bgImage: 'https://images.unsplash.com/photo-1558470598-a5dda9640f68?q=80&w=800&auto=format&fit=crop'
  },
  {
    num: '03', title: 'Print & Collateral',
    desc: 'From business cards to billboards, we extend your brand into the physical world with print-ready design that commands attention off-screen.',
    items: ['Business cards, brochures & flyers', 'Signage, banners & trade show materials', 'Stationery & branded document templates', 'Print-ready files with bleed & specs'],
    bgImage: 'https://images.unsplash.com/photo-1621075160523-b936ad96132a?q=80&w=800&auto=format&fit=crop'
  },
  {
    num: '04', title: 'Social & Digital Graphics',
    desc: 'Scroll-stopping visuals designed for every platform. Consistent, on-brand graphics that elevate your digital presence and drive engagement.',
    items: ['Social media templates & post graphics', 'Email header & newsletter design', 'Digital ads & display banners', 'Presentation decks & pitch materials'],
    bgImage: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop'
  },
]

const marketingServices = [
  {
    num: '01', title: 'SEO Services (Search Engine Optimization)',
    desc: 'Full-funnel digital strategy from awareness to loyal customer. SEO, email, paid media — all working together toward a single goal: your growth.',
    items: ['SEO audit, strategy & implementation', 'Email marketing & automation flows', 'Funnel design & conversion optimization', 'Analytics setup, tracking & reporting'],
    bgImage: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=800&auto=format&fit=crop'
  },
  {
    num: '02', title: 'Ad Development',
    desc: 'Creative ad campaigns built to stop the scroll and start conversions. We handle strategy, copywriting, design, and production — across every platform.',
    items: ['Meta, Google, LinkedIn & TikTok ads', 'Ad copywriting & creative direction', 'A/B testing and performance iteration', 'Monthly reporting and optimization'],
    bgImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop'
  },
  {
    num: '03', title: 'Advertisement Photography',
    desc: "Professional imagery that tells your brand's authentic story. From team headshots to product campaigns — visuals that make people stop and pay attention.",
    items: ['Brand & lifestyle photography', 'Team and executive portraits', 'Product and e-commerce photography', 'Event and behind-the-scenes coverage'],
    bgImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop'
  },
  {
    num: '04', title: 'Social Media Management',
    desc: 'Consistent presence, engaged audiences, measurable growth. We manage your social channels end-to-end so you can focus on running your business.',
    items: ['Content calendar & strategy', 'Graphic and video content creation', 'Community management & engagement', 'Monthly analytics and growth reports'],
    bgImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop'
  },
]

function ServiceCard({ num, title, desc, items, delay, bgImage }) {
  const customStyle = bgImage
    ? { backgroundImage: `linear-gradient(rgba(8, 12, 20, 0.8), rgba(8, 12, 20, 0.98)), url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {}

  return (
    <div className="svc__card" data-animate="fade-up" data-delay={delay} style={customStyle}>
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
            Three core disciplines — Web Development, Graphic Design, and Marketing — offered individually or as a complete, integrated solution.
          </p>
        </div>
      </section>

      {/* ═══════ WEB DEVELOPMENT PILLAR ═══════ */}
      <section className="services-full" id="web-development">
        <div className="services-full__header">
          <div className="services-full__label">
            <div className="services__pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
                <path d="M12 2v20" strokeDasharray="3 3" />
              </svg>
            </div>
            <div>
              <p className="section__eyebrow">PILLAR ONE</p>
              <h2 className="section__title">Web Development</h2>
            </div>
          </div>
          <p className="services-full__desc">Purpose-built digital products engineered for performance and scale. We write clean, modern code that turns your vision into a fast, reliable, and beautiful web presence.</p>
        </div>
        <div className="services-full__cards">
          {webDevServices.map((svc, i) => (
            <ServiceCard key={svc.num} {...svc} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* ═══════ GRAPHIC DESIGN PILLAR ═══════ */}
      <section className="services-full services-full--alt" id="graphic-design">
        <div className="services-full__header">
          <div className="services-full__label">
            <div className="services__pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <p className="section__eyebrow">PILLAR TWO</p>
              <h2 className="section__title">Graphic Design</h2>
            </div>
          </div>
          <p className="services-full__desc">Visual language built to last. We create identities, print materials, and digital graphics that communicate who you are — clearly, beautifully, and consistently.</p>
        </div>
        <div className="services-full__cards">
          {graphicDesignServices.map((svc, i) => (
            <ServiceCard key={svc.num} {...svc} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* ═══════ MARKETING PILLAR ═══════ */}
      <section className="services-full" id="marketing">
        <div className="services-full__header">
          <div className="services-full__label">
            <div className="services__pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div>
              <p className="section__eyebrow">PILLAR THREE</p>
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
