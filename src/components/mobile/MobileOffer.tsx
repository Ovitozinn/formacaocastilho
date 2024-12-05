import PricingCard from "../PricingCard";
import { Building2, Bot, Code2, Cpu, DollarSign } from "lucide-react";

const MobileOffer = () => {
  const courses = [
    {
      icon: Building2,
      title: "Estrutura Profissional",
      price: "297"
    },
    {
      icon: Bot,
      title: "Agentes Complexos com IA",
      price: "297"
    },
    {
      icon: DollarSign,
      title: "Projetos de Alto Valor",
      price: "297"
    },
    {
      icon: Code2,
      title: "Automações Inteligentes",
      price: "297"
    },
    {
      icon: Cpu,
      title: "Sistemas Complexos",
      price: "297"
    }
  ];

  return (
    <section id="offer-section" className="py-6 px-3 bg-dark-lighter md:hidden">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold text-center mb-4 gradient-text">
          Cursos Disponíveis
        </h2>

        <div className="space-y-4 mb-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center gap-3">
                <course.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-white">{course.title}</span>
              </div>
              <span className="text-sm text-gray-400">R$ {course.price}</span>
            </div>
          ))}
        </div>
        
        <h2 className="text-xl font-bold text-center mb-4 gradient-text">
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
          description="OFERTA ESPECIAL DE LANÇAMENTO 2024 • Garanta agora sua vaga com mais de 80% de desconto!"
          className="max-w-sm mx-auto"
        />
      </div>
    </section>
  );
};

export default MobileOffer;