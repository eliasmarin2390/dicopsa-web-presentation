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

- Node.js LTS (recomendado 20 o superior)
- npm
- Visual Studio Code

## Preparación inicial del entorno

1. Instala Node.js LTS si aún no está disponible en tu equipo.
2. Abre la carpeta del proyecto en Visual Studio Code.
3. Cuando VS Code muestre una solicitud de seguridad para ejecutar la tarea, apruébala para permitir la ejecución automática.
4. La primera vez, la tarea comprobará si faltan dependencias y ejecutará `npm install` de forma segura.
5. A continuación, iniciará Vite y abrirá la aplicación en la URL local configurada por el proyecto.

## Abrir el proyecto en VS Code

La forma recomendada es abrir la carpeta raíz del repositorio directamente en VS Code, no la carpeta `src` ni ningún subdirectorio. Esto permite que la configuración de tareas y extensiones de `.vscode` se detecte automáticamente.

## Iniciar DICOPSA desde VS Code

Hay dos opciones:

### Opción recomendada: tarea de VS Code

- En VS Code abre el panel de Terminal.
- En la parte superior del panel, selecciona la tarea `DICOPSA: Iniciar en Google Chrome`.
- Si la carpeta acaba de abrirse, VS Code puede sugerir ejecutar la tarea automáticamente. Aprueba la ejecución para iniciar el proyecto sin escribir comandos.

La tarea incluida en `.vscode/tasks.json` hace lo siguiente:

- Comprueba si existe `node_modules`.
- Ejecuta `npm install` solo si hace falta.
- Lanza Vite una sola vez en `127.0.0.1:5173`.
- Espera a que el servidor responda y abre Google Chrome en `http://localhost:5173/dicopsa-corporate-website/`.
- No usa la vista previa integrada de VS Code.

La apertura se implementa en `scripts/start-dev-chrome.mjs`. El script busca Chrome en las variables `GOOGLE_CHROME_BIN` o `CHROME_PATH`, en el `PATH` y en las rutas estándar de instalación de Windows. No contiene rutas personales ni credenciales.

Para evitar servidores duplicados, la tarea tiene `instanceLimit: 1` y Vite usa `--strictPort`. Si ya existe un servidor en el puerto 5173, la segunda ejecución termina con un error claro en lugar de iniciar otra instancia.

### Configuración de VS Code incluida

- `.vscode/tasks.json`: define la tarea principal para iniciar la aplicación.
- `.vscode/extensions.json`: recomienda extensiones útiles para JavaScript, ESLint y Prettier.
- `scripts/start-dev-chrome.mjs`: inicia Vite y abre Chrome cuando el servidor está listo.

### Opción manual alternativa

```bash
npm install
npm run dev
```

## Cómo detener la aplicación

- En la terminal donde está corriendo Vite, pulsa `Ctrl + C`.
- Si la terminal está en segundo plano, selecciona la pestaña del servidor y usa la misma combinación.

Cerrar la pestaña de Chrome no detiene Vite; hay que detener la tarea con `Ctrl + C`.

## Qué hacer si el puerto está ocupado

Si el puerto `5173` ya está en uso, Vite puede fallar o reutilizar otro puerto según la configuración. En ese caso:

```bash
npm run dev -- --host 127.0.0.1 --port 4173
```

Alternativamente, cierra el proceso que esté usando el puerto 5173 o ajusta la configuración de la tarea si tu entorno lo requiere. La tarea automática conserva el puerto 5173 para mantener la URL esperada.

## Errores habituales

### Chrome no encontrado

Vite seguirá ejecutándose y mostrará la URL en la terminal. Instala Google Chrome o define una ruta válida antes de iniciar la tarea:

```powershell
$env:GOOGLE_CHROME_BIN = 'C:\Ruta\A\chrome.exe'
```

Después, vuelve a ejecutar `DICOPSA: Iniciar en Google Chrome`.

### La tarea no se inicia automáticamente

VS Code puede pedir autorización para ejecutar tareas al abrir una carpeta. Selecciona **Allow Automatic Tasks** o ejecuta la tarea desde **Terminal > Run Task**. No es necesario desactivar las protecciones de seguridad.

### Aparecen dos servidores

Detén las tareas activas con `Ctrl + C`, cierra terminales duplicadas y ejecuta únicamente `DICOPSA: Iniciar en Google Chrome`. No ejecutes simultáneamente esa tarea y `npm run dev`.

## Ruta base de Vite

La ruta base del proyecto está configurada en `vite.config.js` como `/dicopsa-corporate-website/`. Esta configuración es intencional para mantener la aplicación consistente con la ruta esperada en entornos de despliegue y en la URL local de desarrollo.

## Comandos principales

```bash
npm install
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
