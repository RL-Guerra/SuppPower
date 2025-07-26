import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Copy, Loader, CreditCard, Lock } from 'lucide-react';
import { CartItem, Customer } from '../types';
import { sendOrderConfirmationEmail } from '../services/emailService';
import { fetchAddressByCep, formatCep, validateCep } from '../services/viaCepService';
import { processCardPayment } from '../services/paymentService';

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
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isLoadingCep, setIsLoadingCep] = useState(false);
  const [cepError, setCepError] = useState('');
  const [paymentError, setPaymentError] = useState('');
  const [cardErrors, setCardErrors] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
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

  const handleCepChange = async (cep: string) => {
    const formattedCep = formatCep(cep);
    setCustomer({
      ...customer, 
      address: { ...customer.address, cep: formattedCep }
    });
    
    setCepError('');
    
    // Se o CEP estiver completo, busca o endereço
    if (validateCep(formattedCep)) {
      setIsLoadingCep(true);
      
      const addressData = await fetchAddressByCep(formattedCep);
      
      if (addressData) {
        setCustomer(prev => ({
          ...prev,
          address: {
            ...prev.address,
            street: addressData.logradouro || '',
            neighborhood: addressData.bairro || '',
            city: addressData.localidade || '',
            state: addressData.uf || '',
            cep: formattedCep
          }
        }));
        setCepError('');
      } else {
        setCepError('CEP não encontrado. Verifique e tente novamente.');
      }
      
      setIsLoadingCep(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateCep(customer.address.cep)) {
      setCepError('Por favor, insira um CEP válido');
      return;
    }
    
    setStep('payment');
  };

  const handlePayment = async () => {
    setPaymentError('');
    setIsProcessingPayment(true);
    
    let paymentSuccess = false;
    
    if (paymentMethod === 'card') {
      // Validar dados do cartão antes de processar
      const errors = validateCardDataWithErrors(cardData);
      if (Object.values(errors).some(error => error !== '')) {
        setCardErrors(errors);
        setIsProcessingPayment(false);
        return;
      }
      
      // Processar pagamento com cartão
      paymentSuccess = await processCardPayment({
        cardData,
        amount: total,
        customer,
        items
      });
    } else {
      // Para PIX, simular confirmação após 2 segundos
      await new Promise(resolve => setTimeout(resolve, 2000));
      paymentSuccess = true;
    }
    
    setIsProcessingPayment(false);
    
    if (!paymentSuccess) {
      setPaymentError('Erro no processamento do pagamento. Verifique os dados e tente novamente.');
      return;
    }
    
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

  const validateCardDataWithErrors = (cardData: any) => {
    const errors = {
      number: '',
      name: '',
      expiry: '',
      cvv: ''
    };

    // Validar número do cartão
    const cardNumber = cardData.number.replace(/\s/g, '');
    if (!cardNumber) {
      errors.number = 'Número do cartão é obrigatório';
    } else if (cardNumber.length < 13 || cardNumber.length > 19) {
      errors.number = 'Número do cartão deve ter entre 13 e 19 dígitos';
    }

    // Validar nome
    if (!cardData.name) {
      errors.name = 'Nome no cartão é obrigatório';
    } else if (cardData.name.length < 2) {
      errors.name = 'Nome deve ter pelo menos 2 caracteres';
    }

    // Validar validade
    if (!cardData.expiry) {
      errors.expiry = 'Validade é obrigatória';
    } else {
      const [month, year] = cardData.expiry.split('/');
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;

      if (!month || !year || 
          parseInt(month) < 1 || parseInt(month) > 12) {
        errors.expiry = 'Validade inválida';
      } else if (parseInt(year) < currentYear ||
          (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
        errors.expiry = 'Cartão vencido';
      }
    }

    // Validar CVV
    if (!cardData.cvv) {
      errors.cvv = 'CVV é obrigatório';
    } else if (cardData.cvv.length < 3 || cardData.cvv.length > 4) {
      errors.cvv = 'CVV deve ter 3 ou 4 dígitos';
    }

    return errors;
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const copyPixCode = () => {
    const pixCode = '00020126580014BR.GOV.BCB.PIX136366c7a8f-a3e5-4c58-b4db-7b23d85d72e85204000053039865802BR5925SUPPPOWER SUPLEMENTOS6009SAO PAULO62290525PEDIDO123456789012634567890120630401D7';
    navigator.clipboard.writeText(pixCode);
    
    // Feedback visual
    const button = document.querySelector('.copy-button');
    if (button) {
      button.textContent = 'Copiado!';
      setTimeout(() => {
        button.textContent = 'Copiar Código PIX';
      }, 2000);
    }
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
          <p className="text-sm text-gray-500 mb-2">
            Você receberá um email com os detalhes do pedido.
          </p>
          <p className="text-xs text-orange-500">
            Verifique também sua caixa de spam.
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
              <h2 className="text-2xl font-bold">Pagamento</h2>
            </div>
          </div>
          
          <div className="p-6">
            {/* Seleção do método de pagamento */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Escolha o método de pagamento:</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-4 border-2 rounded-lg flex flex-col items-center transition-colors ${
                    paymentMethod === 'pix' 
                      ? 'border-orange-500 bg-orange-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <Copy size={24} className={paymentMethod === 'pix' ? 'text-orange-500' : 'text-gray-600'} />
                  <span className={`mt-2 font-semibold ${paymentMethod === 'pix' ? 'text-orange-500' : 'text-gray-600'}`}>
                    PIX
                  </span>
                </button>
                
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border-2 rounded-lg flex flex-col items-center transition-colors ${
                    paymentMethod === 'card' 
                      ? 'border-orange-500 bg-orange-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <CreditCard size={24} className={paymentMethod === 'card' ? 'text-orange-500' : 'text-gray-600'} />
                  <span className={`mt-2 font-semibold ${paymentMethod === 'card' ? 'text-orange-500' : 'text-gray-600'}`}>
                    Cartão
                  </span>
                </button>
              </div>
            </div>

            {/* Formulário de pagamento baseado no método selecionado */}
            {paymentMethod === 'pix' ? (
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
                    00020126580014BR.GOV.BCB.PIX136366c7a8f-a3e5-4c58-b4db-7b23d85d72e85204000053039865802BR5925SUPPPOWER SUPLEMENTOS6009SAO PAULO62290525PEDIDO123456789012634567890120630401D7
                  </p>
                  <button
                    onClick={copyPixCode}
                    className="copy-button flex items-center justify-center w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <Copy size={16} className="mr-2" />
                    Copiar Código PIX
                  </button>
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Lock size={20} className="mr-2 text-green-500" />
                  Dados do Cartão (Seguro)
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Número do Cartão *
                    </label>
                    <input
                      type="text"
                      value={cardData.number}
                      onChange={(e) => setCardData({
                        ...cardData, 
                        number: formatCardNumber(e.target.value)
                      })}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        cardErrors.number ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      required
                    />
                    {cardErrors.number && (
                      <p className="text-red-500 text-sm mt-1">{cardErrors.number}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome no Cartão *
                    </label>
                    <input
                      type="text"
                      value={cardData.name}
                      onChange={(e) => setCardData({
                        ...cardData, 
                        name: e.target.value.toUpperCase()
                      })}
                      placeholder="NOME COMO NO CARTÃO"
                      className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        cardErrors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      required
                    />
                    {cardErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{cardErrors.name}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Validade *
                      </label>
                      <input
                        type="text"
                        value={cardData.expiry}
                        onChange={(e) => setCardData({
                          ...cardData, 
                          expiry: formatExpiry(e.target.value)
                        })}
                        placeholder="MM/AA"
                        maxLength={5}
                        className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                          cardErrors.expiry ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        required
                      />
                      {cardErrors.expiry && (
                        <p className="text-red-500 text-sm mt-1">{cardErrors.expiry}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV *
                      </label>
                      <input
                        type="text"
                        value={cardData.cvv}
                        onChange={(e) => setCardData({
                          ...cardData, 
                          cvv: e.target.value.replace(/\D/g, '')
                        })}
                        placeholder="123"
                        maxLength={4}
                        className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                          cardErrors.cvv ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        required
                      />
                      {cardErrors.cvv && (
                        <p className="text-red-500 text-sm mt-1">{cardErrors.cvv}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center text-green-700 text-sm">
                    <Lock size={16} className="mr-2" />
                    <span>Seus dados estão protegidos com criptografia SSL</span>
                  </div>
                </div>
              </div>
            )}
              
            {paymentError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{paymentError}</p>
              </div>
            )}
              
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
              disabled={isProcessingPayment || (paymentMethod === 'card' && (!cardData.number || !cardData.name || !cardData.expiry || !cardData.cvv))}
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              {isProcessingPayment ? (
                <>
                  <Loader className="animate-spin mr-2" size={20} />
                  Processando...
                </>
              ) : (
                <>
                  {paymentMethod === 'card' ? <CreditCard className="mr-2" size={20} /> : <Copy className="mr-2" size={20} />}
                  Confirmar Pagamento
                </>
              )}
            </button>
              
            <p className="text-xs text-gray-500 mt-4 text-center">
              {paymentMethod === 'card' 
                ? 'Pagamento processado de forma segura. Você receberá um email de confirmação.'
                : 'Após o pagamento, seu pedido será confirmado automaticamente e você receberá um email de confirmação.'
              }
            </p>
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
              placeholder="Digite seu nome completo"
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
              placeholder="seu@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefone/WhatsApp *
            </label>
            <input
              type="tel"
              required
              value={customer.phone}
              onChange={(e) => setCustomer({...customer, phone: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="(18) 98162-1064"
            />
          </div>
          
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-4">Endereço de Entrega</h3>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CEP *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={customer.address.cep}
                  onChange={(e) => handleCepChange(e.target.value)}
                  className={`w-full border rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    cepError ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="00000-000"
                  maxLength={9}
                />
                {isLoadingCep && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Loader className="animate-spin text-orange-500" size={16} />
                  </div>
                )}
              </div>
              {cepError && (
                <p className="text-red-500 text-sm mt-1">{cepError}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
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
                placeholder="SP"
              />
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
                placeholder="São Paulo"
              />
            </div>
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
              placeholder="Centro"
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
                placeholder="Rua das Flores"
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
                placeholder="123"
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
              placeholder="Apto 101, Bloco A (opcional)"
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoadingCep}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold mt-6 transition-colors"
          >
            {isLoadingCep ? 'Buscando endereço...' : 'Continuar para Pagamento'}
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            Ao continuar, você receberá um email de confirmação com todos os detalhes do pedido.
          </p>
        </form>
      </div>
    </div>
  );
};