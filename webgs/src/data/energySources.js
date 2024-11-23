

const energySources = [
    {
      id: 1,
      name: "Energia Solar",
      description: "A energia solar é gerada a partir da luz do sol e é uma fonte renovável e limpa.",
      environmentalImpact: "Baixo impacto ambiental, reduz emissões de CO2.",
      cost: "Custo inicial elevado, mas economia a longo prazo.",
      accessibility: "Acessível em muitas regiões, especialmente em áreas ensolaradas.",
      benefits: [
        "Reduz a conta de energia.",
        "Sustentável e renovável.",
        "Baixa manutenção após instalação."
      ],
      limitations: [
        "Dependente das condições climáticas.",
        "Custo inicial elevado."
      ]
    },
    {
      id: 2,
      name: "Energia Eólica",
      description: "A energia eólica é gerada a partir do vento e é uma fonte renovável.",
      environmentalImpact: "Baixo impacto ambiental, mas pode afetar aves locais.",
      cost: "Custo moderado para instalação de turbinas.",
      accessibility: "Ideal para regiões com ventos constantes.",
      benefits: [
        "Fonte de energia limpa.",
        "Reduz dependência de combustíveis fósseis."
      ],
      limitations: [
        "Intermitente, depende da velocidade do vento.",
        "Pode ser visualmente intrusiva."
      ]
    },
    {
      id: 3,
      name: "Energia Hidráulica",
      description: "A energia hidráulica é gerada a partir do movimento da água em rios e represas.",
      environmentalImpact: "Pode causar impacto em ecossistemas aquáticos.",
      cost: "Custo elevado para construção de barragens.",
      accessibility: "Limitada a regiões com recursos hídricos adequados.",
      benefits: [
        "Fonte estável e confiável de energia.",
        "Capacidade de armazenamento de energia."
      ],
      limitations: [
        "Impacto ambiental significativo em habitats locais.",
        "Dependente da disponibilidade de água."
      ]
    },
    {
      id: 4,
      name: "Energia Geotérmica",
      description: "A energia geotérmica é gerada a partir do calor da terra.",
      environmentalImpact: "Baixo impacto ambiental, mas pode causar atividade sísmica em algumas áreas.",
      cost: "Custo inicial moderado, mas baixo custo operacional.",
      accessibility: "Disponível principalmente em regiões geologicamente ativas.",
      benefits: [
        "Fonte confiável e constante de energia.",
        "Baixas emissões de carbono."
      ],
      limitations: [
        "Limitada a locais específicos com atividade geotérmica.",
        "Custo inicial para perfuração pode ser alto."
      ]
    },
    {
      id: 5,
      name: "Biomassa",
      description: "A biomassa é gerada a partir da queima de materiais orgânicos, como madeira e resíduos agrícolas.",
      environmentalImpact: "Pode emitir CO2, mas é considerada neutra se gerida corretamente.",
      cost: "Custo variável dependendo da fonte de biomassa utilizada.",
      accessibility: "Disponível em muitas áreas rurais com acesso a resíduos orgânicos.",
      benefits: [
        "Reduz resíduos orgânicos.",
        "Pode ser uma fonte local de energia."
      ],
      limitations: [
        "Pode competir com terras agrícolas para cultivo.",
        "Emissões podem ser significativas se não forem controladas."
      ]
    }
  ];
  
  export default energySources;