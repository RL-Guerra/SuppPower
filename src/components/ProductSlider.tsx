import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

export const ProductSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  
  // Filtrar apenas produtos em destaque
  const featuredProducts = products.filter(product => product.featured);
  
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [featuredProducts.length, isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Reativar autoplay após 10 segundos
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? featuredProducts.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === featuredProducts.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  // Funções para touch/swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (featuredProducts.length === 0) return null;

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div 
        ref={sliderRef}
        className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Botões de navegação - Desktop */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hidden md:flex items-center justify-center"
          aria-label="Produto anterior"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hidden md:flex items-center justify-center"
          aria-label="Próximo produto"
        >
          <ChevronRight size={24} />
        </button>

        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {featuredProducts.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0">
              <div className="flex flex-col lg:flex-row items-center p-6 lg:p-8 min-h-[400px] lg:min-h-[500px]">
                {/* Imagem do Produto */}
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 lg:h-80 object-contain bg-white/20 rounded-xl p-4"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      DESTAQUE
                    </div>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Informações do Produto */}
                <div className="w-full lg:w-1/2 lg:pl-8 text-center lg:text-left">
                  <div className="mb-3">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                    {product.benefits.slice(0, 3).map((benefit, index) => (
                      <span
                        key={index}
                        className="bg-white/20 text-white px-3 py-1 rounded-full text-xs lg:text-sm"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                    <span className="text-3xl lg:text-4xl font-bold text-orange-500">
                      R$ {product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <span className="text-xl lg:text-2xl text-gray-400 line-through">
                        R$ {product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => window.open(product.paymentLink, '_blank')}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 w-full lg:w-auto"
                  >
                    Comprar Agora
                  </button>
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
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-orange-500 scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Ir para produto ${index + 1}`}
          />
        ))}
      </div>

      {/* Indicador de swipe para mobile */}
      <div className="md:hidden text-center mt-4">
        <p className="text-white/60 text-sm">
          👈 Deslize para ver mais produtos 👉
        </p>
      </div>
    </div>
  );
};