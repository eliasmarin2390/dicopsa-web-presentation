import { initializePresentation } from '../../src/js/presentation/initialize.js';

class FakeDeck {
  constructor(root) {
    this.root = root;
    this.handlers = new Map();
    this.indices = { h: 0 };
    this.initializedWith = null;
  }

  async initialize(options) {
    this.initializedWith = options;
    return this;
  }

  on(eventName, handler) {
    this.handlers.set(eventName, handler);
  }

  getIndices() {
    return this.indices;
  }

  slide(index) {
    this.indices.h = index;
  }

  left() {
    this.indices.h -= 1;
  }

  right() {
    this.indices.h += 1;
  }

  trigger(eventName, payload) {
    this.handlers.get(eventName)?.(payload);
  }
}

function createTestDocument() {
  document.body.innerHTML = `
    <div>
      <button data-action="toggle-toc" aria-expanded="false"></button>
      <button data-action="previous-slide"></button>
      <button data-action="next-slide"></button>
      <button data-action="fullscreen"></button>
      <button data-action="close-toc"></button>
      <span data-slide-counter></span>
      <span data-progress-bar></span>
      <aside id="toc-drawer" hidden><nav data-toc-list></nav></aside>
      <div class="reveal" id="presentation">
        <div class="slides">
          <section data-title="Portada institucional"></section>
          <section data-title="Perfil general de DICOPSA"></section>
          <section data-title="Historia y evolución empresarial"></section>
        </div>
      </div>
    </div>
  `;

  return document;
}

describe('initializePresentation', () => {
  it('wires navigation, progress and table of contents', async () => {
    const testDocument = createTestDocument();
    const deck = new FakeDeck(testDocument.querySelector('#presentation'));

    const result = await initializePresentation({
      document: testDocument,
      deckFactory: () => deck,
      config: { test: true }
    });

    expect(deck.initializedWith).toEqual({ test: true });
    expect(testDocument.querySelector('[data-slide-counter]').textContent).toBe(
      '01 / 03'
    );
    expect(
      testDocument.querySelector('[data-progress-bar]').dataset.progress
    ).toBe('33.33');

    testDocument.querySelector('[data-action="next-slide"]').click();
    expect(deck.getIndices().h).toBe(1);

    testDocument.querySelector('[data-action="toggle-toc"]').click();
    expect(testDocument.querySelector('#toc-drawer').hidden).toBe(false);

    result.toc.setActive(1);
    expect(
      testDocument.querySelectorAll('.toc-list__button.is-active')
    ).toHaveLength(1);
  });
});
