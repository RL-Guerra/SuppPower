import React from 'react';
import { Award, Users, Truck, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Por que escolher a <span className="text-orange-500">SuppPower</span>?
          </h2>
          <p className="text-xl text-gray-600">
            Somos especialistas em suplementação esportiva há mais de 10 anos, 
            oferecendo apenas produtos de máxima qualidade para atletas e praticantes de atividade física.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-orange-500" size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Qualidade Premium</h3>
            <p className="text-gray-600">Produtos testados e certificados com os mais altos padrões de qualidade</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-orange-500" size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">+50k Clientes</h3>
            <p className="text-gray-600">Mais de 50 mil atletas confiam em nossos produtos para alcançar seus objetivos</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="text-orange-500" size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
            <p className="text-gray-600">Entregamos em todo o Brasil com agilidade e segurança</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-orange-500" size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Garantia Total</h3>
            <p className="text-gray-600">30 dias de garantia total. Não ficou satisfeito? Devolvemos seu dinheiro</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Transforme seu corpo, supere seus limites
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Junte-se a milhares de atletas que já conquistaram seus objetivos com nossos suplementos
            </p>
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};