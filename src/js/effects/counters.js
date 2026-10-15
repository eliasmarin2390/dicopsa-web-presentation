import { prefersReducedMotion } from '../interactions.js';
import { easeOutCubic } from './motion.js';

const NUMBER_FORMAT = new Intl.NumberFormat('en-US');

export function formatCount(value) {
  return NUMBER_FORMAT.format(Math.round(value));
}

// Anima un número desde 0 hasta `target` y escribe el resultado en `element`.
export function animateCount(
  element,
  target,
  { suffix = '', duration = 1600 } = {}
) {
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    element.textContent = `${formatCount(target * easeOutCubic(progress))}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
}

// Activa los contadores [data-count] la primera vez que se ven.
export function setupCounters(root = document) {
  const counters = Array.from(root.querySelectorAll('[data-count]'));

  const render = (element, final) => {
    element.textContent = `${formatCount(final)}${element.dataset.suffix ?? ''}`;
  };

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    counters.forEach((element) =>
      render(element, Number(element.dataset.count))
    );
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const element = entry.target;
        animateCount(element, Number(element.dataset.count), {
          suffix: element.dataset.suffix ?? ''
        });
        observer.unobserve(element);
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((element) => {
    element.textContent = `0${element.dataset.suffix ?? ''}`;
    observer.observe(element);
  });
}
