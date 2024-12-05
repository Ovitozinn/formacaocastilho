import PricingCard from "../PricingCard";

const MobileOffer = () => {
  return (
    <section id="offer-section" className="py-12 px-4 bg-dark-lighter md:hidden">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6 gradient-text">
          Oferta Especial
        </h2>
        
        <PricingCard
          title="Formação Completa em IA"
          price="199"
          originalPrice="997"
          features={[
            "Acesso a TODOS os cursos",
            "Mentoria em grupo semanal",
            "Certificados individuais",
            "Bônus exclusivos",
            "Acesso vitalício",
            "Atualizações gratuitas"
          ]}
          isPopular={true}
          description="🔥 OFERTA ESPECIAL DE LANÇAMENTO 2024 🔥\n\nGaranta agora sua vaga com mais de 80% de desconto!"
        />
      </div>
    </section>
  );
};

export default MobileOffer;