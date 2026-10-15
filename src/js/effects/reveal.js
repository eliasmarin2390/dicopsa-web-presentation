import { prefersReducedMotion } from '../interactions.js';

const STAGGER_MS = 90;

// Marca el retraso escalonado de cada hijo dentro de un grupo [data-reveal-group].
function assignStagger(root) {
  root.querySelectorAll('[data-reveal-group]').forEach((group) => {
    Array.from(group.children).forEach((child, index) => {
      child.setAttribute('data-reveal', '');
      child.style.setProperty('--reveal-delay', `${index * STAGGER_MS}ms`);
    });
  });
}

// Aparición al entrar en pantalla. Con movimiento reducido se muestra todo de inmediato.
export function setupReveal(root = document) {
  assignStagger(root);

  const targets = Array.from(root.querySelectorAll('[data-reveal]'));
  const show = (element) => element.classList.add('is-visible');

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    targets.forEach(show);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          show(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  );

  targets.forEach((target) => observer.observe(target));
}
