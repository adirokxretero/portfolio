import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reducedMotion) {
  // Show everything immediately; skip all motion.
  document.documentElement.setAttribute('data-reduced-motion', '');
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    el.textContent = el.dataset.count ?? '';
  });
} else {
  gsap.registerPlugin(ScrollTrigger);

  // Hero: staggered entrance on load (not scroll-driven)
  const heroReveals = gsap.utils.toArray<HTMLElement>('#hero .reveal');
  gsap.to(heroReveals, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.12,
    ease: 'power3.out',
    delay: 0.15,
  });

  // Everything else reveals as it scrolls into view
  gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
    if (el.closest('#hero')) return;
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });

  // Hero stat counters
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    const state = { value: 0 };
    gsap.to(state, {
      value: target,
      duration: 1.6,
      ease: 'power2.out',
      delay: 0.4,
      onUpdate() {
        el.textContent = String(Math.round(state.value));
      },
    });
  });

  // Skill bars grow in when visible
  gsap.utils.toArray<HTMLElement>('.skill-fill').forEach((el) => {
    gsap.from(el, {
      scaleX: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });

  // Gentle parallax on project screenshots
  gsap.utils.toArray<HTMLElement>('[data-parallax] img').forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: -6 },
      {
        yPercent: 6,
        ease: 'none',
        scrollTrigger: {
          trigger: img.closest('[data-parallax]'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });
}
