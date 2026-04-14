import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__brand">
          <div className="footer__brand-logo">
            <img src="/luxmus-logo.png" alt="Luxmus Logo" style={{ height: '100px', width: 'auto', marginLeft: '-22px' }} />
          </div>
          <p>Web Development, Design &amp; Marketing for companies that refuse to blend in.</p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <strong>Company</strong>
            <Link to="/about">About Us</Link>
            <Link to="/about#team">The Team</Link>
            <Link to="/process">Our Process</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer__col">
            <strong>Development</strong>
            <Link to="/services#web-development">Custom Website</Link>
            <Link to="/services#web-development">Web Design &amp; UX</Link>
            <Link to="/services#web-development">Landing Pages</Link>
            <Link to="/services#web-development">Maintenance</Link>
          </div>
          <div className="footer__col">
            <strong>Graphic Design</strong>
            <Link to="/services#graphic-design">Brand &amp; Logos</Link>
            <Link to="/services#graphic-design">Motion Graphics</Link>
            <Link to="/services#graphic-design">Print &amp; Collateral</Link>
            <Link to="/services#graphic-design">Digital Graphics</Link>
          </div>
          <div className="footer__col">
            <strong>Marketing</strong>
            <Link to="/services#marketing">SEO Services</Link>
            <Link to="/services#marketing">Ad Development</Link>
            <Link to="/services#marketing">Ad Photography</Link>
            <Link to="/services#marketing">Social Media</Link>
          </div>
        </div>

      </div>
      <div className="footer__bottom">
        <span>© 2026 Luxmus Digital. All rights reserved.</span>
        <span>Built with precision.</span>
      </div>
    </footer>
  )
}

export default Footer
