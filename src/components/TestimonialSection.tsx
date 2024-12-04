import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="py-12 px-4 bg-dark-lighter">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
          Ainda com dúvida? Olha esse aluno!
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="w-full md:w-1/3">
            <img
              src="/lovable-uploads/88f315b6-d4c7-4e0e-89c4-bb56d5505236.png"
              alt="WhatsApp Feedback"
              className="rounded-lg shadow-lg w-full max-w-[300px] mx-auto"
            />
          </div>
          <div className="w-full md:w-2/3 glass p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Em menos de 20 dias, fechou 2 contratos! 🎉
            </h3>
            <p className="text-lg mb-4 text-gray-300">
              Parabéns Lucas! Seu sucesso é a prova de que com dedicação e o conhecimento certo, 
              resultados extraordinários são possíveis.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>✅ Primeiro contrato: R$ 3.000,00</p>
              <p>✅ Segundo contrato: R$ 1.800,00</p>
              <p className="text-primary font-semibold mt-4">
                Total: R$ 7.700,00 em menos de 20 dias!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
