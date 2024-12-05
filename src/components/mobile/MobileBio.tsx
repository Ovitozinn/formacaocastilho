import { Instagram, Linkedin, Youtube } from "lucide-react";

const MobileBio = () => {
  return (
    <section className="py-10 px-4 bg-gradient-to-b from-dark to-dark-lighter md:hidden">
      <div className="container mx-auto">
        <div className="space-y-6">
          <div className="animate-fade-in">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 gradient-text">
              Quem é o Castilho?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-300">
              <p className="glass p-3 rounded-lg">
                Com formação em Análise e Desenvolvimento de Sistemas, iniciei sua carreria no marketing.
                Porém me encontrei na análise de Dados, onde conseguiu seu primeiro emprego na área.
              </p>
              <p className="glass p-3 rounded-lg">
                Logo me encontrei num plato, queria ganhar mais e trabalhar menos.
                Tentei de tudo, literalmente!
              </p>
              <p className="glass p-3 rounded-lg">
                Até que encontrei a inteligência Artificial, que tem uma curva de aprendizado muito rápida.
                Hoje só fecho os contratos que EU QUERO!
              </p>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-4">
            <a 
              href="https://www.linkedin.com/notifications/?filter=all" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 glass rounded-full hover:scale-110 transition-transform"
            >
              <Linkedin className="w-4 h-4 text-primary" />
            </a>
            <a 
              href="https://www.instagram.com/castilho.ia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 glass rounded-full hover:scale-110 transition-transform"
            >
              <Instagram className="w-4 h-4 text-primary" />
            </a>
            <a 
              href="https://www.youtube.com/@gruposenaai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 glass rounded-full hover:scale-110 transition-transform"
            >
              <Youtube className="w-4 h-4 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileBio;