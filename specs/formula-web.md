# SPEC — Web pública FÓRMULA (v1)

## Objetivo

Construir la web pública del proyecto FÓRMULA: una sola Home de 9 secciones más
una página `/iniciar` con formulario multipaso, en Astro estático, que demuestre
visualmente el método de 7 decisiones descrito en `docs/brief-maestro.md`.

## Documentos de referencia (léelos antes de escribir código)

- `docs/brief-maestro.md` — dirección de arte, tokens, secciones, reglas, prohibiciones.
- `docs/contenido-web.md` — **todos los textos literales**. No inventes copy.
- `docs/brief-assets.md` — uso narrativo de los assets.

Estos tres documentos son vinculantes. Esta spec solo fija lo que ellos no
cierran o donde se apartan de la realidad de los assets disponibles.

## Stack fijado (no discutir)

- Astro 5, `output: 'static'`, TypeScript estricto.
- Tailwind CSS 4 vía `@tailwindcss/vite`. Los tokens de color/espaciado se
  declaran **una sola vez** en `src/styles/tokens.css` como custom properties y
  se exponen a Tailwind con `@theme`.
- **Sin framework de UI.** Nada de React, Vue, Svelte ni Solid. La
  interactividad se resuelve con TypeScript nativo dentro de `<script>` de
  componentes `.astro`.
- **Sin librerías de animación.** Solo CSS, `IntersectionObserver` y Web
  Animations API.
- Iconos: `astro-icon` + `@iconify-json/lucide`, inline en el HTML, stroke 1.5.
  Ninguna otra familia de iconos.
- Fuentes self-hosted: `@fontsource-variable/manrope` y `@fontsource/ibm-plex-mono`
  (solo los pesos usados, subset latin).
- Imágenes: `astro:assets` (`<Image>` / `<Picture>`) sobre los originales de
  `src/assets/formula/`. Genera AVIF + WebP con JPG de fallback, `width`/`height`
  explícitos siempre.
- `@astrojs/sitemap`.
- Dependencias totales de producción: las anteriores y ninguna más.

## Ficheros que puedes crear o tocar

```text
package.json
astro.config.mjs
tsconfig.json
.gitignore
.env.example
Dockerfile
nginx.conf
README.md
src/**            (todo salvo src/assets/formula/*, que ya está y no se toca)
public/favicon.svg
public/robots.txt
```

Prohibido tocar: `docs/**`, `specs/**`, `assets-origen/**`,
`src/assets/formula/*.jpg`, `public/og-formula.jpg`,
`public/assets/formula/*` (vídeo y póster ya generados y optimizados).

## Estructura de código exigida

```text
src/
  assets/formula/        (ya existe: 5 jpg de origen, no tocar)
  components/
    ui/                  Button, Eyebrow, SectionHeader, Card, Tag, Grain…
    sections/            Hero, Problema, Formula, Motor, Ejemplos,
                         Produccion, Entregables, Calidad, CtaFinal
    layout/              Navbar, Footer, MobileMenu
    form/                pasos del brief multipaso
  data/
    site.ts              copy global, nav, footer, SEO
    formula.ts           los 7 pasos
    engine.ts            preguntas, opciones, recomendaciones base y overrides
    examples.ts          los 3 ejemplos de decisión
    production.ts        las 13 fases (00–12)
    deliverables.ts      entregables del bento
    quality.ts           los 4 pilares de calidad
    form.ts              definición de los 5 pasos del formulario
  lib/
    engine.ts            función pura resolve(answers) => Recommendation
  layouts/Base.astro
  pages/
    index.astro
    iniciar.astro
    404.astro
  styles/
    tokens.css
    global.css
```

Regla dura: **ningún texto visible hardcodeado dentro de un componente**. Todo
el copy vive en `src/data/*.ts`, tipado. Un componente que necesite una frase la
recibe por props o la importa de `data`.

## Comportamiento

### Home

Nueve secciones, en el orden y con el copy de `docs/contenido-web.md`. Nada de
secciones extra de relleno. Anclas de navegación: `#metodo` (sección 03),
`#decisiones` (sección 04), `#proceso` (sección 06), `#calidad` (sección 08).

Uso de assets (esto **corrige** `docs/brief-assets.md`, que asumía composiciones
que no coinciden con los renders reales; manda esta tabla):

| Ubicación | Fichero |
|---|---|
| Hero desktop, lado derecho | `src/assets/formula/hero-formula-desktop.jpg` |
| Hero móvil, bajo el copy | `src/assets/formula/hero-formula-mobile.jpg` |
| Sección 03, objeto sticky a la derecha | `src/assets/formula/formula-seven-layers.jpg` (es el render con **7** placas: por eso va aquí, junto al timeline numerado 01–07) |
| Sección 09 CTA final | `src/assets/formula/formula-complete.jpg` |
| Opcional, una sola vez como fondo tenue | `src/assets/formula/formula-detail.jpg` |
| Vídeo scroll de sección 03 (solo desktop) | `public/assets/formula/formula-scroll.{mp4,webm}`, póster `formula-scroll-poster.jpg` |
| Open Graph | `public/og-formula.jpg` |

El vídeo de la sección 03: `muted`, `playsinline`, `preload="none"`, sin
controles, sin loop, sin audio; su `currentTime` se liga al progreso de scroll de
la sección. **No se carga en viewports < 1024 px ni con `prefers-reduced-motion`**;
en esos casos se muestra la imagen `formula-seven-layers.jpg`.

### Sección 04 — Motor de decisión

- 4 preguntas, opciones exactas de `docs/contenido-web.md`.
- Datos y reglas en `src/data/engine.ts`; lógica pura en `src/lib/engine.ts`.
  El componente solo pinta.
- `resolve(answers)` parte de la recomendación base por tipo de negocio
  (`docs/brief-maestro.md` §13) y aplica **en este orden** los overrides:
  1. contenido diario → deja de ser SSG puro;
  2. nadie actualiza → sin CMS;
  3. vender online sin equipo técnico → plataforma existente;
  4. sin fotografía suficiente → la dirección visual no depende de fotografía.
  Cada override aplicado se refleja en el resultado como una línea de motivo.
- Es determinista y puro: mismas respuestas, mismo resultado. Sin fetch, sin
  aleatoriedad, sin fechas.
- Resultado en card tipo terminal con IBM Plex Mono, con el disclaimer literal
  `Este resultado es orientativo. El brief completo puede cambiar la decisión.`
- Estados: vacío (antes de responder), parcial y completo. Se puede cambiar
  cualquier respuesta y el resultado se recalcula.
- Accesible: cada pregunta es un `fieldset` con `legend`, opciones navegables
  por teclado, cambio de resultado anunciado con `aria-live="polite"`.
- El CTA `Quiero una recomendación completa →` lleva a `/iniciar` **arrastrando
  las respuestas ya dadas** como parámetros de querystring, y `/iniciar` las
  precarga en los pasos correspondientes.

### `/iniciar`

- 5 pasos + pantalla final, copy literal de `docs/contenido-web.md`.
- Indicador `01 / 05`. Navegación adelante/atrás sin perder datos.
- Autosave en `localStorage`; se limpia al enviar con éxito.
- Validación por paso: no avanza con campos obligatorios vacíos o email
  inválido. Errores asociados al campo con `aria-describedby`, foco al primer
  error. Obligatorios: nombre del negocio, a qué se dedica, nombre, email.
- Honeypot oculto + descarte de envíos con menos de 3 s de interacción.
- Envío: `POST` JSON a `import.meta.env.PUBLIC_FORM_ENDPOINT`.
  - Si la variable está vacía en build: el botón queda deshabilitado y se
    muestra un aviso claro de que el destino no está configurado. **No simular
    un envío correcto nunca.**
  - Estados reales: `idle`, `loading`, `success`, `error` con reintento.
- Sin JS: los 5 pasos se renderizan como un formulario largo normal y usable.

### Navbar / Footer

Sticky, translúcida solo tras hacer scroll, 72–80 px en desktop. En móvil, menú
overlay simple con trampa de foco y cierre con `Esc`. Enlaces legales del footer
(`Privacidad`, `Cookies`, `Aviso legal`) apuntan a `#` con `aria-disabled` y una
nota en el README: son páginas pendientes, **no inventes su contenido**.

### Animación

Lo permitido y lo prohibido está en `docs/brief-maestro.md` §10. Con
`prefers-reduced-motion: reduce` no queda ni parallax, ni scroll ligado a vídeo,
ni transformaciones largas: solo fades mínimos.

### SEO

`title` y `meta description` literales de `docs/brief-maestro.md` §14. Canonical,
Open Graph con `/og-formula.jpg`, Twitter card, `sitemap.xml`, `robots.txt`,
favicon SVG (cuadrado radio 24 %, fondo `#C7FF5E`, `F/7` negro; hecho a mano, no
generado). JSON-LD solo si es cierto. **Cero clientes, testimonios, premios,
métricas o años de experiencia inventados.**

## Variables de entorno

`.env.example` con:

- `PUBLIC_FORM_ENDPOINT` — webhook al que se envía el brief. Vacío por defecto.
- `SITE_URL` — origen público, usado por `site` en `astro.config.mjs` y por el
  sitemap. Por defecto `https://formula.dksaa.com`.

Ambas se leen en build. Documenta en el README que cambiarlas exige redeploy.

## Despliegue

`Dockerfile` multi-stage calcado al patrón que ya usa el VPS: build con
`node:22-alpine` (`npm ci` + `npm run build`) y runtime `nginx:1.27-alpine`
sirviendo `dist/` con `EXPOSE 80`. `nginx.conf` con `try_files`, página 404
propia, gzip, y cache larga para `/assets/` e inmutables, corta para HTML.

## Criterios de aceptación (verificables)

1. `docker build -t formula-web .` termina sin errores ni warnings de Astro.
2. Al servir el contenedor: `/` y `/iniciar` devuelven 200; una ruta inexistente
   devuelve la 404 propia.
3. El HTML de `/` contiene literalmente `Una web bonita no se improvisa. Se calcula.`
   y las 9 secciones con sus títulos exactos.
4. `grep -ri "lorem" src/` no devuelve nada.
5. `grep -rn "react\|framer-motion\|gsap\|lenis" package.json` no devuelve nada.
6. El JS total enviado al cliente en `/` pesa **menos de 40 KB** sin comprimir.
7. Ninguna imagen se sirve sin `width` y `height`.
8. `npm run build` genera `sitemap-index.xml`.
9. Navegación completa por teclado en navbar, motor y formulario; foco visible
   siempre; ningún `outline: none` sin sustituto.
10. Con `prefers-reduced-motion`, el vídeo de scroll no se carga.
11. Sin errores en consola y sin enlaces rotos internos.
12. `README.md` explica: cómo ejecutar, cómo construir, dónde está el copy,
    dónde están las reglas del motor, dónde sustituir assets, variables de
    entorno y proceso de despliegue.

## Fuera de alcance

- Páginas legales (privacidad, cookies, aviso legal).
- Blog, casos de estudio, multiidioma, CMS, analítica.
- Backend propio: el formulario solo llama a un endpoint externo.
- Regenerar o retocar los renders de cristal, el vídeo o la imagen OG.
- Tests automatizados.

## Orden de trabajo

Sigue el orden de `docs/brief-maestro.md` §21: tokens y estructura → navbar y
hero sin animación → secciones con contenido real → responsive → motor →
formulario → assets → animación → rendimiento → accesibilidad → SEO → QA.
No empieces por las animaciones.
