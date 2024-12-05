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
    <section className="py-32 relative overflow-hidden bg-dark">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(155,135,245,0.05))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight animate-fade-in">
            O que você vai <span className="gradient-text">dominar</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Desenvolva habilidades práticas e valiosas para se destacar no mercado de IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {learningPoints.map((point, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6 p-6 rounded-xl transition-all duration-300 hover:bg-white/[0.02]">
                <div className="p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white/90">{point.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-[0_0_50px_rgba(155,135,245,0.1)] animate-scale-in backdrop-blur-sm">
            <p className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight text-center">
              Comece sua jornada agora
            </p>
            <p className="text-lg text-gray-300 mb-8 text-center">
              Entre para nossa comunidade e tenha acesso ao conhecimento necessário para se destacar 
              no mercado de IA. Não perca mais tempo - cada dia é uma oportunidade.
            </p>
            <div className="flex justify-center">
              <a
                href="https://pay.kirvano.com/186d210d-4150-4fb3-9643-fc870759dda3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-primary/25"
              >
                Começar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;