import CTAButton from "./CTAButton";

const FinalCTA = () => {
  return (
    <section id="final-offer" className="py-20 px-4 bg-dark-lighter">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Pronto para transformar sua carreira?
        </h2>
        <p className="text-gray-300 mb-8">
          Não perca a oportunidade de se tornar um especialista em Inteligência Artificial e Automação. Inscreva-se agora e aproveite a oferta especial!
        </p>
        <CTAButton>Inscreva-se Hoje!</CTAButton>
      </div>
    </section>
  );
};

export default FinalCTA;
