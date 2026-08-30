# BRIEF DE ASSETS — FÓRMULA

## Objetivo

Usar los assets generados para crear una identidad visual coherente basada en las **7 capas de la fórmula**.

No llenar la web de renders repetidos. El objeto de cristal debe aparecer solo en momentos importantes de la narrativa.

La secuencia visual será:

**capas abiertas → proceso → capas alineadas**

---

# 1. ASSETS SELECCIONADOS

## ASSET 01 — HERO DESKTOP

### Archivo original
`Glass_geometric_campaign_design_202608302315.jpeg`

### Renombrar como
`hero-formula-desktop.jpg`

### Uso
Hero principal de la Home.

### Por qué
Es el mejor asset para el hero porque:
- ya tiene fondo negro;
- deja mucho espacio vacío a la izquierda;
- el objeto aparece desde la derecha;
- tiene aspecto premium/editorial;
- permite colocar el H1 sin competir visualmente con la imagen.

### Colocación
Desktop:

- sección: `100svh` aproximadamente;
- copy en el lado izquierdo;
- imagen ocupando el lado derecho;
- imagen alineada a `right center`;
- usar `object-fit: cover`;
- no centrar el objeto;
- mantener su espacio negativo.

Distribución aproximada:

```text
|-----------------------------------------|
|                                         |
|  SISTEMA...       [cristal]             |
|  Una web bonita   [cristal]             |
|  no se improvisa. [cristal]             |
|  Se calcula.      [cristal]             |
|                                         |
|  CTA                                    |
|-----------------------------------------|
```

### Tratamiento
- No quitar el fondo.
- Integrar el negro de la imagen con `#0A0B0A`.
- Aplicar solo un fade muy suave en el borde izquierdo si hace falta.
- Nada de card alrededor.
- Nada de marco.
- No añadir glow adicional fuerte.

### Animación
Entrada inicial:
- opacity `0 → 1`;
- scale `0.97 → 1`;
- duración `700–900ms`;
- easing suave.

Parallax opcional:
- máximo 8–12 px;
- desactivar con `prefers-reduced-motion`.

---

# 2. HERO MOBILE

## Asset

### Archivo original
`Seven_smoked_glass_plates_floating_202608302326.jpeg`

### Renombrar como
`hero-formula-mobile.jpg`

### Uso
Versión móvil del hero.

### Por qué
Tiene una composición más vertical y compacta que funciona mejor debajo del texto.

### Colocación

Orden:

```text
Eyebrow
H1
Texto
CTAs
Objeto de 7 capas
Microcopy
```

Imagen:
- width aproximado: `80–90vw`;
- max-width: `480px`;
- centrada;
- sin recorte agresivo.

No usar la imagen desktop reducida sin más.

---

# 3. SECCIÓN “7 DECISIONES”

## Asset principal

### Archivo original
`Seven_floating_smoked-glass_plates_202608302326.jpeg`

### Renombrar como
`formula-seven-layers.jpg`

### Uso
Sección:

**7 decisiones. En un orden concreto.**

### Por qué
Es la representación más limpia de las siete capas:
- capas claramente separadas;
- proporciones equilibradas;
- fondo oscuro real;
- perspectiva limpia;
- lectura inmediata de “sistema por capas”.

### Colocación

Desktop:
- texto/timeline a la izquierda;
- objeto sticky a la derecha;
- ancho visual: `420–560px`;
- permanecer visible mientras se recorren los 7 pasos.

Ejemplo:

```text
01 Necesidad               [ CAPA ]
02 Tipo de página           [ CAPA ]
03 Arquitectura             [ CAPA ]
04 Dirección visual         [ CAPA ]
05 Decisión                 [ CAPA ]
06 Producción               [ CAPA ]
07 Verificación             [ CAPA ]
```

### Comportamiento

Cuando cada paso entra en viewport:
- cambiar número activo;
- iluminar la línea del timeline;
- aumentar ligeramente el brillo del objeto;
- NO intentar separar las capas individualmente usando la imagen estática.

Mantener el movimiento muy sutil.

---

# 4. VÍDEO DE SCROLL

## Utilizar

### Archivo
`Crear_video_de_scroll_suave_202608302326.mp4`

### No usar el vídeo completo.

El tramo central se vuelve demasiado caótico y rompe la estética.

### Uso recomendado

Crear una versión recortada usando aproximadamente:

`00:00 → 00:02.2`

### Archivo final

`formula-scroll.mp4`

Y, si se quiere optimizar:

`formula-scroll.webm`

### Uso
Como mejora opcional de la sección “7 decisiones”.

NO utilizar como vídeo autoplay normal.

### Implementación ideal

Vincular el progreso del vídeo al scroll:

```text
scroll de la sección
      ↓
currentTime del vídeo
      ↓
las capas cambian lentamente
```

Características:
- muted;
- playsinline;
- sin controles;
- sin audio;
- sin loop automático;
- poster: `formula-seven-layers.jpg`.

### Mobile

NO cargar el vídeo por defecto.

Usar:
`hero-formula-mobile.jpg`
o
`formula-seven-layers.jpg`

Esto reduce consumo de datos y evita una sección pesada.

---

# 5. SEGUNDO VÍDEO

## Archivo

`Crear_video_animacion_scroll_web_202608302326.mp4`

### Decisión
NO usar en la web final.

### Motivo
En el tramo central:
- aparece demasiado glow;
- algunas capas se salen del encuadre;
- cambia demasiado la iluminación;
- parece más una animación promocional que una explicación del sistema.

Guardar únicamente como material de referencia.

---

# 6. CTA FINAL — FÓRMULA COMPLETADA

## Asset

### Archivo original
`Stacked_glass_plates_202608302326_2.jpeg`

### Renombrar como
`formula-complete.jpg`

### Uso
Última gran sección antes del footer.

Título:

**Cuéntame qué tiene que conseguir tu web. El resto se calcula.**

### Concepto
En el hero y en el método vemos las capas separadas.

Aquí aparecen completamente alineadas.

Esto cierra la narrativa:

```text
PROBLEMA
↓
7 DECISIONES
↓
PRODUCCIÓN
↓
RESULTADO
↓
[7 CAPAS ALINEADAS]
```

### Colocación

Desktop:
- copy izquierda;
- objeto derecha;
- mucho espacio negativo;
- objeto de unos `420–520px`.

Mobile:
- texto primero;
- CTA;
- objeto debajo;
- ancho `75–85vw`.

### Animación
Al entrar:
- opacity `0 → 1`;
- translateY `20px → 0`;
- scale `0.97 → 1`.

No hacer girar el objeto.

---

# 7. ASSET DECORATIVO SECUNDARIO

## Archivo

`Geometric_object_on_dark_background_202608302315.jpeg`

### Renombrar como
`formula-detail.jpg`

### Uso opcional
Solo una vez.

Posibles lugares:
- transición entre “Motor de decisión” y “Producción”;
- fondo de una card grande de “Sistema visual”;
- sección editorial corta.

### Tratamiento
- usar como imagen de fondo;
- opacidad visual baja;
- texto siempre fuera del objeto;
- no convertirlo en otro hero.

Si la página ya se siente suficientemente visual, eliminar este asset.

---

# 8. OPEN GRAPH

## Usar como base

`Glass_geometric_campaign_design_202608302315.jpeg`

### Crear
`og-formula.jpg`

### Tamaño
`1200 × 630`

### Composición

Izquierda:

```text
FÓRMULA

Una web bonita
no se improvisa.
Se calcula.
```

Derecha:
objeto de cristal.

### Colores
- fondo: `#0A0B0A`;
- texto: `#F3F0E8`;
- pequeño detalle: `#C7FF5E`.

No colocar demasiado texto.

---

# 9. ASSETS QUE NO SE USAN

## `Stacked_glass_plates_render_202608302315.jpeg`

NO usar.

Motivo:
- el damero está incrustado en el JPEG;
- existe una versión nueva mejor;
- composición menos refinada.

---

## `Floating_glass_plates_3D_render_202608302315.jpeg`

NO usar.

Motivo:
- damero falso;
- formas demasiado redondeadas;
- parecen lentes/discos;
- rompe la geometría cuadrada del resto.

---

## `Seven-layer_glass_object_aligned_202608302315.jpeg`

NO usar.

Motivo:
- damero incrustado;
- sustituido por `Stacked_glass_plates_202608302326_2.jpeg`.

---

## `Aligned_seven-layer_glass_object_202608302315.jpeg`

NO usar.

Motivo:
- damero incrustado;
- existe una versión final con fondo oscuro real.

---

## `Stacked_glass_plates_202608302326.jpeg`

Guardar como alternativa.

No usar por defecto.

La versión `_2` tiene más presencia y funciona mejor como cierre.

---

# 10. MAPA FINAL DE ASSETS

```text
HOME
│
├── HERO
│   ├── Desktop
│   │   └── hero-formula-desktop.jpg
│   │
│   └── Mobile
│       └── hero-formula-mobile.jpg
│
├── PROBLEMA
│   └── Sin imagen
│
├── 7 DECISIONES
│   ├── formula-seven-layers.jpg
│   └── formula-scroll.mp4 [opcional desktop]
│
├── MOTOR DE DECISIÓN
│   └── UI real, sin fotografía
│
├── EJEMPLOS
│   └── UI / cards, sin fotografía
│
├── PRODUCCIÓN
│   └── Timeline + SVG/CSS
│
├── ENTREGABLES
│   └── Bento Grid + microassets
│
├── CALIDAD
│   └── Sin imagen principal
│
├── TRANSICIÓN OPCIONAL
│   └── formula-detail.jpg
│
├── CTA FINAL
│   └── formula-complete.jpg
│
└── SOCIAL
    └── og-formula.jpg
```

---

# 11. ESTRUCTURA DE ARCHIVOS

```text
public/
└── assets/
    └── formula/
        ├── hero-formula-desktop.jpg
        ├── hero-formula-mobile.jpg
        ├── formula-seven-layers.jpg
        ├── formula-scroll.mp4
        ├── formula-scroll.webm
        ├── formula-complete.jpg
        ├── formula-detail.jpg
        └── og-formula.jpg
```

---

# 12. REGLAS DE USO

1. No poner una imagen de cristal en todas las secciones.
2. El objeto siempre representa el sistema o sus decisiones.
3. Capas separadas = proceso.
4. Capas alineadas = solución terminada.
5. Fondo visual principal `#0A0B0A`.
6. No añadir más colores a los renders.
7. No añadir glow artificial intenso.
8. No usar los JPEG con damero de transparencia falso.
9. No usar los dos vídeos.
10. Mobile prioriza imágenes estáticas.
11. Lazy-load todo excepto el asset visible del hero.
12. Definir `width` y `height` para evitar CLS.
13. Convertir imágenes de producción a AVIF/WebP cuando sea posible.
14. Mantener JPG como fallback si hace falta.
15. No usar estos assets como simple decoración si no ayudan a contar la fórmula.

---

# 13. RESUMEN PARA EL AGENTE

Usar exactamente esta narrativa visual:

### Inicio
`Glass_geometric_campaign_design`
→ objeto abierto y abstracto.

### Método
`Seven_floating_smoked-glass_plates`
→ siete capas claramente separadas.

### Scroll
primeros ~2.2 segundos de
`Crear_video_de_scroll_suave`
→ movimiento controlado de las capas.

### Final
`Stacked_glass_plates_202608302326_2`
→ siete capas alineadas.

La transformación visual debe comunicar:

**NECESIDAD → DECISIONES → PROCESO → SOLUCIÓN**
