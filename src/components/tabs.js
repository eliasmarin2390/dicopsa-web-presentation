import { clearElement, createElement } from '../utils/dom.js';

let tabsCount = 0;

// Devuelve el índice de la pestaña a activar según la tecla pulsada.
export function nextTabIndex(current, key, count) {
  switch (key) {
    case 'ArrowRight':
      return (current + 1) % count;
    case 'ArrowLeft':
      return (current - 1 + count) % count;
    case 'Home':
      return 0;
    case 'End':
      return count - 1;
    default:
      return current;
  }
}

// Pestañas accesibles (WAI-ARIA tabs). Cada pestaña llama a `render(panel)` la primera vez que se activa.
export function renderTabs(container, tabs) {
  clearElement(container);
  tabsCount += 1;
  const idBase = `tabs-${tabsCount}`;

  const list = createElement('div', {
    className: 'tabs__list',
    attributes: { role: 'tablist', 'aria-label': 'Seleccionar contenido' }
  });
  const panels = createElement('div', { className: 'tabs__panels' });
  const rendered = new Array(tabs.length).fill(false);
  const buttons = [];
  const panelNodes = [];

  const activate = (index) => {
    buttons.forEach((button, i) => {
      const selected = i === index;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
      panelNodes[i].hidden = !selected;
    });

    if (!rendered[index]) {
      tabs[index].render(panelNodes[index]);
      rendered[index] = true;
    }
  };

  tabs.forEach((tab, index) => {
    const button = createElement('button', {
      className: 'tabs__tab',
      textContent: tab.label,
      attributes: {
        type: 'button',
        role: 'tab',
        id: `${idBase}-tab-${index}`,
        'aria-controls': `${idBase}-panel-${index}`
      }
    });

    const panel = createElement('div', {
      className: 'tabs__panel',
      attributes: {
        role: 'tabpanel',
        id: `${idBase}-panel-${index}`,
        'aria-labelledby': `${idBase}-tab-${index}`,
        tabindex: '0'
      }
    });

    button.addEventListener('click', () => activate(index));
    button.addEventListener('keydown', (event) => {
      const next = nextTabIndex(index, event.key, tabs.length);
      if (next !== index) {
        event.preventDefault();
        buttons[next].focus();
        activate(next);
      }
    });

    buttons.push(button);
    panelNodes.push(panel);
    list.append(button);
    panels.append(panel);
  });

  container.append(list, panels);
  activate(0);
}
