// Avance V: FODA, objetivos del negocio y de TI, normativas y nuevas tendencias.

export const swot = [
  {
    title: 'Fortalezas',
    items: [
      'Distribuye Toyota, la marca más vendida del país (42 % de la marca en 2025).',
      'Más de un siglo de trayectoria y 20 puntos de distribución en el país.',
      'Distribuidor de Suzuki por 60 años; la marca creció 45 % en 2025.',
      'Posventa propia y canales digitales en operación, incluida una tienda de repuestos en línea.'
    ]
  },
  {
    title: 'Oportunidades',
    items: [
      'Mercado de vehículos nuevos en crecimiento (+18 % en 2025).',
      'Exoneración a vehículos eléctricos y combustible caro que favorecen modelos eficientes.',
      '69.6 % de la población en internet para ventas y citas en línea.',
      'Economía en crecimiento (4.9 % en 2025) y tipo de cambio fijo.'
    ]
  },
  {
    title: 'Debilidades',
    items: [
      'La marca Toyota creció 9 % en 2025, la mitad que el mercado (18 %), y su participación bajó de 45.5 % a 42 %.',
      'Dependencia de pocos fabricantes extranjeros (Toyota, Suzuki, Hino y Yamaha) para el negocio principal.',
      'Canales digitales dispersos en varios sitios por marca y unidad, sin una experiencia única para el cliente.',
      'Las debilidades de infraestructura de TI se incorporarán cuando se valide el análisis interno con la empresa.'
    ]
  },
  {
    title: 'Amenazas',
    items: [
      'Aranceles de EE. UU. (Sección 301) desde 2026, con alza a 15 % en 2028.',
      'Marcas chinas de bajo precio en expansión.',
      'Ciberataques y ransomware en países vecinos; reforma de la Ley de Ciberdelitos (Ley 1219).',
      'Emigración estimada de 95,000 personas en 2024 y sismos en Managua.'
    ]
  }
];

export const planPeriod =
  'Periodo del plan: del 1 de enero de 2027 al 31 de diciembre de 2030 (4 años). Todos los objetivos vencen entre 2029 y 2030, es decir, entre 3 y 4 años después del inicio.';

export const businessObjectives = [
  {
    phase: 'OBN-1',
    title: 'Crecimiento comercial',
    text: 'Aumentar cada año, entre 2027 y 2030, las unidades vendidas por Casa Pellas (todas sus marcas) al menos al mismo ritmo que el mercado nacional de vehículos nuevos, para no perder participación.',
    points: [
      'Referencia de mercado: +18 % en 2025 (Best Selling Cars Blog, 2026).',
      'Línea base: ventas de Casa Pellas en 2026, a obtener de la empresa.',
      'Cumplimiento requerido: 4 de 4 años.',
      'Responsable: Gerencia Comercial.'
    ]
  },
  {
    phase: 'OBN-2',
    title: 'Movilidad eficiente',
    text: 'Duplicar, al 31 de diciembre de 2030, la proporción de vehículos electrificados (híbridos completos, híbridos enchufables y eléctricos de batería; los híbridos ligeros se reportan aparte) en las unidades nuevas vendidas por Casa Pellas, respecto de 2026.',
    points: [
      'Línea base: proporción de 2026, a obtener de la empresa.',
      'Cumplimiento mínimo: 80 % del aumento previsto.',
      'Responsable: Gerencia Comercial.'
    ]
  },
  {
    phase: 'OBN-3',
    title: 'Posventa',
    text: 'Aumentar en 20 % los ingresos de posventa (repuestos y talleres) al 31 de diciembre de 2029, respecto de 2026. Equivale a cerca de 6.3 % anual, una meta conservadora frente al crecimiento del mercado de vehículos nuevos (18 % en 2025), que amplía el parque que requiere servicio.',
    points: [
      'Línea base: ingresos de posventa de 2026, a obtener de la empresa.',
      'Cumplimiento mínimo: 90 % de la meta.',
      'Responsable: Gerencia de Posventa.'
    ]
  }
];

export const itObjectives = [
  {
    phase: 'OTI-1',
    title: 'Canal omnicanal (apoya OBN-3)',
    text: 'Implementar una plataforma web y móvil de cotización, financiamiento y citas de taller que gestione el 30 % de las citas de taller al 31 de diciembre de 2029.',
    points: [
      'Línea base: porcentaje de citas en línea en el primer trimestre de 2027.',
      'Cumplimiento mínimo: 85 %.',
      'Responsable: Jefe de canales digitales.'
    ]
  },
  {
    phase: 'OTI-2',
    title: 'Datos integrados (apoya OBN-1 y OBN-3)',
    text: 'Integrar en un CRM único el 100 % de los registros de clientes de ventas y posventa, con al menos 95 % de calidad de datos (sin duplicados ni campos críticos vacíos), al 31 de diciembre de 2029.',
    points: [
      'Línea base: diagnóstico de calidad de datos en 2027.',
      'Responsable: Jefe de aplicaciones.'
    ]
  },
  {
    phase: 'OTI-3',
    title: 'Continuidad y seguridad (apoya todos los objetivos)',
    text: 'Al 31 de diciembre de 2029, alcanzar 99.5 % de disponibilidad mensual en los sistemas críticos (ERP/DMS y facturación), lo que permite hasta 3.6 horas de caída en un mes de 30 días; restablecer cada incidente crítico en 2 horas o menos (RTO); y llegar al nivel de implementación (Tier) 3 “Repetible” de NIST CSF 2.0, con un perfil objetivo definido para sus seis funciones y medido en una autoevaluación anual.',
    points: [
      'Línea base: autoevaluación NIST y medición de disponibilidad en 2027.',
      'Responsable: Oficial de seguridad de la información y Jefe de infraestructura.'
    ]
  }
];

export const trends = [
  {
    title: 'Sistemas multiagente de IA (Gartner, tendencias 2026)',
    text: 'Agentes que cotizan, agendan citas de taller y dan seguimiento a clientes de forma coordinada.',
    points: [
      'Beneficio: atención 24/7 en canales digitales, menos carga para vendedores y asesores, y apoyo directo al OTI-1.'
    ]
  },
  {
    title: 'Ciberseguridad preventiva (Gartner, tendencias 2026)',
    text: 'Pasar de reaccionar a anticipar ataques con monitoreo continuo, inteligencia de amenazas y detección temprana.',
    points: [
      'Beneficio: reduce el riesgo de ransomware, con cerca de 24,100 intentos en 2025 solo en cinco países vecinos (News in America, 2026), y protege la disponibilidad del OTI-3.'
    ]
  }
];

export const policies = [
  {
    title: 'Política de protección de datos personales',
    text: 'Consentimiento informado, finalidad y conservación de los datos de clientes en el CRM y en los canales digitales, conforme a la Ley 787.'
  },
  {
    title: 'Política de uso responsable de IA y gobierno de datos',
    text: 'Aprobación previa de cada caso de uso, clasificación de datos, revisión humana de las respuestas a clientes y prohibición de ingresar datos sensibles en herramientas no autorizadas.'
  },
  {
    title: 'Política de seguridad y continuidad',
    text: 'Autenticación multifactor, respaldos 3-2-1 con copia inmutable, plan de respuesta a incidentes y uso legal de los sistemas, considerando la Ley 1042 y su reforma (Ley 1219).'
  }
];

export const bestPractices = [
  {
    title: 'COBIT 2019 (ISACA)',
    text: 'Usar sus objetivos de gobierno para priorizar el portafolio de servicios y proyectos de TI según los objetivos del negocio, y medir beneficios, riesgos y recursos de cada iniciativa.'
  },
  {
    title: 'ITIL 4',
    text: 'Organizar la mesa de ayuda con gestión de incidentes, solicitudes y cambios, con los SLA, los KPI y el flujo de atención definidos en el detalle de servicios de TI.'
  },
  {
    title: 'NIST CSF 2.0',
    text: 'Evaluar el estado actual en sus seis funciones (Gobernar, Identificar, Proteger, Detectar, Responder y Recuperar), definir un perfil objetivo y cerrar las brechas por prioridad hasta el Tier 3 de OTI-3.'
  }
];

export const indicators = [
  {
    title: 'Porcentaje de citas de taller agendadas en línea (OTI-1)',
    text: 'Citas en línea ÷ total de citas × 100.',
    points: [
      'Línea base: primer trimestre de 2027.',
      'Meta: 30 % al cierre de 2029.',
      'Frecuencia: mensual.',
      'Responsable: Jefe de canales digitales.',
      'Fuente de datos: sistema de citas del taller (DMS).'
    ]
  },
  {
    title: 'Disponibilidad de sistemas críticos (OTI-3)',
    text: '(Tiempo operativo ÷ tiempo total acordado, sin mantenimientos programados) × 100 para ERP/DMS y facturación.',
    points: [
      'Línea base: medición de 2027.',
      'Meta: 99.5 % mensual al cierre de 2029, con cada incidente crítico restablecido en 2 horas o menos (RTO).',
      'Frecuencia: mensual.',
      'Responsable: Jefe de infraestructura.',
      'Fuente de datos: herramienta de monitoreo de servicios.'
    ]
  }
];
