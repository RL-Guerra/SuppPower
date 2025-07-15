import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos da SuppPower.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com', '_blank');
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

          {/* Avaliações de Clientes */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              O que nossos <span className="text-orange-500">clientes</span> dizem
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Avaliação 1 */}
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Marcos Silva</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Excelente qualidade! O Nutren Protein me ajudou muito na recuperação pós-treino. Recomendo!"
                </p>
                <p className="text-orange-500 text-sm mt-2">Produto: Nutren Protein Baunilha</p>
              </div>

              {/* Avaliação 2 */}
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Ana Costa</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Ótimo atendimento e produtos de qualidade. O Ômega 3 chegou rapidinho e já estou sentindo os benefícios!"
                </p>
                <p className="text-orange-500 text-sm mt-2">Produto: Sundown Ômega 3 Plus</p>
              {/* Avaliação 3 */}
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    R
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Roberto Lima</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Minha esposa de 65 anos está usando o Nutren Senior e já notamos melhora na disposição. Muito bom!"
                </p>
                <p className="text-orange-500 text-sm mt-2">Produto: Nutren Senior Chocolate</p>
              </div>
            </div>
              </div>
            {/* Formulário para nova avaliação */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-center">Deixe sua avaliação</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                  <select className="bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none">
                    <option value="">Produto comprado</option>
                    <option value="nutren-protein">Nutren Protein</option>
                    <option value="omega-3">Ômega 3</option>
                    <option value="nutren-senior">Nutren Senior</option>
                    <option value="colageno">Colágeno</option>
                    <option value="vitaminas">Vitaminas</option>
                  </select>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-300 mb-2">Sua avaliação:</p>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        className="text-2xl text-gray-400 hover:text-yellow-400 transition-colors"
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                
                <textarea
                  placeholder="Conte sua experiência com nossos produtos..."
                  rows={4}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Enviar Avaliação
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};