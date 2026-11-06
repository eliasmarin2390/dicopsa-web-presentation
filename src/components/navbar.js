import { createElement } from '../utils/dom.js';

// Debe coincidir con el @media (max-width: 1360px) de site.css.
const DESKTOP_NAV_MIN = 1360;

// El menú se construye desde `navigationItems` para que siempre coincida con las secciones.
export function renderNavbar(container, navigationItems) {
  const toggle = container.querySelector('[data-nav-toggle]');
  const nav = container.querySelector('[data-site-nav]');

  if (!toggle || !nav) {
    return;
  }

  const list = nav.querySelector('.site-nav__list');
  list.replaceChildren(
    ...navigationItems.map((item) => {
      const listItem = createElement('li');
      listItem.append(
        createElement('a', {
          textContent: item.label,
          attributes: { href: item.href, 'data-active': 'false' }
        })
      );
      return listItem;
    })
  );

  const links = Array.from(nav.querySelectorAll('a'));

  const setMenuState = (isOpen) => {
    nav.dataset.open = String(isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute(
      'aria-label',
      isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
    );
  };

  const closeMenu = () => setMenuState(false);
  const openMenu = () => setMenuState(true);

  const syncWithViewport = () => {
    setMenuState(window.innerWidth > DESKTOP_NAV_MIN);
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.dataset.open === 'true';
    if (isOpen) {
      closeMenu();
      return;
    }

    openMenu();
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= DESKTOP_NAV_MIN) {
        closeMenu();
      }
    });
  });

  syncWithViewport();
  window.addEventListener('resize', syncWithViewport);
}
