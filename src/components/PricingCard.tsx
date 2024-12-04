import { Check } from "lucide-react";
import CTAButton from "./CTAButton";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard = ({ title, price, features, isPopular }: PricingCardProps) => {
  return (
    <div
      className={cn(
        "p-6 rounded-xl backdrop-blur-sm border transition-all duration-300",
        "transform hover:scale-105 animate-fade-in",
        isPopular 
          ? "bg-primary/10 border-primary" 
          : "bg-white/5 border-white/10"
      )}
    >
      {isPopular && (
        <span className="px-3 py-1 text-sm font-medium text-primary bg-primary/20 rounded-full mb-4 inline-block">
          Mais Popular
        </span>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">R$ {price}</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="w-5 h-5 text-primary mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <CTAButton
        variant={isPopular ? "primary" : "secondary"}
        className="w-full"
      >
        Começar agora
      </CTAButton>
    </div>
  );
};

export default PricingCard;