import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const ExperienceCard = ({ title, company, period, description }: ExperienceCardProps) => {
  return (
    <Card className="backdrop-blur-sm bg-white/10 border-white/20">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{company} • {period}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
};