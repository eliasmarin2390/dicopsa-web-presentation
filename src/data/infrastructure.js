export const techMaturity = {
  stage: 2,
  stageLabel: 'SI como automatización',
  text: 'El ERP automatiza ventas, inventario, facturación y contabilidad, pero la TI todavía no es soporte estratégico.',
  scale: {
    from: 'Infraestructura',
    to: 'Automatizador',
    note: 'En los siete peldaños de la Sesión 2, DICOPSA está entre ambos.'
  }
};

export const techSummary = [
  {
    title: 'Sistemas',
    text: 'ERP en servidor local (on-premise), app de preventa, correo y ofimática en Microsoft 365.',
    points: [
      'No hay CRM ni inteligencia de negocios.',
      'Reportes gerenciales armados a mano en Excel.',
      'RR. HH. y control de flota en hojas de cálculo: “islas de información”.'
    ]
  },
  {
    title: 'Infraestructura',
    text: 'Un datacenter (MDF) en oficinas centrales y cinco cuartos de comunicaciones (IDF).',
    points: [
      'Red LAN en topología estrella con cableado Cat6.',
      'Fibra óptica hacia la bodega.',
      'VPN sitio a sitio con las sucursales.'
    ]
  },
  {
    title: 'Organización de TI',
    text: '4 personas: jefe de TI, 2 técnicos de soporte y 1 analista del ERP.',
    points: [
      'Dependen de la Gerencia Administrativa-Financiera.',
      'TI se percibe como centro de costos.'
    ]
  },
  {
    title: 'Gobierno',
    text: 'Las decisiones tecnológicas son reactivas.',
    points: [
      'No existe Plan Estratégico de TI (PETI/PESI).',
      'Sin marco de gobierno (COBIT 2019, ISO/IEC 38500).',
      'Sin gestión formal de riesgos (NIST CSF 2.0).'
    ]
  }
];

// Análisis interno: cada pestaña agrupa lo que pide el documento para MDF e IDF.
export const internalAnalysis = {
  mdf: {
    label: 'Datacenter (MDF)',
    rows: [
      {
        label: 'Ubicación',
        items: [
          'Edificio administrativo de oficinas centrales (Carretera Norte, km 6½), primer piso.',
          'Sala cerrada de 3 × 4 m contigua a Contabilidad, sin piso técnico elevado.'
        ]
      },
      {
        label: 'Inventario de equipos',
        items: [
          '2 racks de piso de 42U.',
          '3 servidores físicos: ERP con base de datos SQL; controlador de dominio (AD, DNS y DHCP); servidor de archivos.',
          '1 NAS de 8 TB para respaldos.',
          '1 firewall de nueva generación (NAT y VPN sitio a sitio).',
          '1 switch core capa 3 de 48 puertos.',
          '2 enlaces de Internet: fibra 200 Mbps (principal) y 100 Mbps (respaldo).',
          'Patch panels Cat6.',
          '1 UPS de 6 kVA (≈20 min de autonomía).',
          '1 aire acondicionado tipo mini-split.',
          '1 cámara de vigilancia; acceso con llave.'
        ]
      },
      {
        label: 'Fortalezas',
        items: [
          'Sala dedicada y cerrada.',
          'Doble enlace de Internet con proveedores distintos.',
          'Firewall con VPN que conecta a las sucursales.',
          'UPS y respaldo diario al NAS.',
          'Cableado estructurado Cat6 en topología estrella.',
          'Servicios de red centralizados (AD, DNS, DHCP).'
        ]
      },
      {
        label: 'Debilidades',
        items: [
          'Un solo aire acondicionado, sin redundancia ni sensores de temperatura y humedad.',
          'UPS con poca autonomía y sin planta eléctrica propia.',
          'El ERP corre en un único servidor, sin alta disponibilidad.',
          'Respaldos solo dentro del mismo edificio.',
          'Sin detección ni supresión de incendios.',
          'Cableado etiquetado solo en parte y sin diagramas actualizados.',
          'Sin control de acceso electrónico ni bitácora de ingreso.'
        ]
      },
      {
        label: 'Posibles fallos',
        items: [
          'Falla del aire acondicionado: sobrecalentamiento y apagado de servidores.',
          'Corte eléctrico mayor a 20 min: se detienen ERP, facturación y despacho.',
          'Falla del servidor del ERP sin equipo de reemplazo.',
          'Ransomware que cifre servidores y NAS al estar en la misma red.',
          'Sismo o incendio con pérdida total de datos por no tener copia fuera de sitio.'
        ]
      },
      {
        label: 'Áreas de mejora',
        items: [
          'Climatización redundante (N+1) con sensores ambientales y alertas.',
          'UPS de mayor autonomía y planta eléctrica con transferencia automática.',
          'Virtualización en clúster con alta disponibilidad para el ERP.',
          'Respaldo 3-2-1 con copia en la nube.',
          'Detección y supresión de incendios con agente limpio.',
          'Control de acceso biométrico y CCTV.',
          'Etiquetado, diagramas e inventario documentado.',
          'Monitoreo continuo alineado con NIST CSF 2.0.'
        ]
      },
      {
        label: 'Certificaciones',
        items: [
          'No cuenta con certificación.',
          'Meta a mediano plazo: diseño bajo ANSI/TIA-942 (Rated-1 → Rated-2).',
          'Meta: sistema de gestión de seguridad de la información basado en ISO/IEC 27001.'
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
          'IDF-1: segundo piso del edificio administrativo (gabinete de pared 12U).',
          'IDF-2: centro de distribución, área de despacho (gabinete 18U).',
          'IDF-3, 4 y 5: oficinas de las sucursales de León, Masaya y Chinandega (gabinete de pared 9U).'
        ]
      },
      {
        label: 'Inventario de equipos',
        items: [
          'IDF-1: switch 24 puertos PoE, patch panel Cat6, UPS 1.5 kVA, 4 puntos de acceso Wi‑Fi.',
          'IDF-2: switch 24 puertos PoE, convertidor de medios con fibra al MDF, 3 puntos de acceso para escáneres, UPS 1 kVA.',
          'Sucursales: router-firewall con VPN, switch 16 puertos, 1 punto de acceso, UPS 1 kVA y enlace de Internet de 50 Mbps.'
        ]
      },
      {
        label: 'Fortalezas',
        items: [
          'Enlace de fibra óptica entre el MDF y la bodega.',
          'Switches administrables con PoE.',
          'La VPN permite a las sucursales facturar en el ERP en tiempo real.',
          'Equipos relativamente nuevos (2021 en adelante).'
        ]
      },
      {
        label: 'Debilidades',
        items: [
          'IDF-2 expuesto a polvo, calor y tránsito de montacargas.',
          'Gabinetes de sucursales sin llave.',
          'Sin climatización en ningún IDF.',
          'UPS pequeñas con poca autonomía.',
          'Sucursales con un solo enlace de Internet.',
          'Red plana sin VLANs: datos, cámaras y Wi‑Fi de invitados comparten la misma red.'
        ]
      },
      {
        label: 'Posibles fallos',
        items: [
          'Caída del switch de bodega: se detienen el despacho y los escáneres.',
          'Caída de Internet en una sucursal: no puede facturar.',
          'Daño físico por golpes o polvo en el IDF-2.',
          'Acceso no autorizado a los gabinetes.',
          'Saturación del Wi‑Fi en horas pico.'
        ]
      },
      {
        label: 'Áreas de mejora',
        items: [
          'Reubicar el IDF-2 en un gabinete cerrado y ventilado fuera del área de carga.',
          'Gabinetes con llave en todas las sedes.',
          'Segmentar la red por VLANs (datos, voz, cámaras, invitados).',
          'Enlace secundario 4G/LTE o SD-WAN en sucursales.',
          'UPS con gestión remota.',
          'Monitoreo de equipos por SNMP.'
        ]
      },
      {
        label: 'Certificaciones',
        items: [
          'No cuentan con certificación.',
          'El cableado Cat6 se instaló sin pruebas de certificación bajo ANSI/TIA-568; se propone certificar los enlaces durante el reordenamiento.'
        ]
      }
    ]
  }
};
