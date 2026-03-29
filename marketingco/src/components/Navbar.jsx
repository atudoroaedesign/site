import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const menuRef = useRef(null)

  /* Scroll state */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Close mobile menu on outside click */
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  /* Close mobile menu on route change */
  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { to: '/about',        label: 'About' },
    { to: '/services',     label: 'Services' },
    { to: '/process',      label: 'Process' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact',      label: 'Contact' },
  ]

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav" ref={menuRef}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo">
          <span className="nav__logo-mark">L</span>
          <span className="nav__logo-text">Luxmus</span>
        </Link>

        <ul className="nav__links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => isActive ? 'nav--active' : undefined}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="btn btn--outline nav__cta">
          Start a Project →
        </Link>

        <button
          className="nav__hamburger"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && (
        <div className="nav__mobile open">
          <ul>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="mobile-link" onClick={closeMenu}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
