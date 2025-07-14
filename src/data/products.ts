import { Product } from '../types';

export const products: Product[] = [
  // Proteínas
  {
    id: 1,
    name: "Nutren Just Protein 280g",
    price: 100.00,
    image: "https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Proteína",
    description: "Suplemento alimentar em pó feito com 100% de whey protein isolado, 20 vitaminas e minerais",
    benefits: ["100% Whey Protein Isolado", "20 vitaminas e minerais", "Auxilia formação muscular", "Recuperação e manutenção"],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Nutren Protein Baunilha 800g",
    price: 150.00,
    image: "https://images.pexels.com/photos/4162520/pexels-photo-4162520.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Proteína",
    description: "Aumenta o metabolismo energético, fortalece músculos e ossos, proporciona mais força e energia",
    benefits: ["Fortalece músculos e ossos", "Combate a fadiga", "Auxilia perda de peso", "Hidratação da pele"],
    inStock: true,
    featured: true
  },

  // Fibras
  {
    id: 3,
    name: "Fibermais Colágeno Limão 300g",
    price: 115.00,
    image: "https://images.pexels.com/photos/5938543/pexels-photo-5938543.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Fibras",
    description: "Regulador intestinal da Nestlé com fibras solúveis que ajudam no bom funcionamento do intestino",
    benefits: ["Regulador intestinal", "Fibras solúveis", "Controle glicêmico", "Sabor limão"],
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Fibermais Sem Sabor 260g",
    price: 99.00,
    image: "https://images.pexels.com/photos/5938392/pexels-photo-5938392.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Fibras",
    description: "Acelera o crescimento de bactérias benéficas no intestino, pode ser adicionado a alimentos e bebidas",
    benefits: ["Bactérias benéficas", "Sem alterar sabor", "Sistema digestivo", "Versátil"],
    inStock: true
  },

  // Nutren Senior
  {
    id: 5,
    name: "Nutren Senior Chocolate 740g",
    price: 142.00,
    image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Senior 50+",
    description: "Complemento alimentar desenvolvido para idosos 50+, melhora mobilidade e saúde dos ossos",
    benefits: ["Cálcio e Vitamina D", "Melhora mobilidade", "Saúde dos ossos", "50+ anos"],
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: "Nutren Senior Sem Sabor 740g",
    price: 142.00,
    image: "https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Senior 50+",
    description: "Suplemento com cálcio, proteínas, vitamina D para manutenção da massa muscular e óssea",
    benefits: ["Massa muscular", "Sistema imune", "Vitalidade", "Disposição"],
    inStock: true
  },
  {
    id: 7,
    name: "Nutren Senior Café com Leite 740g",
    price: 142.00,
    image: "https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Senior 50+",
    description: "Desenvolvido para melhorar estado nutricional, fortalecer ossos e músculos na melhor fase da vida",
    benefits: ["Estado nutricional", "Fortalece ossos", "Energia", "Sabor café com leite"],
    inStock: true
  },
  {
    id: 8,
    name: "Nutren Senior Baunilha Zero Lactose 740g",
    price: 156.00,
    image: "https://images.pexels.com/photos/4162520/pexels-photo-4162520.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Senior 50+",
    description: "Suplemento 6 em 1 com proteínas, colágeno, ômega 3 e nutrientes essenciais para adultos 50+",
    benefits: ["6 em 1", "Colágeno", "Ômega 3", "Zero lactose"],
    inStock: true
  },
  {
    id: 9,
    name: "Kit Nutren Senior Sem Sabor 740g - 2 unidades",
    price: 285.00,
    image: "https://images.pexels.com/photos/5938543/pexels-photo-5938543.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Senior 50+",
    description: "Kit com 2 unidades. Mais de 20 vitaminas e minerais complementando necessidades nutricionais",
    benefits: ["2 unidades", "+20 vitaminas", "Células vermelhas", "Energia"],
    inStock: true
  },
  {
    id: 10,
    name: "Nutren Senior Premium Baunilha 370g",
    price: 110.00,
    image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Senior 50+",
    description: "Rico em proteínas, cálcio, zinco, selênio, vitaminas C, D, B6, K e ácido fólico",
    benefits: ["Rico em proteínas", "Cálcio", "Zinco e selênio", "Vitaminas essenciais"],
    inStock: true
  },
  {
    id: 11,
    name: "Nutren Senior Mix de Frutas 740g",
    price: 142.00,
    image: "https://images.pexels.com/photos/5938392/pexels-photo-5938392.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Senior 50+",
    description: "Com cálcio, proteínas, vitamina D, contribui para um melhor estar, sabor mix de frutas",
    benefits: ["Mix de frutas", "Melhor estar", "Qualquer momento", "Cálcio e vitamina D"],
    inStock: true
  },
  {
    id: 12,
    name: "Nutren Senior Baunilha 740g",
    price: 142.00,
    image: "https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Senior 50+",
    description: "Complemento alimentar completo para adultos 50+ com sabor baunilha",
    benefits: ["Sabor baunilha", "Completo", "50+ anos", "Nutrição avançada"],
    inStock: true
  },

  // Ômega 3
  {
    id: 13,
    name: "Sundown Ômega 3 Plus 1000mg 60 cápsulas",
    price: 148.00,
    image: "https://images.pexels.com/photos/5938543/pexels-photo-5938543.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Ômega 3",
    description: "Auxilia no controle de triglicérides, colesterol e melhoria da memória",
    benefits: ["Controla triglicérides", "Colesterol bom", "Saúde cardiovascular", "Melhora memória"],
    inStock: true,
    featured: true
  },
  {
    id: 14,
    name: "Sundown Ômega 3 1000mg 120 cápsulas",
    price: 102.00,
    image: "https://images.pexels.com/photos/5938392/pexels-photo-5938392.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Ômega 3",
    description: "Saúde cardiovascular, ação anti-inflamatória, benefício para saúde cerebral e ocular",
    benefits: ["Anti-inflamatório", "Saúde cerebral", "Saúde ocular", "Energia"],
    inStock: true
  },
  {
    id: 15,
    name: "Sundown Ômega 3 Plus 120 cápsulas",
    price: 210.00,
    image: "https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Ômega 3",
    description: "Versão plus com 120 cápsulas para tratamento prolongado",
    benefits: ["Versão Plus", "120 cápsulas", "Tratamento longo", "Máxima eficácia"],
    inStock: true
  },
  {
    id: 16,
    name: "Sundown Ômega 3 1000mg 180 cápsulas",
    price: 164.00,
    image: "https://images.pexels.com/photos/4162520/pexels-photo-4162520.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Ômega 3",
    description: "Embalagem econômica com 180 cápsulas de ômega 3 1000mg",
    benefits: ["180 cápsulas", "Econômico", "1000mg", "Longa duração"],
    inStock: true
  },

  // Vitaminas
  {
    id: 17,
    name: "Sundown Vitamina E 1001ui 30 cápsulas",
    price: 105.00,
    image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Vitaminas",
    description: "Ação antioxidante, protege células contra radicais livres, saúde da pele e sistema nervoso",
    benefits: ["Antioxidante", "Protege células", "Saúde da pele", "Sistema nervoso"],
    inStock: true
  },
  {
    id: 18,
    name: "Sundown Vitamina C 1000mg 180 comprimidos",
    price: 200.00,
    image: "https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Vitaminas",
    description: "Auxilia sistema imune, formação do colágeno, absorção de ferro e previne anemia",
    benefits: ["Sistema imune", "Formação colágeno", "Absorção ferro", "Previne anemia"],
    inStock: true,
    featured: true
  },
  {
    id: 19,
    name: "Sundown Vitamina D 2000ui 200 cápsulas",
    price: 101.00,
    image: "https://images.pexels.com/photos/5938543/pexels-photo-5938543.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Vitaminas",
    description: "Auxilia absorção de cálcio e fósforo, regula células ósseas, mantém níveis de cálcio no sangue",
    benefits: ["Absorção cálcio", "Regula células ósseas", "Níveis de cálcio", "200 cápsulas"],
    inStock: true
  },
  {
    id: 20,
    name: "Sundown Vitamina E 400Ui 100 cápsulas",
    price: 135.00,
    image: "https://images.pexels.com/photos/5938392/pexels-photo-5938392.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Vitaminas",
    description: "Antioxidante, sistema imunológico, saúde da pele, cérebro, coração e circulação",
    benefits: ["Sistema imunológico", "Saúde do cérebro", "Saúde do coração", "Circulação"],
    inStock: true
  },

  // Colágeno
  {
    id: 21,
    name: "Colágeno Vital Proteins Original Sem Sabor 284g",
    price: 120.00,
    image: "https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Colágeno",
    description: "Recomposição de proteínas perdidas, firmeza e elasticidade para cabelos, pele, unhas e cartilagens",
    benefits: ["Recomposição proteínas", "Firmeza", "Elasticidade", "Cabelos, pele, unhas"],
    inStock: true,
    featured: true
  }
];