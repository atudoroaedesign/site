import { useEffect } from 'react'

/**
 * Replaces the IntersectionObserver scroll animation logic from script.js.
 * Call this hook once inside any page component to activate fade-up animations
 * on elements that have [data-animate] or the listed card class names.
 */
function useScrollAnimations() {
  useEffect(() => {
    const selectors = [
      '[data-animate]',
      '.stat__card',
      '.value__card',
      '.team__card',
      '.svc__card',
      '.why__card',
      '.testi-stat',
      '.testi-card--full',
      '.process-full__step',
    ].join(', ')

    /* Immediately animate hero / above-fold elements */
    const heroEls = document.querySelectorAll('[data-animate]')
    heroEls.forEach(el => {
      if (el.closest('.hero, .page-hero, .contact-page__left')) {
        const delay = parseInt(el.dataset.delay || 0, 10)
        setTimeout(() => el.classList.add('animated'), delay)
      }
    })

    /* IntersectionObserver for everything else */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          const el    = entry.target
          const delay = parseInt(el.dataset.delay || 0, 10)
          setTimeout(() => el.classList.add('animated'), delay)
          observer.unobserve(el)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll(selectors).forEach(el => {
      if (!el.classList.contains('animated')) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

export default useScrollAnimations
