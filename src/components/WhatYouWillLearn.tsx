import { Bot, Building2, Code2, Cpu, DollarSign } from "lucide-react";

const WhatYouWillLearn = () => {
  const learningPoints = [
    {
      icon: Building2,
      title: "Monte sua Estrutura Profissional",
      description: "Aprenda a construir uma base sólida para seu negócio digital com IA"
    },
    {
      icon: Bot,
      title: "Crie Agentes Complexos com IA",
      description: "Desenvolva agentes autônomos avançados em questão de horas, não semanas"
    },
    {
      icon: DollarSign,
      title: "Projetos de Alto Valor",
      description: "Implemente soluções que valem mais de R$ 2.000 no mercado"
    },
    {
      icon: Code2,
      title: "Automações Inteligentes",
      description: "Construa sistemas que trabalham 24/7 com inteligência artificial"
    },
    {
      icon: Cpu,
      title: "Sistemas Complexos Simplificados",
      description: "Desenvolva soluções avançadas com poucos cliques usando IA"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-dark-lighter to-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            O que você irá aprender?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Domine as habilidades mais valiosas do mercado e transforme sua carreira com IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningPoints.map((point, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <point.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">{point.title}</h3>
              </div>
              <p className="text-gray-300">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-primary mb-4">
            Não perca mais tempo tentando aprender sozinho
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Entre agora para nossa comunidade e tenha acesso a todo conhecimento necessário para se destacar no mercado de IA
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;