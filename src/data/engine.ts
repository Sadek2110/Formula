/**
 * Motor de decisión — datos y reglas.
 * Preguntas y opciones: literal de docs/contenido-web.md.
 * Recomendaciones base: docs/brief-maestro.md §13.
 * La lógica pura vive en src/lib/engine.ts.
 */

export type NegocioId =
  | 'restaurante'
  | 'belleza'
  | 'clinica'
  | 'tienda'
  | 'gimnasio'
  | 'hotel'
  | 'creativo'
  | 'blog';

export type ObjetivoId = 'contactos' | 'reservas' | 'vender' | 'productos' | 'confianza' | 'google';
export type FrecuenciaId = 'nunca' | 'ocasional' | 'mensual' | 'semanal' | 'diario';
export type ActualizaId = 'nadie' | 'propietario' | 'empleado' | 'equipo';
export type FotografiaId = 'si' | 'algunas' | 'no';

export interface Answers {
  negocio?: NegocioId;
  objetivo?: ObjetivoId;
  frecuencia?: FrecuenciaId;
  actualiza?: ActualizaId;
  fotografia?: FotografiaId;
}

export interface Recommendation {
  tipo: string;
  arquitectura: string;
  cms: string;
  visual: string;
  prioridades: string[];
  motivos: string[];
}

export interface EngineOption {
  id: string;
  label: string;
}

export interface EngineQuestion {
  id: 'negocio' | 'objetivo' | 'frecuencia' | 'actualiza';
  legend: string;
  options: EngineOption[];
}

export interface BaseRecommendation {
  tipo: string;
  arquitectura: string;
  cms: string;
  visual: string;
  prioridades: string[];
}

export const engineCopy = {
  eyebrow: 'PRUEBA EL SISTEMA',
  title: 'No elegimos un stack. Elegimos una solución.',
  text: 'Responde cuatro preguntas y observa cómo cambia la recomendación.',
  header: 'RECOMENDACIÓN / 04-28',
  labels: {
    tipo: 'TIPO',
    arquitectura: 'ARQUITECTURA',
    cms: 'CMS',
    visual: 'DIRECCIÓN VISUAL',
    prioridades: 'PRIORIDADES',
    motivos: 'MOTIVOS',
  },
  disclaimer: 'Este resultado es orientativo. El brief completo puede cambiar la decisión.',
  cta: 'Quiero una recomendación completa →',
  ctaHref: '/iniciar',
  empty: 'Responde las preguntas para calcular una recomendación.',
  partial: 'Responde las preguntas restantes para afinar el resultado.',
  baseMotivo: 'Recomendación base para {negocio}.',
  overrides: {
    diario: 'El contenido cambia a diario: se publica con ISR o CMS, no con SSG puro.',
    nadie: 'Nadie va a actualizarla: sin CMS, menos mantenimiento y menos superficie de error.',
    plataforma: 'Venta online sin equipo técnico: plataforma existente antes que desarrollo a medida.',
    fotografia: 'Sin fotografía suficiente: la dirección visual se apoya en interfaz, color y tipografía.',
  },
  visualSinFotografia: 'Sistema visual sin depender de la fotografía',
};

export const engineQuestions: EngineQuestion[] = [
  {
    id: 'negocio',
    legend: '¿Qué tipo de negocio es?',
    options: [
      { id: 'restaurante', label: 'Restaurante' },
      { id: 'belleza', label: 'Belleza' },
      { id: 'clinica', label: 'Clínica / despacho' },
      { id: 'tienda', label: 'Tienda' },
      { id: 'gimnasio', label: 'Gimnasio / academia' },
      { id: 'hotel', label: 'Hotel' },
      { id: 'creativo', label: 'Profesional creativo' },
      { id: 'blog', label: 'Blog / medio' },
    ],
  },
  {
    id: 'objetivo',
    legend: '¿Qué tiene que conseguir principalmente la web?',
    options: [
      { id: 'contactos', label: 'Recibir contactos' },
      { id: 'reservas', label: 'Conseguir reservas' },
      { id: 'vender', label: 'Vender' },
      { id: 'productos', label: 'Mostrar productos' },
      { id: 'confianza', label: 'Transmitir confianza' },
      { id: 'google', label: 'Aparecer en Google' },
    ],
  },
  {
    id: 'frecuencia',
    legend: '¿Cada cuánto cambia el contenido?',
    options: [
      { id: 'nunca', label: 'Casi nunca' },
      { id: 'ocasional', label: 'Ocasionalmente' },
      { id: 'mensual', label: 'Cada mes' },
      { id: 'semanal', label: 'Cada semana' },
      { id: 'diario', label: 'A diario' },
    ],
  },
  {
    id: 'actualiza',
    legend: '¿Quién actualizará la web?',
    options: [
      { id: 'nadie', label: 'Nadie' },
      { id: 'propietario', label: 'El propietario' },
      { id: 'empleado', label: 'Un empleado' },
      { id: 'equipo', label: 'Un equipo técnico' },
    ],
  },
];

/** Recomendaciones base por tipo de negocio (brief-maestro §13). */
export const baseRecommendations: Record<NegocioId, BaseRecommendation> = {
  restaurante: {
    tipo: 'Landing + carta digital',
    arquitectura: 'SSG / Astro',
    cms: 'Ligero, solo para la carta',
    visual: 'Fotografía dominante + interfaz limpia',
    prioridades: ['Reservas', 'WhatsApp', 'Google Maps', 'Horarios'],
  },
  belleza: {
    tipo: 'Landing de conversión',
    arquitectura: 'SSG / Astro',
    cms: 'No por defecto',
    visual: 'Flat + marca fuerte',
    prioridades: ['Citas', 'Galería', 'Instagram'],
  },
  clinica: {
    tipo: 'Corporativa',
    arquitectura: 'SSG / Astro',
    cms: 'Sin CMS',
    visual: 'Alta legibilidad',
    prioridades: ['Servicios', 'Equipo', 'Contacto', 'SEO local'],
  },
  tienda: {
    tipo: 'Corporativa + catálogo',
    arquitectura: 'SSG / Astro',
    cms: 'Solo si el catálogo rota',
    visual: 'Bento / fotografía',
    prioridades: ['Catálogo', 'WhatsApp', 'Mapa'],
  },
  gimnasio: {
    tipo: 'Landing + horarios',
    arquitectura: 'SSG / Astro',
    cms: 'Horarios / tarifas',
    visual: 'Alto contraste',
    prioridades: ['Tarifas', 'Clases', 'Prueba'],
  },
  hotel: {
    tipo: 'Landing de reserva',
    arquitectura: 'SSG + motor externo',
    cms: 'Sin CMS',
    visual: 'Fotografía full-screen',
    prioridades: ['Reservas', 'Galería', 'Mapa', 'Idiomas'],
  },
  creativo: {
    tipo: 'Portfolio',
    arquitectura: 'SSG / Astro',
    cms: 'Sin CMS',
    visual: 'Dirección visual propia',
    prioridades: ['Proyectos', 'Experiencia', 'CV', 'Contacto directo'],
  },
  blog: {
    tipo: 'Blog',
    arquitectura: 'SSG + ISR / CMS',
    cms: 'Sí',
    visual: 'Editorial',
    prioridades: ['Categorías', 'Buscador', 'RSS'],
  },
};

/** Base de tienda que vende online (brief-maestro §13, «Tienda online»). */
export const tiendaOnlineBase: BaseRecommendation = {
  tipo: 'E-commerce',
  arquitectura: 'Plataforma / SSR headless',
  cms: 'Sí',
  visual: 'Producto primero',
  prioridades: ['Pago', 'Envíos', 'Devoluciones'],
};
