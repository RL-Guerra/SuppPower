import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useCart } from './hooks/useCart';
import { products } from './data/products';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    items,
    isOpen: isCartOpen,
    setIsOpen: setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart
  } = useCart();

  return (
    <div className="min-h-screen">
      <Header
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      
      <Hero />
      
      <ProductGrid
        products={products}
        onAddToCart={addToCart}
      />
      
      <About />
      
      <Contact />
      
      <Footer />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        total={getTotalPrice()}
        onClearCart={clearCart}
      />
    </div>
  );
}

export default App;