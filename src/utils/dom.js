export function queryRequired(selector, root = document) {
  const element = root.querySelector(selector);

  if (!element) {
    throw new Error(`No se encontró el elemento requerido: ${selector}`);
  }

  return element;
}

export function queryAll(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

export function createElement(
  tagName,
  { className = '', textContent = '', attributes = {} } = {}
) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (textContent) {
    element.textContent = textContent;
  }

  for (const [name, value] of Object.entries(attributes)) {
    if (value !== undefined && value !== null) {
      element.setAttribute(name, String(value));
    }
  }

  return element;
}

export function clearElement(element) {
  element.replaceChildren();
}
