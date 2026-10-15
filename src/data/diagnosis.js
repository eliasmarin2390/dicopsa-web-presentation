export const diagnosisSynthesis = {
  loop: 'Bucle del Arquitecto Digital',
  step: '¿Dónde estamos?',
  text: 'DICOPSA tiene una posición comercial sólida y una infraestructura de red funcional, pero su tecnología aún se gestiona como centro de costos y no como parte de la estrategia.',
  criticalPoints:
    'Los puntos críticos están en la continuidad del negocio: el datacenter no tiene redundancia en climatización, energía ni servidores, y los respaldos no salen del edificio. En una zona sísmica y con más ciberataques, es un riesgo alto para la facturación y el despacho.'
};

export const externalOpportunitiesNote =
  'Las oportunidades externas (fibra óptica, nube híbrida, analítica e IA, y el uso de WhatsApp por parte de los comercios) solo generarán valor si antes se ordena la base.';

export const nextStep = {
  title: 'Siguiente avance del proyecto',
  text: 'Definir la visión TO-BE y priorizar iniciativas con el filtro de cinco preguntas gerenciales, empezando por la continuidad operativa y la integración de datos antes de invertir en tecnologías más avanzadas.'
};

export const managementQuestions = [
  { title: 'Problema', text: '¿Qué problema de negocio resuelve?' },
  { title: 'Estrategia', text: '¿A qué objetivo estratégico responde?' },
  { title: 'Valor', text: '¿Qué valor aporta a la empresa?' },
  { title: 'Riesgo', text: '¿Qué riesgo introduce o reduce?' },
  { title: 'Medición', text: '¿Cómo sabremos que funcionó?' }
];

export const diagnosisRisks = [
  {
    title: 'Riesgo de continuidad',
    text: 'Falta de redundancia en climatización, energía, servidores y copias fuera de sitio.'
  },
  {
    title: 'Riesgo de ciberseguridad',
    text: 'Ransomware que cifre servidores y NAS al estar en la misma red.'
  },
  {
    title: 'Riesgo físico',
    text: 'Sismos, incendios, huracanes y lluvias intensas que afectan la infraestructura.'
  }
];

export const branchRisks = [
  'Caída del switch de bodega: se detienen el despacho y los escáneres.',
  'Caída de Internet en una sucursal: no puede facturar.',
  'Daño físico por golpes o polvo en el IDF-2.',
  'Acceso no autorizado a los gabinetes.',
  'Saturación del Wi‑Fi en horas pico.'
];
