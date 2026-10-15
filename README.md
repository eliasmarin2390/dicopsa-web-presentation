# DICOPSA Corporate Website

Sitio web corporativo interactivo para presentar el diagnóstico estratégico y tecnológico de Distribuidora Comercial del Pacífico, S.A. (DICOPSA).

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

- `index.html`: punto de entrada del sitio.
- `src/components`: componentes renderizables reutilizables (cards, tablas, timeline, navbar, footer).
- `src/data`: datos empresariales y contenido estructurado de DICOPSA.
- `src/js`: orquestación de la aplicación y lógica de interacción.
- `src/js/presentation`: módulos heredados de presentación Reveal.js conservados para compatibilidad y pruebas.
- `src/utils`: utilidades compartidas de DOM y accesibilidad.
- `src/css`: estilos base y estilos de interfaz.
- `tests`: pruebas unitarias con Vitest.
- `docs`: arquitectura, contenido fuente y flujo Git.

## Interacción principal

- Navegación por anclas entre secciones (`#inicio`, `#empresa`, etc.).
- Menú responsive con apertura/cierre en móviles.
- Resaltado de sección activa mediante scroll spy.
- Botón flotante para volver al inicio de la página.

## Contribución

1. Crear una rama de trabajo.
2. Mantener commits pequeños con Conventional Commits.
3. Ejecutar lint, pruebas y build antes de integrar cambios.
4. Evitar introducir datos que no provengan del documento base.

## Convención de commits

`tipo(ámbito): descripción breve`

Ejemplos:

- `feat(site): add section navigation and dynamic content rendering`
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
