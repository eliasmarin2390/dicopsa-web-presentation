export function bindPresentationEvents(deck, { onReady, onSlideChanged }) {
  deck.on('ready', (event) => {
    onReady?.(event);
  });

  deck.on('slidechanged', (event) => {
    onSlideChanged?.(event);
  });
}
