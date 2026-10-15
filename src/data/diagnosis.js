export const diagnosisCards = {
  summary: [
    {
      title: 'Síntesis del diagnóstico',
      text: 'DICOPSA tiene una posición comercial sólida y una infraestructura de red funcional, pero la tecnología aún se gestiona como centro de costos y no como parte de la estrategia.'
    },
    {
      title: 'Fortalezas principales',
      text: '22 años de trayectoria, cobertura regional, flota propia, cartera de clientes y marcas diversificada, ERP implementado y fuerza de ventas con app de preventa.'
    },
    {
      title: 'Debilidades prioritarias',
      text: 'Sin redundancia de climatización, UPS con poca autonomía, ERP en un único servidor, respaldos solo dentro del edificio y ausencia de un plan estratégico de TI.'
    },
    {
      title: 'Oportunidades estratégicas',
      text: 'Canal B2B digital, uso de datos históricos del ERP, expansión territorial, pagos digitales, nube híbrida y analítica para decidir con base en información.'
    }
  ],
  risks: [
    {
      title: 'Riesgo de continuidad',
      text: 'El principal punto crítico está en la continuidad del negocio por la falta de redundancia en climatización, energía, servidores y copias fuera de sitio.'
    },
    {
      title: 'Riesgo de ciberseguridad',
      text: 'El aumento de ciberataques como ransomware podría detener la facturación y el despacho.'
    },
    {
      title: 'Riesgo físico',
      text: 'Sismos, huracanes y lluvias intensas pueden afectar la infraestructura y la disponibilidad de servicios.'
    }
  ],
  branchRisks: [
    'Caída del switch de bodega: se detienen el despacho y los escáneres.',
    'Caída de Internet en una sucursal: no puede facturar.',
    'Daño físico por golpes o polvo en el IDF-2.',
    'Acceso no autorizado a los gabinetes.',
    'Saturación del Wi‑Fi en horas pico.'
  ],
  continuityImpact: [
    'Sobrecalentamiento y apagado de servidores.',
    'Corte eléctrico mayor a 20 min: se detienen ERP, facturación y despacho.',
    'Falla del servidor del ERP sin equipo de reemplazo.',
    'Ransomware que cifre servidores y NAS al estar en la misma red.',
    'Sismo o incendio con pérdida total de datos por no tener copia fuera de sitio.'
  ]
};
