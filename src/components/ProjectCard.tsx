import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  previewLink?: string;
  thumbnail: string;
  className?: string;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  githubLink,
  previewLink,
  thumbnail,
  className,
}: ProjectCardProps) => {
  return (
    <Card
      className={cn(
        "overflow-hidden transform transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
  <img
    src={thumbnail}
    alt={title}
    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
  />
</div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-sm rounded-full bg-primary/20 text-primary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="outline" size="sm">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </a>
          {previewLink && (
            <a
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};