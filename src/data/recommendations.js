// Ruta de mejora basada en las áreas de mejora del análisis interno (MDF e IDF).
export const improvementRoadmap = [
  {
    phase: '1',
    title: 'Validar con el área de TI',
    text: 'Confirmar ubicación, inventario, redundancia y certificaciones mediante visita o entrevista.'
  },
  {
    phase: '2',
    title: 'Climatización N+1',
    text: 'Climatización redundante con sensores y alertas para evitar sobrecalentamiento en el datacenter.'
  },
  {
    phase: '3',
    title: 'Respaldo 3-2-1',
    text: 'Mantener una copia en la nube o en un sitio alterno, fuera de las oficinas centrales.'
  },
  {
    phase: '4',
    title: 'Alta disponibilidad para ERP/DMS',
    text: 'Asegurar que ventas, repuestos y órdenes de taller sigan operando ante la falla de un servidor.'
  },
  {
    phase: '5',
    title: 'Protección física',
    text: 'Detección y supresión de incendios, control de acceso biométrico y CCTV; gabinetes cerrados y ventilados en IDF.'
  },
  {
    phase: '6',
    title: 'Red de sucursales',
    text: 'Segmentación por VLANs, enlace secundario 4G/LTE o SD-WAN y UPS con gestión remota.'
  },
  {
    phase: '7',
    title: 'Monitoreo y continuidad',
    text: 'Monitoreo SNMP centralizado alineado con NIST CSF 2.0 y un plan de continuidad del negocio.'
  }
];
