import { queryAll } from '../utils/dom.js';

// Resalta en el menú la sección que está bajo la cabecera.
// Se calcula por posición (no por porcentaje visible) para que funcione con secciones largas.
export function setupScrollSpy(sections) {
  const links = queryAll('.site-nav a, .site-footer__nav a');
  let currentId = '';

  const setActive = (id) => {
    if (id === currentId) {
      return;
    }
    currentId = id;
    links.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.dataset.active = String(isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const update = () => {
    const marker = window.innerHeight * 0.3;
    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;

    let active = sections[0];
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= marker) {
        active = section;
      }
    });
    if (atBottom) {
      active = sections[sections.length - 1];
    }

    setActive(active?.id ?? 'inicio');
  };

  let scheduled = false;
  const onScroll = () => {
    if (scheduled) {
      return;
    }
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      update();
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}
