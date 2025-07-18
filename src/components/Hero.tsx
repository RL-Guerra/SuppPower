import React from 'react';
import { Zap, Shield, Trophy } from 'lucide-react';
import { ProductSlider } from './ProductSlider';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            SUPERE SEUS
            <span className="text-orange-500 block">LIMITES</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Suplementos de alta qualidade para atletas que buscam performance máxima
          </p>
          
          {/* Slider de Produtos em Destaque */}
          <div className="mb-12">
            <ProductSlider />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-gray-400">Aumente sua energia e resistência</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
              <p className="text-gray-400">Produtos testados e aprovados</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resultados</h3>
              <p className="text-gray-400">Conquiste seus objetivos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};