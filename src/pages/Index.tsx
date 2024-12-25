import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { SocialCard } from "@/components/SocialCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Navigation } from "@/components/Navigation";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
      <div className="container py-8 space-y-20">
        <Navigation />
        
        {/* Hero Section */}
        <section id="home" className="space-y-8 animate-fade-in">
          <h1 className="text-5xl font-bold">Hey, I'm Raj 👋</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            A passionate developer focused on creating beautiful and functional product experiences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <SocialCard
              icon={<Github className="w-5 h-5" />}
              name="GitHub"
              link="https://github.com/rajdesai17"
            />
            <SocialCard
              icon={<Linkedin className="w-5 h-5" />}
              name="LinkedIn"
              link="https://www.linkedin.com/in/raj-desai-b45797254/"
            />
            <SocialCard
              icon={<Twitter className="w-5 h-5" />}
              name="Twitter"
              link="https://x.com/rajoninternet"
            />
            <SocialCard
              icon={<Mail className="w-5 h-5" />}
              name="Email"
              link="mailto:itsrajdesai17@gmail.com"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "BLCassets",
                description: "A decentralized platform for tokenizing and trading real estate assets on the Polygon Amoy testnet. This platform enables users to create, list, and trade real estate assets as digital tokens with blockchain-backed ownership verification.",
                tags: ["NextJS", "Typescript", "EtherJS", "Solidity", "MongoDB", "IPFS"],
                githubLink: "https://github.com/rajdesai17/Digital-Assets-Management",
                thumbnail: "/projects/blcassets.png",
                previewLink: "", // No preview link
              },
              {
                id: 2,
                title: "ToDoMax",
                description: "A minimalist daily task tracking app built with React Native and Expo. Track your daily tasks, visualize progress, and share your achievements on social media. Unlike traditional to-do apps, this application provides a unique day-centric approach to productivity tracking",
                tags: ["React-native"],
                githubLink: "https://github.com/rajdesai17/ToDoMAX",
                thumbnail: "/projects/ToDoMax.jpg",
                previewLink: "", // No preview link
              },
              {
                id: 3,
                title: "Wall of Advice",
                description: "A digital community board where people can anonymously share and discover wisdom through colorful sticky notes on an infinite canvas.",
                tags: ["React 18", "TypeScript", "NextJS", "Supabase", "Tailwind CSS"],
                githubLink: "https://github.com/rajdesai17/wall-of-advice",
                thumbnail: "/projects/wallofadvice.png",
                previewLink: "", // No preview link
              },
              {
                id: 4,
                title: "Portfolio Website",
                description: "Developed a modern, responsive portfolio website to showcase projects and skills, leveraging Vite, TypeScript, React, shadcn-ui, and Tailwind CSS for a fast, type-safe, and aesthetically pleasing user experience.",
                tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn-ui"],
                githubLink: "https://github.com/rajdesai17/portfolio-raj",
                thumbnail: "/projects/portfolio.png",
                previewLink: "https://www.rajoninternet.tech/", // Preview link for portfolio website
              }
            ].map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubLink={project.githubLink}
                previewLink={project.previewLink ? project.previewLink : null} // Conditionally render preview link
                thumbnail={project.thumbnail || "/placeholder-image.jpg"}
              />
            ))}
          </div>
        </section>
        
        {/* Other sections (Experience, Certificates, etc.) */}

      </div>
    </div>
  );
};

export default Index;
