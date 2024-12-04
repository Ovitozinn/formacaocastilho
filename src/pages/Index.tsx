import { Bot, Brain, Code, Users } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Avançada",
      description: "Aprenda os fundamentos e aplicações práticas de IA, Machine Learning e Deep Learning"
    },
    {
      icon: Code,
      title: "Automação Inteligente",
      description: "Desenvolva sistemas automatizados baseados em IA para otimizar processos"
    },
    {
      icon: Users,
      title: "Mentoria em Grupo",
      description: "Suporte personalizado e networking com profissionais da área"
    },
    {
      icon: Bot,
      title: "Projetos Práticos",
      description: "Construa seu portfólio desenvolvendo projetos do mundo real"
    }
  ];

  const pricingPlans = [
    {
      title: "Curso Completo",
      price: "199",
      features: [
        "Acesso vitalício ao conteúdo",
        "Certificado de conclusão",
        "Suporte da comunidade",
        "Projetos práticos"
      ]
    },
    {
      title: "Pacote Premium",
      price: "299",
      features: [
        "Tudo do Curso Completo",
        "Mentoria personalizada",
        "Acesso a workshops exclusivos",
        "Networking premium"
      ],
      isPopular: true
    }
  ];

  return (
    <div className="bg-dark text-white">
      <HeroSection />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Por que escolher nosso curso?
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Desenvolvemos um programa completo para você dominar as tecnologias mais demandadas do mercado
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-dark-lighter">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Planos disponíveis
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Escolha o plano ideal para sua jornada de aprendizado
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                {...plan}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;