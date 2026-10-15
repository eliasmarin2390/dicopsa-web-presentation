export function prefersReducedMotion() {
  if (typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function applyReducedMotionClass(root = document.documentElement) {
  root.classList.toggle('reduce-motion', prefersReducedMotion());
}
