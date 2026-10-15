import { clearElement, createElement } from '../utils/dom.js';

function appendCellContent(cell, value) {
  if (Array.isArray(value)) {
    const list = createElement('ul', { className: 'table__list' });
    value.forEach((entry) => {
      list.append(createElement('li', { textContent: entry }));
    });
    cell.append(list);
    return;
  }

  if (value && typeof value === 'object') {
    const bulletList = createElement('ul', { className: 'table__list' });
    Object.entries(value).forEach(([label, entries]) => {
      const listItem = createElement('li');
      listItem.append(createElement('strong', { textContent: `${label}: ` }));
      listItem.append(
        createElement('span', {
          textContent: Array.isArray(entries)
            ? entries.join(' · ')
            : String(entries)
        })
      );
      bulletList.append(listItem);
    });
    cell.append(bulletList);
    return;
  }

  cell.textContent = String(value ?? '');
}

export function renderTable(container, rows) {
  clearElement(container);

  const table = createElement('table', { className: 'data-table' });
  const tbody = createElement('tbody');

  rows.forEach((row) => {
    const tr = createElement('tr');
    const th = createElement('th', { textContent: row.label });
    th.scope = 'row';
    const td = createElement('td');
    appendCellContent(td, row.value);
    tr.append(th, td);
    tbody.append(tr);
  });

  table.append(tbody);
  container.append(table);
}
