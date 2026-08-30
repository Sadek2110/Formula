/** Sección 07 — entregables. Copy literal de docs/contenido-web.md. */

export type Microvisual =
  | 'wire'
  | 'grid'
  | 'snippet'
  | 'files'
  | 'chips'
  | 'url'
  | 'nodes'
  | 'checks'
  | 'keys';

export interface Deliverable {
  id: string;
  title: string;
  text: string;
  icon: string;
  visual: Microvisual;
  size: 'lg' | 'sm';
}

export const deliverablesCopy = {
  eyebrow: 'NADA QUEDA EN EL AIRE',
  title: 'Cada fase deja algo concreto.',
  text: 'Menos decisiones escondidas. Más resultados verificables.',
};

export const deliverables: Deliverable[] = [
  {
    id: 'ficha',
    title: 'FICHA DE PROYECTO',
    text: 'Una única definición del proyecto que guía todo lo demás.',
    icon: 'lucide:clipboard-list',
    visual: 'wire',
    size: 'lg',
  },
  {
    id: 'arquitectura',
    title: 'ARQUITECTURA',
    text: 'Qué páginas existen, qué cuenta cada una y en qué orden.',
    icon: 'lucide:network',
    visual: 'grid',
    size: 'lg',
  },
  {
    id: 'contenido',
    title: 'CONTENIDO',
    text: 'Textos reales antes de empezar a maquetar.',
    icon: 'lucide:file-text',
    visual: 'snippet',
    size: 'sm',
  },
  {
    id: 'assets',
    title: 'ASSETS',
    text: 'Material organizado y preparado para producción.',
    icon: 'lucide:folder',
    visual: 'files',
    size: 'sm',
  },
  {
    id: 'sistema-visual',
    title: 'SISTEMA VISUAL',
    text: 'Color, tipografía, espacios, radios y componentes bajo las mismas reglas.',
    icon: 'lucide:palette',
    visual: 'chips',
    size: 'sm',
  },
  {
    id: 'preview',
    title: 'PREVIEW',
    text: 'Una URL funcional desde las primeras fases del desarrollo.',
    icon: 'lucide:external-link',
    visual: 'url',
    size: 'lg',
  },
  {
    id: 'integraciones',
    title: 'INTEGRACIONES',
    text: 'Formularios, reservas, mapas y servicios realmente conectados.',
    icon: 'lucide:plug',
    visual: 'nodes',
    size: 'lg',
  },
  {
    id: 'qa',
    title: 'QA',
    text: 'Rendimiento, accesibilidad, SEO y dispositivos comprobados.',
    icon: 'lucide:list-checks',
    visual: 'checks',
    size: 'lg',
  },
  {
    id: 'traspaso',
    title: 'TRASPASO',
    text: 'Accesos y documentación para que el proyecto no dependa eternamente del desarrollador.',
    icon: 'lucide:key-round',
    visual: 'keys',
    size: 'lg',
  },
];
