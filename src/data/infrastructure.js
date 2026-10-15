export const infraSummaryCards = [
  {
    title: 'Nivel de madurez tecnológica',
    text: 'DICOPSA está en la etapa 2 “SI como automatización”. En los siete peldaños se ubica entre “Infraestructura” y “Automatizador”.'
  },
  {
    title: 'Sistemas utilizados',
    text: 'ERP on-premise, app de preventa, correo y ofimática en Microsoft 365. No hay CRM ni inteligencia de negocios; los reportes se hacen a mano en Excel.'
  },
  {
    title: 'Organización de TI',
    text: '4 personas: jefe de TI, 2 técnicos de soporte y 1 analista del ERP. Dependen de la Gerencia Administrativa-Financiera.'
  },
  {
    title: 'Gobierno actual',
    text: 'No existe PETI/PESI, marco COBIT 2019, ISO/IEC 38500 ni gestión formal de riesgos basada en NIST CSF 2.0.'
  }
];

export const mdfInventory = [
  {
    label: 'Ubicación',
    value:
      'Edificio administrativo de oficinas centrales (Carretera Norte, km 6½), primer piso. Sala cerrada de 3 × 4 m contigua a Contabilidad, sin piso técnico elevado.'
  },
  {
    label: 'Inventario de equipos',
    value: [
      '2 racks de piso de 42U.',
      '3 servidores físicos: ERP con base de datos SQL; controlador de dominio (Active Directory, DNS y DHCP); servidor de archivos.',
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
    value:
      'Sala dedicada y cerrada, doble enlace de Internet con proveedores distintos, firewall con VPN que conecta a las sucursales, UPS y respaldo diario al NAS, cableado estructurado Cat6 en topología estrella y servicios de red centralizados (AD, DNS, DHCP).'
  },
  {
    label: 'Debilidades',
    value:
      'Un solo aire acondicionado sin redundancia ni sensores, UPS con poca autonomía y sin planta eléctrica propia, ERP en un único servidor sin alta disponibilidad, respaldos dentro del mismo edificio, sin detección ni supresión de incendios y sin control de acceso electrónico ni bitácora.'
  },
  {
    label: 'Posibles fallos',
    value:
      'Falla del aire acondicionado, corte eléctrico mayor a 20 min, falla del servidor del ERP, ransomware que cifre servidores y NAS, y sismo o incendio con pérdida total de datos por no tener copia fuera de sitio.'
  },
  {
    label: 'Certificaciones',
    value:
      'No cuenta con certificación. Metas a mediano plazo: diseño bajo ANSI/TIA-942 (Rated-1 → Rated-2) y un sistema de gestión de seguridad de la información basado en ISO/IEC 27001.'
  }
];

export const idfCards = [
  {
    title: 'IDF-1',
    subtitle: 'Segundo piso del edificio administrativo',
    text: 'Gabinete de pared 12U, switch 24 puertos PoE, patch panel Cat6, UPS 1.5 kVA y 4 puntos de acceso Wi‑Fi.'
  },
  {
    title: 'IDF-2',
    subtitle: 'Centro de distribución, área de despacho',
    text: 'Gabinete 18U, switch 24 puertos PoE, convertidor de medios con enlace de fibra óptica al MDF, 3 puntos de acceso para escáneres de código de barras y UPS 1 kVA.'
  },
  {
    title: 'IDF-3, IDF-4 e IDF-5',
    subtitle: 'Sucursales de León, Masaya y Chinandega',
    text: 'Gabinete de pared 9U, router-firewall con VPN, switch 16 puertos, 1 punto de acceso, UPS 1 kVA y un enlace de Internet de 50 Mbps.'
  },
  {
    title: 'Fortalezas de los IDF',
    text: 'Enlace de fibra óptica entre el MDF y la bodega, switches administrables con PoE, la VPN permite facturar en el ERP en tiempo real y equipos relativamente nuevos (2021 en adelante).'
  },
  {
    title: 'Debilidades de los IDF',
    text: 'IDF-2 expuesto a polvo, calor y tránsito de montacargas, gabinetes de sucursales sin llave, sin climatización en ningún IDF, UPS pequeñas con poca autonomía, sucursales con un solo enlace de Internet y red plana sin VLANs.'
  },
  {
    title: 'Certificación de cableado',
    text: 'El cableado Cat6 se instaló sin pruebas de certificación bajo ANSI/TIA-568; se propone certificar los enlaces durante el reordenamiento.'
  }
];

export const infraStrengths = [
  'Enlace de fibra óptica entre el MDF y la bodega.',
  'Switches administrables con PoE.',
  'La VPN permite facturar en el ERP en tiempo real.',
  'Equipos relativamente nuevos (2021 en adelante).'
];

export const infraWeaknesses = [
  'Sin climatización en ningún IDF.',
  'UPS pequeñas con poca autonomía.',
  'Sucursales con un solo enlace de Internet.',
  'Red plana sin VLANs: datos, cámaras y Wi‑Fi de invitados comparten la misma red.'
];

export const monitoringProposals = [
  'UPS con gestión remota.',
  'Monitoreo de equipos por SNMP.',
  'Etiquetado, diagramas e inventario documentado.',
  'Monitoreo continuo alineado con NIST CSF 2.0.'
];

export const securityProposals = [
  'Redundancia de climatización (N+1) con sensores ambientales y alertas.',
  'Sistema de detección y supresión de incendios con agente limpio.',
  'Control de acceso biométrico y CCTV.',
  'Virtualización en clúster con alta disponibilidad para el ERP.'
];
