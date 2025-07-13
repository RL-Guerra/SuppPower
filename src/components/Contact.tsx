import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Entre em <span className="text-orange-500">Contato</span>
            </h2>
            <p className="text-xl text-gray-300">
              Estamos aqui para ajudar você a alcançar seus objetivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
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
                    <p className="font-semibold">Endereço</p>
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
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Siga-nos nas Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition-colors">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Seu telefone"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Sua mensagem"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};