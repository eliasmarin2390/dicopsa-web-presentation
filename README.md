<div align="center">

<h1>Casa Pellas · Diagnóstico estratégico y tecnológico</h1>

<p>
  Sitio web interactivo del <strong>Proyecto de curso · Avance V</strong><br />
  Planificación Estratégica y Organización Informática · Universidad Americana
</p>

<p>
  <img alt="Node.js 20+" src="https://img.shields.io/badge/Node.js-20%2B-132193?style=flat-square&logo=nodedotjs&logoColor=white" />
  <img alt="Vite 8" src="https://img.shields.io/badge/Vite-8-1e52b0?style=flat-square&logo=vite&logoColor=white" />
  <img alt="Vitest 5" src="https://img.shields.io/badge/Vitest-5-1e52b0?style=flat-square&logo=vitest&logoColor=white" />
  <img alt="ESLint" src="https://img.shields.io/badge/ESLint-10-132193?style=flat-square&logo=eslint&logoColor=white" />
  <img alt="Prettier" src="https://img.shields.io/badge/Prettier-3-e83743?style=flat-square&logo=prettier&logoColor=white" />
  <img alt="Licencia MIT" src="https://img.shields.io/badge/Licencia-MIT-e83743?style=flat-square" />
</p>

<p>
  <a href="#-inicio-rápido">Inicio rápido</a> ·
  <a href="#-secciones-del-sitio">Secciones</a> ·
  <a href="#-estructura-del-proyecto">Estructura</a> ·
  <a href="#-comandos">Comandos</a> ·
  <a href="#-contribución">Contribución</a>
</p>

</div>

---

## 📌 Acerca del proyecto

Presenta, en una sola página navegable, el análisis estratégico y tecnológico de **Casa Pellas, S.A.**: perfil de la compañía, entorno (PESTEL), análisis interno de TI, servicios de TI, FODA, objetivos del negocio y de TI, y normativas y tendencias.

> [!NOTE]
> Este es un **sitio académico no oficial**. Casa Pellas y las marcas mencionadas pertenecen a sus respectivos titulares. La infraestructura interna de TI de la empresa no es pública, por lo que esa parte se presenta como un **escenario de referencia** con etiquetas de verificación («A confirmar», «A validar», «A verificar»); solo lo marcado «Comprobado» proviene de fuentes públicas.

<table>
  <tr>
    <td><strong>Institución</strong></td>
    <td>Universidad Americana · Facultad de Ingeniería y Arquitectura</td>
  </tr>
  <tr>
    <td><strong>Asignatura</strong></td>
    <td>Planificación Estratégica y Organización Informática</td>
  </tr>
  <tr>
    <td><strong>Docente</strong></td>
    <td>Noel José Gavarrete Martínez</td>
  </tr>
  <tr>
    <td><strong>Integrantes</strong></td>
    <td>Diedereich Alexander Alemán Martínez · Elias Adrian Marin Cruz</td>
  </tr>
</table>

## 🧭 Secciones del sitio

Cada sección tiene su propio enlace en el menú de navegación, con el mismo nombre que su encabezado.

<table>
  <thead>
    <tr>
      <th align="left">Sección</th>
      <th align="left">Contenido</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><strong>Perfil</strong></td><td>Empresa, ubicación, giro, operatividad, mercado geográfico y antecedentes</td></tr>
    <tr><td><strong>Situación</strong></td><td>Situación actual y futura, y respuesta a las condiciones del mercado</td></tr>
    <tr><td><strong>Competencia</strong></td><td>Competencia, proveedores clave y ventaja competitiva</td></tr>
    <tr><td><strong>Factores clave</strong></td><td>Fortalezas, oportunidades y riesgo principal</td></tr>
    <tr><td><strong>Tecnología</strong></td><td>Situación tecnológica y nivel de madurez estimado</td></tr>
    <tr><td><strong>PESTEL</strong></td><td>Oportunidades y amenazas políticas, económicas, sociales, tecnológicas, ecológicas y legales</td></tr>
    <tr><td><strong>Análisis interno</strong></td><td>Datacenter (MDF), cuartos de comunicaciones (IDF), redes, servidores y servicios de TI</td></tr>
    <tr><td><strong>Servicios de TI</strong></td><td>Mapa, catálogo y portafolio de servicios, mesa de ayuda, SLA, KPI y respaldo</td></tr>
    <tr><td><strong>FODA</strong></td><td>Fortalezas, oportunidades, debilidades y amenazas más relevantes</td></tr>
    <tr><td><strong>Objetivos</strong></td><td>Objetivos del negocio (OBN) y de TI (OTI) con criterios SMART</td></tr>
    <tr><td><strong>Normativas</strong></td><td>Tendencias TIC, políticas, mejores prácticas e indicadores</td></tr>
  </tbody>
</table>

## 🔧 Tecnologías

<table>
  <tr>
    <td><strong>Interfaz</strong></td>
    <td>HTML5 semántico · CSS3 modular · JavaScript (ES Modules), sin framework</td>
  </tr>
  <tr>
    <td><strong>Herramientas</strong></td>
    <td>Vite (servidor y build) · Vitest + jsdom (pruebas) · ESLint · Prettier</td>
  </tr>
  <tr>
    <td><strong>Accesibilidad</strong></td>
    <td>Pestañas WAI-ARIA con teclado, enlace «Saltar al contenido», respeto de <code>prefers-reduced-motion</code></td>
  </tr>
</table>

## 🚀 Inicio rápido

### Requisitos

- [Node.js](https://nodejs.org/) 20 o superior (el CI usa Node 24) con `npm`
- [Visual Studio Code](https://code.visualstudio.com/) (recomendado) y Google Chrome

### Instalación

```bash
git clone <url-del-repositorio>
cd casa-pellas-website
npm install
```

### Ejecución

**Opción recomendada — tarea de VS Code.** Abre la carpeta raíz en VS Code y ejecuta **Terminal › Run Task › Casa Pellas: Iniciar en Google Chrome**. La tarea instala las dependencias si hacen falta, inicia Vite y abre Chrome cuando el servidor responde.

**Opción manual:**

```bash
npm run dev
```

El sitio queda disponible en:

```text
http://localhost:5173/casa-pellas-website/
```

> [!TIP]
> Abre siempre la **carpeta raíz** del repositorio en VS Code (no `src` ni un subdirectorio) para que se detecte la configuración de `.vscode`.

## 📜 Comandos

| Comando                | Descripción                                           |
| ---------------------- | ----------------------------------------------------- |
| `npm run dev`          | Servidor de desarrollo con recarga en caliente        |
| `npm run build`        | Genera la versión de producción en `dist/`            |
| `npm run preview`      | Sirve localmente la versión de producción             |
| `npm run lint`         | Revisa el código con ESLint                           |
| `npm run format:check` | Verifica el formato con Prettier                      |
| `npm run format`       | Aplica el formato con Prettier                        |
| `npm run test`         | Ejecuta las pruebas unitarias con Vitest              |
| `npm run check`        | Lint + formato + pruebas + build (lo mismo que el CI) |

## 📁 Estructura del proyecto

```text
casa-pellas-website/
├── index.html              Estructura de las secciones
├── src/
│   ├── data/               Contenido del sitio (company, pestel, infrastructure, strategy, site, project)
│   ├── components/         Piezas reutilizables: navbar, tarjetas, pestañas, tablas, línea de tiempo, footer
│   ├── js/                 Arranque (main.js), navegación, efectos de scroll y reveal
│   ├── css/                Tokens, tipografía, layout y componentes
│   └── utils/              Utilidades de DOM, accesibilidad y validación
├── tests/unit/             Pruebas con Vitest
├── scripts/                Arranque del servidor y apertura de Chrome
├── docs/                   Arquitectura, fuente del contenido, desarrollo y flujo Git
└── .github/workflows/      Integración continua
```

El contenido vive en `src/data` y se dibuja desde `src/js/main.js`. El menú se genera a partir de `siteNavigation` en `src/data/site.js`, de modo que **agregar una sección** requiere solo definir su `<section id="...">` en `index.html` y una entrada en esa lista.

## 🎨 Identidad visual

La interfaz usa la paleta de Casa Pellas definida como variables en `src/css/base/variables.css`.

<table>
  <tr>
    <td align="center"><img alt="#132193" src="https://placehold.co/64x32/132193/132193" /><br /><code>#132193</code><br />Azul marino</td>
    <td align="center"><img alt="#1E52B0" src="https://placehold.co/64x32/1e52b0/1e52b0" /><br /><code>#1E52B0</code><br />Azul rey</td>
    <td align="center"><img alt="#E83743" src="https://placehold.co/64x32/e83743/e83743" /><br /><code>#E83743</code><br />Rojo</td>
    <td align="center"><img alt="#0C1650" src="https://placehold.co/64x32/0c1650/0c1650" /><br /><code>#0C1650</code><br />Texto</td>
    <td align="center"><img alt="#F3F6FB" src="https://placehold.co/64x32/f3f6fb/f3f6fb" /><br /><code>#F3F6FB</code><br />Fondo alterno</td>
  </tr>
</table>

## 🧪 Calidad

Antes de integrar cambios, ejecuta:

```bash
npm run check
```

El flujo de GitHub Actions (`.github/workflows/ci.yml`) corre la misma validación en cada `push` y `pull request`.

## 🤝 Contribución

1. Crea una rama desde `main` (`feat/*`, `fix/*` o `docs/*`).
2. Haz commits pequeños con [Conventional Commits](https://www.conventionalcommits.org/): `tipo(ámbito): descripción breve`.
3. Ejecuta `npm run check` antes de integrar.
4. No agregues datos que no provengan de los documentos del proyecto.

Ejemplos de commit:

```text
feat(content): add services detail section
fix(navigation): highlight the correct section on long pages
docs: update readme
```

Más detalle en [`docs/GIT-WORKFLOW.md`](docs/GIT-WORKFLOW.md), [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) y [`docs/CONTENT-SOURCE.md`](docs/CONTENT-SOURCE.md).

## 🛟 Solución de problemas

<details>
<summary><strong>Chrome no se abre automáticamente</strong></summary>

Vite sigue en ejecución y muestra la URL en la terminal. Instala Google Chrome o define su ruta antes de iniciar la tarea:

```powershell
$env:GOOGLE_CHROME_BIN = 'C:\Ruta\A\chrome.exe'
```

El script `scripts/start-dev-chrome.mjs` también busca Chrome en `CHROME_PATH`, en el `PATH` y en las rutas estándar de Windows.

</details>

<details>
<summary><strong>El puerto 5173 está ocupado</strong></summary>

La tarea usa `--strictPort` para evitar servidores duplicados. Cierra el proceso que ocupa el puerto o ejecuta manualmente en otro:

```bash
npm run dev -- --host 127.0.0.1 --port 4173
```

</details>

<details>
<summary><strong>La tarea no inicia al abrir la carpeta</strong></summary>

VS Code pide autorización para ejecutar tareas automáticas. Selecciona **Allow Automatic Tasks** o ejecútala desde **Terminal › Run Task**.

</details>

<details>
<summary><strong>Aparecen dos servidores</strong></summary>

Detén las tareas activas con `Ctrl + C`, cierra las terminales duplicadas y usa solo la tarea **Casa Pellas: Iniciar en Google Chrome**. No la ejecutes a la vez que `npm run dev`.

</details>

## 🌐 Publicación

1. Genera la versión de producción con `npm run build`.
2. Publica el contenido de `dist/` en el hosting estático elegido (por ejemplo, GitHub Pages).
3. La ruta base está definida en `vite.config.js` como `/casa-pellas-website/`; debe coincidir con la ruta de despliegue.

## 📄 Licencia

Código bajo licencia [MIT](LICENSE). El contenido empresarial proviene de los documentos del proyecto de curso; las marcas y nombres citados pertenecen a sus respectivos titulares.

<div align="center">

<sub>Universidad Americana · Managua, Nicaragua · 2026</sub>

</div>
