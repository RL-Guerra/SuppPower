import { CartItem, Customer } from '../types';

interface EmailData {
  customer: Customer;
  items: CartItem[];
  total: number;
  orderId: string;
}

// Configuração do EmailJS
const EMAILJS_SERVICE_ID = 'service_gmail'; // Você precisará configurar no EmailJS
const EMAILJS_TEMPLATE_ID = 'template_order'; // Você precisará criar o template
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Sua chave pública do EmailJS

export const sendOrderConfirmationEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Para desenvolvimento/teste, vamos simular o envio
    const emailContent = generateEmailContent(data);
    
    console.log('=== EMAIL ENVIADO ===');
    console.log('Para:', data.customer.email);
    console.log('Cópia para:', 'guerraraphael77@gmail.com');
    console.log('Assunto: Confirmação de Pedido - SuppPower');
    console.log('Conteúdo:');
    console.log(emailContent);
    console.log('==================');
    
    // Simular delay de envio
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Em produção, descomente as linhas abaixo após configurar o EmailJS
    /*
    const emailjs = (await import('@emailjs/browser')).default;
    
    const templateParams = {
      to_email: data.customer.email,
      cc_email: 'guerraraphael77@gmail.com',
      customer_name: data.customer.name,
      order_id: data.orderId,
      total: data.total.toFixed(2),
      items_list: data.items.map(item => 
        `${item.name} (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2)}`
      ).join('\n'),
      delivery_address: formatAddress(data.customer.address),
      customer_phone: data.customer.phone,
      customer_email: data.customer.email,
      payment_method: 'PIX' // ou 'Cartão de Crédito'
    };
    
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    */
    
    return true;
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return false;
  }
};

const generateEmailContent = (data: EmailData): string => {
  const { customer, items, total, orderId } = data;
  
  return `
=== CONFIRMAÇÃO DE PEDIDO - SUPPPOWER ===

Olá ${customer.name}!

Seu pedido foi confirmado com sucesso!

DETALHES DO PEDIDO:
Número do pedido: ${orderId}
Data: ${new Date().toLocaleDateString('pt-BR')}

PRODUTOS COMPRADOS:
${items.map(item => 
  `• ${item.name} (Qtd: ${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2)}`
).join('\n')}

VALOR TOTAL: R$ ${total.toFixed(2)}

DADOS DO CLIENTE:
Nome: ${customer.name}
Email: ${customer.email}
Telefone: ${customer.phone}

ENDEREÇO DE ENTREGA:
${formatAddress(customer.address)}

FORMA DE PAGAMENTO: ${getPaymentMethodFromContext() || 'PIX'}

STATUS: Aguardando confirmação do pagamento

Em breve você receberá a confirmação do pagamento e o código de rastreamento.

Obrigado por escolher a SuppPower!

CONTATO:
WhatsApp: (11) 99999-9999
Email: contato@supppower.com.br
Instagram: @supppower

© 2025 SuppPower - Suplementos de Alta Performance
  `;
};

const getPaymentMethodFromContext = (): string => {
  // Em uma implementação real, você passaria o método de pagamento
  // Por enquanto, retornamos PIX como padrão
  return 'PIX';
};

const formatAddress = (address: any): string => {
  return `${address.street}, ${address.number}${address.complement ? ', ' + address.complement : ''}
${address.neighborhood}
${address.city} - ${address.state}
CEP: ${address.cep}`;
};

// Função para configuração do EmailJS em produção
export const setupEmailJS = () => {
  console.log(`
=== CONFIGURAÇÃO DO EMAILJS ===

Para ativar o envio real de emails:

1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita
3. Configure um serviço Gmail:
   - Email: guerraraphael77@gmail.com
   - Siga as instruções para autorizar o Gmail

4. Crie um template de email com as variáveis:
   - {{to_email}}
   - {{cc_email}} 
   - {{customer_name}}
   - {{order_id}}
   - {{total}}
   - {{items_list}}
   - {{delivery_address}}
   - {{customer_phone}}
   - {{customer_email}}

5. Copie as chaves e substitua no código:
   - Service ID
   - Template ID  
   - Public Key

6. Descomente o código de envio real no emailService.ts

================================
  `);
};