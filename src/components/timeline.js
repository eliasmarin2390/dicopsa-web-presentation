import { clearElement, createElement } from '../utils/dom.js';

export function renderTimeline(container, items) {
  clearElement(container);

  const list = createElement('ol', { className: 'timeline' });

  items.forEach((item) => {
    const entry = createElement('li', { className: 'timeline-item' });
    const body = createElement('div');

    entry.append(
      createElement('span', {
        className: 'timeline-item__year',
        textContent: item.year
      }),
      body
    );
    body.append(
      createElement('h3', {
        className: 'timeline-item__title',
        textContent: item.title
      })
    );
    body.append(
      createElement('p', {
        className: 'timeline-item__description',
        textContent: item.description
      })
    );
    list.append(entry);
  });

  container.append(list);
}
