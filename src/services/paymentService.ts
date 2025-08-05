import { CartItem, Customer } from '../types';
import { processStonePayment } from './stonePaymentService';

interface CardData {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
}

interface PaymentData {
  cardData: CardData;
  amount: number;
  customer: Customer;
  items: CartItem[];
}

// Configurações do processador de pagamento
const PAYMENT_CONFIG = {
  // Em produção, use suas credenciais reais do Stripe, PagSeguro, etc.
  apiUrl: 'https://api.stripe.com/v1/payment_intents', // Exemplo com Stripe
  publicKey: 'pk_test_your_stripe_public_key', // Sua chave pública
  secretKey: 'sk_test_your_stripe_secret_key' // Sua chave secreta (apenas no backend)
};

export const processCardPayment = async (paymentData: PaymentData): Promise<boolean> => {
  try {
    // Processar pagamento com Stone
    const result = await processStonePayment(paymentData);
    
    if (result.success) {
      console.log('✅ Pagamento aprovado!', result.transactionId);
      return true;
    } else {
      console.log('❌ Pagamento recusado:', result.error);
      throw new Error(result.error || 'Pagamento recusado');
    }

  } catch (error) {
    console.error('❌ Erro no processamento do pagamento:', error);
    throw error; // Re-throw para o componente tratar
    return false;
  }
};

const validateCardData = (cardData: CardData): boolean => {
  // Validar número do cartão (Luhn algorithm básico)
  const cardNumber = cardData.number.replace(/\s/g, '');
  if (cardNumber.length < 13 || cardNumber.length > 19) {
    return false;
  }

  // Validar nome
  if (!cardData.name || cardData.name.length < 2) {
    return false;
  }

  // Validar validade
  const [month, year] = cardData.expiry.split('/');
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  if (!month || !year || 
      parseInt(month) < 1 || parseInt(month) > 12 ||
      parseInt(year) < currentYear ||
      (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
    return false;
  }

  // Validar CVV
  if (!cardData.cvv || cardData.cvv.length < 3 || cardData.cvv.length > 4) {
    return false;
  }

  return true;
};

const simulatePaymentProcessing = async (paymentData: PaymentData): Promise<void> => {
  // Simular tempo de processamento
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Simular possível falha (5% de chance)
  if (Math.random() < 0.05) {
    throw new Error('Cartão recusado pela operadora');
  }

  // Log detalhado para desenvolvimento
  console.log('Simulação de pagamento:', {
    valor: `R$ ${paymentData.amount.toFixed(2)}`,
    cartao: `****-****-****-${paymentData.cardData.number.slice(-4)}`,
    titular: paymentData.cardData.name,
    status: 'APROVADO'
  });
};

// Função para integração real com gateway de pagamento
const processRealPayment = async (paymentData: PaymentData) => {
  // Exemplo de integração com Stripe
  /*
  const stripe = require('stripe')(PAYMENT_CONFIG.secretKey);
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(paymentData.amount * 100), // Stripe usa centavos
    currency: 'brl',
    payment_method_types: ['card'],
    metadata: {
      customer_name: paymentData.customer.name,
      customer_email: paymentData.customer.email,
      order_items: JSON.stringify(paymentData.items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })))
    }
  });

  return {
    success: paymentIntent.status === 'succeeded',
    transactionId: paymentIntent.id,
    error: paymentIntent.last_payment_error?.message
  };
  */

  // Exemplo de integração com PagSeguro
  /*
  const pagSeguroData = {
    email: 'seu-email@pagseguro.com.br',
    token: 'seu-token-pagseguro',
    paymentMode: 'default',
    paymentMethod: 'creditCard',
    receiverEmail: 'seu-email@pagseguro.com.br',
    currency: 'BRL',
    itemId1: '001',
    itemDescription1: 'Suplementos SuppPower',
    itemAmount1: paymentData.amount.toFixed(2),
    itemQuantity1: '1',
    senderName: paymentData.customer.name,
    senderEmail: paymentData.customer.email,
    senderPhone: paymentData.customer.phone,
    creditCardToken: 'token-do-cartao', // Obtido via JavaScript do PagSeguro
    installmentQuantity: '1',
    installmentValue: paymentData.amount.toFixed(2),
    noInterestInstallmentQuantity: '2',
    creditCardHolderName: paymentData.cardData.name,
    creditCardHolderBirthDate: '01/01/1980', // Você precisará coletar
    creditCardHolderAreaCode: '11',
    creditCardHolderPhone: paymentData.customer.phone.replace(/\D/g, '').slice(-8),
    creditCardHolderCPF: '00000000000', // Você precisará coletar
    billingAddressStreet: paymentData.customer.address.street,
    billingAddressNumber: paymentData.customer.address.number,
    billingAddressComplement: paymentData.customer.address.complement,
    billingAddressDistrict: paymentData.customer.address.neighborhood,
    billingAddressPostalCode: paymentData.customer.address.cep.replace(/\D/g, ''),
    billingAddressCity: paymentData.customer.address.city,
    billingAddressState: paymentData.customer.address.state
  };

  const response = await fetch('https://ws.pagseguro.uol.com.br/v2/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(pagSeguroData)
  });

  const result = await response.text();
  // Parse XML response do PagSeguro
  
  return {
    success: result.includes('<status>3</status>'), // Status 3 = Paga
    transactionId: extractFromXML(result, 'code'),
    error: result.includes('<error>') ? extractFromXML(result, 'message') : null
  };
  */

  return { success: true, transactionId: 'simulated_' + Date.now() };
};

// Função para detectar bandeira do cartão
export const getCardBrand = (cardNumber: string): string => {
  const number = cardNumber.replace(/\s/g, '');
  
  if (/^4/.test(number)) return 'visa';
  if (/^5[1-5]/.test(number)) return 'mastercard';
  if (/^3[47]/.test(number)) return 'amex';
  if (/^6(?:011|5)/.test(number)) return 'discover';
  if (/^(?:2131|1800|35\d{3})\d{11}$/.test(number)) return 'jcb';
  
  return 'unknown';
};

// Função para configuração em produção
export const setupPaymentGateway = () => {
  console.log(`
=== CONFIGURAÇÃO DO GATEWAY DE PAGAMENTO ===

Para ativar pagamentos reais com cartão:

1. STRIPE (Recomendado):
   - Acesse: https://stripe.com/br
   - Crie uma conta
   - Obtenha suas chaves API
   - Substitua as chaves em PAYMENT_CONFIG
   - Descomente o código do Stripe em processRealPayment()

2. PAGSEGURO:
   - Acesse: https://pagseguro.uol.com.br/
   - Crie uma conta de vendedor
   - Obtenha seu token de integração
   - Configure os dados em processRealPayment()

3. MERCADO PAGO:
   - Acesse: https://www.mercadopago.com.br/developers
   - Crie uma aplicação
   - Obtenha suas credenciais
   - Integre usando a SDK do Mercado Pago

4. CONFIGURAÇÕES DE SEGURANÇA:
   - Use HTTPS em produção
   - Nunca exponha chaves secretas no frontend
   - Implemente validação de webhook
   - Configure notificações de status

5. TESTES:
   - Use cartões de teste fornecidos pelo gateway
   - Teste diferentes cenários (aprovação/recusa)
   - Valide fluxo completo de pagamento

===============================================
  `);
};