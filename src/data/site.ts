export interface NavLink {
  label: string;
  href: string;
}

/** Copy global, navegación, footer y SEO. Literal de docs/contenido-web.md y docs/brief-maestro.md §14. */
export const site = {
  name: 'FÓRMULA',
  tagline: 'Una web bonita no se improvisa. Se calcula.',
  skipLink: 'Saltar al contenido',

  seo: {
    title: 'FÓRMULA — webs bonitas, pensadas antes de programarse',
    description:
      'Un sistema para convertir la necesidad de un negocio en arquitectura, contenido, diseño y código. Webs bonitas con decisiones justificadas.',
    iniciarTitle: 'Iniciar un proyecto — FÓRMULA',
    iniciarDescription:
      'No hace falta que sepas de tecnología. Responde sobre tu negocio y nosotros convertiremos esas respuestas en una solución.',
    notFoundTitle: 'Página no encontrada — FÓRMULA',
  },

  nav: [
    { label: 'Método', href: '#metodo' },
    { label: 'Decisiones', href: '#decisiones' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Calidad', href: '#calidad' },
  ] as NavLink[],

  navCta: {
    label: 'Iniciar proyecto',
    href: '/iniciar',
  } as NavLink,

  footer: {
    logo: 'FÓRMULA / 07',
    text: 'Diseño y desarrollo web basado en decisiones, no en improvisaciones.',
    nav: [
      { label: 'Método', href: '#metodo' },
      { label: 'Proceso', href: '#proceso' },
      { label: 'Iniciar proyecto', href: '/iniciar' },
    ] as NavLink[],
    legal: [
      { label: 'Privacidad', href: '#' },
      { label: 'Cookies', href: '#' },
      { label: 'Aviso legal', href: '#' },
    ] as NavLink[],
    copyright: '© 2026 FÓRMULA',
  },

  hero: {
    eyebrow: 'SISTEMA DE DISEÑO Y DESARROLLO WEB',
    title: 'Una web bonita no se improvisa. Se calcula.',
    text: 'Partimos de la necesidad real de tu negocio y cruzamos contenido, diseño y tecnología hasta encontrar la solución correcta. Después la convertimos en código.',
    ctaPrimary: { label: 'Descubrir la fórmula ↓', href: '#metodo' },
    ctaSecondary: { label: 'Iniciar un proyecto →', href: '/iniciar' },
    microcopy: 'Brief → estrategia → contenido → diseño → código → QA',
    imageAltDesktop: 'Objeto de cristal de siete capas flotando sobre fondo negro',
    imageAltMobile: 'Objeto de cristal de siete capas sobre fondo negro, composición vertical',
  },

  problema: {
    eyebrow: 'ANTES DEL CÓDIGO',
    title: 'El problema no es hacer una web. Es decidir bien qué web hacer.',
    text: 'Empezar directamente por el diseño o el framework parece más rápido. Hasta que llega el primer cambio y hay que rehacerlo todo.',
    colA: {
      label: 'SIN MÉTODO',
      title: 'Primero diseñamos. Después pensamos.',
      points: [
        'Diseño antes del contenido',
        'Framework elegido por moda',
        'CMS aunque nadie vaya a usarlo',
        'Assets elegidos para rellenar',
        'Estilos inconsistentes',
        'Deploy al terminar',
        'Cambios sin un límite claro',
      ],
    },
    colB: {
      label: 'CON FÓRMULA',
      title: 'Primero decidimos. Después construimos.',
      points: [
        'Necesidad real',
        'Arquitectura justificada',
        'Contenido antes de los assets',
        'Sistema visual antes del código',
        'Preview desde el principio',
        'Revisiones controladas',
        'QA antes de entregar',
      ],
    },
  },

  ctaFinal: {
    eyebrow: 'EMPIEZA POR LA NECESIDAD',
    title: 'Cuéntame qué tiene que conseguir tu web. El resto se calcula.',
    text: 'No necesitas saber qué framework, CMS o estilo quieres. Esa es precisamente parte del trabajo.',
    ctaPrimary: { label: 'Rellenar el brief →', href: '/iniciar' },
    ctaSecondary: { label: 'Volver a la fórmula ↑', href: '#metodo' },
    imageAlt: 'Siete placas de cristal alineadas formando un objeto compacto sobre fondo negro',
  },

  notFound: {
    code: '404',
    title: 'Página no encontrada.',
    text: 'La página que buscas no existe o ha cambiado de dirección.',
    cta: { label: 'Volver al inicio', href: '/' } as NavLink,
  },
};
