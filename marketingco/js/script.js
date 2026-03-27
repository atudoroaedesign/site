/* ═══════════════════════════════════════════════
   NEXUS STUDIO — script.js
   ═══════════════════════════════════════════════ */

'use strict';

const qs  = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ══════════════════════════════════════
   1. NAV — scroll state + mobile menu
   ══════════════════════════════════════ */
(function initNav() {
  const nav        = qs('#nav');
  const hamburger  = qs('#hamburger');
  const mobileMenu = qs('#mobileMenu');
  const mobileLinks = qsa('.mobile-link');

  if (!nav) return;

  const handleScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      });
    });
  }
})();

/* ══════════════════════════════════════
   2. SCROLL ANIMATIONS
   ══════════════════════════════════════ */
(function initScrollAnimations() {
  /* Animate data-animate elements on page load (hero elements) */
  const heroEls = qsa('[data-animate]').filter(el =>
    el.closest('.hero, .page-hero, .contact-page__left')
  );
  requestAnimationFrame(() => {
    heroEls.forEach(el => {
      const delay = parseInt(el.dataset.delay || 0, 10);
      setTimeout(() => el.classList.add('animated'), delay);
    });
  });

  /* All other animated elements use IntersectionObserver */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el    = entry.target;
        const delay = parseInt(el.dataset.delay || 0, 10);
        setTimeout(() => el.classList.add('animated'), delay);
        observer.unobserve(el);
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  qsa('[data-animate], .stat__card, .value__card, .team__card, .svc__card, .why__card, .testi-stat, .testi-card--full, .process-full__step').forEach(el => {
    if (!el.classList.contains('animated')) {
      observer.observe(el);
    }
  });
})();

/* ══════════════════════════════════════
   3. CONTACT FORM — validation + submit
   ══════════════════════════════════════ */
(function initContactForm() {
  const form    = qs('#contactForm');
  const success = qs('#formSuccess');
  if (!form) return;

  const showError = (input) => {
    input.style.borderColor = '#ef4444';
  };
  const clearErrors = () => {
    qsa('input, select, textarea', form).forEach(el => {
      el.style.borderColor = '';
    });
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const name    = qs('#name', form);
    const email   = qs('#email', form);
    const message = qs('#message', form);
    let   valid   = true;

    if (name && !name.value.trim()) { showError(name); valid = false; }

    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRx.test(email.value.trim())) { showError(email); valid = false; }

    if (message && !message.value.trim()) { showError(message); valid = false; }

    if (!valid) return;

    const btn = qs('button[type="submit"]', form);
    btn.textContent = 'Sending…';
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      btn.textContent = 'Send Message →';
      btn.disabled = false;
      if (success) {
        success.classList.add('visible');
        setTimeout(() => success.classList.remove('visible'), 5000);
      }
    }, 1200);
  });

  qsa('input, select, textarea', form).forEach(el => {
    el.addEventListener('input', () => { el.style.borderColor = ''; });
  });
})();

/* ══════════════════════════════════════
   4. SMOOTH ANCHOR SCROLL
   ══════════════════════════════════════ */
(function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const target = qs(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = qs('#nav') ? qs('#nav').offsetHeight : 0;
    const top  = target.getBoundingClientRect().top + window.scrollY - navH - 20;
    window.scrollTo({ top, behavior: 'smooth' });
  });
})();

/* ══════════════════════════════════════
   5. ACTIVE NAV HIGHLIGHT (current page)
   ══════════════════════════════════════ */
(function initActiveNavPage() {
  const path  = window.location.pathname.split('/').pop() || 'index.html';
  const links = qsa('.nav__links a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) link.classList.add('nav--active');
  });
})();