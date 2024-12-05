import React from 'react';
import CTAButton from './CTAButton';

const FinalCTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 gradient-text">
          Pronto para Transformar sua Carreira?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Não perca mais tempo - cada dia é uma oportunidade para começar sua jornada na IA.
        </p>
        <CTAButton
          onClick={() => window.open('https://pay.kirvano.com/186d210d-4150-4fb3-9643-fc870759dda3', '_blank')}
        >
          Começar Agora
        </CTAButton>
      </div>
    </section>
  );
};

export default FinalCTA;