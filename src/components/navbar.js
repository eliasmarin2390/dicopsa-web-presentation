export function renderNavbar(container, navigationItems) {
  const toggle = container.querySelector('[data-nav-toggle]');
  const nav = container.querySelector('[data-site-nav]');

  if (!toggle || !nav) {
    return;
  }

  const links = Array.from(nav.querySelectorAll('a'));
  const normalizedLinks = navigationItems.map((item) => item.href);

  links.forEach((link) => {
    const href = link.getAttribute('href');
    link.dataset.active = normalizedLinks.includes(href) ? 'true' : 'false';
  });

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
    setMenuState(window.innerWidth >= 960);
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
      if (window.innerWidth < 960) {
        closeMenu();
      }
    });
  });

  syncWithViewport();
  window.addEventListener('resize', syncWithViewport);
}
