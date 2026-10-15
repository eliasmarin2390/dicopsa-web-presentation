export const pestelRows = [
  {
    label: 'Políticos',
    value: {
      opportunities: [
        'Tratados comerciales vigentes (CAFTA-DR, TLC con México) facilitan importar mercadería.',
        'La integración centroamericana (SICA) agiliza el comercio regional.',
        'Políticas públicas que promueven la digitalización de trámites.'
      ],
      threats: [
        'Incertidumbre en las relaciones comerciales con EE. UU. y posibles aranceles o restricciones.',
        'Cambios regulatorios poco previsibles.',
        'Menor acceso a cooperación y financiamiento internacional.'
      ]
    }
  },
  {
    label: 'Económicos',
    value: {
      opportunities: [
        'Estabilidad cambiaria relativa del córdoba frente al dólar permite planificar compras e inversiones de TI.',
        'Las remesas sostienen el consumo de los hogares.',
        'Mayor uso de pagos electrónicos reduce el manejo de efectivo.'
      ],
      threats: [
        'Alzas del combustible elevan el costo logístico.',
        'Los equipos de TI se importan y se pagan en dólares.',
        'Presión inflacionaria sobre márgenes y crédito caro para invertir.'
      ]
    }
  },
  {
    label: 'Sociales',
    value: {
      opportunities: [
        'Población joven con alto uso de teléfonos inteligentes.',
        'Los dueños de pulperías ya usan WhatsApp para comprar.',
        'Cultura de trato cercano con el cliente.'
      ],
      threats: [
        'Migración de talento TI hacia otros países.',
        'Brecha de habilidades digitales en clientes y personal.',
        'Resistencia al cambio en procesos tradicionales.'
      ]
    }
  },
  {
    label: 'Tecnológicos',
    value: {
      opportunities: [
        'Mayor cobertura de fibra óptica en Managua y cabeceras departamentales.',
        'Nube híbrida y SaaS accesibles para respaldos y BI.',
        'IA y analítica para predecir demanda y optimizar rutas.'
      ],
      threats: [
        'Aumento de ransomware y phishing en la región.',
        'Dependencia de pocos proveedores de Internet.',
        'Obsolescencia rápida de equipos y licencias.'
      ]
    }
  },
  {
    label: 'Ecológicos',
    value: {
      opportunities: [
        'Energía solar para bajar el consumo eléctrico del datacenter.',
        'Green IT: virtualización y equipos eficientes.',
        'Rutas optimizadas reducen combustible y emisiones.'
      ],
      threats: [
        'Alta actividad sísmica en Managua.',
        'Huracanes y lluvias intensas en temporada.',
        'Calor y cortes eléctricos dañan equipos sin climatización adecuada.'
      ]
    }
  },
  {
    label: 'Legales',
    value: {
      opportunities: [
        'Ley 729 de Firma Electrónica respalda documentos digitales.',
        'Ley 787 de Protección de Datos Personales orienta el manejo de datos de clientes.',
        'Digitalización progresiva de trámites tributarios y aduaneros.'
      ],
      threats: [
        'La Ley 1042 de Ciberdelitos aumenta la responsabilidad sobre el uso de sistemas y datos.',
        'Sanciones por incumplir la protección de datos personales.',
        'Auditorías de licenciamiento de software y cambios fiscales.'
      ]
    }
  }
];

// FODA: fortalezas y oportunidades vienen de company.js; aquí van debilidades y amenazas del documento.
export const swotWeaknesses = [
  'TI reactiva: se compra tecnología cuando algo falla o cuando un área lo pide.',
  'ERP en un único servidor, sin alta disponibilidad.',
  'Respaldos solo dentro del mismo edificio.',
  'Sin PETI/PESI, sin marco de gobierno ni gestión formal de riesgos.',
  'Reportes gerenciales manuales en Excel y sin CRM ni inteligencia de negocios.',
  'Redes y accesos sin segmentar ni control físico completo en los gabinetes.'
];

export const swotThreats = [
  'Alza del combustible e importación: presiona el costo logístico y el margen.',
  'Ciberataques (ransomware y phishing) que podrían detener facturación y despacho.',
  'Sismos, huracanes y lluvias intensas en temporada.',
  'Cambios regulatorios poco previsibles e incertidumbre comercial con EE. UU.',
  'Migración de talento TI y brecha de habilidades digitales.',
  'Obsolescencia rápida de equipos y licencias.'
];
