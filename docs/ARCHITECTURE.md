# Architecture

The project is organized as a small but real modular front-end application.

## Layers

- `index.html` contains the reveal deck structure and the persistent presentation chrome.
- `src/js/presentation` coordinates initialization, navigation and event binding.
- `src/js/components` isolates reusable UI logic such as the counter, progress bar and table of contents.
- `src/js/utils` contains small DOM and accessibility helpers.
- `src/css` is split by responsibility: base, layout, components and slide-specific sections.

## Data flow

1. `main.js` loads the CSS and starts the application.
2. `initializePresentation()` builds the deck, renders the table of contents and wires controls.
3. Reveal.js emits slide events and the app updates the counter, progress bar and active TOC item.

## Design decisions

- Reveal.js is used as the presentation engine because it already solves slide navigation, keyboard support and print-friendly output.
- Vite is used to resolve ES modules, optimize the build and support GitHub Pages deployment.
- The content is written directly in semantic HTML because the project is a presentation, not a data-heavy application.
- Tests focus on the logic that can be validated deterministically in Node and jsdom.
