export const diagnosisSynthesis = {
  loop: 'Bucle del Arquitecto Digital',
  step: '¿Dónde estamos?',
  text: 'Casa Pellas tiene una posición comercial sólida, sostenida por 113 años de trayectoria, marcas líderes y una red de posventa.',
  criticalPoints:
    'Su principal reto tecnológico es pasar de usar canales digitales para vender a gestionar los datos de clientes, vehículos y talleres como un activo estratégico, integrando sus distintas unidades de negocio.'
};

export const externalOpportunitiesNote =
  'Las oportunidades más relevantes son la movilidad híbrida y eléctrica, la venta omnicanal y la analítica de posventa. Solo generarán valor si la infraestructura garantiza la continuidad operativa y si existe un gobierno de TI que priorice las iniciativas.';

export const nextStep = {
  title: 'Siguiente paso',
  text: 'Validar el análisis interno con el área de TI mediante la guía del anexo y priorizar las iniciativas con el filtro de las cinco preguntas gerenciales.'
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
    text: 'Falla de climatización o corte eléctrico prolongado que detenga la facturación y los talleres.'
  },
  {
    title: 'Riesgo de ciberseguridad',
    text: 'Ransomware que afecte servidores y respaldos.'
  },
  {
    title: 'Riesgo físico',
    text: 'Sismo o incendio en Managua sin sitio alterno.'
  }
];

// Anexo: guía de levantamiento para validar el análisis interno con el área de TI.
export const itSurveyGuide = [
  {
    title: 'Ubicación',
    text: '¿Dónde está el datacenter (MDF)? ¿Cuántos IDF hay y en qué edificios o sucursales?'
  },
  {
    title: 'Inventario',
    text: '¿Cuántos racks, servidores, equipos de almacenamiento, firewalls, switches y enlaces de Internet existen? ¿Qué sistemas corren (ERP/DMS, CRM, facturación)?'
  },
  {
    title: 'Redundancia',
    text: '¿Hay servidores en alta disponibilidad, enlaces de respaldo y un sitio alterno o nube?'
  },
  {
    title: 'Climatización',
    text: '¿Qué tipo de aire acondicionado hay, cuántas unidades y se monitorea la temperatura?'
  },
  {
    title: 'Electricidad / UPS',
    text: '¿Qué capacidad y autonomía tienen las UPS? ¿Hay planta eléctrica con transferencia automática?'
  },
  {
    title: 'Cableado',
    text: '¿Qué categoría de cableado se usa? ¿Está etiquetado, documentado y certificado?'
  },
  {
    title: 'Seguridad',
    text: '¿Cómo se controla el acceso físico? ¿Hay detección de incendios, CCTV, segmentación por VLANs y política de respaldos?'
  },
  {
    title: 'Certificaciones',
    text: '¿Cuentan con alguna certificación (TIA-942, ISO/IEC 27001, otras)?'
  },
  {
    title: 'Problemas',
    text: '¿Cuáles han sido las principales fallas o incidentes en los últimos dos años?'
  }
];
