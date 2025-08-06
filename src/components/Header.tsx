import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  onMenuClick, 
  isMenuOpen 
}) => {
  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-orange-500">
          SUPP<span className="text-white">POWER</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-orange-500 transition-colors">Início</a>
          <a href="#products" className="hover:text-orange-500 transition-colors">Produtos</a>
          <a href="#about" className="hover:text-orange-500 transition-colors">Sobre</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Contato</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 hover:text-orange-500 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#home" className="hover:text-orange-500 transition-colors">Início</a>
            <a href="#products" className="hover:text-orange-500 transition-colors">Produtos</a>
            <a href="#about" className="hover:text-orange-500 transition-colors">Sobre</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
};