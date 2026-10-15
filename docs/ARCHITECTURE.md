# Architecture

The project is organized as a modular front-end application for a static corporate website powered by Vite and ES Modules.

## Layers

- `index.html` defines the semantic shell, section anchors and placeholder containers for dynamic rendering.
- `src/js/main.js` is the application entry point and orchestrates rendering.
- `src/components` contains reusable render modules (cards, KPIs, timeline, tabs, analysis, navbar, footer).
- `src/data` stores structured domain content used by the UI.
- `src/js` contains interaction logic (scroll spy, back-to-top, reduced-motion handling).
- `src/js/effects` contains scroll-linked motion: reveal on scroll, animated counters, scroll and section progress, parallax. Pure helpers live in `motion.js` and are unit-tested.
- `src/utils` centralizes shared DOM and accessibility helpers.
- `src/js/presentation` and `src/js/components` keep legacy Reveal.js modules used by unit tests and backward compatibility.
- `src/css` contains global styles and support styles grouped by responsibility.

## Data flow

1. `main.js` loads global CSS and waits for `DOMContentLoaded`.
2. Render modules fill each section container using datasets from `src/data`.
3. Interaction modules activate navigation highlighting and UX helpers.
4. Legacy presentation modules remain independent from the main site bootstrap.

## Design decisions

- Vite is used to bundle ES modules, provide local development and optimize production builds.
- The current site architecture favors explicit, framework-free rendering modules for maintainability and low complexity.
- Data is separated from rendering to keep content updates independent from UI behavior.
- Shared helpers live in one utility layer to avoid duplicated logic.
- Tests focus on deterministic logic modules and legacy presentation compatibility paths.
