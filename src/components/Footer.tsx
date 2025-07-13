import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-2xl font-bold text-orange-500 mb-2">
              SUPP<span className="text-white">POWER</span>
            </div>
            <p className="text-gray-400">Suplementos de alta performance</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end">
              Feito com <Heart className="text-red-500 mx-1" size={16} /> para atletas
            </p>
            <p className="text-sm text-gray-500 mt-1">
              © 2024 SuppPower. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};