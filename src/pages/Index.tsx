import { Bot, Brain, Code, Users, TrendingUp, Globe, Cpu, LineChart } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import CastilhoBio from "@/components/CastilhoBio";
import FinalCTA from "@/components/FinalCTA";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import TestimonialSection from "@/components/TestimonialSection";

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
      price: "397",
      features: [
        "Automação de processos",
        "Integração de sistemas",
        "Workflows avançados",
        "Projetos práticos",
        "Certificado de conclusão"
      ]
    },
    {
      title: "Engenharia de Prompt",
      price: "197",
      features: [
        "Técnicas avançadas de prompt",
        "Otimização de resultados",
        "Cases práticos",
        "Frameworks de prompt",
        "Certificado de conclusão"
      ]
    },
    {
      title: "Prospecção e Fechamento",
      price: "97",
      features: [
        "Estratégias de vendas",
        "Negociação efetiva",
        "Scripts prontos",
        "Templates de propostas",
        "Certificado de conclusão"
      ]
    },
    {
      title: "Formação Agentes IA",
      price: "897",
      features: [
        "Criação de agentes autônomos",
        "Integração com APIs",
        "Automação avançada",
        "Projetos completos",
        "Certificado de conclusão"
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
      "Bônus exclusivos de lançamento",
      "Acesso vitalício ao conteúdo",
      "Atualizações gratuitas"
    ],
    isPopular: true,
    description: "🔥 OFERTA ESPECIAL DE LANÇAMENTO 2024 🔥\n\nGaranta agora sua vaga com mais de 80% de desconto!"
  };

  const aiGrowthStats = [
    {
      icon: TrendingUp,
      title: "Crescimento Exponencial",
      description: "Previsão de crescimento de 38% ao ano até 2030 no mercado de IA"
    },
    {
      icon: Globe,
      title: "Impacto Global",
      description: "90% das empresas planejam aumentar investimentos em IA nos próximos 3 anos"
    },
    {
      icon: Cpu,
      title: "Transformação Digital",
      description: "75% das empresas já utilizam ou planejam utilizar IA em seus processos"
    },
    {
      icon: LineChart,
      title: "Oportunidades",
      description: "Aumento de 71% na demanda por profissionais especializados em IA"
    }
  ];

  return (
    <div className="bg-dark text-white">
      <HeroSection />
      
      {/* Features Section */}
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

      {/* Pricing Section */}
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
                🚀 Oferta Imperdível - Tempo Limitado 🚀
              </h3>
              <p className="text-gray-300">
                A revolução da IA está acontecendo agora. Não perca a oportunidade de se tornar um especialista em Inteligência Artificial com o melhor preço já oferecido!
              </p>
            </div>
            <PricingCard
              {...completePackage}
              className="animate-scale-in transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* AI Growth Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-dark to-dark-lighter">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              O Futuro é Agora: A Revolução da IA
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A Inteligência Artificial está redefinindo todas as indústrias e criando 
              oportunidades sem precedentes. Profissionais que dominam essa tecnologia 
              estão liderando a maior transformação tecnológica da história.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiGrowthStats.map((stat, index) => (
              <div 
                key={index}
                className="glass p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{stat.title}</h3>
                <p className="text-gray-300">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl font-bold text-primary mb-8">
              Não espere para começar - o momento é agora!
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Enquanto você lê isso, milhares de profissionais estão se capacitando em IA. 
              A diferença entre liderar ou seguir está nas decisões que você toma hoje.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section - New addition */}
      <TestimonialSection />

      {/* Bio Section */}
      <CastilhoBio />

      {/* What You Will Learn Section */}
      <WhatYouWillLearn />

      {/* Final CTA Section */}
      <FinalCTA />
    </div>
  );
};

export default Index;
