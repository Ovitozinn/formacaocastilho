import { Instagram, Linkedin, Youtube } from "lucide-react";

const CastilhoBio = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-dark to-dark-lighter">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Quem é o Castilho?
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p className="glass p-4 rounded-lg">
                Com formação em Análise e Desenvolvimento de Sistemas, iniciei sua carreria no marketing.
                Porém me encontrei na análise de Dados, onde conseguiu seu primeiro emprego na área.
                Até conseguir um emprego como Analista de Inteligência de Mercado, onde aprendi e aprimorei
                meus conhecimentos sobre Business e Dados.
              </p>
              <p className="glass p-4 rounded-lg">
                Logo me encontrei num plato, queria ganhar mais e trabalhar menos.
                Tentei de tudo, literalmente!
                Abri loja de produtos naturais, lavei carros, fiz dropshipping, afiliado
                E nada funcionou...
              </p>
              <p className="glass p-4 rounded-lg">
                Até que encontrei a inteligência Artificial, que tem uma curva de aprendizado muito rápida.
                Logo iniciei a montar agentes IA e automações.
                Fechei meus primeiros contratos.
                Hoje só fecho os contratos que EU QUERO!
                E ensino diversas pessoas a transformarem sua vida em pouquissímo tempo com IA.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <a 
                href="https://www.linkedin.com/notifications/?filter=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:scale-110 transition-transform hover:bg-primary/20"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a 
                href="https://www.instagram.com/castilho.ia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:scale-110 transition-transform hover:bg-primary/20"
              >
                <Instagram className="w-6 h-6 text-primary" />
              </a>
              <a 
                href="https://www.youtube.com/@gruposenaai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:scale-110 transition-transform hover:bg-primary/20"
              >
                <Youtube className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-hover opacity-75 blur-2xl group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  <img 
                    src="/lovable-uploads/2b838388-adc5-44a9-9a07-87fa9c7a1c50.png"
                    alt="Castilho" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CastilhoBio;