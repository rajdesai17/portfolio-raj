import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  className?: string;
}

export const ProjectCard = ({ title, description, tags, link, className }: ProjectCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "transform transition-all duration-300 hover:-translate-y-2",
        className
      )}
    >
      <Card className="h-full backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-sm rounded-full bg-primary/20 text-primary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  );
};