export function calculateProgressPercentage(current, total) {
  if (!Number.isFinite(current) || !Number.isFinite(total) || total <= 0) {
    return 0;
  }

  return Math.min(100, Math.max(0, (current / total) * 100));
}

export function createProgressBar(element) {
  return {
    update(current, total) {
      const progress = calculateProgressPercentage(current, total);
      element.style.width = `${progress}%`;
      element.dataset.progress = String(progress.toFixed(2));
    }
  };
}
