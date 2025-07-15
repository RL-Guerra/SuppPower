import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, Edit2, Trash2 } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  product: string;
  rating: number;
  comment: string;
  isUserReview?: boolean;
}

export const Contact: React.FC = () => {
  const [userReviews, setUserReviews] = useState<Review[]>([]);
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    product: '',
    rating: 0,
    comment: ''
  });

  // Avaliações fixas que sempre aparecem
  const fixedReviews: Review[] = [
    {
      id: 1,
      name: "Marcos Silva",
      product: "Nutren Protein Baunilha",
      rating: 5,
      comment: "Produto excelente! O Nutren Protein me ajudou muito na recuperação pós-treino. Recomendo!"
    },
    {
      id: 2,
      name: "Ana Costa",
      product: "Sundown Ômega 3 Plus",
      rating: 5,
      comment: "Ótimo atendimento e produtos de qualidade. O Ômega 3 chegou rapidinho e já estou sentindo os benefícios!"
    },
    {
      id: 3,
      name: "Roberto Lima",
      product: "Nutren Senior Chocolate",
      rating: 5,
      comment: "Minha esposa de 65 anos está usando o Nutren Senior e já notamos melhora na disposição. Muito bom!"
    },
    {
      id: 4,
      name: "Carla Santos",
      product: "Fibermais Colágeno Limão",
      rating: 4,
      comment: "Produto muito bom para regulação intestinal. O sabor limão é agradável e dissolve bem na água."
    },
    {
      id: 5,
      name: "João Pereira",
      product: "Sundown Vitamina C 1000mg",
      rating: 5,
      comment: "Desde que comecei a tomar, não fico mais gripado. Excelente custo-benefício com 180 comprimidos!"
    },
    {
      id: 6,
      name: "Maria Oliveira",
      product: "Colágeno Vital Proteins",
      rating: 4,
      comment: "Notei melhora na pele e nas unhas após 2 meses de uso. Sem sabor é perfeito para misturar em qualquer bebida."
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos da SuppPower.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/supppower', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com/supppower', '_blank');
  };

  const handleStarClick = (rating: number) => {
    setReviewForm({ ...reviewForm, rating });
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (reviewForm.name && reviewForm.product && reviewForm.rating && reviewForm.comment) {
      if (editingReview) {
        // Editando avaliação existente
        const updatedReviews = userReviews.map(review =>
          review.id === editingReview.id
            ? {
                ...review,
                name: reviewForm.name,
                product: reviewForm.product,
                rating: reviewForm.rating,
                comment: reviewForm.comment
              }
            : review
        );
        setUserReviews(updatedReviews);
        setEditingReview(null);
      } else {
        // Criando nova avaliação
        const newReview: Review = {
          id: Date.now(),
          name: reviewForm.name,
          product: reviewForm.product,
          rating: reviewForm.rating,
          comment: reviewForm.comment,
          isUserReview: true
        };
        setUserReviews([...userReviews, newReview]);
      }
      
      // Limpar formulário
      setReviewForm({
        name: '',
        product: '',
        rating: 0,
        comment: ''
      });
    }
  };

  const handleEditReview = (review: Review) => {
    setEditingReview(review);
    setReviewForm({
      name: review.name,
      product: review.product,
      rating: review.rating,
      comment: review.comment
    });
  };

  const handleDeleteReview = (reviewId: number) => {
    setUserReviews(userReviews.filter(review => review.id !== reviewId));
  };

  const handleCancelEdit = () => {
    setEditingReview(null);
    setReviewForm({
      name: '',
      product: '',
      rating: 0,
      comment: ''
    });
  };

  // Combinar avaliações fixas com as avaliações do usuário
  const allReviews = [...fixedReviews, ...userReviews];

  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  const renderStars = (rating: number, interactive = false, onStarClick?: (rating: number) => void) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <button
            key={i}
            type={interactive ? "button" : undefined}
            onClick={interactive && onStarClick ? () => onStarClick(i + 1) : undefined}
            className={`text-2xl transition-colors ${
              interactive ? 'hover:text-yellow-400 cursor-pointer' : ''
            } ${
              i < rating ? 'text-yellow-400' : 'text-gray-400'
            }`}
            disabled={!interactive}
          >
            ★
          </button>
        ))}
      </div>
    );
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {allReviews.map((review) => (
                <div key={review.id} className="bg-gray-800 p-6 rounded-xl relative">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {getInitial(review.name)}
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold">{review.name}</h4>
                      {renderStars(review.rating)}
                    </div>
                    {review.isUserReview && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditReview(review)}
                          className="text-blue-400 hover:text-blue-300 p-1"
                          title="Editar avaliação"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteReview(review.id)}
                          className="text-red-400 hover:text-red-300 p-1"
                          title="Excluir avaliação"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-300 italic mb-2">
                    "{review.comment}"
                  </p>
                  <p className="text-orange-500 text-sm">Produto: {review.product}</p>
                  {review.isUserReview && (
                    <p className="text-green-400 text-xs mt-2">✓ Sua avaliação</p>
                  )}
                </div>
              ))}
            </div>

            {/* Formulário para nova avaliação ou edição */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-center">
                {editingReview ? 'Editar sua avaliação' : 'Deixe sua avaliação'}
              </h4>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    className="bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    required
                  />
                  <select 
                    value={reviewForm.product}
                    onChange={(e) => setReviewForm({ ...reviewForm, product: e.target.value })}
                    className="bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    required
                  >
                    <option value="">Produto comprado</option>
                    <option value="Nutren Just Protein 280g">Nutren Just Protein 280g</option>
                    <option value="Nutren Protein Baunilha 800g">Nutren Protein Baunilha 800g</option>
                    <option value="Fibermais Colágeno Limão 300g">Fibermais Colágeno Limão 300g</option>
                    <option value="Nutren Senior Chocolate 740g">Nutren Senior Chocolate 740g</option>
                    <option value="Sundown Ômega 3 Plus 1000mg">Sundown Ômega 3 Plus 1000mg</option>
                    <option value="Sundown Vitamina C 1000mg">Sundown Vitamina C 1000mg</option>
                    <option value="Colágeno Vital Proteins">Colágeno Vital Proteins</option>
                  </select>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-300 mb-2">Sua avaliação:</p>
                  {renderStars(reviewForm.rating, true, handleStarClick)}
                </div>
                
                <textarea
                  placeholder="Conte sua experiência com nossos produtos..."
                  rows={4}
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
                  required
                ></textarea>
                
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    {editingReview ? 'Salvar Alterações' : 'Enviar Avaliação'}
                  </button>
                  {editingReview && (
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="px-6 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      Cancelar
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};