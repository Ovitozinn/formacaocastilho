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

  const individualCourses = [
    {
      title: "Desenvolvedor n8n",
      price: "197",
      originalPrice: "397",
      features: [
        "Automação de processos",
        "Integração de sistemas",
        "Workflows avançados",
        "Projetos práticos"
      ]
    },
    {
      title: "Engenharia de Prompt",
      price: "97",
      originalPrice: "197",
      features: [
        "Técnicas avançadas de prompt",
        "Otimização de resultados",
        "Cases práticos",
        "Frameworks de prompt"
      ]
    },
    {
      title: "Prospecção e Fechamento",
      price: "47",
      originalPrice: "97",
      features: [
        "Estratégias de vendas",
        "Negociação efetiva",
        "Scripts prontos",
        "Templates de propostas"
      ]
    },
    {
      title: "Formação Agentes IA",
      price: "497",
      originalPrice: "897",
      features: [
        "Criação de agentes autônomos",
        "Integração com APIs",
        "Automação avançada",
        "Projetos completos"
      ]
    }
  ];

  const completePackage = {
    title: "Formação Completa em IA",
    price: "199",
    originalPrice: "997",
    features: [
      "Acesso a TODOS os cursos acima",
      "Mentoria em grupo semanal",
      "Certificados individuais",
      "Bônus exclusivos de lançamento"
    ],
    isPopular: true,
    description: "🔥 OFERTA ESPECIAL DE LANÇAMENTO 2024 🔥\nAproveite! Preço aumentará em breve!"
  };

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
            Cursos Disponíveis
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Escolha o módulo ideal para sua jornada ou aproveite a oferta especial da formação completa
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {individualCourses.map((course, index) => (
              <PricingCard
                key={index}
                {...course}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">
                🚀 Oferta Especial de Lançamento 🚀
              </h3>
              <p className="text-gray-300">
                Em comemoração ao lançamento da plataforma, estamos oferecendo um desconto especial para as primeiras turmas de 2024!
              </p>
            </div>
            <PricingCard
              {...completePackage}
              className="animate-scale-in transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
