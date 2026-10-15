import { formatCount } from '../../src/js/effects/counters.js';
import {
  clamp01,
  easeOutCubic,
  scrollRatio,
  sectionProgress
} from '../../src/js/effects/motion.js';
import { nextTabIndex } from '../../src/components/tabs.js';
import { renderKpis } from '../../src/components/kpis.js';

describe('motion helpers', () => {
  it('clamps values between 0 and 1', () => {
    expect(clamp01(-0.4)).toBe(0);
    expect(clamp01(0.5)).toBe(0.5);
    expect(clamp01(3)).toBe(1);
  });

  it('eases out from 0 to 1', () => {
    expect(easeOutCubic(0)).toBe(0);
    expect(easeOutCubic(1)).toBe(1);
    expect(easeOutCubic(0.5)).toBeGreaterThan(0.5);
  });

  it('computes section progress across the viewport', () => {
    // Sección justo debajo del viewport: aún no empieza.
    expect(sectionProgress(800, 400, 800)).toBe(0);
    // Sección que acaba de salir por arriba: completa.
    expect(sectionProgress(-400, 400, 800)).toBe(1);
    // Sección centrada en la pantalla: a mitad del recorrido.
    expect(sectionProgress(200, 400, 800)).toBeCloseTo(0.5, 5);
    expect(sectionProgress(0, 0, 0)).toBe(0);
  });

  it('computes the document scroll ratio safely', () => {
    expect(scrollRatio(500, 1000)).toBe(0.5);
    expect(scrollRatio(2000, 1000)).toBe(1);
    expect(scrollRatio(100, 0)).toBe(0);
  });
});

describe('counters', () => {
  it('formats counts with thousands separators', () => {
    expect(formatCount(3500)).toBe('3,500');
    expect(formatCount(22.4)).toBe('22');
  });
});

describe('tabs keyboard navigation', () => {
  it('moves forward and backward with wraparound', () => {
    expect(nextTabIndex(0, 'ArrowRight', 3)).toBe(1);
    expect(nextTabIndex(2, 'ArrowRight', 3)).toBe(0);
    expect(nextTabIndex(0, 'ArrowLeft', 3)).toBe(2);
  });

  it('jumps to the first and last tab', () => {
    expect(nextTabIndex(1, 'Home', 4)).toBe(0);
    expect(nextTabIndex(1, 'End', 4)).toBe(3);
  });

  it('keeps the current tab for unrelated keys', () => {
    expect(nextTabIndex(2, 'Enter', 4)).toBe(2);
  });
});

describe('kpis rendering', () => {
  it('renders counters with their target and suffix', () => {
    const container = document.createElement('div');

    renderKpis(container, [
      { value: 22, suffix: ' años', label: 'de operación' },
      { value: 3500, suffix: '+', label: 'clientes activos' }
    ]);

    const values = container.querySelectorAll('[data-count]');
    expect(values).toHaveLength(2);
    expect(values[0].dataset.count).toBe('22');
    expect(values[0].dataset.suffix).toBe(' años');
    expect(values[1].textContent).toBe('3500+');
    expect(container.querySelector('.kpi__label').textContent).toBe(
      'de operación'
    );
  });
});
