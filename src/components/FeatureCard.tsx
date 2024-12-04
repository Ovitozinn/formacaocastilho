import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10",
        "transform transition-all duration-300 hover:scale-105 hover:bg-white/10",
        "animate-fade-in",
        className
      )}
    >
      <Icon className="w-10 h-10 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;