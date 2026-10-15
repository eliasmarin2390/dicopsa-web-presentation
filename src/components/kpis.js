import { clearElement, createElement } from '../utils/dom.js';

// Cifras clave con contador animado. El valor final queda en data-count para los efectos.
export function renderKpis(container, items) {
  clearElement(container);

  items.forEach((item) => {
    const tile = createElement('div', { className: 'kpi' });
    tile.append(
      createElement('span', {
        className: 'kpi__value',
        textContent: `${item.value}${item.suffix ?? ''}`,
        attributes: {
          'data-count': item.value,
          'data-suffix': item.suffix ?? ''
        }
      }),
      createElement('span', {
        className: 'kpi__label',
        textContent: item.label
      })
    );
    container.append(tile);
  });
}
