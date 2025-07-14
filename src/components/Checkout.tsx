import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Copy } from 'lucide-react';
import { CartItem, Customer } from '../types';
import { sendOrderConfirmationEmail } from '../services/emailService';

interface CheckoutProps {
  items: CartItem[];
  total: number;
  onBack: () => void;
  onClose: () => void;
  onClearCart: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ 
  items, 
  total, 
  onBack, 
  onClose, 
  onClearCart 
}) => {
  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
  const [customer, setCustomer] = useState<Customer>({
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      cep: ''
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePayment = () => {
    const orderId = `PED${Date.now()}`;
    
    // Enviar email de confirmação
    sendOrderConfirmationEmail({
      customer,
      items,
      total,
      orderId
    }).then((success) => {
      if (success) {
        console.log('Email de confirmação enviado com sucesso!');
      } else {
        console.log('Erro ao enviar email de confirmação');
      }
    });
    
    setStep('success');
    setTimeout(() => {
      onClearCart();
      onClose();
    }, 5000);
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText('00020126580014BR.GOV.BCB.PIX136366c7a8f-a3e5-4c58-b4db-7b23d85d72e85204000053039865802BR5925SUPPPOWER SUPLEMENTOS6009SAO PAULO62290525PEDIDO123456789012634567890120630401D7');
  };

  if (step === 'success') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Pedido Confirmado!</h2>
          <p className="text-gray-600 mb-4">
            Seu pedido foi recebido e será processado em breve.
          </p>
          <p className="text-sm text-gray-500">
            Você receberá um email com os detalhes do pedido.
          </p>
        </div>
      </div>
    );
  }

  if (step === 'payment') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
        <div className="bg-white w-full max-w-md h-full overflow-y-auto">
          <div className="p-6 border-b">
            <div className="flex items-center">
              <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded mr-2">
                <ArrowLeft size={24} />
              </button>
              <h2 className="text-2xl font-bold">Pagamento PIX</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">QR Code PIX</h3>
              <div className="bg-gray-200 w-48 h-48 mx-auto mb-4 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">QR Code PIX</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Escaneie o QR Code ou copie o código PIX abaixo
              </p>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-xs break-all text-gray-700 mb-2">
                  OLHA O PIX
                </p>
                <button
                  onClick={copyPixCode}
                  className="flex items-center justify-center w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
                >
                  <Copy size={16} className="mr-2" />
                  Copiar Código PIX
                </button>
              </div>
              
              <div className="text-left bg-orange-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">Resumo do Pedido:</h4>
                {items.map(item => (
                  <div key={item.id} className="flex justify-between text-sm mb-1">
                    <span>{item.quantity}x {item.name}</span>
                    <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-2 font-semibold">
                  <div className="flex justify-between">
                    <span>Total:</span>
                    <span className="text-orange-500">R$ {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handlePayment}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
              >
                Confirmar Pagamento
              </button>
              
              <p className="text-xs text-gray-500 mt-4">
                Após o pagamento, seu pedido será confirmado automaticamente
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex items-center">
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded mr-2">
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-2xl font-bold">Dados de Entrega</h2>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo *
            </label>
            <input
              type="text"
              required
              value={customer.name}
              onChange={(e) => setCustomer({...customer, name: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              required
              value={customer.email}
              onChange={(e) => setCustomer({...customer, email: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefone *
            </label>
            <input
              type="tel"
              required
              value={customer.phone}
              onChange={(e) => setCustomer({...customer, phone: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CEP *
              </label>
              <input
                type="text"
                required
                value={customer.address.cep}
                onChange={(e) => setCustomer({
                  ...customer, 
                  address: {...customer.address, cep: e.target.value}
                })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Estado *
              </label>
              <input
                type="text"
                required
                value={customer.address.state}
                onChange={(e) => setCustomer({
                  ...customer, 
                  address: {...customer.address, state: e.target.value}
                })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cidade *
            </label>
            <input
              type="text"
              required
              value={customer.address.city}
              onChange={(e) => setCustomer({
                ...customer, 
                address: {...customer.address, city: e.target.value}
              })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bairro *
            </label>
            <input
              type="text"
              required
              value={customer.address.neighborhood}
              onChange={(e) => setCustomer({
                ...customer, 
                address: {...customer.address, neighborhood: e.target.value}
              })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rua *
              </label>
              <input
                type="text"
                required
                value={customer.address.street}
                onChange={(e) => setCustomer({
                  ...customer, 
                  address: {...customer.address, street: e.target.value}
                })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número *
              </label>
              <input
                type="text"
                required
                value={customer.address.number}
                onChange={(e) => setCustomer({
                  ...customer, 
                  address: {...customer.address, number: e.target.value}
                })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Complemento
            </label>
            <input
              type="text"
              value={customer.address.complement}
              onChange={(e) => setCustomer({
                ...customer, 
                address: {...customer.address, complement: e.target.value}
              })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold mt-6"
          >
            Continuar para Pagamento
          </button>
        </form>
      </div>
    </div>
  );
};