import { createElement } from '../../utils/dom.js';

export function extractNavigationItems(slides) {
  return slides
    .map((slide, index) => ({
      index,
      title: slide.dataset.title?.trim() || `Diapositiva ${index + 1}`
    }))
    .filter((item) => item.title.length > 0);
}

export function createTableOfContents(container, slides, onNavigate) {
  const items = extractNavigationItems(slides);

  const list = createElement('ol', { className: 'toc-list__items' });
  items.forEach((item) => {
    const listItem = createElement('li', { className: 'toc-list__item' });
    const button = createElement('button', {
      className: 'toc-list__button',
      textContent: item.title,
      attributes: {
        type: 'button',
        'data-slide-index': item.index
      }
    });

    button.addEventListener('click', () => onNavigate(item.index));
    listItem.append(button);
    list.append(listItem);
  });

  container.replaceChildren(list);

  return {
    setActive(index) {
      container.querySelectorAll('.toc-list__button').forEach((button) => {
        button.classList.toggle(
          'is-active',
          Number(button.dataset.slideIndex) === index
        );
      });
    }
  };
}
