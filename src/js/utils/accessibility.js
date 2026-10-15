export function prefersReducedMotion() {
  if (typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function applyReducedMotionClass(root = document.documentElement) {
  root.classList.toggle('reduced-motion', prefersReducedMotion());
}

export function announceSlideChange(counterElement, current, total) {
  if (!counterElement) {
    return;
  }

  counterElement.textContent = `${String(current).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
}
