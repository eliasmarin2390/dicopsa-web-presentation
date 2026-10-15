export function formatSlideCounter(current, total) {
  const safeCurrent = Number.isFinite(current) ? current : 0;
  const safeTotal = Number.isFinite(total) ? total : 0;

  return `${String(safeCurrent).padStart(2, '0')} / ${String(safeTotal).padStart(2, '0')}`;
}

export function createSlideCounter(element) {
  return {
    update(current, total) {
      element.textContent = formatSlideCounter(current, total);
    }
  };
}
