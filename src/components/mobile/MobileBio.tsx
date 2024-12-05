import { Instagram, Linkedin, Youtube } from "lucide-react";

const MobileBio = () => {
  return (
    <section className="py-8 px-3 bg-gradient-to-b from-dark to-dark-lighter md:hidden">
      <div className="container mx-auto">
        <div className="space-y-4">
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold mb-3 gradient-text">
              Quem é o Castilho?
            </h2>
            <div className="relative mb-4">
              <div className="aspect-[3/4] overflow-hidden rounded-xl">
                <img 
                  src="/lovable-uploads/2b838388-adc5-44a9-9a07-87fa9c7a1c50.png"
                  alt="Castilho" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="glass p-3 rounded-lg">
                Com formação em Análise e Desenvolvimento de Sistemas, iniciei sua carreria no marketing.
                Porém me encontrei na análise de Dados, onde conseguiu seu primeiro emprego na área.
              </p>
              <p className="glass p-3 rounded-lg">
                Até que encontrei a inteligência Artificial, que tem uma curva de aprendizado muito rápida.
                Hoje só fecho os contratos que EU QUERO!
              </p>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
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