import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Nutren just protein 280g",
    price: 89.90,
    originalPrice: 119.90,
    image: "https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Proteína",
    description: "Whey Protein concentrado de alta qualidade para ganho de massa muscular",
    benefits: ["25g de proteína por dose", "Rico em aminoácidos", "Absorção rápida", "Sabor incrível"],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Creatina Monohidratada",
    price: 45.90,
    originalPrice: 59.90,
    image: "https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Performance",
    description: "Creatina pura para aumentar força e potência muscular",
    benefits: ["3g por dose", "Aumenta força", "Melhora performance", "Sem sabor"],
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "BCAA 2:1:1",
    price: 69.90,
    image: "https://images.pexels.com/photos/4162520/pexels-photo-4162520.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Aminoácidos",
    description: "Aminoácidos essenciais para recuperação muscular",
    benefits: ["Reduz fadiga", "Melhora recuperação", "Anticatabólico", "Sabor refrescante"],
    inStock: true
  },
  {
    id: 4,
    name: "Pre-Workout Extreme",
    price: 79.90,
    originalPrice: 99.90,
    image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Performance",
    description: "Pré-treino com cafeína e beta-alanina para máxima energia",
    benefits: ["200mg cafeína", "Foco intenso", "Energia duradoura", "Pump muscular"],
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "Multivitamínico",
    price: 39.90,
    image: "https://images.pexels.com/photos/5938543/pexels-photo-5938543.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Vitaminas",
    description: "Complexo vitamínico completo para saúde geral",
    benefits: ["24 vitaminas", "Melhora imunidade", "Mais disposição", "1 cápsula ao dia"],
    inStock: true
  },
  {
    id: 6,
    name: "Omega 3",
    price: 49.90,
    image: "https://images.pexels.com/photos/5938392/pexels-photo-5938392.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Saúde",
    description: "Ácidos graxos essenciais para saúde cardiovascular",
    benefits: ["1000mg por cápsula", "Saúde do coração", "Anti-inflamatório", "Óleo de peixe puro"],
    inStock: true
  }
];