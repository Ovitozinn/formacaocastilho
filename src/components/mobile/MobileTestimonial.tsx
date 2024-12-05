const MobileTestimonial = () => {
  return (
    <section className="py-4 px-3 bg-dark md:hidden">
      <div className="container mx-auto">
        <h2 className="text-lg font-bold mb-3 text-center gradient-text">
          Resultados Reais
        </h2>
        <div className="glass p-4 rounded-lg max-w-sm mx-auto">
          <img
            src="/lovable-uploads/88f315b6-d4c7-4e0e-89c4-bb56d5505236.png"
            alt="WhatsApp Feedback"
            className="w-full h-auto rounded-lg mb-3"
          />
          <div className="space-y-2 text-sm text-gray-300">
            <p className="font-semibold text-primary mb-2">
              Em menos de 20 dias:
            </p>
            <p>✅ Primeiro contrato: R$ 3.000,00</p>
            <p>✅ Segundo contrato: R$ 1.800,00</p>
            <p className="text-primary font-semibold mt-3">
              Total: R$ 4.800,00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileTestimonial;