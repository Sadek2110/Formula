import {
  baseRecommendations,
  engineCopy,
  engineQuestions,
  tiendaOnlineBase,
} from '../data/engine';
import type { Answers, NegocioId, Recommendation } from '../data/engine';

const negocioLabel = (id: NegocioId): string => {
  const question = engineQuestions.find((q) => q.id === 'negocio');
  return question?.options.find((option) => option.id === id)?.label ?? id;
};

/**
 * Resuelve una recomendación a partir de respuestas parciales o completas.
 * Pura y determinista: sin fetch, sin aleatoriedad, sin fechas.
 * Aplica los overrides en el orden fijado por la spec y devuelve
 * una línea de motivo por cada override aplicado.
 */
export function resolve(answers: Answers): Recommendation | null {
  const { negocio, objetivo, frecuencia, actualiza, fotografia } = answers;
  if (!negocio) return null;

  const tiendaOnline = negocio === 'tienda' && objetivo === 'vender';
  const base = tiendaOnline ? tiendaOnlineBase : baseRecommendations[negocio];

  const rec: Recommendation = {
    ...base,
    prioridades: [...base.prioridades],
    motivos: [engineCopy.baseMotivo.replace('{negocio}', negocioLabel(negocio))],
  };

  // Override 1 — contenido diario: deja de ser SSG puro.
  if (frecuencia === 'diario' && rec.arquitectura === 'SSG / Astro') {
    rec.arquitectura = 'SSG + ISR / CMS';
    rec.motivos.push(engineCopy.overrides.diario);
  }

  // Override 2 — nadie actualiza: sin CMS.
  if (actualiza === 'nadie' && rec.cms !== 'Sin CMS') {
    rec.cms = 'Sin CMS';
    rec.motivos.push(engineCopy.overrides.nadie);
  }

  // Override 3 — venta online sin equipo técnico: plataforma existente.
  if (
    tiendaOnline &&
    actualiza !== undefined &&
    actualiza !== 'equipo' &&
    rec.arquitectura !== 'Plataforma existente'
  ) {
    rec.arquitectura = 'Plataforma existente';
    rec.motivos.push(engineCopy.overrides.plataforma);
  }

  // Override 4 — sin fotografía suficiente: el visual no depende de la fotografía.
  if (fotografia === 'no') {
    rec.visual = engineCopy.visualSinFotografia;
    rec.motivos.push(engineCopy.overrides.fotografia);
  }

  return rec;
}
