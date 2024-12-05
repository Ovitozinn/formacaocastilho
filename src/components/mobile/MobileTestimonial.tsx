const MobileTestimonial = () => {
  return (
    <section className="py-8 px-4 bg-dark md:hidden">
      <div className="container mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center gradient-text">
          Resultados Reais
        </h2>
        <div className="glass p-4 rounded-lg max-w-sm mx-auto">
          <div className="space-y-2 text-sm sm:text-base text-gray-300">
            <p className="font-semibold text-primary mb-2">
              Em menos de 20 dias:
            </p>
            <p>✅ Primeiro contrato: R$ 3.000,00</p>
            <p>✅ Segundo contrato: R$ 1.800,00</p>
            <p className="text-primary font-semibold mt-4">
              Total: R$ 4.800,00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileTestimonial;