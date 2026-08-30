/** Sección 08 — calidad. Copy literal de docs/contenido-web.md. */

export interface Pillar {
  label: string;
  title: string;
  icon: string;
  points: string[];
  indicator?: string;
}

export const qualityCopy = {
  eyebrow: 'DISEÑO ≠ DECORACIÓN',
  title: 'Bonita no significa pesada.',
  text: 'Una animación que empeora la experiencia no mejora el diseño.',
  imageAlt: 'Detalle de un objeto geométrico de cristal sobre fondo oscuro',
};

export const pillars: Pillar[] = [
  {
    label: 'RENDIMIENTO',
    title: 'Rápida donde importa.',
    icon: 'lucide:gauge',
    points: ['Assets optimizados', 'JavaScript mínimo', 'Carga diferida', 'Layout estable'],
    indicator: 'LCP objetivo < 2.5 s',
  },
  {
    label: 'ACCESIBILIDAD',
    title: 'Diseñada para utilizarse.',
    icon: 'lucide:accessibility',
    points: ['Contraste AA', 'Navegación por teclado', 'Focus visible', 'Reduced motion', 'HTML semántico'],
  },
  {
    label: 'SEO',
    title: 'Preparada para encontrarse.',
    icon: 'lucide:search',
    points: ['Metadatos', 'Contenido estructurado', 'Sitemap', 'Canonical', 'SEO técnico'],
  },
  {
    label: 'MANTENIMIENTO',
    title: 'Tan compleja como necesita ser. No más.',
    icon: 'lucide:wrench',
    points: ['Arquitectura simple', 'Datos separados de UI', 'Código documentado', 'Dependencias controladas'],
  },
];
