import { prefersReducedMotion } from '../interactions.js';
import { frameThrottle, scrollRatio, sectionProgress } from './motion.js';

// Barra de progreso de lectura en la cabecera.
export function setupScrollProgress(bar) {
  const update = frameThrottle(() => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${scrollRatio(window.scrollY, maxScroll)})`;
  });

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

// Expone --progress (0–1) en cada elemento [data-scroll-progress] para narrativas ligadas al scroll.
export function setupSectionProgress(root = document) {
  const elements = Array.from(root.querySelectorAll('[data-scroll-progress]'));
  if (elements.length === 0 || prefersReducedMotion()) {
    elements.forEach((element) => element.style.setProperty('--progress', '1'));
    return;
  }

  const update = frameThrottle(() => {
    const viewport = window.innerHeight;
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const progress = sectionProgress(rect.top, rect.height, viewport);
      element.style.setProperty('--progress', progress.toFixed(3));
    });
  });

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

// Capas con desplazamiento suave según el scroll (efecto de profundidad en el hero).
export function setupParallax(elements) {
  if (prefersReducedMotion()) {
    return;
  }

  const update = frameThrottle(() => {
    elements.forEach((element) => {
      const speed = Number(element.dataset.parallaxSpeed ?? 0.12);
      element.style.setProperty(
        '--parallax-y',
        `${(window.scrollY * speed).toFixed(1)}px`
      );
    });
  });

  window.addEventListener('scroll', update, { passive: true });
  update();
}
