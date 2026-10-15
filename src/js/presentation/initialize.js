import Reveal from 'reveal.js';
import { createProgressBar } from '../components/progress.js';
import { createSlideCounter } from '../components/slide-counter.js';
import { createTableOfContents } from '../components/table-of-contents.js';
import { applyReducedMotionClass } from '../../utils/accessibility.js';
import { queryAll, queryRequired } from '../../utils/dom.js';
import { bindPresentationEvents } from './events.js';
import { createNavigationController } from './navigation.js';
import { presentationConfig } from '../config/presentation-config.js';

function getCurrentSlideIndex(event) {
  return event?.indexh ?? 0;
}

export async function initializePresentation({
  document: doc = document,
  deckFactory = (root) => new Reveal(root),
  config = presentationConfig
} = {}) {
  applyReducedMotionClass(doc.documentElement);

  const root = queryRequired('#presentation', doc);
  const slides = queryAll('.slides > section', doc);
  const counterElement = queryRequired('[data-slide-counter]', doc);
  const progressElement = queryRequired('[data-progress-bar]', doc);
  const tocContainer = queryRequired('[data-toc-list]', doc);
  const drawer = queryRequired('#toc-drawer', doc);
  const tocToggleButtons = queryAll('[data-action="toggle-toc"]', doc);
  const previousButton = queryRequired('[data-action="previous-slide"]', doc);
  const nextButton = queryRequired('[data-action="next-slide"]', doc);
  const fullscreenButton = queryRequired('[data-action="fullscreen"]', doc);
  const closeTocButton = queryRequired('[data-action="close-toc"]', doc);

  const deck = deckFactory(root);
  const totalSlides = slides.length;
  const counter = createSlideCounter(counterElement);
  const progress = createProgressBar(progressElement);

  const toc = createTableOfContents(tocContainer, slides, (slideIndex) => {
    deck.slide(slideIndex);
  });

  const navigation = createNavigationController({
    deck,
    document: doc,
    drawer,
    tocToggleButtons,
    previousButton,
    nextButton,
    fullscreenButton,
    closeTocButton
  });

  const syncUi = (slideIndex) => {
    const currentSlide = slideIndex + 1;
    counter.update(currentSlide, totalSlides);
    progress.update(currentSlide, totalSlides);
    toc.setActive(slideIndex);
  };

  bindPresentationEvents(deck, {
    onReady: (event) => {
      syncUi(getCurrentSlideIndex(event));
    },
    onSlideChanged: (event) => {
      syncUi(getCurrentSlideIndex(event));
    }
  });

  await deck.initialize(config);
  syncUi(deck.getIndices().h ?? 0);

  return {
    deck,
    navigation,
    toc
  };
}
