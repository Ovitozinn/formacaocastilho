import { MessageSquare, Star } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-dark to-dark-lighter relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Ainda com dúvida? <span className="gradient-text">Veja este resultado!</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-16 md:w-24 h-16 md:h-24 bg-primary/10 rounded-full blur-2xl" />

            {/* Testimonial card */}
            <div className="relative glass rounded-xl md:rounded-2xl p-6 md:p-10 backdrop-blur-sm">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Lucas Henrique</h3>
                  <div className="flex items-center gap-1 text-primary">
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <img 
                  src="/lovable-uploads/88f315b6-d4c7-4e0e-89c4-bb56d5505236.png"
                  alt="Feedback do Lucas"
                  className="w-full rounded-lg md:rounded-xl shadow-lg mb-4 md:mb-6 border border-white/10"
                />
                
                <div className="space-y-4 md:space-y-6">
                  <div className="p-3 md:p-4 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-base md:text-lg font-semibold text-primary mb-1 md:mb-2">Primeiro Contrato:</p>
                    <p className="text-sm md:text-base text-gray-300">R$ 3.000 de implementação + R$ 500 de recorrência mensal</p>
                  </div>
                  
                  <div className="p-3 md:p-4 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-base md:text-lg font-semibold text-primary mb-1 md:mb-2">Segundo Contrato:</p>
                    <p className="text-sm md:text-base text-gray-300">R$ 1.800 de implementação + R$ 800 de recorrência mensal</p>
                  </div>
                </div>

                <p className="text-lg md:text-xl text-gray-200 italic">
                  "Em menos de 20 dias, consegui fechar 2 contratos graças ao conhecimento adquirido no curso!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;