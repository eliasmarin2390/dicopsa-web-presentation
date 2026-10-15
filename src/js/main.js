import 'reveal.js/reveal.css';
import '../css/main.css';
import { initializePresentation } from './presentation/initialize.js';

async function start() {
  try {
    await initializePresentation();
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'No fue posible iniciar la presentación.';
    console.error(error);

    const alertBox = document.createElement('div');
    alertBox.className = 'startup-error';
    alertBox.setAttribute('role', 'alert');
    alertBox.textContent = message;
    document.body.prepend(alertBox);
  }
}

window.addEventListener('DOMContentLoaded', start, { once: true });
