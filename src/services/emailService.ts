import { CartItem, Customer } from '../types';

interface EmailData {
  customer: Customer;
  items: CartItem[];
  total: number;
  orderId: string;
}

export const sendOrderConfirmationEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Simular envio de email - em produção, você integraria com um serviço real
    // como EmailJS, SendGrid, ou um backend próprio
    
    const emailContent = generateEmailContent(data);
    
    // Para demonstração, vamos simular o envio
    console.log('Email enviado para:', data.customer.email);
    console.log('Conteúdo do email:', emailContent);
    
    // Simular delay de envio
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return false;
  }
};

const generateEmailContent = (data: EmailData): string => {
  const { customer, items, total, orderId } = data;
  
  return `
    Olá ${customer.name}!
    
    Seu pedido foi confirmado com sucesso!
    
    DETALHES DO PEDIDO:
    Número do pedido: ${orderId}
    
    PRODUTOS:
    ${items.map(item => 
      `- ${item.name} (Qtd: ${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2)}`
    ).join('\n')}
    
    TOTAL: R$ ${total.toFixed(2)}
    
    DADOS DE ENTREGA:
    ${customer.name}
    ${customer.email}
    ${customer.phone}
    
    ${customer.address.street}, ${customer.address.number}
    ${customer.address.complement ? customer.address.complement + '\n' : ''}
    ${customer.address.neighborhood}
    ${customer.address.city} - ${customer.address.state}
    CEP: ${customer.address.cep}
    
    Obrigado por escolher a SuppPower!
    
    Em caso de dúvidas, entre em contato conosco:
    WhatsApp: (11) 99999-9999
    Email: contato@supppower.com.br
  `;
};

// Função para integração com EmailJS (exemplo)
export const sendEmailWithEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    // Exemplo de integração com EmailJS
    // Você precisaria instalar: npm install @emailjs/browser
    
    /*
    import emailjs from '@emailjs/browser';
    
    const templateParams = {
      to_email: data.customer.email,
      customer_name: data.customer.name,
      order_id: data.orderId,
      total: data.total.toFixed(2),
      items: data.items.map(item => 
        `${item.name} (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2)}`
      ).join('\n'),
      delivery_address: `${data.customer.address.street}, ${data.customer.address.number}, ${data.customer.address.neighborhood}, ${data.customer.address.city} - ${data.customer.address.state}, CEP: ${data.customer.address.cep}`
    };
    
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID', 
      templateParams,
      'YOUR_PUBLIC_KEY'
    );
    */
    
    return true;
  } catch (error) {
    console.error('Erro ao enviar email via EmailJS:', error);
    return false;
  }
};