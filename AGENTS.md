# FÓRMULA — notas para agentes

Web pública del método FÓRMULA. Astro estático, sin framework de UI, servida por
nginx en EasyPanel (`automatizaciones/formula-web`).

## Antes de tocar nada

1. Lee la spec activa en `specs/`.
2. Lee `docs/contenido-web.md`: ahí está **todo** el copy literal. No escribas
   textos nuevos ni traduzcas.
3. `docs/brief-maestro.md` manda en dirección de arte, tokens y prohibiciones.

## Reglas del repo

- Nada de React/Vue/Svelte, ni librerías de animación, ni CMS, ni analítica.
- Ningún texto visible dentro de un componente: todo el copy vive en `src/data/`.
- Los tokens de diseño se definen una sola vez, en `src/styles/tokens.css`.
- No inventes clientes, testimonios, premios, métricas ni Lighthouse falsos.
- No hay lorem ipsum en este repo.
- `docs/`, `specs/`, `assets-origen/`, `src/assets/formula/*.jpg` y
  `public/assets/formula/*` son material de entrada: no se editan.

## Entorno

En este VPS **no hay Node instalado**. No intentes `npm install` ni `npm run
dev`: la verificación se hace con `docker build`.

## Git

Rama `feat/…` o `fix/…` y PR. Nunca commit directo a `main`.
