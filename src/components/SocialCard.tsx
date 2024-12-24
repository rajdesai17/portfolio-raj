import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SocialCardProps {
  icon: React.ReactNode;
  name: string;
  link: string;
  className?: string;
}

export const SocialCard = ({ icon, name, link, className }: SocialCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "transform transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <Card className="p-4 backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 transition-colors duration-300">
        <div className="flex items-center gap-3">
          {icon}
          <span className="font-medium">{name}</span>
        </div>
      </Card>
    </a>
  );
};