/**
 * Formulario /iniciar — definición de los 5 pasos.
 * Copy literal de docs/contenido-web.md.
 */
import { engineQuestions } from './engine';

export type FieldType = 'text' | 'textarea' | 'email' | 'tel' | 'radio' | 'checkbox';

export interface FormOption {
  value: string;
  label: string;
}

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  autocomplete?: string;
  options?: FormOption[];
  hideLabel?: boolean;
}

export interface FormStep {
  id: string;
  label: string;
  title: string;
  fields: FormField[];
}

export const briefForm = {
  storageKey: 'formula:brief',

  header: {
    eyebrow: 'NUEVO PROYECTO',
    title: 'Empecemos por entender qué necesitas.',
    text: 'No hace falta que sepas de tecnología. Responde sobre tu negocio y nosotros convertiremos esas respuestas en una solución.',
  },

  nav: {
    back: '← Atrás',
    next: 'Continuar →',
  },

  submitLabel: 'Enviar brief →',

  validation: {
    required: 'Este campo es obligatorio.',
    email: 'Introduce un email válido.',
  },

  states: {
    sending: 'Enviando…',
    error: 'No se ha podido enviar el brief. Inténtalo de nuevo.',
    retry: 'Reintentar envío',
    endpointMissing: 'El destino del formulario no está configurado.',
  },

  security: {
    honeypotName: 'empresa',
    honeypotLabel: 'Empresa',
    minSeconds: 3,
  },

  final: {
    chip: 'BRIEF / COMPLETADO ✓',
    title: 'Brief recibido.',
    text: 'Ya tenemos la materia prima. El siguiente paso es convertir estas respuestas en una ficha de proyecto y decidir qué web tiene sentido construir.',
    cta: { label: 'Volver al inicio', href: '/' },
  },

  steps: [
    {
      id: 'negocio',
      label: 'NEGOCIO',
      title: 'Háblame del negocio.',
      fields: [
        {
          name: 'nombre-negocio',
          label: '¿Cómo se llama el negocio o proyecto?',
          type: 'text',
          required: true,
          autocomplete: 'organization',
        },
        {
          name: 'dedicacion',
          label: '¿A qué se dedica?',
          type: 'textarea',
          required: true,
          placeholder: 'Describe brevemente qué vendes o qué servicio ofreces.',
        },
        {
          name: 'cliente',
          label: '¿Quién es el cliente habitual?',
          type: 'text',
        },
      ],
    },
    {
      id: 'objetivo',
      label: 'OBJETIVO',
      title: '¿Qué tiene que conseguir la web?',
      fields: [
        {
          name: 'objetivo',
          label: '¿Qué tiene que conseguir la web?',
          type: 'checkbox',
          hideLabel: true,
          options: [
            { value: 'llamadas', label: 'Conseguir llamadas' },
            { value: 'formularios', label: 'Recibir formularios' },
            { value: 'reservas', label: 'Generar reservas' },
            { value: 'vender-online', label: 'Vender online' },
            { value: 'productos', label: 'Mostrar productos o servicios' },
            { value: 'confianza', label: 'Transmitir más confianza' },
            { value: 'google', label: 'Aparecer mejor en Google' },
            { value: 'otro', label: 'Otro' },
          ],
        },
      ],
    },
    {
      id: 'funcionalidades',
      label: 'FUNCIONALIDADES',
      title: '¿Qué tiene que poder hacer?',
      fields: [
        {
          name: 'funcionalidades',
          label: '¿Qué tiene que poder hacer?',
          type: 'checkbox',
          hideLabel: true,
          options: [
            { value: 'informacion', label: 'Mostrar información' },
            { value: 'catalogo', label: 'Mostrar catálogo' },
            { value: 'venta-online', label: 'Vender online' },
            { value: 'reservas', label: 'Aceptar reservas' },
            { value: 'carta', label: 'Mostrar carta o pedidos' },
            { value: 'area-privada', label: 'Área privada' },
            { value: 'noticias', label: 'Publicar noticias' },
            { value: 'multiidioma', label: 'Varios idiomas' },
            { value: 'whatsapp', label: 'WhatsApp' },
            { value: 'maps', label: 'Google Maps' },
            { value: 'instagram', label: 'Instagram' },
          ],
        },
      ],
    },
    {
      id: 'contenido',
      label: 'CONTENIDO',
      title: 'Ahora hablemos del contenido.',
      fields: [
        {
          name: 'textos',
          label: '¿Ya tienes los textos?',
          type: 'radio',
          options: [
            { value: 'si', label: 'Sí' },
            { value: 'en-parte', label: 'En parte' },
            { value: 'no', label: 'No' },
          ],
        },
        {
          name: 'fotografias',
          label: '¿Tienes fotografías propias de calidad?',
          type: 'radio',
          options: [
            { value: 'si', label: 'Sí' },
            { value: 'algunas', label: 'Algunas' },
            { value: 'no', label: 'No' },
          ],
        },
        {
          name: 'frecuencia',
          label: '¿Cada cuánto cambiará el contenido?',
          type: 'radio',
          options: [
            { value: 'casi-nunca', label: 'Casi nunca' },
            { value: 'varias-al-ano', label: 'Varias veces al año' },
            { value: 'mensualmente', label: 'Mensualmente' },
            { value: 'semanalmente', label: 'Semanalmente' },
            { value: 'a-diario', label: 'A diario' },
          ],
        },
        {
          name: 'actualiza',
          label: '¿Quién lo actualizará?',
          type: 'radio',
          options: [
            { value: 'nadie', label: 'Nadie' },
            { value: 'yo', label: 'Yo' },
            { value: 'empleado', label: 'Un empleado' },
            { value: 'equipo', label: 'Un equipo técnico' },
          ],
        },
      ],
    },
    {
      id: 'proyecto',
      label: 'PROYECTO',
      title: 'Últimos detalles.',
      fields: [
        {
          name: 'presupuesto',
          label: 'Presupuesto aproximado',
          type: 'radio',
          options: [
            { value: 'menos-500', label: 'Menos de 500 €' },
            { value: '500-1000', label: '500–1.000 €' },
            { value: '1000-2000', label: '1.000–2.000 €' },
            { value: '2000-5000', label: '2.000–5.000 €' },
            { value: 'mas-5000', label: 'Más de 5.000 €' },
            { value: 'hablarlo', label: 'Prefiero hablarlo' },
          ],
        },
        {
          name: 'fecha',
          label: '¿Existe una fecha límite?',
          type: 'text',
        },
        {
          name: 'web-actual',
          label: 'Web actual',
          type: 'text',
          placeholder: 'https://',
          autocomplete: 'url',
        },
        {
          name: 'referencias',
          label: 'Webs que te gusten',
          type: 'textarea',
          placeholder: 'Puedes pegar varias URLs.',
        },
        {
          name: 'nombre',
          label: 'Nombre',
          type: 'text',
          required: true,
          autocomplete: 'name',
        },
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          required: true,
          autocomplete: 'email',
        },
        {
          name: 'telefono',
          label: 'Teléfono',
          type: 'tel',
          autocomplete: 'tel',
        },
        {
          name: 'mensaje',
          label: '¿Algo más que debería saber?',
          type: 'textarea',
        },
      ],
    },
  ] as FormStep[],
};

/** Etiquetas de negocio del motor, para precargar «¿A qué se dedica?» desde querystring. */
const negocioQuestion = engineQuestions.find((q) => q.id === 'negocio');
export const negocioLabels: Record<string, string> = Object.fromEntries(
  (negocioQuestion?.options ?? []).map((option) => [option.id, option.label]),
);

/** Mapas motor → formulario para precargar respuestas desde querystring. */
export const motorPrefill = {
  objetivo: {
    contactos: 'formularios',
    reservas: 'reservas',
    vender: 'vender-online',
    productos: 'productos',
    confianza: 'confianza',
    google: 'google',
  },
  frecuencia: {
    nunca: 'casi-nunca',
    ocasional: 'varias-al-ano',
    mensual: 'mensualmente',
    semanal: 'semanalmente',
    diario: 'a-diario',
  },
  actualiza: {
    nadie: 'nadie',
    propietario: 'yo',
    empleado: 'empleado',
    equipo: 'equipo',
  },
} as const;
