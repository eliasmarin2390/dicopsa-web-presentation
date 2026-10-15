# DICOPSA Web Presentation

Presentación web interactiva, basada en Reveal.js, sobre el avance I del proyecto de Planificación Estratégica y Organización Informática aplicado a Distribuidora Comercial del Pacífico, S.A. (DICOPSA).

## Objetivo académico

Presentar, de forma clara y profesional, el análisis del perfil de la empresa, su entorno PESTEL y su situación tecnológica interna, conservando las cifras, fechas y conclusiones del documento fuente.

## Tecnologías utilizadas

- HTML5 semántico.
- CSS3 modular.
- JavaScript ES Modules.
- Reveal.js.
- Vite.
- Vitest.
- ESLint.
- Prettier.

## Requisitos previos

- Node.js LTS.
- npm.

## Instalación

```bash
npm install
```

## Comandos principales

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format:check
npm run test
```

## Estructura de carpetas

- `index.html`: punto de entrada de la presentación.
- `src/js`: módulos de inicialización, navegación, eventos y componentes.
- `src/css`: diseño base, componentes y estilos por sección.
- `tests`: pruebas unitarias con Vitest.
- `docs`: arquitectura, contenido fuente y flujo Git.

## Controles y atajos

- Flechas izquierda y derecha: navegar entre diapositivas.
- Botones anterior y siguiente: navegación principal.
- Botón índice: abrir y cerrar la tabla de contenidos.
- Botón pantalla completa: alternar modo fullscreen.
- `Esc`: cerrar el índice.
- `Home` / `End`: navegación estándar de Reveal.js.

## Contribución

1. Crear una rama de trabajo.
2. Mantener commits pequeños con Conventional Commits.
3. Ejecutar lint, pruebas y build antes de integrar cambios.
4. Evitar introducir datos que no provengan del documento base.

## Convención de commits

`tipo(ámbito): descripción breve`

Ejemplos:

- `feat(presentation): add interactive slide navigation`
- `feat(content): add DICOPSA profile slides`
- `test(navigation): cover progress and counter updates`
- `docs: add architecture and content source notes`

## Publicación en GitHub Pages

1. Generar la versión de producción con `npm run build`.
2. Publicar el contenido del directorio `dist/` en GitHub Pages.
3. Verificar que la base de rutas en `vite.config.js` coincida con el nombre del repositorio.

## Créditos y licencias

- Código del proyecto: licencia MIT.
- Reveal.js, Vite, Vitest, ESLint, Prettier, jsdom y globals: software libre de terceros usado como dependencia de desarrollo o runtime.
- El contenido empresarial se extrajo del PDF proporcionado por el usuario.
