# Despliegue en Netlify y GitHub Pages

## Netlify (carga manual de `dist/`)
1. Desde tu carpeta de proyecto:
```bash
cp .env.netlify .env
npm ci
npm run build
```
2. Sube la carpeta `dist/` en Netlify: *Deploys → Upload a folder* (sin conectar Git por ahora).

## GitHub Pages
1. Repositorio: **lista-mandado-2-app** en GitHub (usuario **dan-ov**).
2. Ejecuta:
```bash
cp .env.gh .env
npm ci
npm run build
npm run deploy
```
3. `package.json` ya tiene:
```json
"homepage": "https://dan-ov.github.io/lista-mandado-2-app"
```

### Notas
- `vite.config.*` usa `base` desde `VITE_BASE` para que los assets funcionen en Netlify (`/`) y en GitHub Pages (`/lista-mandado-2-app/`). 
- Si tu `index.html` tenía `<base href=...>`, elimínalo para evitar conflictos (Vite lo maneja por ti).
