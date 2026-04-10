import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__brand">
          <div className="footer__brand-logo">
            <span className="nav__logo-mark">L</span>
            <span className="footer__name">Luxmus</span>
          </div>
          <p>Design &amp; Marketing for companies that refuse to blend in.</p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            {/*<strong>Company</strong>
            <Link to="/about">About Us</Link>
            <Link to="/process">Our Process</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/contact">Contact</Link>*/}
          </div>
          <div className="footer__col">
            <strong>Design</strong>
            <Link to="/services#design">Web Development</Link>
            <Link to="/services#design">Web Design</Link>
            <Link to="/services#design">Brand Identity</Link>
            <Link to="/services#design">Logo Design</Link>
          </div>
          <div className="footer__col">
            <strong>Marketing</strong>
            <Link to="/services#marketing">Ad Development</Link>
            <Link to="/services#marketing">Photography</Link>
            <Link to="/services#marketing">Social Media</Link>
            <Link to="/services#marketing">Digital Marketing</Link>
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
