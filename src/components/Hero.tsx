import React from 'react';
import { ArrowRight, Zap, Shield, Trophy } from 'lucide-react';

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all transform hover:scale-105">
              Comprar Agora
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Ver Produtos
            </button>
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