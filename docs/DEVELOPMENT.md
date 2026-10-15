# Development

## Setup

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Quality checks

```bash
npm run lint
npm run format:check
npm run test
npm run build
```

## Notes

- Keep `package-lock.json` committed for reproducible installs.
- Do not commit `node_modules` or the local `.venv` directory.
- The presentation base path in `vite.config.js` is set for GitHub Pages and should be updated if the repository name changes.
