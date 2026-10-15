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

export const swotData = {
  strengths: [
    {
      title: '22 años de trayectoria',
      text: 'Buena reputación y presencia sostenida en el mercado.'
    },
    {
      title: 'Cobertura regional',
      text: 'Sucursales propias en toda la región del Pacífico.'
    },
    {
      title: 'Flota propia',
      text: 'Capacidad de reparto y control logístico directo.'
    },
    {
      title: 'Base tecnológica existente',
      text: 'ERP transaccional y app de preventa ya implementados.'
    }
  ],
  opportunities: [
    {
      title: 'Canal B2B digital',
      text: 'Pedidos web y por WhatsApp para los comercios.'
    },
    {
      title: 'Analítica de datos',
      text: 'Uso del ERP para predecir demanda y reducir inventario inmovilizado.'
    },
    {
      title: 'Expansión territorial',
      text: 'Posible crecimiento hacia la zona norte y central del país.'
    },
    {
      title: 'Nube híbrida',
      text: 'Respaldos y continuidad del negocio con soporte externo.'
    }
  ],
  weaknesses: [
    {
      title: 'TI reactiva',
      text: 'Se compra tecnología cuando algo falla o cuando un área lo pide.'
    },
    {
      title: 'Sin alta disponibilidad',
      text: 'El ERP corre en un único servidor.'
    },
    { title: 'Respaldos locales', text: 'No salen del edificio.' },
    {
      title: 'Sin gobierno formal',
      text: 'No existe PETI/PESI ni marco de gobierno definido.'
    }
  ],
  threats: [
    {
      title: 'Combustible e importación',
      text: 'El alza en estos costos presiona el margen y la logística.'
    },
    {
      title: 'Ciberataques',
      text: 'Ransomware y phishing pueden detener facturación y despacho.'
    },
    {
      title: 'Desastres naturales',
      text: 'Sismos, huracanes y lluvias intensas impactan la continuidad.'
    },
    {
      title: 'Obsolescencia',
      text: 'Equipos y licencias envejecen rápidamente sin renovación planificada.'
    }
  ]
};
