import { Check } from "lucide-react";
import CTAButton from "./CTAButton";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  features: string[];
  isPopular?: boolean;
  description?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PricingCard = ({ 
  title, 
  price, 
  originalPrice,
  features, 
  isPopular,
  description,
  className, 
  style 
}: PricingCardProps) => {
  const handleClick = () => {
    window.open("https://pay.kirvano.com/186d210d-4150-4fb3-9643-fc870759dda3", "_blank");
  };

  return (
    <div
      className={cn(
        "p-6 rounded-xl backdrop-blur-sm border transition-all duration-300",
        "transform hover:scale-105",
        isPopular 
          ? "bg-primary/10 border-primary shadow-lg shadow-primary/20" 
          : "bg-white/5 border-white/10",
        className
      )}
      style={style}
    >
      {isPopular && (
        <span className="px-3 py-1 text-sm font-medium text-primary bg-primary/20 rounded-full mb-4 inline-block animate-pulse">
          Oferta Limitada
        </span>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-4xl font-bold text-white">R$ {price}</span>
          {originalPrice && (
            <span className="text-lg text-gray-400 line-through">
              R$ {originalPrice}
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm text-primary mt-2">{description}</p>
        )}
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      {isPopular && (
        <CTAButton
          variant={isPopular ? "primary" : "secondary"}
          className="w-full"
          onClick={handleClick}
        >
          {isPopular ? "Garantir minha vaga" : "Começar agora"}
        </CTAButton>
      )}
    </div>
  );
};

export default PricingCard;