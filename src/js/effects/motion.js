// Utilidades compartidas por los efectos de movimiento.

export function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

export function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

// Progreso de una sección según su posición en el viewport (0 al entrar, 1 al salir).
export function sectionProgress(rectTop, rectHeight, viewportHeight) {
  const total = viewportHeight + rectHeight;
  if (total <= 0) {
    return 0;
  }
  return clamp01((viewportHeight - rectTop) / total);
}

// Progreso global del documento según el scroll actual.
export function scrollRatio(scrollY, maxScroll) {
  if (maxScroll <= 0) {
    return 0;
  }
  return clamp01(scrollY / maxScroll);
}

// Ejecuta `callback` como máximo una vez por frame de animación.
export function frameThrottle(callback) {
  let queued = false;

  return () => {
    if (queued) {
      return;
    }
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      callback();
    });
  };
}
