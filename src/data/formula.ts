export interface FormulaStep {
  n: string;
  title: string;
  subtitle: string;
  text: string;
  tag: string;
}

/** Sección 03 — copy literal de docs/contenido-web.md. */
export const formula = {
  eyebrow: 'EL MÉTODO',
  title: '7 decisiones. En un orden concreto.',
  text: 'Cada fase elimina una incógnita. Cuando llega el momento de programar, las decisiones importantes ya están tomadas.',
  imageAlt: 'Siete placas de cristal ahumado flotando separadas sobre fondo oscuro',
};

export const formulaSteps: FormulaStep[] = [
  {
    n: '01',
    title: 'NECESIDAD',
    subtitle: 'Antes de pensar en tecnología, entendemos el negocio.',
    text: 'Qué vende, a quién, qué tiene que conseguir la web y cómo sabremos si funciona.',
    tag: 'NEGOCIO + OBJETIVO',
  },
  {
    n: '02',
    title: 'TIPO DE PÁGINA',
    subtitle: 'La función define la estructura.',
    text: 'Landing, corporativa, catálogo, e-commerce, portfolio, blog o una combinación de varios formatos.',
    tag: 'ESTRUCTURA',
  },
  {
    n: '03',
    title: 'ARQUITECTURA',
    subtitle: 'La tecnología se adapta al proyecto. No al revés.',
    text: 'Elegimos cómo construir y servir la página según el contenido, su frecuencia de actualización y quién tendrá que mantenerla.',
    tag: 'SSG / SSR / ISR / SPA / MPA',
  },
  {
    n: '04',
    title: 'DIRECCIÓN VISUAL',
    subtitle: 'Bonita, pero también coherente.',
    text: 'Marca, público, referencias, fotografías, tipografía, color, espaciado y comportamiento responsive se convierten en un único sistema visual.',
    tag: 'DISEÑO',
  },
  {
    n: '05',
    title: 'DECISIÓN',
    subtitle: 'Toda la información converge en una solución.',
    text: 'Tipo de página, arquitectura, CMS, estilo y funcionalidades quedan definidos antes de empezar el desarrollo.',
    tag: 'SOLUCIÓN',
  },
  {
    n: '06',
    title: 'PRODUCCIÓN',
    subtitle: 'Ahora sí, construimos.',
    text: 'Contenido, assets, dirección visual, repositorio, código, integraciones y preview.',
    tag: 'BUILD',
  },
  {
    n: '07',
    title: 'VERIFICACIÓN',
    subtitle: 'Una web no está terminada cuando se ve bien.',
    text: 'Rendimiento, móvil, accesibilidad, SEO, formularios, legal y traspaso tienen que estar comprobados.',
    tag: 'QA',
  },
];
