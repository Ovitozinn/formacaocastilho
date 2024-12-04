import { Github, Linkedin, Twitter } from "lucide-react";

const CastilhoBio = () => {
  return (
    <section className="py-24 px-4 bg-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Quem é o Castilho?
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Com mais de uma década de experiência em tecnologia e inovação, 
                Castilho é um especialista reconhecido em Inteligência Artificial 
                e automação de processos.
              </p>
              <p>
                Fundador de múltiplas startups de sucesso e mentor de dezenas 
                de profissionais que hoje lideram projetos de IA em grandes 
                empresas, ele traz uma abordagem única que combina conhecimento 
                técnico profundo com visão estratégica de negócios.
              </p>
              <p>
                Sua missão é democratizar o conhecimento em IA e ajudar 
                profissionais a se destacarem neste mercado em explosão.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:scale-110 transition-transform"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:scale-110 transition-transform"
              >
                <Twitter className="w-6 h-6 text-primary" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:scale-110 transition-transform"
              >
                <Github className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                alt="Castilho" 
                className="relative w-full aspect-[3/4] object-cover rounded-lg glass"
              />
              <div className="absolute inset-0 rounded-lg glass opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CastilhoBio;