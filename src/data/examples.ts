/** Sección 05 — ejemplos de decisión. Copy literal de docs/contenido-web.md. */

export interface Example {
  id: string;
  label: string;
  title: string;
  icon: string;
  tipo: string;
  render: string;
  cms: string;
  visual: string;
  extras: string[];
}

export const examplesCopy = {
  eyebrow: 'UNA NECESIDAD, UNA SOLUCIÓN',
  title: 'El mismo diseñador no debería hacer la misma web para todos.',
  groupLabel: 'Elige un ejemplo',
  labels: {
    tipo: 'TIPO',
    render: 'RENDER',
    cms: 'CMS',
    visual: 'VISUAL',
  },
};

export const examples: Example[] = [
  {
    id: 'restaurante',
    label: 'RESTAURANTE',
    title: 'Que reservar sea más fácil que buscar el teléfono.',
    icon: 'lucide:utensils',
    tipo: 'Landing + carta',
    render: 'SSG',
    cms: 'CMS ligero',
    visual: 'Fotografía protagonista',
    extras: ['Reservas', 'WhatsApp', 'Maps', 'Horarios'],
  },
  {
    id: 'clinica',
    label: 'CLÍNICA',
    title: 'La prioridad no es impresionar. Es transmitir confianza.',
    icon: 'lucide:stethoscope',
    tipo: 'Web corporativa',
    render: 'SSG',
    cms: 'Sin CMS',
    visual: 'Alta legibilidad',
    extras: ['Servicios', 'Equipo', 'Contacto', 'SEO local'],
  },
  {
    id: 'creativo',
    label: 'CREATIVO',
    title: 'Aquí sí podemos romper algunas reglas.',
    icon: 'lucide:pen-tool',
    tipo: 'Portfolio',
    render: 'SSG',
    cms: 'Sin CMS',
    visual: 'Dirección visual propia',
    extras: ['Proyectos', 'Experiencia', 'CV', 'Contacto directo'],
  },
];
