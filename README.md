# FÓRMULA — web pública

Web estática del método FÓRMULA. Astro sin framework de UI, estilos propios
(Tailwind solo como capa de utilidades), servida por nginx en EasyPanel
(servicio `automatizaciones/formula`).

## Ejecutar y construir

En este VPS **no hay Node**: la verificación se hace siempre con Docker.

```bash
# Desarrollo (en una máquina con Node)
npm install
npm run dev

# Verificación / imagen de producción
docker build -t formula-web .
```

La imagen resultante sirve el sitio compilado con nginx en el puerto 80.

## Dónde está cada cosa

| Qué | Dónde |
| --- | --- |
| Copy literal (todos los textos) | `src/data/*.ts` — fuente: `docs/contenido-web.md` |
| Reglas del motor de decisión (sección 04) | `src/data/engine.ts` |
| Tokens de diseño (color, tipografía, motion) | `src/styles/tokens.css` |
| Estilos base y componentes | `src/styles/global.css` |
| Assets originales (no editar) | `assets-origen/` |
| Assets optimizados en uso | `src/assets/formula/` (imágenes) y `public/assets/formula/` (vídeo scroll + poster) |

Para sustituir un asset: coloca el original en `assets-origen/`, genera la
versión optimizada y reemplaza el archivo correspondiente en
`src/assets/formula/` o `public/assets/formula/` manteniendo el nombre.

## Variables de entorno

Se leen en **build** (cambiarlas exige redeploy). Ver `.env.example`:

- `PUBLIC_FORM_ENDPOINT` — webhook al que se envía el brief de `/iniciar`
  (POST en JSON). Vacío = formulario deshabilitado con aviso.
- `SITE_URL` — origen público del sitio; alimenta `site` de Astro y el sitemap.
  Por defecto `https://formula.dksaa.com`.

También se pueden pasar como build args de Docker:
`docker build --build-arg SITE_URL=... --build-arg PUBLIC_FORM_ENDPOINT=... .`

## Despliegue

1. Rama `feat/…` o `fix/…` → PR → squash-merge a `main` (nunca commit directo).
2. El merge dispara el despliegue en EasyPanel (`automatizaciones/formula`).
3. Verificar en producción tras el deploy.

`SITE_URL` y `PUBLIC_FORM_ENDPOINT` son **build args, no variables de runtime**:
el sitio es estático y las lee `npm run build` dentro de la imagen. Ponerlas
como variables de entorno del servicio en el panel no tiene ningún efecto —
hay que reconstruir la imagen para que cambien.

## Pendiente

- Páginas legales (privacidad, aviso legal): el enlace del footer está
  deshabilitado a la espera de copy.
