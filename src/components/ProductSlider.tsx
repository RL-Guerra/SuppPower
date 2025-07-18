import React, { useState, useEffect } from 'react';
import { products } from '../data/products';

export const ProductSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Filtrar apenas produtos em destaque
  const featuredProducts = products.filter(product => product.featured);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  if (featuredProducts.length === 0) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {featuredProducts.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0">
              <div className="flex flex-col md:flex-row items-center p-8">
                {/* Imagem do Produto */}
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 md:h-80 object-contain bg-white/20 rounded-xl p-4"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      DESTAQUE
                    </div>
                  </div>
                </div>
                
                {/* Informações do Produto */}
                <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
                  <div className="mb-3">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description.substring(0, 150)}...
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                    {product.benefits.slice(0, 3).map((benefit, index) => (
                      <span
                        key={index}
                        className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                    <span className="text-3xl font-bold text-orange-500">
                      R$ {product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <span className="text-xl text-gray-400 line-through">
                        R$ {product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Indicadores */}
      <div className="flex justify-center mt-6 space-x-2">
        {featuredProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-orange-500 scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
      
      {/* Contador de produtos */}
      <div className="text-center mt-4">
        <span className="text-white/70 text-sm">
          {currentIndex + 1} de {featuredProducts.length} produtos em destaque
        </span>
      </div>
    </div>
  );
};

// Importar ArrowRight do lucide-react
import { ArrowRight } from 'lucide-react';