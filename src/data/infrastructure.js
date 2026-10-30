export const techMaturity = {
  stage: 3,
  stageLabel: 'TI como soporte estratégico',
  text: 'Según la evolución del paradigma organizacional (Sesión 1), Casa Pellas estaría en la etapa 3, con avances hacia la etapa 4: usa canales digitales para competir (ferias digitales y marketing digital 360).',
  scale: {
    from: 'Etapa 3',
    to: 'Etapa 4',
    note: 'Nivel estimado. La información tecnológica interna de Casa Pellas no es pública y debe validarse con el área de TI.'
  }
};

export const techSummary = [
  {
    title: 'Sistemas esperados',
    text: 'ERP o DMS para ventas de vehículos, inventario de repuestos y órdenes de taller.',
    points: [
      'CRM para clientes.',
      'Sitio web y redes sociales.',
      'Sistemas de facturación integrados entre sucursales.'
    ]
  },
  {
    title: 'Canales digitales',
    text: 'Primera automotriz de Nicaragua en realizar ferias digitales.',
    points: [
      'Mención como Mejor Estrategia de Marketing Digital 360 (INTERLAT, 2016).',
      'Presencia en redes sociales.'
    ]
  },
  {
    title: 'Retos esperados',
    text: 'Integrar los datos de las distintas unidades de negocio (automotriz, maquinaria y consumo).',
    points: [
      'Evitar islas de información.',
      'Medir el valor de TI con indicadores (COBIT 2019, NIST CSF 2.0).'
    ]
  }
];

// Análisis interno: escenario de referencia; cada punto debe confirmarse con el área de TI.
export const internalAnalysis = {
  mdf: {
    label: 'Datacenter (MDF)',
    rows: [
      {
        label: 'Ubicación',
        items: [
          'Por confirmar. Se espera en las oficinas centrales de Managua, en una sala dedicada.'
        ]
      },
      {
        label: 'Inventario de equipos',
        status: 'A confirmar',
        items: [
          'Racks de piso 42U.',
          'Servidores, probablemente virtualizados, para ERP/DMS, base de datos, Active Directory, DNS y DHCP.',
          'Almacenamiento (SAN/NAS) para datos y respaldos.',
          'Firewall perimetral con VPN hacia sucursales.',
          'Switches core capa 3.',
          'Enlaces de Internet redundantes.',
          'UPS, aire acondicionado y planta eléctrica.'
        ]
      },
      {
        label: 'Fortalezas',
        status: 'A validar',
        items: [
          'Servicios centralizados para todas las sucursales.',
          'Probable redundancia de enlaces y energía por el tamaño de la empresa.',
          'Personal de TI propio.',
          'Respaldo de un grupo empresarial con experiencia tecnológica.'
        ]
      },
      {
        label: 'Debilidades',
        status: 'A verificar',
        items: [
          'Climatización sin redundancia N+1 ni monitoreo ambiental.',
          'Respaldos sin copia fuera de sitio.',
          'Sistemas heredados por unidad de negocio (islas de información).',
          'Documentación y etiquetado incompletos.'
        ]
      },
      {
        label: 'Posibles fallos',
        status: 'A evaluar',
        items: [
          'Falla de climatización y sobrecalentamiento.',
          'Corte eléctrico prolongado que detenga facturación y talleres.',
          'Ransomware que afecte servidores y respaldos.',
          'Sismo o incendio en Managua sin sitio alterno.'
        ]
      },
      {
        label: 'Certificaciones',
        items: [
          'Por confirmar si cuenta con alguna certificación.',
          'Referencias aplicables: ANSI/TIA-942 (infraestructura de datacenter) e ISO/IEC 27001 (seguridad de la información).'
        ]
      }
    ]
  },
  idf: {
    label: 'Cuartos de comunicaciones (IDF)',
    rows: [
      {
        label: 'Ubicación',
        items: [
          'Por confirmar. Se esperan IDF en cada piso de las oficinas centrales y uno por sucursal, sala de venta o taller.'
        ]
      },
      {
        label: 'Inventario de equipos',
        status: 'A confirmar',
        items: [
          'Switches de acceso con PoE.',
          'Patch panels Cat6.',
          'Puntos de acceso Wi‑Fi (salas de venta y talleres).',
          'Router o firewall con VPN en sucursales.',
          'UPS pequeñas.'
        ]
      },
      {
        label: 'Fortalezas',
        status: 'A validar',
        items: [
          'Conectividad de sucursales con el sistema central.',
          'Equipos administrables que permiten segmentar la red.'
        ]
      },
      {
        label: 'Debilidades',
        status: 'A verificar',
        items: [
          'IDF de talleres expuestos a polvo, calor y humedad.',
          'Gabinetes sin climatización ni llave.',
          'Un solo enlace de Internet en sucursales.',
          'Red sin segmentar por VLANs (clientes, cámaras y datos).'
        ]
      },
      {
        label: 'Posibles fallos',
        status: 'A evaluar',
        items: [
          'Caída de Internet en una sucursal que impida facturar o abrir órdenes de taller.',
          'Daño físico a equipos en talleres.',
          'Acceso no autorizado a gabinetes.',
          'Saturación del Wi‑Fi de clientes.'
        ]
      },
      {
        label: 'Certificaciones',
        items: [
          'Por confirmar.',
          'Referencia: certificación del cableado bajo ANSI/TIA-568.'
        ]
      }
    ]
  }
};
