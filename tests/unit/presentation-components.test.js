import { calculateProgressPercentage } from '../../src/js/components/progress.js';
import { formatSlideCounter } from '../../src/js/components/slide-counter.js';
import { extractNavigationItems } from '../../src/js/components/table-of-contents.js';

describe('presentation components', () => {
  it('formats slide counters with leading zeros', () => {
    expect(formatSlideCounter(3, 18)).toBe('03 / 18');
  });

  it('calculates percentage progress safely', () => {
    expect(calculateProgressPercentage(3, 18)).toBeCloseTo(16.666, 2);
    expect(calculateProgressPercentage(0, 0)).toBe(0);
  });

  it('extracts navigation items from slide elements', () => {
    const slides = [
      { dataset: { title: 'Portada institucional' } },
      { dataset: { title: 'Perfil general de DICOPSA' } },
      { dataset: {} }
    ];

    const items = extractNavigationItems(slides);

    expect(items).toEqual([
      { index: 0, title: 'Portada institucional' },
      { index: 1, title: 'Perfil general de DICOPSA' },
      { index: 2, title: 'Diapositiva 3' }
    ]);
  });
});
