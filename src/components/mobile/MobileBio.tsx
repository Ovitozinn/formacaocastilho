import { Instagram, Linkedin, Youtube } from "lucide-react";

const MobileBio = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-dark to-dark-lighter md:hidden">
      <div className="container mx-auto">
        <div className="space-y-6">
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 gradient-text">
              Quem é o Castilho?
            </h2>
            <div className="space-y-4 text-base text-gray-300">
              <p className="glass p-4 rounded-lg">
                Analista de Dados que se transformou em especialista em IA.
                Hoje ajudo pessoas a dominarem a Inteligência Artificial e
                conquistarem sua liberdade financeira.
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
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="https://www.instagram.com/castilho.ia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 glass rounded-full hover:scale-110 transition-transform"
            >
              <Instagram className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="https://www.youtube.com/@gruposenaai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 glass rounded-full hover:scale-110 transition-transform"
            >
              <Youtube className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileBio;