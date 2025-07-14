interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: boolean;
}

export const fetchAddressByCep = async (cep: string): Promise<ViaCepResponse | null> => {
  try {
    // Remove caracteres não numéricos do CEP
    const cleanCep = cep.replace(/\D/g, '');
    
    // Verifica se o CEP tem 8 dígitos
    if (cleanCep.length !== 8) {
      throw new Error('CEP deve ter 8 dígitos');
    }
    
    // Faz a requisição para a API ViaCEP
    const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
    
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    
    const data: ViaCepResponse = await response.json();
    
    // Verifica se o CEP foi encontrado
    if (data.erro) {
      throw new Error('CEP não encontrado');
    }
    
    return data;
  } catch (error) {
    console.error('Erro ao buscar CEP:', error);
    return null;
  }
};

export const formatCep = (cep: string): string => {
  // Remove caracteres não numéricos
  const cleanCep = cep.replace(/\D/g, '');
  
  // Aplica a máscara XXXXX-XXX
  if (cleanCep.length <= 5) {
    return cleanCep;
  } else {
    return `${cleanCep.slice(0, 5)}-${cleanCep.slice(5, 8)}`;
  }
};

export const validateCep = (cep: string): boolean => {
  const cleanCep = cep.replace(/\D/g, '');
  return cleanCep.length === 8;
};