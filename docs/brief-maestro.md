# BRIEF MAESTRO — FÓRMULA

## 0. Objetivo del proyecto

Crear la web pública del proyecto **FÓRMULA** (nombre de trabajo), un sistema/metodología para crear páginas web de forma razonada: primero se entiende la necesidad real del negocio, después se decide qué tipo de página necesita, cómo debe renderizarse, qué estilo visual encaja, qué contenido y assets necesita, y solo entonces se diseña, programa, integra, verifica y entrega.

La web debe demostrar ese método visualmente. No debe parecer la típica landing de una agencia ni un portfolio genérico de diseñador. Debe sentirse como una mezcla de **estudio digital premium + laboratorio de diseño + producto tecnológico editorial**.

Idea principal de comunicación:

> **Una web bonita no se improvisa. Se calcula.**

Objetivos:
- Explicar la metodología con claridad en menos de 90 segundos.
- Transmitir criterio, diseño, orden y capacidad técnica.
- Diferenciar el proyecto del “vibe coding” y de las agencias que empiezan por una plantilla.
- Convertir visitantes en solicitudes de proyecto.
- Servir como demostración real del nivel visual que se pretende vender.
- Dejar preparada la base para añadir casos reales más adelante.

Idioma inicial: español.

---

# 1. Posicionamiento

FÓRMULA no vende “una web hecha con X framework”. Vende una **decisión correcta convertida en una web**.

Principios que la página debe comunicar:

1. La necesidad del negocio manda.
2. El contenido se define antes de buscar imágenes.
3. La arquitectura técnica se elige por mantenimiento, frecuencia de cambio y funcionalidad, no por moda.
4. La dirección visual se fija mediante tokens antes de empezar a maquetar.
5. El repositorio y el preview existen desde el principio.
6. El diseño debe ser bonito sin sacrificar rendimiento ni accesibilidad.
7. La entrega incluye QA, integraciones y traspaso, no solo una captura bonita.

Tono verbal:
- Seguro pero no arrogante.
- Técnico, pero entendible para un negocio normal.
- Frases cortas.
- Nada de lenguaje corporativo vacío.
- Evitar “soluciones innovadoras”, “llevamos tu negocio al siguiente nivel” y clichés similares.

---

# 2. Concepto creativo

## Dirección: “DIGITAL LAB / EDITORIAL SYSTEM”

La identidad debe basarse en la idea de una fórmula compuesta por capas.

Metáfora visual:
- Cada capa representa una decisión.
- Las decisiones se ordenan.
- Al final todas las capas se alinean y forman una web terminada.

El elemento icónico de la página será un **objeto 3D formado por 7 placas de cristal oscuro/iridiscente flotantes**, una por cada gran paso del método.

No convertir toda la interfaz en glassmorphism. El cristal solo es la pieza artística principal. La interfaz debe ser limpia, sólida y editorial.

Sensaciones buscadas:
- precisión;
- diseño;
- tecnología;
- profundidad;
- calma;
- alto nivel;
- sistema;
- detalle.

No debe sentirse:
- gamer;
- crypto/Web3;
- plantilla SaaS;
- cyberpunk;
- “agencia creativa” caótica;
- excesivamente futurista.

---

# 3. Identidad visual

## Paleta

### Dark system
- `--bg: #0A0B0A`
- `--surface: #111310`
- `--surface-2: #171A16`
- `--border: #292D27`
- `--text: #F3F0E8`
- `--text-muted: #9CA198`

### Accents
- `--accent: #C7FF5E` — chartreuse elegante; usar solo en CTA, indicadores y detalles importantes.
- `--accent-violet: #8D7CFF` — apoyo secundario; usar con mucha moderación.
- `--accent-cyan: #6FE7DF` — solo dentro de visuales/iridiscencias.

### Light contrast section
- `--light-bg: #F2EFE7`
- `--light-text: #151614`
- `--light-muted: #666B63`

Reglas:
- El 80–90 % de la interfaz debe vivir entre negro, verde-negro, marfil y gris.
- Los colores iridiscentes aparecen principalmente en el objeto 3D.
- No llenar secciones con gradientes.
- Los botones principales serán sólidos.
- El chartreuse nunca debe usarse como texto largo.

## Tipografía

Principal: **Manrope Variable**
- Hero: 64–88 px desktop / 44–56 px móvil.
- H2: 44–64 px.
- H3: 24–32 px.
- Body: 17–19 px.
- Small: 13–15 px.

Secundaria técnica: **IBM Plex Mono**
- pasos;
- etiquetas;
- resultados del “motor de decisión”;
- pequeños metadatos;
- números.

Peso:
- Titulares: 500–650.
- Texto: 400–500.
- Evitar bold 800/900 excepto microdetalles.

## Logo

Wordmark:
`FÓRMULA`

Estilo:
- mayúsculas;
- tracking ligeramente negativo;
- Manrope 650;
- sin símbolo complejo.

Versión secundaria:
`FÓRMULA / 07`

El “07” hace referencia a los siete pasos del método.

No generar un logo pictórico con IA. La palabra debe funcionar por sí sola.

---

# 4. Layout y sistema

Desktop:
- max-width general: 1440 px;
- contenedor de contenido: 1240–1320 px;
- 12 columnas;
- gutters: 28–32 px;
- padding lateral: 48–72 px.

Tablet:
- padding lateral: 28–36 px.

Móvil:
- padding lateral: 18–22 px;
- diseño mobile-first;
- no reducir simplemente el desktop.

Escala de espaciado:
`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`

Radios:
- pequeño: 10 px;
- cards: 18 px;
- grandes paneles: 28 px;
- pill: 999 px.

Bordes:
- 1 px;
- bajo contraste.

Sombras:
- casi inexistentes;
- usar diferencias de superficie y luz.

---

# 5. Navegación

Navbar sticky y translúcida solo al hacer scroll.

Contenido:
- logo: FÓRMULA
- Método
- Decisiones
- Producción
- Entregables
- CTA: **Iniciar proyecto**

Desktop:
- barra muy limpia;
- altura 72–80 px.

Móvil:
- logo + botón;
- menú overlay sencillo;
- no hamburger con animaciones extravagantes.

---

# 6. Home — arquitectura completa

## SECCIÓN 01 — HERO

Altura: 90–100 svh.

Eyebrow:
`SISTEMA DE DISEÑO Y DESARROLLO WEB`

H1:
**Una web bonita no se improvisa. Se calcula.**

Texto:
`Partimos de la necesidad real del negocio y cruzamos arquitectura, contenido, diseño y tecnología hasta llegar a una decisión justificada. Después la convertimos en código.`

CTA principal:
**Ver la fórmula**

CTA secundario:
**Iniciar un proyecto →**

Microcopy inferior:
`Brief → arquitectura → contenido → assets → diseño → código → QA`

Visual:
- objeto 3D con siete capas de cristal iridiscente;
- fondo negro;
- pequeña aureola difusa;
- el objeto ocupa aproximadamente el 40–45 % del hero en desktop;
- en móvil va debajo del copy;
- no poner texto encima del objeto.

Interacción:
- parallax mínimo con cursor;
- rotación máxima 4–6°;
- al comenzar scroll, las siete capas se separan sutilmente;
- respetar `prefers-reduced-motion`.

---

## SECCIÓN 02 — EL PROBLEMA

Fondo marfil.

Título:
**El problema no es hacer una web. Es decidir bien qué web hacer.**

Subcopy:
`Cuando el código llega antes que las decisiones, cada cambio obliga a rehacer lo anterior.`

Comparador a dos columnas:

### Improvisar
- diseño antes del contenido;
- framework elegido por moda;
- CMS que nadie necesita;
- fotos de banco para rellenar;
- colores distintos en cada sección;
- despliegue al final;
- revisiones sin límite.

### Aplicar la fórmula
- brief real;
- arquitectura elegida por necesidad;
- contenido antes de assets;
- tokens antes de código;
- preview desde el primer commit;
- revisiones acotadas;
- QA antes de entregar.

En desktop, al mover el cursor sobre una columna se enfatiza esa mitad.
En móvil, dos cards apiladas.

---

## SECCIÓN 03 — LA FÓRMULA / 7 PASOS

Fondo oscuro.

Título:
**7 decisiones. En un orden concreto.**

Texto:
`Los primeros pasos deciden qué hay que construir. Los últimos convierten esa decisión en una web terminada.`

Pasos:

`01 — NECESIDAD`
Entender negocio, cliente, objetivo y métrica de éxito.

`02 — TIPO DE PÁGINA`
Corporativa, landing, e-commerce, blog, portfolio o híbrida.

`03 — ARQUITECTURA`
SSG, SSR, ISR, SPA, MPA o islas según mantenimiento y contenido.

`04 — DIRECCIÓN VISUAL`
Marca, referencias, público, fotografía y adaptabilidad.

`05 — DECISIÓN`
Cruzar negocio + arquitectura + CMS + estilo + extras.

`06 — PRODUCCIÓN`
Contenido, assets, diseño, repo, código e integraciones.

`07 — VERIFICACIÓN`
Rendimiento, SEO, accesibilidad, legal y traspaso.

Visual:
- una línea vertical/horizontal une los siete pasos;
- el indicador activo avanza con scroll;
- la placa equivalente del objeto 3D se ilumina ligeramente;
- no usar carrusel obligatorio;
- en móvil: timeline vertical.

---

## SECCIÓN 04 — MOTOR DE DECISIÓN

Esta sección debe ser la pieza interactiva distintiva de la web.

Título:
**No elegimos un stack. Elegimos una solución.**

Texto:
`Prueba una versión simplificada del sistema.`

Formulario visual de 3–4 preguntas:

### Pregunta A — Tipo de negocio
Opciones:
- Restaurante / cafetería
- Belleza / barbería
- Gestoría / clínica / despacho
- Tienda
- Gimnasio / academia
- Hotel / alojamiento
- Profesional / creativo
- Blog / medio

### Pregunta B — Objetivo principal
- recibir contactos;
- reservas;
- vender;
- mostrar catálogo;
- ganar credibilidad;
- aparecer mejor en Google.

### Pregunta C — ¿Cada cuánto cambia el contenido?
- casi nunca;
- ocasionalmente;
- cada mes;
- cada semana;
- a diario.

### Pregunta D — ¿Quién lo actualizará?
- nadie;
- el propietario;
- personal con poca experiencia;
- equipo técnico.

Resultado en una gran card de estilo terminal/editorial:

Ejemplo:
```
RECOMENDACIÓN 04-28
Tipo        Landing + carta
Render      SSG / Astro
CMS         Ligero, solo carta
Visual      Fotografía grande + flat
Prioridad   Reservas + Maps + horarios
```

Añadir disclaimer pequeño:
`Resultado orientativo. El brief completo puede cambiar la decisión.`

Los datos deben vivir en un archivo de configuración, no hardcodeados dentro del componente.

---

## SECCIÓN 05 — EJEMPLOS DE DECISIÓN

Título:
**El mismo diseñador no debería hacer la misma web para todos.**

Tres ejemplos grandes:

### Restaurante
`Landing + carta`
`SSG`
`CMS ligero`
`Fotografía dominante`
`Reserva + WhatsApp + Maps`

### Clínica / despacho
`Corporativa`
`SSG`
`Sin CMS`
`Sobria y muy legible`
`Servicios + equipo + contacto`

### Creativo
`Portfolio`
`SSG`
`Sin CMS`
`Más personalidad visual`
`Proyectos + CV + contacto`

Interacción:
- tabs o cards;
- al cambiar ejemplo, cambia el diagrama de decisión;
- no cargar fotos genéricas.

---

## SECCIÓN 06 — DE DECISIÓN A PRODUCCIÓN

Fondo marfil o gris muy claro.

Título:
**La decisión es solo el principio.**

Timeline resumida de producción.

Fases:
`00 Brief`
`01 Ficha de proyecto`
`02 Arquitectura de contenido`
`03 Contenido`
`04 Assets`
`05 Multimedia`
`06 Dirección visual`
`07 Repo + preview`
`08 Código`
`09 Integraciones`
`10 Revisión`
`11 QA`
`12 Entrega`

Desktop:
- timeline horizontal con scroll suave dentro de la página o grid 4x3;
- evitar scroll-jacking.

Móvil:
- acordeón/timeline vertical.

Al seleccionar una fase:
- mostrar `qué se hace`;
- mostrar `qué sale de aquí`.

---

## SECCIÓN 07 — ENTREGABLES

Bento grid.

Título:
**Cada fase deja algo concreto.**

Cards:
- Ficha de proyecto
- Mapa de secciones
- Copy definitivo
- Datos SEO
- Carpeta de assets
- Tokens de diseño
- URL de preview
- Integraciones
- Checklist QA
- Documento de traspaso

Diseño:
- tamaños desiguales;
- cada card con microvisual;
- iconos lineales;
- no más de 2 tamaños de card.

Microvisualizaciones:
- pequeñas líneas de wireframe;
- chips de color;
- snippet de texto;
- check de QA;
- URL de preview.

---

## SECCIÓN 08 — CALIDAD

Fondo oscuro.

Título:
**Bonita no significa pesada.**

Cuatro métricas/pilares:
- Rendimiento
- Accesibilidad
- SEO
- Mantenibilidad

Copy:
`Los efectos solo se quedan si no empeoran la experiencia.`

Mostrar indicadores tipo:
`LCP < 2.5s`
`CLS < 0.1`
`Responsive real`
`prefers-reduced-motion`
`HTML semántico`
`SEO técnico`
`assets optimizados`

No presentar puntuaciones Lighthouse falsas como si fueran resultados reales antes de tener producción.

---

## SECCIÓN 09 — CTA FINAL

Gran sección, mucho aire.

Eyebrow:
`EMPIEZA POR LA NECESIDAD`

H2:
**Cuéntame qué tiene que conseguir tu web. El resto se calcula.**

Botón:
**Rellenar brief →**

Secundario:
`Ver cómo funciona el proceso`

Visual:
- las siete capas del objeto del hero vuelven a aparecer, ahora perfectamente alineadas;
- cierre visual de la narrativa.

---

# 7. Formulario “Iniciar proyecto”

Crear una ruta o modal de página completa:
`/iniciar`

Preferible: ruta independiente.

Formato:
- formulario multipaso;
- progreso visible;
- autosave local opcional;
- no pedir todos los datos en una pantalla.

Paso 1 — Negocio
- nombre;
- empresa/proyecto;
- a qué se dedica;
- público principal.

Paso 2 — Objetivo
- llamadas;
- formularios;
- reservas;
- ventas;
- credibilidad;
- SEO local;
- otro.

Paso 3 — Funcionalidad
- informativa;
- catálogo;
- venta online;
- reservas;
- carta/pedidos;
- área privada;
- blog;
- multiidioma;
- WhatsApp;
- Maps;
- Instagram.

Paso 4 — Contenido
- tiene textos;
- tiene fotografías;
- frecuencia de cambios;
- quién actualiza.

Paso 5 — Proyecto
- presupuesto orientativo;
- fecha objetivo;
- web actual;
- referencias;
- email/teléfono;
- mensaje adicional.

Final:
`Brief recibido. El siguiente paso es convertirlo en una ficha de proyecto.`

Integración:
- usar endpoint configurable por variable de entorno;
- válido para webhook propio, n8n, API o proveedor de formularios;
- incluir honeypot + rate limit en backend si el endpoint es propio;
- mostrar estados loading/success/error reales.

---

# 8. Assets

## Asset A — Hero principal

Archivo:
`formula-core-7-layers.webp`

También generar:
`formula-core-7-layers.avif`
`formula-core-7-layers-mobile.webp`

Formato de trabajo recomendado:
PNG transparente de alta resolución y posteriormente optimizado a AVIF/WebP.

PROMPT:

`Premium abstract 3D product render of exactly seven thin floating translucent glass plates stacked vertically, each plate slightly separated, precise geometric proportions, smoked crystal material, subtle iridescent edge refraction in chartreuse green, soft violet and cyan, deep black background, luxurious editorial technology art direction, soft studio rim lighting, very clean composition, no text, no logo, no symbols, no particles, no cyberpunk, no neon overload, high-end Apple-like product photography mixed with contemporary digital art, centered object, generous negative space, physically plausible glass, cinematic but minimal, ultra sharp, 4k`

Negative:
`text, typography, letters, numbers, people, hands, devices, logos, excessive glow, rainbow background, sci-fi interface, busy particles, lens flare, low contrast, plastic toy look`

Variación móvil:
`same object, vertical 4:5 composition, more negative space above and below, object centered`

---

## Asset B — CTA / objeto alineado

Archivo:
`formula-core-aligned.webp`

PROMPT:

`The exact same premium seven-layer translucent iridescent glass object, but all seven plates perfectly aligned and almost touching, representing a completed system, smoked glass, subtle chartreuse violet cyan refraction, black background, minimal studio lighting, same camera and material as previous render, no text, no logo, high-end editorial 3D render`

---

## Asset C — Open Graph

Archivo:
`og-formula.jpg`
Medida: 1200x630.

PROMPT:

`Editorial technology campaign image, black near-black background, seven translucent iridescent glass layers forming one precise centered object on the right half, large empty negative space on the left for typography to be added later in HTML/design software, chartreuse subtle accent, refined violet and cyan refractions, minimal luxury digital studio aesthetic, 1200x630, no text, no logo`

Añadir texto después:
`Una web bonita no se improvisa. Se calcula.`

---

## Asset D — Favicon / mark

No usar IA.

Crear SVG:
- fondo `#C7FF5E`;
- forma cuadrada con radio 24%;
- texto/símbolo negro `F/7`;
- versión monocroma.

---

## Asset E — Grain

No descargar imagen.

Crear textura SVG/CSS procedural de ruido muy leve:
- opacity 0.025–0.045;
- fixed;
- pointer-events none;
- no degradar legibilidad.

---

## Asset F — Iconografía

Usar **Lucide**.

Iconos orientativos:
- ScanSearch
- LayoutTemplate
- Network
- Palette
- GitMerge
- Braces
- BadgeCheck
- Gauge
- Accessibility
- Search
- FileCode2
- ExternalLink
- ArrowUpRight
- Check
- ChevronRight

Stroke:
1.5–1.75.

No mezclar familias de iconos.

---

# 9. Assets externos alternativos

Si no se generan los renders a tiempo, buscar en Unsplash únicamente imágenes abstractas sin personas ni logotipos.

Términos:
- `iridescent glass dark`
- `abstract dark waves`
- `smoked glass 3d`
- `holographic glass black`
- `minimal dark abstract render`

Preferencia:
1. objeto iridiscente sobre fondo negro;
2. ondas negras para backgrounds secundarios;
3. geometría de cristal abstracta.

No usar fotografías de oficinas, manos usando portátil, equipos sonriendo ni mockups de móviles genéricos.

---

# 10. Animación

Principio:
**la animación explica el sistema; no decora.**

Hero:
- aparición de texto stagger muy corta;
- objeto entra con `opacity + scale 0.96`;
- capas ligeramente separadas.

Scroll:
- barra de progreso de fórmula;
- cada paso activa su capa;
- líneas se dibujan;
- cards usan reveal de 12–20 px máximo.

Hover:
- botones: 150–220 ms;
- cards: border + pequeña traslación 2 px;
- enlaces: flecha se mueve 3–4 px.

Prohibido:
- scroll hijacking;
- smooth scroll artificial pesado;
- cursor custom que perjudique interacción;
- elementos que sigan demasiado al cursor;
- textos que se muevan continuamente;
- autoplay de vídeo pesado en móvil.

`prefers-reduced-motion`:
- desactivar parallax;
- desactivar transformaciones largas;
- mantener cambios instantáneos o fades mínimos.

---

# 11. Stack técnico

## Recomendado

- Astro
- TypeScript
- Tailwind CSS
- HTML semántico
- JavaScript nativo para interacciones simples
- isla interactiva solo para el configurador si realmente hace falta
- Lucide para iconos

Animación:
- priorizar CSS + Web Animations API / IntersectionObserver;
- añadir una librería solo si la secuencia de capas necesita coordinación avanzada.

Render:
- SSG por defecto.

Razón:
- el contenido es principalmente estático;
- SEO importante;
- se puede mantener JS muy bajo;
- la arquitectura de islas encaja con el configurador.

No convertir toda la landing en React.

---

# 12. Arquitectura de código

Estructura sugerida:

```text
src/
  components/
    ui/
    sections/
    formula/
  layouts/
  pages/
    index.astro
    iniciar.astro
  data/
    site.ts
    formula.ts
    production.ts
  styles/
    global.css
    tokens.css
public/
  assets/
    generated/
    icons/
```

Reglas:
- copy centralizado en `data/site.ts`;
- pasos y decisiones en estructuras de datos;
- no duplicar textos en componentes;
- componentes de sección pequeños;
- no sobrearquitectura;
- tokens CSS definidos una sola vez;
- nombres de componentes claros;
- zero lorem ipsum.

---

# 13. Motor simplificado de decisión

Crear el modelo como datos y reglas separadas de UI.

Ejemplos base:

Restaurante:
- tipo: `Landing + carta`
- render: `SSG`
- CMS: `Ligero para carta`
- visual: `Flat + fotografía grande`
- extras: `Reservas, WhatsApp, Maps, horarios`

Belleza:
- tipo: `Landing de conversión`
- render: `SSG`
- CMS: `No por defecto`
- visual: `Flat + marca fuerte`
- extras: `Citas, galería, Instagram`

Clínica / despacho:
- tipo: `Corporativa`
- render: `SSG`
- CMS: `No`
- visual: `Sobrio + alto contraste`
- extras: `Servicios, equipo, formulario`

Tienda online:
- tipo: `E-commerce`
- render: `Plataforma / SSR headless`
- CMS: `Sí`
- visual: `Producto primero`
- extras: `Pago, envíos, devoluciones`

Tienda física:
- tipo: `Corporativa + catálogo`
- render: `SSG`
- CMS: `Solo si el catálogo rota`
- visual: `Bento / fotografía`
- extras: `Catálogo, WhatsApp, mapa`

Gimnasio / academia:
- tipo: `Landing + horarios`
- render: `SSG`
- CMS: `Horarios/tarifas`
- visual: `Alto contraste`
- extras: `Tarifas, clases, prueba`

Hotel:
- tipo: `Landing de reserva`
- render: `SSG + motor externo`
- CMS: `No`
- visual: `Fotografía full-screen`
- extras: `Reservas, galería, mapa, idiomas`

Creativo:
- tipo: `Portfolio`
- render: `SSG`
- CMS: `No`
- visual: `Minimal con personalidad`
- extras: `Proyectos, CV, contacto`

Blog / medio:
- tipo: `Blog`
- render: `SSG + ISR/CMS`
- CMS: `Sí`
- visual: `Editorial`
- extras: `Categorías, buscador, RSS`

Reglas de override:
- contenido diario => no SSG puro;
- nadie actualiza => evitar CMS;
- venta online sin equipo técnico => plataforma existente;
- poco presupuesto => reducir alcance, no rendimiento/accesibilidad;
- fotografía insuficiente => no diseñar alrededor de stock genérico.

---

# 14. SEO

Homepage title:
`FÓRMULA — webs bonitas, pensadas antes de programarse`

Meta description:
`Un sistema para convertir la necesidad de un negocio en arquitectura, contenido, diseño y código. Webs bonitas con decisiones justificadas.`

Incluir:
- canonical;
- sitemap;
- robots;
- Open Graph;
- Twitter card;
- favicon;
- JSON-LD solo con datos reales;
- headings correctos;
- URLs limpias.

No inventar:
- clientes;
- testimonios;
- premios;
- ratings;
- años de experiencia;
- métricas comerciales.

---

# 15. Performance budgets

Objetivo:
- Lighthouse alto, pero medir en producción;
- LCP < 2.5 s en móvil razonable;
- CLS < 0.1;
- INP < 200 ms;
- evitar vídeo de hero si el render estático funciona;
- imágenes AVIF/WebP;
- dimensiones explícitas;
- lazy load fuera del primer viewport;
- fuente self-hosted si es posible;
- preload solo de lo crítico.

El hero principal puede tener versión estática para móvil o conexiones lentas.

---

# 16. Accesibilidad

Obligatorio:
- WCAG AA en contrastes;
- focus visible;
- navegación completa por teclado;
- botones reales para acciones;
- anchors reales para navegación;
- `aria` solo cuando sea necesario;
- alt descriptivo en assets;
- reduced motion;
- no depender únicamente de color;
- tamaño mínimo cómodo de targets táctiles;
- formulario con labels y errores asociados.

---

# 17. Responsive

La experiencia móvil se diseña explícitamente.

Hero móvil:
- copy;
- CTAs;
- objeto;
- microcopy.

Timeline:
- vertical.

Motor:
- una pregunta por bloque;
- resultado debajo.

Bento:
- una columna;
- algunas cards pueden ocupar dos filas visuales, pero nunca requerir zoom.

No ocultar información importante en móvil para “hacer que quepa”.

---

# 18. Estados

Diseñar:
- hover;
- focus;
- active;
- disabled;
- loading;
- success;
- error;
- empty.

Especialmente:
- motor de decisión;
- formulario;
- navegación móvil.

---

# 19. Qué NO debe hacer el agente

- No usar plantillas SaaS reconocibles.
- No añadir testimonios falsos.
- No inventar proyectos.
- No meter dashboards falsos en el hero.
- No usar stock de oficinas.
- No abusar de glassmorphism.
- No hacer todos los textos con gradients.
- No usar más de dos familias tipográficas.
- No meter cinco librerías de animación.
- No convertir Astro entero en React.
- No añadir un CMS sin necesidad.
- No generar secciones no especificadas para “rellenar”.
- No usar lorem ipsum.
- No sacrificar contraste por estética.
- No esconder el formulario detrás de una animación.

---

# 20. Definition of Done

La primera versión se considera terminada cuando:

- Home completa.
- `/iniciar` funcional.
- Motor de decisión funcional.
- Todos los textos reales incluidos.
- Assets optimizados.
- Responsive probado en móvil, tablet y desktop.
- Navegación por teclado correcta.
- Reduced motion correcto.
- SEO técnico básico completo.
- Formulario con estados reales.
- Sin errores de consola.
- Sin enlaces rotos.
- Sin layout shift evidente.
- README con:
  - cómo ejecutar;
  - cómo construir;
  - dónde cambiar copy;
  - dónde cambiar reglas del motor;
  - dónde sustituir assets;
  - variables de entorno;
  - proceso de deploy.

---

# 21. Orden de ejecución para el agente

1. Crear tokens y estructura base.
2. Implementar navbar + hero sin animación.
3. Implementar todas las secciones con contenido real.
4. Implementar responsive.
5. Crear motor de decisión.
6. Crear formulario.
7. Integrar assets finales.
8. Añadir animaciones.
9. Optimizar performance.
10. Accesibilidad.
11. SEO.
12. QA final.

No empezar por las animaciones.
No generar assets antes de tener definidos sus tamaños y posición real.

---

# 22. Frase guía del proyecto

Durante cualquier decisión de diseño o código, utilizar esta pregunta:

> **¿Esto ayuda a explicar la fórmula o solo está aquí porque queda bonito?**

Si la respuesta es la segunda, eliminarlo.
