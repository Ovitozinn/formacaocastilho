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
    <section className="py-24 px-4 bg-gradient-to-b from-dark to-dark-lighter relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-hover/5" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 gradient-text animate-fade-in">
            Transforme seu Futuro Profissional
          </h2>
          <p className="text-2xl text-gray-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Domine as habilidades mais valiosas do mercado e destaque-se na era da IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {learningPoints.map((point, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in hover:bg-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-primary/10">
                  <point.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">{point.title}</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center glass p-10 rounded-3xl animate-scale-in">
          <p className="text-3xl font-bold text-primary mb-6">
            Não espere mais para transformar sua carreira
          </p>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Entre agora para nossa comunidade e tenha acesso a todo conhecimento necessário 
            para se destacar no mercado de IA. Cada dia que passa é uma oportunidade perdida 
            de começar sua transformação profissional.
          </p>
          <a
            href="https://pay.kirvano.com/186d210d-4150-4fb3-9643-fc870759dda3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-hover text-white text-xl font-bold px-12 py-4 rounded-xl transform hover:scale-105 transition-all duration-300"
          >
            Começar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;