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
                Com mais de uma década de experiência em tecnologia e inovação, 
                Castilho é um especialista reconhecido em Inteligência Artificial 
                e automação de processos.
              </p>
              <p className="glass p-4 rounded-lg">
                Fundador de múltiplas startups de sucesso e mentor de dezenas 
                de profissionais que hoje lideram projetos de IA em grandes 
                empresas, ele traz uma abordagem única que combina conhecimento 
                técnico profundo com visão estratégica de negócios.
              </p>
              <p className="glass p-4 rounded-lg">
                Sua missão é democratizar o conhecimento em IA e ajudar 
                profissionais a se destacarem neste mercado em explosão.
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
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-hover opacity-75 blur-2xl group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main image container */}
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  <img 
                    src="/lovable-uploads/2b838388-adc5-44a9-9a07-87fa9c7a1c50.png"
                    alt="Castilho" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay effect */}
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