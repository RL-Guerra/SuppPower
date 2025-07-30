import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

export const products: Product[] = [
  // Proteínas
  {
    id: 1,
    name: "Nutren Just Protein 280g",
    price: 87.00,
    originalPrice: 100.00,
    image: "https://www.nestlehealthscience.com.br/sites/default/files/2024-04/nutren_just_protein_280g_frente.jpg",
    category: "Proteína",
    description: "Suplemento alimentar em pó feito com 100% de whey protein isolado, enriquecido com 20 vitaminas e minerais essenciais. Ideal para auxiliar na formação muscular, recuperação pós-treino e manutenção da massa magra. Fórmula premium para atletas e praticantes de atividade física.",
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
    description: "Suplemento proteico completo que aumenta o metabolismo energético, fortalece músculos e ossos, proporcionando mais força e energia para suas atividades diárias. Rico em proteínas de alta qualidade com sabor delicioso de baunilha. Ideal para complementar a alimentação e atingir suas metas fitness.",
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
    description: "Regulador intestinal da Nestlé com fibras solúveis que ajudam no bom funcionamento do intestino. Contém colágeno para saúde da pele e sabor limão refrescante. Ideal para quem busca regularidade intestinal e melhora da saúde digestiva. Fórmula exclusiva que combina benefícios intestinais e estéticos.",
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
    description: "Acelera o crescimento de bactérias benéficas no intestino, promovendo uma flora intestinal saudável. Sem sabor, pode ser facilmente adicionado a alimentos e bebidas sem alterar o gosto. Perfeito para quem quer os benefícios das fibras de forma discreta e prática no dia a dia.",
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
    description: "Complemento alimentar especialmente desenvolvido para adultos acima de 50 anos. Rico em cálcio e vitamina D, melhora a mobilidade, fortalece os ossos e contribui para um envelhecimento saudável e ativo. Sabor chocolate irresistível que torna o cuidado com a saúde mais prazeroso.",
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
    description: "Suplemento completo com cálcio, proteínas de alta qualidade e vitamina D para manutenção da massa muscular e óssea. Fortalece o sistema imune e proporciona mais vitalidade e disposição no dia a dia. Versão sem sabor para máxima versatilidade de consumo.",
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
    description: "Desenvolvido especialmente para melhorar o estado nutricional de adultos 50+. Fortalece ossos e músculos, proporcionando energia e vitalidade para aproveitar a melhor fase da vida com sabor café com leite nostálgico e reconfortante.",
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
    description: "Suplemento completo 6 em 1 com proteínas, colágeno, ômega 3 e nutrientes essenciais para adultos 50+. Zero lactose, ideal para quem tem intolerância. Fórmula avançada para nutrição completa com sabor baunilha suave e cremoso.",
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
    description: "Kit econômico com 2 unidades do Nutren Senior. Contém mais de 20 vitaminas e minerais essenciais, complementando as necessidades nutricionais específicas de adultos 50+. Ótimo custo-benefício para tratamento prolongado e manutenção da saúde.",
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
    description: "Versão premium rica em proteínas de alta qualidade, cálcio, zinco, selênio e vitaminas C, D, B6, K e ácido fólico. Fórmula concentrada para máxima absorção e eficácia nutricional. Ideal para quem busca o que há de melhor em nutrição sênior.",
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
    description: "Suplemento com cálcio, proteínas e vitamina D que contribui para um melhor estar físico e mental. Delicioso sabor mix de frutas, pode ser consumido a qualquer momento do dia. Perfeito para quem busca sabor tropical e nutrição completa.",
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
    description: "Suplemento nutricional completo para adultos 50+ com sabor baunilha clássico. Fornece nutrientes essenciais para manter a vitalidade, força muscular e saúde óssea. Fórmula balanceada para o envelhecimento ativo e saudável.",
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
    description: "Auxilia no controle de triglicérides, colesterol e melhoria da memória. Fórmula concentrada com ácidos graxos essenciais EPA e DHA para saúde cardiovascular e cerebral. Ideal para quem busca proteção cardíaca e melhora cognitiva.",
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
    description: "Saúde cardiovascular, ação anti-inflamatória, benefício para saúde cerebral e ocular. Óleo de peixe purificado com alta concentração de ômega 3. Embalagem econômica com 120 cápsulas para tratamento prolongado.",
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
    description: "Versão plus com 120 cápsulas para tratamento prolongado. Fórmula premium com maior concentração de EPA e DHA para resultados superiores. Ideal para quem busca máxima eficácia em saúde cardiovascular e cerebral.",
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
    description: "Embalagem econômica com 180 cápsulas de ômega 3 1000mg. Excelente custo-benefício para uso contínuo. Rico em ácidos graxos essenciais para manutenção da saúde cardiovascular, cerebral e articular.",
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
    description: "Ação antioxidante, protege células contra radicais livres, saúde da pele e sistema nervoso. Alta potência com 1001ui para máxima proteção celular. Essencial para manter a juventude e vitalidade das células.",
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
    description: "Auxilia sistema imune, formação do colágeno, absorção de ferro e previne anemia. Dose potente de 1000mg para máxima proteção imunológica. Embalagem econômica com 180 comprimidos para uso prolongado.",
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
    description: "Auxilia absorção de cálcio e fósforo, regula células ósseas, mantém níveis de cálcio no sangue. Dose ideal de 2000ui para suplementação eficaz. Essencial para saúde óssea e imunidade.",
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
    description: "Antioxidante, sistema imunológico, saúde da pele, cérebro, coração e circulação. Fórmula balanceada com 400ui para proteção diária. Embalagem com 100 cápsulas para uso contínuo e resultados duradouros.",
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
    description: "Recomposição de proteínas perdidas, firmeza e elasticidade para cabelos, pele, unhas e cartilagens. Colágeno hidrolisado de alta absorção sem sabor para máxima versatilidade. Ideal para quem busca beleza e saúde articular.",
    benefits: ["Recomposição proteínas", "Firmeza", "Elasticidade", "Cabelos, pele, unhas"],
    inStock: true,
    featured: true,
    rating: 4.7
  }
];

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full product-card">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain bg-gray-50 product-image"
        />
        {product.featured && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
            Destaque
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            -{discount}%
          </span>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 flex-grow leading-relaxed">
          {product.description}
        </p>
        
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {product.benefits.slice(0, 2).map((benefit, index) => (
              <span
                key={index}
                className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-600">({product.rating})</span>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">
              R$ {product.price.toFixed(2)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-lg text-gray-500 line-through">
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
          disabled={!product.inStock}
        >
          <ShoppingCart className="w-4 h-4" />
          {product.inStock ? 'Comprar Agora' : 'Fora de Estoque'}
        </button>
      </div>
    </div>
  );
};