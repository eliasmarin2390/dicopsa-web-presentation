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

// Tabla de datos con encabezado; en pantallas angostas se desplaza horizontalmente.
export function renderTable(container, { intro, headers, rows }) {
  clearElement(container);

  if (intro) {
    container.append(
      createElement('p', { className: 'body-text', textContent: intro })
    );
  }

  const table = createElement('table', { className: 'data-table' });
  const headRow = createElement('tr');
  headers.forEach((header) => {
    headRow.append(
      createElement('th', { textContent: header, attributes: { scope: 'col' } })
    );
  });
  table.append(createElement('thead'));
  table.tHead.append(headRow);

  const body = createElement('tbody');
  rows.forEach((cells) => {
    const tr = createElement('tr');
    cells.forEach((cell, index) => {
      tr.append(
        createElement(index === 0 ? 'th' : 'td', {
          textContent: cell,
          attributes: index === 0 ? { scope: 'row' } : {}
        })
      );
    });
    body.append(tr);
  });
  table.append(body);

  const wrapper = createElement('div', { className: 'data-table__wrap' });
  wrapper.append(table);
  container.append(wrapper);
}

// Filas de especificación (etiqueta + lista de elementos), usadas en el análisis interno.
export function renderSpecRows(panel, rows) {
  clearElement(panel);

  const list = createElement('dl', { className: 'spec-list' });
  rows.forEach((row) => {
    const term = createElement('dt', { textContent: row.label });
    if (row.status) {
      term.append(
        createElement('span', {
          className: 'spec-list__status',
          textContent: row.status
        })
      );
    }
    const detail = createElement('dd');
    detail.append(createBulletList(row.items));
    list.append(term, detail);
  });

  panel.append(list);
}
