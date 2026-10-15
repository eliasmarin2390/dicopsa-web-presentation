import { clearElement, createElement } from '../utils/dom.js';

// Lista con viñetas a partir de un arreglo de textos.
export function createBulletList(items, className = 'bullet-list') {
  const list = createElement('ul', { className });
  items.forEach((item) => {
    list.append(createElement('li', { textContent: item }));
  });
  return list;
}

// Matriz PESTEL: cada dimensión tiene columnas de oportunidades y amenazas.
export function renderPestelPanel(panel, row) {
  clearElement(panel);

  const grid = createElement('div', { className: 'pestel-grid' });
  const columns = [
    { key: 'opportunities', title: 'Oportunidades', tone: 'opportunity' },
    { key: 'threats', title: 'Amenazas', tone: 'threat' }
  ];

  columns.forEach(({ key, title, tone }) => {
    const column = createElement('article', {
      className: `pestel-col pestel-col--${tone}`
    });
    column.append(createElement('h3', { textContent: title }));
    column.append(
      createBulletList(row.value[key], 'bullet-list bullet-list--tone')
    );
    grid.append(column);
  });

  panel.append(grid);
}

// Filas de especificación (etiqueta + lista de elementos), usadas en el análisis interno.
export function renderSpecRows(panel, rows) {
  clearElement(panel);

  const list = createElement('dl', { className: 'spec-list' });
  rows.forEach((row) => {
    const term = createElement('dt', { textContent: row.label });
    const detail = createElement('dd');
    detail.append(createBulletList(row.items));
    list.append(term, detail);
  });

  panel.append(list);
}
