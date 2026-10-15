export function applyReducedMotionClass(root = document.documentElement) {
  const mediaQuery =
    typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;

  root.classList.toggle('reduce-motion', Boolean(mediaQuery?.matches));
}

export function setupBackToTop(button) {
  const toggle = () => {
    button.classList.toggle('is-visible', window.scrollY > 480);
  };

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}
