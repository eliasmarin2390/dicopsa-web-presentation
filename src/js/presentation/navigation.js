export function createNavigationController({
  deck,
  document,
  drawer,
  tocToggleButtons,
  previousButton,
  nextButton,
  fullscreenButton,
  closeTocButton
}) {
  const openDrawer = () => {
    drawer.hidden = false;
    tocToggleButtons.forEach((button) =>
      button.setAttribute('aria-expanded', 'true')
    );
  };

  const closeDrawer = () => {
    drawer.hidden = true;
    tocToggleButtons.forEach((button) =>
      button.setAttribute('aria-expanded', 'false')
    );
  };

  const toggleDrawer = () => {
    if (drawer.hidden) {
      openDrawer();
      return;
    }

    closeDrawer();
  };

  const handleFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        return;
      }

      await document.documentElement.requestFullscreen();
    } catch (error) {
      console.error('No se pudo alternar pantalla completa.', error);
    }
  };

  previousButton.addEventListener('click', () => deck.left());
  nextButton.addEventListener('click', () => deck.right());
  fullscreenButton.addEventListener('click', handleFullscreen);
  tocToggleButtons.forEach((button) =>
    button.addEventListener('click', toggleDrawer)
  );
  closeTocButton.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !drawer.hidden) {
      closeDrawer();
    }
  });

  document.addEventListener('fullscreenchange', () => {
    const active = Boolean(document.fullscreenElement);
    fullscreenButton.setAttribute('aria-pressed', String(active));
    fullscreenButton.setAttribute(
      'aria-label',
      active ? 'Salir de pantalla completa' : 'Activar pantalla completa'
    );
  });

  return {
    openDrawer,
    closeDrawer,
    toggleDrawer
  };
}
