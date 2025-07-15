import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos da SuppPower.");
    window.open(`https://wa.me/5511934820682?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/supppower', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com/supppower', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Entre em <span className="text-orange-500">Contato</span>
            </h2>
            <p className="text-xl text-gray-300">
              Conecte-se conosco através das nossas redes sociais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informações</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Telefone / WhatsApp</p>
                    <p className="text-gray-300">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">contato@supppower.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Localização</p>
                    <p className="text-gray-300">São Paulo, SP - Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Horário de Atendimento</p>
                    <p className="text-gray-300">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-300">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Redes Sociais */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-2xl font-semibold mb-8 text-center">Nossas Redes Sociais</h3>
              
              <div className="grid grid-cols-1 gap-6 w-full max-w-sm">
                {/* WhatsApp */}
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-4"
                >
                  <MessageCircle size={32} />
                  <div className="text-left">
                    <p className="font-bold text-lg">WhatsApp</p>
                    <p className="text-sm opacity-90">Fale conosco agora</p>
                  </div>
                </button>

                {/* Instagram */}
                <button
                  onClick={handleInstagramClick}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-4"
                >
                  <Instagram size={32} />
                  <div className="text-left">
                    <p className="font-bold text-lg">Instagram</p>
                    <p className="text-sm opacity-90">@supppower</p>
                  </div>
                </button>

                {/* Facebook */}
                <button
                  onClick={handleFacebookClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-4"
                >
                  <Facebook size={32} />
                  <div className="text-left">
                    <p className="font-bold text-lg">Facebook</p>
                    <p className="text-sm opacity-90">SuppPower</p>
                  </div>
                </button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  Siga-nos para dicas, promoções e novidades!
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para transformar seus resultados?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Entre em contato conosco e descubra os melhores suplementos para seus objetivos
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};