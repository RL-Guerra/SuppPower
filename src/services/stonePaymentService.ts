import axios from 'axios';
import { CartItem, Customer } from '../types';

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

interface StonePaymentResponse {
  success: boolean;
  transactionId?: string;
  error?: string;
  status?: string;
}

// Configurações da Stone
const STONE_CONFIG = {
  // URLs da Stone (sandbox para testes, production para produção)
  baseUrl: process.env.NODE_ENV === 'production' 
    ? 'https://api.stone.com.br' 
    : 'https://sandbox-api.stone.com.br',
  
  // Suas credenciais da Stone (configure no .env)
  applicationId: process.env.VITE_STONE_APPLICATION_ID || '',
  secretKey: process.env.VITE_STONE_SECRET_KEY || '',
  
  // Timeout para requisições
  timeout: 30000
};

export const processStonePayment = async (paymentData: PaymentData): Promise<StonePaymentResponse> => {
  try {
    console.log('🏦 Iniciando pagamento Stone...');
    
    // Validar configurações
    if (!STONE_CONFIG.applicationId || !STONE_CONFIG.secretKey) {
      throw new Error('Credenciais da Stone não configuradas');
    }

    // Validar dados do cartão
    if (!validateCardData(paymentData.cardData)) {
      throw new Error('Dados do cartão inválidos');
    }

    // Preparar dados para a Stone
    const stonePayload = prepareStonePayload(paymentData);
    
    // Fazer requisição para a Stone
    const response = await axios.post(
      `${STONE_CONFIG.baseUrl}/v1/transactions`,
      stonePayload,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${STONE_CONFIG.secretKey}`,
          'X-Application-Id': STONE_CONFIG.applicationId
        },
        timeout: STONE_CONFIG.timeout
      }
    );

    // Processar resposta
    const result = response.data;
    
    if (result.status === 'approved') {
      console.log('✅ Pagamento aprovado pela Stone!');
      return {
        success: true,
        transactionId: result.id,
        status: result.status
      };
    } else {
      console.log('❌ Pagamento recusado:', result.refuse_reason);
      return {
        success: false,
        error: result.refuse_reason || 'Pagamento recusado',
        status: result.status
      };
    }

  } catch (error: any) {
    console.error('❌ Erro no pagamento Stone:', error);
    
    // Tratar diferentes tipos de erro
    if (error.response) {
      // Erro da API da Stone
      const stoneError = error.response.data;
      return {
        success: false,
        error: stoneError.message || 'Erro no processamento do pagamento'
      };
    } else if (error.request) {
      // Erro de rede
      return {
        success: false,
        error: 'Erro de conexão. Tente novamente.'
      };
    } else {
      // Outros erros
      return {
        success: false,
        error: error.message || 'Erro interno'
      };
    }
  }
};

const prepareStonePayload = (paymentData: PaymentData) => {
  const { cardData, amount, customer, items } = paymentData;
  
  // Converter validade MM/YY para MMYY
  const [month, year] = cardData.expiry.split('/');
  const expirationDate = `${month}${year}`;
  
  // Preparar itens para a Stone
  const stoneItems = items.map((item, index) => ({
    id: item.id.toString(),
    title: item.name,
    unit_price: Math.round(item.price * 100), // Stone usa centavos
    quantity: item.quantity,
    tangible: true
  }));

  return {
    // Valor total em centavos
    amount: Math.round(amount * 100),
    
    // Dados do cartão
    card: {
      number: cardData.number.replace(/\s/g, ''),
      holder_name: cardData.name,
      expiration_date: expirationDate,
      cvv: cardData.cvv
    },
    
    // Dados do cliente
    customer: {
      name: customer.name,
      email: customer.email,
      phone: customer.phone.replace(/\D/g, ''),
      document_number: '', // CPF - você precisará coletar
      address: {
        street: customer.address.street,
        street_number: customer.address.number,
        complementary: customer.address.complement || '',
        neighborhood: customer.address.neighborhood,
        city: customer.address.city,
        state: customer.address.state,
        zipcode: customer.address.cep.replace(/\D/g, '')
      }
    },
    
    // Itens da compra
    items: stoneItems,
    
    // Configurações adicionais
    capture: true, // Capturar automaticamente
    installments: 1, // Parcelamento (1 = à vista)
    
    // Metadados para controle interno
    metadata: {
      order_id: `PED${Date.now()}`,
      source: 'supppower_website',
      customer_id: customer.email
    }
  };
};

const validateCardData = (cardData: CardData): boolean => {
  // Validar número do cartão
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

// Função para consultar status de uma transação
export const getStoneTransactionStatus = async (transactionId: string) => {
  try {
    const response = await axios.get(
      `${STONE_CONFIG.baseUrl}/v1/transactions/${transactionId}`,
      {
        headers: {
          'Authorization': `Bearer ${STONE_CONFIG.secretKey}`,
          'X-Application-Id': STONE_CONFIG.applicationId
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Erro ao consultar transação:', error);
    return null;
  }
};

// Função para estornar uma transação
export const refundStoneTransaction = async (transactionId: string, amount?: number) => {
  try {
    const payload = amount ? { amount: Math.round(amount * 100) } : {};
    
    const response = await axios.post(
      `${STONE_CONFIG.baseUrl}/v1/transactions/${transactionId}/refund`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${STONE_CONFIG.secretKey}`,
          'X-Application-Id': STONE_CONFIG.applicationId
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Erro ao estornar transação:', error);
    return null;
  }
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

// Configuração para produção
export const setupStonePayment = () => {
  console.log(`
=== CONFIGURAÇÃO DO PAGAMENTO STONE ===

Para ativar pagamentos reais com a Stone:

1. CREDENCIAIS DA STONE:
   - Acesse: https://dashboard.stone.com.br/
   - Faça login na sua conta Stone
   - Vá em "Integrações" > "API"
   - Copie seu Application ID e Secret Key

2. CONFIGURAR VARIÁVEIS DE AMBIENTE:
   Crie um arquivo .env na raiz do projeto:
   
   VITE_STONE_APPLICATION_ID=seu_application_id_aqui
   VITE_STONE_SECRET_KEY=sua_secret_key_aqui

3. AMBIENTE DE TESTES:
   - Use as credenciais de sandbox para testes
   - URL: https://sandbox-api.stone.com.br
   - Cartões de teste disponíveis na documentação

4. AMBIENTE DE PRODUÇÃO:
   - Use as credenciais de produção
   - URL: https://api.stone.com.br
   - Configure NODE_ENV=production

5. DOCUMENTAÇÃO STONE:
   - API: https://docs.stone.com.br/
   - Cartões de teste: https://docs.stone.com.br/docs/cartoes-de-teste
   - Webhooks: https://docs.stone.com.br/docs/webhooks

6. SEGURANÇA:
   - Nunca exponha suas chaves no frontend
   - Use HTTPS em produção
   - Implemente validação de webhook
   - Configure logs de transações

===============================================
  `);
};