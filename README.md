# contadoras.ya

Sitio institucional responsive para un estudio de tres contadoras argentinas. Incluye Inicio, Servicios, Certificaciones, Nosotras y Contacto.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- Componentes shadcn/ui locales
- Radix UI para Sheet y Accordion
- Lucide Icons

## Desarrollo

```bash
npm install
npm run dev
```

## GitHub Pages

Cada push a `main` ejecuta `.github/workflows/jekyll-gh-pages.yml`, compila el sitio con la base `/contadora_web/` y publica `dist/` en GitHub Pages. El build también genera un `404.html` para que las rutas de React funcionen al abrirlas directamente.

## Contenido editable

Los datos generales del estudio están centralizados en `src/lib/site.ts`. Los perfiles demostrativos del equipo están en `src/pages/about.tsx`.
