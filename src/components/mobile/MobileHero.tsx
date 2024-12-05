import { Bot, Brain, Rocket } from "lucide-react";
import CTAButton from "../CTAButton";

const MobileHero = () => {
  const scrollToOffer = () => {
    const offerSection = document.querySelector('#offer-section');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden md:hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter to-dark" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex justify-center gap-3 mb-4 animate-fade-in">
          <Bot className="w-5 h-5 text-primary" />
          <Brain className="w-5 h-5 text-primary" />
          <Rocket className="w-5 h-5 text-primary" />
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 animate-fade-in">
          Domine a Inteligência Artificial
          <br />
          <span className="text-primary">e Automação</span>
        </h1>
        
        <p className="text-base text-gray-300 mb-6 animate-fade-in max-w-xs mx-auto">
          Transforme sua carreira com IA e automação.
          Aprenda a criar soluções inovadoras.
        </p>
        
        <div className="animate-fade-in">
          <CTAButton onClick={scrollToOffer}>Começar agora</CTAButton>
        </div>
      </div>
    </div>
  );
};

export default MobileHero;