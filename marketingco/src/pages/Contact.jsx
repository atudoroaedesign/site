import { useState } from 'react'
import useScrollAnimations from '../components/useScrollAnimations'

function Contact() {
  useScrollAnimations()

  const [fields, setFields] = useState({ name: '', email: '', company: '', budget: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: false }))
  }

  const validate = () => {
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const newErrors = {}
    if (!fields.name.trim()) newErrors.name = true
    if (!emailRx.test(fields.email.trim())) newErrors.email = true
    if (!fields.message.trim()) newErrors.message = true
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSuccess(true)
      setFields({ name: '', email: '', company: '', budget: '', service: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    }, 1200)
  }

  const inputStyle = (field) => errors[field] ? { borderColor: '#ef4444' } : {}

  return (
    <>
      <section className="contact-page">
        <div className="contact-page__bg">
          <div className="hero__orb hero__orb--1"></div>
          <div className="hero__orb hero__orb--2"></div>
          <div className="hero__grid"></div>
        </div>

        <div className="contact-page__inner">
          {/* ═══ LEFT ═══ */}
          <div className="contact-page__left">
            <p className="hero__eyebrow" data-animate="fade-up">CONTACT / 05</p>
            <h1 className="contact-page__title" data-animate="fade-up" data-delay="100">
              Let's build something<br /><em>remarkable</em><br />together.
            </h1>
            <p className="contact-page__sub" data-animate="fade-up" data-delay="200">
              Tell us about your project. We respond to every inquiry within one business day.
            </p>

            <div className="contact-page__details" data-animate="fade-up" data-delay="300">
              <div className="contact__info-item">
                <span className="contact__info-icon">✉</span>
                <span>info@luxmus.com</span>
              </div>
              {/*<div className="contact__info-item">
                <span className="contact__info-icon">◎</span>
                <span>Available Worldwide — Remote-First</span>
              </div>*/}
              <div className="contact__info-item">
                <span className="contact__info-icon">⏱</span>
                <span>Response within 1 business day</span>
              </div>
            </div>

            <div className="contact-page__trust" data-animate="fade-up" data-delay="400">
              <div className="trust__item"><span className="trust__check">✓</span><span>Free initial consultation</span></div>
              <div className="trust__item"><span className="trust__check">✓</span><span>No commitment required</span></div>
              <div className="trust__item"><span className="trust__check">✓</span><span>Transparent pricing upfront</span></div>
            </div>
          </div>

          {/* ═══ RIGHT — FORM ═══ */}
          <div className="contact-page__right" data-animate="fade-up" data-delay="150">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="form__row">
                <div className="form__group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text" id="name" name="name"
                    placeholder="Jane Smith"
                    value={fields.name} onChange={handleChange}
                    style={inputStyle('name')}
                    required
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email" id="email" name="email"
                    placeholder="jane@company.com"
                    value={fields.email} onChange={handleChange}
                    style={inputStyle('email')}
                    required
                  />
                </div>
              </div>

              <div className="form__row">
                <div className="form__group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text" id="company" name="company"
                    placeholder="Acme Inc."
                    value={fields.company} onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="budget">Estimated Budget</label>
                  <select id="budget" name="budget" value={fields.budget} onChange={handleChange}>
                    <option value="">Select range...</option>
                    <option>$300 - $500</option>
                    <option>$500 - $700</option>
                    <option>$700 - $1,000</option>
                    <option>$1,000 - $1,500</option>
                    <option>$1,500+</option>
                  </select>
                </div>
              </div>

              <div className="form__group">
                <label htmlFor="service">Service Interested In</label>
                <select id="service" name="service" value={fields.service} onChange={handleChange}>
                  <option value="">Select a service...</option>
                  <optgroup label="Graphic Design">
                    <option>Web Development</option>
                    <option>Web Design</option>
                    <option>Brand Identity &amp; Packaging</option>
                    <option>Logo Design</option>
                  </optgroup>
                  <optgroup label="Marketing">
                    <option>Ad Development</option>
                    <option>Company Photography</option>
                    <option>Social Media Management</option>
                    <option>Digital Marketing</option>
                  </optgroup>
                  <option>Multiple Services / Full Package</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>

              <div className="form__group">
                <label htmlFor="message">Project Brief</label>
                <textarea
                  id="message" name="message" rows="6"
                  placeholder="Tell us about your project — what you're building, your goals, timeline, and anything else that's relevant..."
                  value={fields.message} onChange={handleChange}
                  style={inputStyle('message')}
                  required
                />
              </div>

              <button type="submit" className="btn btn--primary btn--full" disabled={sending}>
                {sending ? 'Sending…' : 'Send Message →'}
              </button>

              {success && (
                <p className="form__success visible">
                  ✓ Message sent! We'll be in touch within one business day.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
