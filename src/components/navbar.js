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

  const closeMenu = () => {
    nav.dataset.open = 'false';
    toggle.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    nav.dataset.open = 'true';
    toggle.setAttribute('aria-expanded', 'true');
  };

  const syncWithViewport = () => {
    if (window.innerWidth >= 960) {
      nav.dataset.open = 'true';
      toggle.setAttribute('aria-expanded', 'true');
      return;
    }

    nav.dataset.open = 'false';
    toggle.setAttribute('aria-expanded', 'false');
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
