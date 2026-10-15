import { clearElement, createElement } from '../utils/dom.js';

function appendCardContent(card, item, variant) {
  if (variant === 'roadmap' && item.phase) {
    card.append(
      createElement('span', {
        className: 'card__phase',
        textContent: item.phase
      })
    );
  }

  card.append(createElement('h3', { textContent: item.title }));

  if (item.subtitle) {
    card.append(
      createElement('p', {
        className: 'card__subtitle',
        textContent: item.subtitle
      })
    );
  }

  if (item.text) {
    card.append(
      createElement('p', { className: 'card__text', textContent: item.text })
    );
  }

  if (Array.isArray(item.points) && item.points.length > 0) {
    const list = createElement('ul', { className: 'card__list' });
    item.points.forEach((point) => {
      list.append(createElement('li', { textContent: point }));
    });
    card.append(list);
  }
}

export function renderCards(container, items, { variant = 'feature' } = {}) {
  clearElement(container);

  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const card = createElement('article', {
      className: `card card--${variant}`
    });

    appendCardContent(card, item, variant);
    fragment.append(card);
  });

  container.append(fragment);
}
