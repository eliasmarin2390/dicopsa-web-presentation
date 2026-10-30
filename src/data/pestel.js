export const pestelRows = [
  {
    label: 'Políticos',
    value: {
      opportunities: [
        'Tratados comerciales vigentes (CAFTA-DR, TLC con México) facilitan importar.',
        'La integración centroamericana (SICA) agiliza el comercio regional.',
        'Políticas que promueven la digitalización de trámites.'
      ],
      threats: [
        'Incertidumbre en las relaciones comerciales con EE. UU. y posibles aranceles o restricciones.',
        'Cambios regulatorios poco previsibles.',
        'Menor acceso a financiamiento internacional.'
      ]
    }
  },
  {
    label: 'Económicos',
    value: {
      opportunities: [
        'Estabilidad cambiaria del córdoba frente al dólar, útil para planificar importaciones.',
        'Las remesas sostienen el consumo de los hogares.',
        'Demanda de vehículos de trabajo (pick-ups y camiones) en el sector productivo.'
      ],
      threats: [
        'Vehículos importados y pagados en dólares; alzas de costos logísticos.',
        'Volatilidad del precio del combustible.',
        'Crédito más caro reduce la compra de vehículos.'
      ]
    }
  },
  {
    label: 'Sociales',
    value: {
      opportunities: [
        'Población joven con alto uso de smartphones y redes sociales.',
        'Clientes que investigan y cotizan en línea antes de comprar.',
        'Mayor interés en vehículos eficientes en consumo.'
      ],
      threats: [
        'Migración de talento técnico (mecánicos y TI).',
        'Preferencia por vehículos usados por su menor precio.',
        'Resistencia al cambio en procesos tradicionales.'
      ]
    }
  },
  {
    label: 'Tecnológicos',
    value: {
      opportunities: [
        'Vehículos híbridos y eléctricos de las marcas representadas.',
        'Nube, CRM y analítica para fidelizar clientes.',
        'Telemetría e IoT para flotas y mantenimiento predictivo.'
      ],
      threats: [
        'Entrada de marcas chinas de bajo precio y alta tecnología.',
        'Aumento de ransomware y phishing en la región.',
        'Obsolescencia rápida de sistemas y equipos.'
      ]
    }
  },
  {
    label: 'Ecológicos',
    value: {
      opportunities: [
        'Demanda de vehículos de menores emisiones.',
        'Energía solar en talleres y sucursales.',
        'Green IT: virtualización y equipos eficientes.'
      ],
      threats: [
        'Alta actividad sísmica en Managua.',
        'Huracanes y lluvias intensas en temporada.',
        'Normas ambientales más estrictas sobre emisiones.'
      ]
    }
  },
  {
    label: 'Legales',
    value: {
      opportunities: [
        'Ley 729 de Firma Electrónica respalda contratos y facturas digitales.',
        'Ley 787 de Protección de Datos Personales orienta el manejo de datos de clientes.',
        'Digitalización progresiva de trámites aduaneros y tributarios.'
      ],
      threats: [
        'La Ley 1042 de Ciberdelitos aumenta la responsabilidad sobre sistemas y datos.',
        'Sanciones por incumplir la protección de datos.',
        'Cambios en aranceles e impuestos a la importación de vehículos.'
      ]
    }
  }
];

// FODA: fortalezas y oportunidades vienen de company.js; debilidades (a verificar) y amenazas salen del documento.
export const swotWeaknesses = [
  'Información tecnológica interna no pública: el diagnóstico debe validarse con TI.',
  'Sistemas heredados por unidad de negocio (islas de información).',
  'Posible climatización sin redundancia N+1 ni monitoreo ambiental.',
  'Posibles respaldos sin copia fuera de sitio.',
  'Sucursales con un solo enlace de Internet y red sin segmentar por VLANs.',
  'Documentación y etiquetado incompletos.'
];

export const swotThreats = [
  'Caída de la demanda de vehículos nuevos por alzas de costos de importación y crédito más caro.',
  'Entrada de marcas chinas de bajo precio y alta tecnología.',
  'Incertidumbre comercial con EE. UU. y posibles aranceles o restricciones.',
  'Aumento de ransomware y phishing en la región.',
  'Alta actividad sísmica, huracanes y lluvias intensas.',
  'Migración de talento técnico (mecánicos y TI).'
];
