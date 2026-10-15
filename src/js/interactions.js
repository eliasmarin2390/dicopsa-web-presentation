export function prefersReducedMotion() {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function applyReducedMotionClass(root = document.documentElement) {
  root.classList.toggle('reduce-motion', prefersReducedMotion());
}

export function setupBackToTop(button) {
  const toggle = () => {
    button.classList.toggle('is-visible', window.scrollY > 480);
  };

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth'
    });
  });

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}
