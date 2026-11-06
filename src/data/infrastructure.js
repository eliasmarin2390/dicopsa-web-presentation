export const techMaturity = {
  stage: 3,
  stageLabel: 'TI como soporte estratégico',
  text: 'Según la evolución del paradigma organizacional (Sesión 1), Casa Pellas estaría en la etapa 3 “TI como soporte estratégico”, con avances hacia la etapa 4, porque usa canales digitales para competir (E&N, 2021).',
  scale: {
    from: 'Etapa 3',
    to: 'Etapa 4',
    note: 'Nota: la información tecnológica interna de Casa Pellas no es pública. Este diagnóstico combina lo publicado con lo esperado en una distribuidora de su tamaño, y debe validarse con el área de TI.'
  }
};

export const techSummary = [
  {
    title: 'Canales digitales comprobados',
    text: 'Sitio de Toyota Nicaragua (toyota.com.ni), portal Toyota Casa Pellas (toyota.casapellas.com), tienda de repuestos en línea (repuestos.casapellas.com), sitio de Suzuki Nicaragua y redes sociales.'
  },
  {
    title: 'Retos esperados',
    text: 'Unificar estos canales y los datos de sus unidades de negocio.',
    points: [
      'Evitar islas de información.',
      'Medir el valor de TI con COBIT 2019 y NIST CSF 2.0.'
    ]
  }
];

// Análisis interno (Avance III): escenario de referencia; todo lo marcado "a confirmar",
// "a validar" o "a verificar" es una estimación del equipo. Solo "Comprobado" proviene de fuentes públicas.
export const internalLimitation =
  'Limitación metodológica: la infraestructura interna de TI de Casa Pellas no es pública y no fue posible validarla con la empresa. Por eso, las tablas presentan un escenario de referencia para una distribuidora de su tamaño: todo lo marcado “a confirmar”, “a validar” o “a verificar” es una estimación técnica del equipo, no un hecho comprobado. Solo lo marcado “Comprobado” proviene de fuentes públicas.';

export const internalAnalysis = {
  mdf: {
    label: 'Datacenter (MDF)',
    rows: [
      {
        label: 'Ubicación',
        status: 'A confirmar',
        items: [
          'Se espera en las oficinas centrales de Managua, en una sala dedicada.'
        ]
      },
      {
        label: 'Inventario de equipos',
        status: 'A confirmar',
        items: [
          'Racks de piso 42U.',
          'Firewall perimetral con VPN.',
          'Switches core capa 3.',
          'Almacenamiento SAN/NAS.',
          'UPS, aire acondicionado y planta eléctrica.'
        ]
      },
      {
        label: 'Fortalezas',
        status: 'A validar',
        items: [
          'Servicios centralizados para los 20 puntos de distribución.',
          'Personal de TI propio.'
        ]
      },
      {
        label: 'Debilidades',
        status: 'A verificar',
        items: [
          'Climatización sin redundancia N+1.',
          'Respaldos sin copia fuera de sitio.',
          'Documentación incompleta.'
        ]
      },
      {
        label: 'Posibles fallos',
        items: [
          'Sobrecalentamiento por falla de climatización.',
          'Corte eléctrico prolongado.',
          'Sismo o incendio en Managua sin sitio alterno.'
        ]
      },
      {
        label: 'Áreas de mejora',
        items: [
          'Climatización N+1 con sensores.',
          'Planta eléctrica con transferencia automática.',
          'Detección y supresión de incendios.',
          'Control de acceso biométrico y CCTV.'
        ]
      },
      {
        label: 'Certificaciones',
        items: [
          'Por confirmar.',
          'Referencia: ANSI/TIA-942 (Rated-1 a Rated-4).'
        ]
      }
    ]
  },
  idf: {
    label: 'Cuarto de comunicaciones (IDF)',
    rows: [
      {
        label: 'Ubicación',
        status: 'A confirmar',
        items: [
          'Uno por piso en oficinas centrales y uno por sucursal, sala de venta o taller.'
        ]
      },
      {
        label: 'Inventario de equipos',
        status: 'Esperado (a confirmar)',
        items: [
          'Switches de acceso PoE.',
          'Patch panels Cat6.',
          'Puntos de acceso Wi-Fi.',
          'UPS pequeñas.'
        ]
      },
      {
        label: 'Fortalezas',
        status: 'A validar',
        items: ['Equipos administrables que permiten segmentar la red.']
      },
      {
        label: 'Debilidades',
        status: 'A verificar',
        items: [
          'IDF de talleres expuestos a polvo, calor y humedad.',
          'Gabinetes sin climatización ni llave.'
        ]
      },
      {
        label: 'Posibles fallos',
        items: [
          'Daño físico a equipos en talleres.',
          'Acceso no autorizado a gabinetes.'
        ]
      },
      {
        label: 'Áreas de mejora',
        items: [
          'Gabinetes cerrados y ventilados.',
          'UPS con gestión remota.',
          'Etiquetado y diagramas actualizados.'
        ]
      },
      {
        label: 'Certificaciones',
        items: [
          'Por confirmar.',
          'Referencia: pruebas de campo del cableado según ANSI/TIA-568.'
        ]
      }
    ]
  },
  network: {
    label: 'Estructura de redes',
    rows: [
      {
        label: 'Ubicación',
        status: 'A confirmar',
        items: [
          'Red WAN que une oficinas centrales con los 20 puntos de distribución.'
        ]
      },
      {
        label: 'Inventario de equipos',
        status: 'Esperado (a confirmar)',
        items: [
          'Enlaces dedicados o de fibra en la sede.',
          'VPN sitio a sitio con sucursales.',
          'Topología en estrella (LAN) y hub-and-spoke (WAN).',
          'Routers, firewalls y switches.'
        ]
      },
      {
        label: 'Fortalezas',
        status: 'A validar',
        items: [
          'Conexión de sucursales al sistema central para facturar en línea.'
        ]
      },
      {
        label: 'Debilidades',
        status: 'A verificar',
        items: [
          'Un solo enlace de Internet por sucursal.',
          'Red sin VLANs: clientes, cámaras y datos juntos.'
        ]
      },
      {
        label: 'Posibles fallos',
        items: [
          'Caída de Internet: la sucursal no factura ni abre órdenes de taller.',
          'Saturación del Wi-Fi de clientes.'
        ]
      },
      {
        label: 'Áreas de mejora',
        items: [
          'Segmentación por VLANs.',
          'Enlace secundario 4G/LTE o SD-WAN.',
          'Monitoreo SNMP centralizado.'
        ]
      },
      {
        label: 'Certificaciones',
        items: [
          'No aplica certificación a la organización.',
          'Referencia: certificación de enlaces de cableado (ANSI/TIA-568).'
        ]
      }
    ]
  },
  servers: {
    label: 'Servidores',
    rows: [
      {
        label: 'Ubicación',
        status: 'A confirmar',
        items: [
          'Datacenter de oficinas centrales y, posiblemente, servicios en la nube.'
        ]
      },
      {
        label: 'Tipos y funciones',
        status: 'Esperado (a confirmar)',
        items: [
          'ERP/DMS: ventas de vehículos, repuestos y órdenes de taller.',
          'Base de datos.',
          'Active Directory, DNS y DHCP.',
          'Archivos y correo/colaboración.',
          'Respaldo en NAS y copia externa (ver Sistema de respaldo).'
        ]
      },
      {
        label: 'Fortalezas',
        status: 'A validar',
        items: ['Virtualización que facilita recuperar servicios.']
      },
      {
        label: 'Debilidades',
        status: 'A verificar',
        items: [
          'ERP sin alta disponibilidad.',
          'Sistemas separados por unidad de negocio (islas de información).'
        ]
      },
      {
        label: 'Posibles fallos',
        items: [
          'Ransomware que cifre servidores y respaldos a la vez.',
          'Falla del servidor del ERP sin equipo de reemplazo.'
        ]
      },
      {
        label: 'Áreas de mejora',
        items: [
          'Respaldo 3-2-1 con copia inmutable o fuera de línea.',
          'Alta disponibilidad para ERP/DMS.',
          'Plan de recuperación con RTO y RPO definidos.'
        ]
      },
      {
        label: 'Certificaciones',
        items: [
          'Por confirmar.',
          'Referencia: ISO/IEC 27001:2022 (seguridad de la información).'
        ]
      }
    ]
  },
  services: {
    label: 'Servicios de TI',
    rows: [
      {
        label: 'Ubicación',
        status: 'A confirmar',
        items: [
          'Mesa de ayuda central en oficinas de Managua, con atención remota a sucursales.'
        ]
      },
      {
        label: 'Inventario',
        items: [
          'Ver detalle de servicios de TI: mapa, catálogo y portafolio de servicios.',
          'Mesa de ayuda, SLA y KPI.'
        ]
      },
      {
        label: 'Fortalezas',
        status: 'Comprobado',
        items: [
          'Canales digitales en operación: sitios de marca y tienda de repuestos en línea.'
        ]
      },
      {
        label: 'Debilidades',
        status: 'A verificar',
        items: [
          'Sin SLA formales ni métricas publicadas.',
          'Atención sin flujo documentado.'
        ]
      },
      {
        label: 'Posibles fallos',
        items: [
          'Incidentes críticos sin prioridad definida.',
          'Tiempos de respuesta variables entre sucursales.'
        ]
      },
      {
        label: 'Áreas de mejora',
        items: [
          'SLA propuestos (respuesta / solución): crítico 15 min / 2 h; alto 1 h / 8 h; medio 4 h / 2 días.',
          'Flujo: registro → clasificación → atención → escalamiento → cierre → encuesta.'
        ]
      },
      {
        label: 'Certificaciones',
        items: [
          'Por confirmar.',
          'Referencias: ITIL 4 (certificación personal) e ISO/IEC 20000-1 (certificación de la organización).'
        ]
      }
    ]
  }
};

// Detalle de servicios de TI (Avance IV): propuesta del equipo sobre el escenario de referencia.
export const servicesNote =
  'Propuesta del equipo, construida sobre el escenario de referencia anterior. Solo los canales digitales marcados como comprobados tienen evidencia pública; el resto debe validarse con el área de TI.';

export const serviceMap = {
  intro:
    'Relaciona cada proceso del negocio con el servicio de TI que lo soporta y los componentes de los que depende. Si falla un componente, el mapa muestra qué procesos se detienen.',
  headers: [
    'Proceso del negocio',
    'Servicio de TI',
    'Componentes de los que depende',
    'Evidencia'
  ],
  rows: [
    [
      'Venta de vehículos',
      'ERP/DMS, CRM y facturación',
      'Servidores de aplicación y base de datos, red WAN/VPN, Internet de la sucursal',
      'A confirmar'
    ],
    [
      'Taller y citas de servicio',
      'Órdenes de taller (DMS) y citas en línea',
      'Base de datos, portal web, Internet',
      'A confirmar'
    ],
    [
      'Venta de repuestos',
      'Inventario (ERP) y tienda de repuestos en línea',
      'Base de datos, plataforma web, pasarela de pago',
      'Tienda comprobada (repuestos.casapellas.com)'
    ],
    [
      'Atención al cliente digital',
      'Sitios web de marca y redes sociales',
      'Hosting o nube, dominio, Internet',
      'Comprobado (toyota.com.ni, toyota.casapellas.com)'
    ],
    [
      'Operación interna',
      'Correo, colaboración y cuentas de usuario',
      'Active Directory, DNS/DHCP, servicios en la nube',
      'A confirmar'
    ],
    [
      'Continuidad de todos los procesos',
      'Respaldo y recuperación',
      'NAS, copia fuera de sitio, enlaces de red',
      'A confirmar'
    ]
  ]
};

export const serviceCatalog = {
  intro:
    'Servicios de TI activos que los usuarios pueden solicitar, con su alcance y responsable propuesto.',
  headers: [
    'Servicio',
    'Descripción',
    'Usuarios',
    'Horario',
    'Responsable propuesto'
  ],
  rows: [
    [
      'Soporte a usuarios',
      'Atención de incidentes y solicitudes por la mesa de ayuda',
      'Todo el personal',
      'Lun–sáb 7:00–18:00; guardia 24/7 para críticos',
      'Coordinador de mesa de ayuda'
    ],
    [
      'ERP/DMS y facturación',
      'Ventas, inventario, órdenes de taller y facturación',
      'Ventas, taller, repuestos, finanzas',
      '24/7',
      'Jefe de aplicaciones'
    ],
    [
      'Correo y colaboración',
      'Correo, calendario y archivos compartidos',
      'Todo el personal',
      '24/7',
      'Administrador de sistemas'
    ],
    [
      'Conectividad de sucursales',
      'Enlaces, VPN y Wi-Fi de los 20 puntos de distribución',
      'Todas las sedes',
      '24/7',
      'Jefe de infraestructura y redes'
    ],
    [
      'Canales digitales',
      'Sitios web, tienda de repuestos, cotizaciones y citas',
      'Clientes y mercadeo',
      '24/7',
      'Jefe de canales digitales'
    ],
    [
      'Seguridad y respaldos',
      'Antimalware, accesos, respaldo y recuperación',
      'Toda la organización',
      '24/7',
      'Oficial de seguridad de la información'
    ]
  ]
};

export const servicePortfolio = {
  intro:
    'Incluye el catálogo activo, los servicios en desarrollo y los que se retirarán. A diferencia del catálogo, sirve para decidir inversiones.',
  headers: [
    'Estado',
    'Servicio',
    'Justificación de negocio',
    'Objetivo relacionado'
  ],
  rows: [
    [
      'En desarrollo',
      'Plataforma omnicanal de cotización, financiamiento y citas',
      'Atender clientes en línea y aumentar la posventa',
      'OTI-1, OBN-3'
    ],
    [
      'En desarrollo',
      'CRM único de ventas y posventa',
      'Una sola vista del cliente entre unidades de negocio',
      'OTI-2, OBN-1, OBN-3'
    ],
    [
      'En desarrollo',
      'Monitoreo y respuesta de ciberseguridad',
      'Reducir riesgo de ransomware y proteger la disponibilidad',
      'OTI-3'
    ],
    [
      'En evaluación',
      'Agentes de IA para atención al cliente',
      'Atención 24/7 en canales digitales',
      'OTI-1'
    ],
    [
      'Activo',
      'Los seis servicios del catálogo',
      'Operación diaria de la empresa',
      'Todos'
    ],
    [
      'A retirar (a confirmar)',
      'Registros manuales o en hojas de cálculo aisladas por unidad',
      'Se reemplazan por el CRM único y el portal de citas',
      'OTI-1, OTI-2'
    ]
  ]
};

export const helpDesk = [
  {
    title: 'Niveles de atención',
    points: [
      'Nivel 1 (mesa central): registra, clasifica y resuelve incidentes simples de forma remota.',
      'Nivel 2 (soporte técnico): atiende en sitio o en sucursal problemas de equipos, red y aplicaciones.',
      'Nivel 3 (especialistas y proveedores): ERP/DMS, red WAN y seguridad.'
    ]
  },
  {
    title: 'Canales y horario',
    points: [
      'Canales: portal de autoservicio, correo, extensión telefónica y mensajería interna.',
      'Horario: lunes a sábado de 7:00 a 18:00, con guardia 24/7 para incidentes críticos.'
    ]
  },
  {
    title: 'Flujo de atención',
    text: 'Registro → clasificación y prioridad → atención en N1 → escalamiento a N2 o N3 → solución → cierre con el usuario → encuesta de satisfacción.'
  }
];

export const serviceKpis = {
  intro:
    'Los tiempos de solución de incidentes críticos (2 h) son compatibles con la meta de disponibilidad de OTI-3 (99.5 % mensual, que permite 3.6 h de caída en un mes de 30 días). Las metas son propuestas; las líneas base se medirán durante el primer trimestre de 2027.',
  headers: [
    'KPI',
    'Fórmula',
    'Meta propuesta',
    'Frecuencia',
    'Responsable / fuente'
  ],
  rows: [
    [
      'Cumplimiento de SLA',
      'Tickets resueltos dentro del SLA ÷ total de tickets × 100',
      '≥ 95 %',
      'Mensual',
      'Coordinador de mesa / herramienta de tickets'
    ],
    [
      'Tiempo medio de resolución (MTTR)',
      'Suma de tiempos de resolución ÷ número de incidentes',
      'Crítico ≤ 2 h; alto ≤ 8 h',
      'Mensual',
      'Coordinador de mesa / herramienta de tickets'
    ],
    [
      'Solución en primer contacto',
      'Tickets resueltos en N1 ÷ total de tickets × 100',
      '≥ 70 %',
      'Mensual',
      'Coordinador de mesa / herramienta de tickets'
    ],
    [
      'Satisfacción del usuario',
      'Encuestas con 4 o 5 (escala 1–5) ÷ total de encuestas × 100',
      '≥ 85 %',
      'Trimestral',
      'Jefe de TI / encuesta de cierre'
    ]
  ]
};

export const backupSystem = {
  title: 'Sistema de respaldo de información (propuesto)',
  points: [
    'Frecuencia: respaldo incremental diario y completo semanal; ERP/DMS con respaldo de registros de transacciones cada hora (RPO ≤ 1 h).',
    'Retención: 30 días para copias diarias y 12 meses para copias mensuales.',
    'Ubicación (regla 3-2-1): tres copias, en dos medios distintos, una fuera de sitio e inmutable para resistir ransomware.',
    'Pruebas: restauración de prueba trimestral de ERP/DMS y archivos, con registro del tiempo obtenido frente al RTO.'
  ]
};
