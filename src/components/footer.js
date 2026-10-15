import { createElement } from '../utils/dom.js';

export function renderFooter(container, footerConfig, navigationItems) {
  const yearNode = container.querySelector('[data-current-year]');
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  const navList = container.querySelector('[data-site-footer-nav]');
  if (!navList) {
    return;
  }

  navList.replaceChildren();

  const fragment = document.createDocumentFragment();
  navigationItems.forEach((item) => {
    const listItem = createElement('li');
    const link = createElement('a', {
      textContent: item.label,
      attributes: {
        href: item.href
      }
    });
    listItem.append(link);
    fragment.append(listItem);
  });

  navList.append(fragment);

  const textNode = container.querySelector('.site-footer__text');
  if (textNode && footerConfig?.academicContext) {
    textNode.textContent = footerConfig.academicContext;
  }
}
