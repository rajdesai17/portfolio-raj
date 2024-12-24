import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { SocialCard } from "@/components/SocialCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <div className="animate-pulse text-4xl font-bold text-primary">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container py-16 space-y-20">
        {/* Hero Section */}
        <section className="space-y-8 animate-fade-in">
          <h1 className="text-5xl font-bold">Hey, I'm [Your Name] 👋</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            A passionate developer focused on creating beautiful and functional web experiences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <SocialCard
              icon={<Github className="w-5 h-5" />}
              name="GitHub"
              link="#"
            />
            <SocialCard
              icon={<Linkedin className="w-5 h-5" />}
              name="LinkedIn"
              link="#"
            />
            <SocialCard
              icon={<Twitter className="w-5 h-5" />}
              name="Twitter"
              link="#"
            />
            <SocialCard
              icon={<Mail className="w-5 h-5" />}
              name="Email"
              link="mailto:#"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <ProjectCard
                key={i}
                title={`Project ${i}`}
                description="Description of the project goes here. You can add more details about what you built and the technologies used."
                tags={["React", "TypeScript", "Tailwind"]}
                link="#"
              />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="space-y-6">
            <ExperienceCard
              title="Senior Developer"
              company="Company Name"
              period="2020 - Present"
              description="Led development of key features and mentored junior developers."
            />
            <ExperienceCard
              title="Volunteer Tech Lead"
              company="Non-Profit Organization"
              period="2019 - 2020"
              description="Coordinated technical initiatives and managed a team of volunteers."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;