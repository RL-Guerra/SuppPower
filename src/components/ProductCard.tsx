import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {product.featured && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            Destaque
          </div>
        )}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            -{discount}%
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Esgotado</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="text-sm text-orange-500 font-semibold mb-2">{product.category}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-current" />
          ))}
          <span className="text-gray-500 text-sm ml-2">(4.8)</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {product.benefits.slice(0, 2).map((benefit, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {benefit}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm mr-2">
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-2xl font-bold text-gray-800">
              R$ {product.price.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white p-3 rounded-lg transition-colors flex items-center justify-center"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};