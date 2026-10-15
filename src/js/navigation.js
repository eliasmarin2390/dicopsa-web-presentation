import { queryAll } from '../utils/dom.js';

export function setupScrollSpy(sections) {
  const links = queryAll('.site-nav a, .site-footer__nav a');

  const setActive = (id) => {
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

  if (!('IntersectionObserver' in window)) {
    setActive(sections[0]?.id ?? 'inicio');
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) {
        setActive(visible.target.id);
      }
    },
    {
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0.15, 0.3, 0.5]
    }
  );

  sections.forEach((section) => observer.observe(section));
  setActive(sections[0]?.id ?? 'inicio');
}
