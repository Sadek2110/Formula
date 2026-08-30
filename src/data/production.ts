/** Sección 06 — de decisión a producción. Copy literal de docs/contenido-web.md. */

export interface Phase {
  n: string;
  name: string;
  text: string;
  output: string;
}

export const production = {
  eyebrow: 'DEL BRIEF A PRODUCCIÓN',
  title: 'La decisión es solo el principio.',
  text: 'Cada fase empieza con una entrada clara y termina dejando un resultado concreto para la siguiente.',
  salidaLabel: 'Salida',
};

export const phases: Phase[] = [
  { n: '00', name: 'BRIEF', text: 'Entender la necesidad.', output: 'Brief completo' },
  { n: '01', name: 'FICHA', text: 'Convertir respuestas en una definición clara del proyecto.', output: 'Ficha de proyecto' },
  { n: '02', name: 'ARQUITECTURA', text: 'Ordenar páginas, contenido y secciones.', output: 'Mapa de contenido' },
  { n: '03', name: 'CONTENIDO', text: 'Escribir antes de diseñar.', output: 'Copy definitivo + SEO' },
  { n: '04', name: 'ASSETS', text: 'Determinar qué material existe y qué falta.', output: 'Biblioteca organizada' },
  { n: '05', name: 'MULTIMEDIA', text: 'Crear únicamente lo que aporte valor.', output: 'Imagen / vídeo optimizado' },
  { n: '06', name: 'DIRECCIÓN VISUAL', text: 'Convertir la identidad en reglas.', output: 'Diseño + tokens' },
  { n: '07', name: 'REPO', text: 'Crear la base antes de programar.', output: 'Git + preview' },
  { n: '08', name: 'CÓDIGO', text: 'Construir con contenido real.', output: 'Web navegable' },
  { n: '09', name: 'INTEGRACIONES', text: 'Conectarla con el mundo real.', output: 'Formularios + reservas + Maps + analítica' },
  { n: '10', name: 'REVISIÓN', text: 'Validar antes de cerrar.', output: 'Cambios definidos' },
  { n: '11', name: 'QA', text: 'Comprobar lo que no se ve en una captura.', output: 'Checklist completo' },
  { n: '12', name: 'ENTREGA', text: 'Producción, accesos y documentación.', output: 'Proyecto terminado' },
];
