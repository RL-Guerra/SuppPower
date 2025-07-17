import { Product } from '../types';

export const products: Product[] = [
  // Proteínas
  {
    id: 1,
    name: "Nutren Just Protein 280g",
    price: 87.00,
    originalPrice: 100.00,
    image: "https://images.tcdn.com.br/img/img_prod/740483/nutren_just_protein_280g_nestle_11343_1_9dbbaf9915720181d49bbc7491c874b5.jpg",
    category: "Proteína",
    description: "Suplemento alimentar em pó feito com 100% de whey protein isolado, contém 20 vitaminas e minerais essenciais para auxiliar na formação muscular, recuperação pós-treino e manutenção da massa magra.",
    benefits: ["100% Whey Protein Isolado", "20 vitaminas e minerais", "Auxilia formação muscular", "Recuperação e manutenção"],
    inStock: true,
    featured: true,
    rating: 4.7
  },
  {
    id: 2,
    name: "Nutren Protein Baunilha 800g",
    price: 127.50,
    originalPrice: 150.00,
    image: "https://www.drogaraia.com.br/_next/image?q=40&url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F13239660.webp&w=3840",
    category: "Proteína",
    description: "Suplemento proteico completo que aumenta o metabolismo energético, fortalece músculos e ossos, proporciona mais força e energia para o dia a dia e atividades físicas.",
    benefits: ["Fortalece músculos e ossos", "Combate a fadiga", "Auxilia perda de peso", "Hidratação da pele"],
    inStock: true,
    featured: true,
    rating: 4.9
  },

  // Fibras
  {
    id: 3,
    name: "Fibermais Colágeno Limão 300g",
    price: 103.50,
    originalPrice: 115.00,
    image: "https://www.nestlehealthscience.com.br/sites/default/files/2024-02/frentelimaoresource_fibermaiscolageno12x300g_brrot_44277541_1.jpg",
    category: "Fibras",
    description: "Regulador intestinal da Nestlé com fibras solúveis que ajudam no bom funcionamento do intestino, melhora a digestão e contribui para o controle glicêmico com sabor refrescante de limão.",
    benefits: ["Regulador intestinal", "Fibras solúveis", "Controle glicêmico", "Sabor limão"],
    inStock: true,
    featured: true,
    rating: 4.5
  },
  {
    id: 4,
    name: "Fibermais Sem Sabor 260g",
    price: 89.10,
    originalPrice: 99.00,
    image: "https://http2.mlstatic.com/D_NQ_NP_604225-MLB40766444839_022020-F.jpg",
    category: "Fibras",
    description: "Acelera o crescimento de bactérias benéficas no intestino, pode ser facilmente adicionado a alimentos e bebidas sem alterar o sabor, promovendo saúde digestiva completa.",
    benefits: ["Bactérias benéficas", "Sem alterar sabor", "Sistema digestivo", "Versátil"],
    inStock: true,
    rating: 4.3
  },

  // Nutren Senior
  {
    id: 5,
    name: "Nutren Senior Chocolate 740g",
    price: 120.70,
    originalPrice: 142.00,
    image: "https://drogariavenancio.vtexassets.com/arquivos/ids/1147630/76680_2.jpg?v=638519926617570000",
    category: "Senior 50+",
    description: "Complemento alimentar especialmente desenvolvido para adultos 50+, rico em cálcio e vitamina D, melhora mobilidade, fortalece ossos e contribui para um envelhecimento saudável.",
    benefits: ["Cálcio e Vitamina D", "Melhora mobilidade", "Saúde dos ossos", "50+ anos"],
    inStock: true,
    featured: true,
    rating: 4.8
  },
  {
    id: 6,
    name: "Nutren Senior Sem Sabor 740g",
    price: 120.70,
    originalPrice: 142.00,
    image: "https://drogal.vtexassets.com/arquivos/ids/250219/131523.jpg?v=638773839482270000",
    category: "Senior 50+",
    description: "Suplemento completo com cálcio, proteínas de alta qualidade e vitamina D para manutenção da massa muscular e óssea, fortalece o sistema imune e proporciona mais vitalidade.",
    benefits: ["Massa muscular", "Sistema imune", "Vitalidade", "Disposição"],
    inStock: true,
    rating: 4.6
  },
  {
    id: 7,
    name: "Nutren Senior Café com Leite 740g",
    price: 120.70,
    originalPrice: 142.00,
    image: "https://a-static.mlcdn.com.br/800x560/nutren-senior-suplemento-alimentar-cafe-com-leite-740g/olistplus/opmdn6h2n8rtel7r/30fec9acb1345ea82aef58ebccc507be.jpeg",
    category: "Senior 50+",
    description: "Desenvolvido especialmente para melhorar o estado nutricional, fortalecer ossos e músculos na melhor fase da vida, com delicioso sabor café com leite que proporciona energia e bem-estar.",
    benefits: ["Estado nutricional", "Fortalece ossos", "Energia", "Sabor café com leite"],
    inStock: true,
    rating: 4.4
  },
  {
    id: 8,
    name: "Nutren Senior Baunilha Zero Lactose 740g",
    price: 132.60,
    originalPrice: 156.00,
    image: "https://drogariavenancio.vtexassets.com/arquivos/ids/1015879-800-auto?v=637998092732970000&width=800&height=auto&aspect=true",
    category: "Senior 50+",
    description: "Suplemento completo 6 em 1 com proteínas de alta qualidade, colágeno hidrolisado, ômega 3 e nutrientes essenciais para adultos 50+, zero lactose para melhor digestibilidade.",
    benefits: ["6 em 1", "Colágeno", "Ômega 3", "Zero lactose"],
    inStock: true,
    rating: 4.7
  },
  {
    id: 9,
    name: "Kit Nutren Senior Sem Sabor 740g - 2 unidades",
    price: 228.00,
    originalPrice: 285.00,
    image: "https://www.nutricaoatevoce.com.br/media/catalog/product/cache/3f091c246aa3c76f3e4c9f2d55ddba5b/n/u/nutren-senior-pack---hero1.jpg",
    category: "Senior 50+",
    description: "Kit econômico com 2 unidades do Nutren Senior. Contém mais de 20 vitaminas e minerais essenciais complementando as necessidades nutricionais específicas de adultos maduros.",
    benefits: ["2 unidades", "+20 vitaminas", "Células vermelhas", "Energia"],
    inStock: true,
    rating: 4.5
  },
  {
    id: 10,
    name: "Nutren Senior Premium Baunilha 370g",
    price: 99.00,
    originalPrice: 110.00,
    image: "https://www.nutricaoatevoce.com.br/media/catalog/product/cache/3f091c246aa3c76f3e4c9f2d55ddba5b/n/u/nutrenpremiumhero2.jpg",
    category: "Senior 50+",
    description: "Versão premium rica em proteínas de alta qualidade, cálcio, zinco, selênio e vitaminas C, D, B6, K e ácido fólico, formulação avançada para nutrição completa de adultos 50+.",
    benefits: ["Rico em proteínas", "Cálcio", "Zinco e selênio", "Vitaminas essenciais"],
    inStock: true,
    rating: 4.6
  },
  {
    id: 11,
    name: "Nutren Senior Mix de Frutas 740g",
    price: 120.70,
    originalPrice: 142.00,
    image: "https://www.nutricaoatevoce.com.br/media/catalog/product/cache/3f091c246aa3c76f3e4c9f2d55ddba5b/n/u/nutren-mix-frutas---hero_v21.jpg",
    category: "Senior 50+",
    description: "Suplemento nutritivo com cálcio, proteínas de qualidade e vitamina D, contribui para um melhor bem-estar geral, com delicioso sabor mix de frutas que pode ser consumido a qualquer momento.",
    benefits: ["Mix de frutas", "Melhor estar", "Qualquer momento", "Cálcio e vitamina D"],
    inStock: true,
    rating: 4.3
  },
  {
    id: 12,
    name: "Nutren Senior Baunilha 740g",
    price: 120.70,
    originalPrice: 142.00,
    image: "https://www.nutren.com.br/sites/default/files/2024-01/senior_sabor_baunilha_lata_740g.png",
    category: "Senior 50+",
    description: "Complemento alimentar completo especialmente formulado para adultos 50+ com delicioso sabor baunilha, oferece nutrição avançada para um envelhecimento ativo e saudável.",
    benefits: ["Sabor baunilha", "Completo", "50+ anos", "Nutrição avançada"],
    inStock: true,
    rating: 4.8
  },

  // Ômega 3
  {
    id: 13,
    name: "Sundown Ômega 3 Plus 1000mg 60 cápsulas",
    price: 125.80,
    originalPrice: 148.00,
    image: "https://drogariavenancio.vtexassets.com/arquivos/ids/1078912-800-450?aspect=true&height=450&v=638351342641970000&width=800",
    category: "Ômega 3",
    description: "Suplemento premium de ômega 3 que auxilia no controle de triglicérides, melhora o colesterol bom, promove saúde cardiovascular e contribui significativamente para melhoria da memória e função cerebral.",
    benefits: ["Controla triglicérides", "Colesterol bom", "Saúde cardiovascular", "Melhora memória"],
    inStock: true,
    featured: true,
    rating: 4.9
  },
  {
    id: 14,
    name: "Sundown Ômega 3 1000mg 120 cápsulas",
    price: 91.80,
    originalPrice: 102.00,
    image: "https://i5.walmartimages.com/seo/Sundown-Omega-3-Fish-Oil-1000-Mg-Softgels-120-Ct_9129ca15-407b-4f42-88d3-699143e5b4e6.d3c11c9d7627dc89c0a20410d6aebc7f.jpeg",
    category: "Ômega 3",
    description: "Óleo de peixe concentrado que promove saúde cardiovascular, possui potente ação anti-inflamatória e oferece benefícios comprovados para saúde cerebral, ocular e fornece energia natural.",
    benefits: ["Anti-inflamatório", "Saúde cerebral", "Saúde ocular", "Energia"],
    inStock: true,
    rating: 4.4
  },
  {
    id: 15,
    name: "Sundown Ômega 3 Plus 120 cápsulas",
    price: 168.00,
    originalPrice: 210.00,
    image: "https://dmvfarma.vtexassets.com/arquivos/ids/257381-800-auto?aspect=true&height=auto&v=638621039452030000&width=800",
    category: "Ômega 3",
    description: "Versão plus com 120 cápsulas de ômega 3 concentrado, ideal para tratamento prolongado, oferece máxima eficácia na proteção cardiovascular e melhoria das funções cognitivas.",
    benefits: ["Versão Plus", "120 cápsulas", "Tratamento longo", "Máxima eficácia"],
    inStock: true,
    rating: 4.7
  },
  {
    id: 16,
    name: "Sundown Ômega 3 1000mg 180 cápsulas",
    price: 139.40,
    originalPrice: 164.00,
    image: "https://dmvfarma.vtexassets.com/arquivos/ids/257358/30768038489-SuplementoAlimentarSundownOmega-31000mg180Capsulas-1.jpg?v=638621039315100000",
    category: "Ômega 3",
    description: "Embalagem econômica com 180 cápsulas de ômega 3 1000mg cada, oferece excelente custo-benefício para uso contínuo, garantindo todos os benefícios por longa duração.",
    benefits: ["180 cápsulas", "Econômico", "1000mg", "Longa duração"],
    inStock: true,
    rating: 4.5
  },

  // Vitaminas
  {
    id: 17,
    name: "Sundown Vitamina E 1001ui 30 cápsulas",
    price: 94.50,
    originalPrice: 105.00,
    image: "https://www.nutricaoatevoce.com.br/media/catalog/product/cache/3f091c246aa3c76f3e4c9f2d55ddba5b/1/2/12532811_1.jpg",
    category: "Vitaminas",
    description: "Vitamina E com potente ação antioxidante, protege células contra radicais livres, promove saúde da pele, fortalece o sistema nervoso e contribui para o anti-envelhecimento natural.",
    benefits: ["Antioxidante", "Protege células", "Saúde da pele", "Sistema nervoso"],
    inStock: true,
    rating: 4.3
  },
  {
    id: 18,
    name: "Sundown Vitamina C 1000mg 180 comprimidos",
    price: 160.00,
    originalPrice: 200.00,
    image: "https://dmvfarma.vtexassets.com/arquivos/ids/257390/30768301576-SuplementoAlimentarSundownVitaminaC1000mg180Comprimidos-1.jpg?v=638621039532270000",
    category: "Vitaminas",
    description: "Vitamina C 1000mg que fortalece o sistema imunológico, é essencial para formação do colágeno, melhora absorção de ferro, previne anemia e oferece proteção antioxidante completa.",
    benefits: ["Sistema imune", "Formação colágeno", "Absorção ferro", "Previne anemia"],
    inStock: true,
    featured: true,
    rating: 4.8
  },
  {
    id: 19,
    name: "Sundown Vitamina D 2000ui 200 cápsulas",
    price: 90.90,
    originalPrice: 101.00,
    image: "https://images.tcdn.com.br/img/img_prod/738187/vitamina_d_2000ui_200_capsulas_sundown_naturals_1289_1_20200323102437.jpg",
    category: "Vitaminas",
    description: "Vitamina D 2000ui que auxilia na absorção de cálcio e fósforo, regula células ósseas, mantém níveis adequados de cálcio no sangue e fortalece o sistema imunológico. 200 cápsulas.",
    benefits: ["Absorção cálcio", "Regula células ósseas", "Níveis de cálcio", "200 cápsulas"],
    inStock: true,
    rating: 4.6
  },
  {
    id: 20,
    name: "Sundown Vitamina E 400Ui 100 cápsulas",
    price: 114.75,
    originalPrice: 135.00,
    image: "https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F15203652.webp&w=3840&q=40",
    category: "Vitaminas",
    description: "Vitamina E 400ui com ação antioxidante poderosa, fortalece sistema imunológico, promove saúde da pele, protege cérebro e coração, melhora circulação sanguínea e combate o envelhecimento.",
    benefits: ["Sistema imunológico", "Saúde do cérebro", "Saúde do coração", "Circulação"],
    inStock: true,
    rating: 4.4
  },

  // Colágeno
  {
    id: 21,
    name: "Colágeno Vital Proteins Original Sem Sabor 284g",
    price: 108.00,
    originalPrice: 120.00,
    image: "https://www.nutricaoatevoce.com.br/media/catalog/product/cache/3f091c246aa3c76f3e4c9f2d55ddba5b/v/i/vital_proteins_sem_sab_284g_front.jpg",
    category: "Colágeno",
    description: "Colágeno hidrolisado premium para recomposição de proteínas perdidas, proporciona firmeza e elasticidade para cabelos, pele, unhas e cartilagens, sem sabor para versatilidade total.",
    benefits: ["Recomposição proteínas", "Firmeza", "Elasticidade", "Cabelos, pele, unhas"],
    inStock: true,
    featured: true,
    rating: 4.7
  }
];