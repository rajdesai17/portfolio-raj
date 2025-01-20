import { Mail } from "lucide-react";
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <SocialCard
              icon={
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.32zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
                </svg>
              }
              name="Dev.to"
              link="https://dev.to/rajoninternet"
            />
            <SocialCard
              icon={
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z" />
                </svg>
              }
              name="Medium"
              link="https://medium.com/@rajoninternet"
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
                title: "GiftMatch",
                description: "GiftMatch is an intelligent gift recommendation platform built with React, TypeScript, and Supabase, powered by Google's Gemini AI API to deliver personalized gift suggestions based on personality traits and preferences.",
                tags: ["ReactJS", "NodeJS", "ExpressJS", "TailwindCSS", "Supabase", "Gemini API"],
                githubLink: "https://github.com/rajdesai17/GiftMatch",
                thumbnail: "/projects/giftmatch.png",
                previewLink: "https://gift-recommender-beta.vercel.app/",
              },
              {
                id: 2,
                title: "VConnect",
                description: "VConnect is a gamified web platform that connects volunteers with organizers by offering event management tools, a points-based reward system (AURA), and social features to make volunteering engaging and rewarding.",
                tags: ["ReactJS", "NodeJS", "ExpressJS", "TailwindCSS", "Firebase"],
                githubLink: "https://github.com/rajdesai17/Vconnect",
                thumbnail: "/projects/vconnect.png",
                previewLink: "https://vconnect-ecru.vercel.app/",
              },
              {
                id: 3,
                title: "BLCassets",
                description: "A decentralized platform for tokenizing and trading real estate assets on the Polygon Amoy testnet. This platform enables users to create, list, and trade real estate assets as digital tokens with blockchain-backed ownership verification.",
                tags: ["NextJS", "Typescript", "EtherJS", "Solidity", "MongoDB", "IPFS"],
                githubLink: "https://github.com/rajdesai17/Digital-Assets-Management",
                thumbnail: "/projects/blcassets.png",
                previewLink: "", // No preview link
              },
              {
                id: 4,
                title: "EcoPlace",
                description: "EcoScore is a platform that provides real-time sustainability scores for e-commerce products, empowering consumers and businesses to make eco-friendly decisions.",
                tags: ["ReactJS, NodeJS, ExpressJS, Firebase"],
                githubLink: "https://github.com/rajdesai17/EcoPlace",
                thumbnail: "/projects/ecoplace.png",
                previewLink: "https://eco-place-cyan.vercel.app/", // No preview link
              },
              {
                id: 5,
                title: "ToDoMax",
                description: "A minimalist daily task tracking app built with React Native and Expo. Track your daily tasks, visualize progress, and share your achievements on social media. Unlike traditional to-do apps, this application provides a unique day-centric approach to productivity tracking",
                tags: ["React-native"],
                githubLink: "https://github.com/rajdesai17/ToDoMAX",
                thumbnail: "/projects/ToDoMax.jpg",
                previewLink: "", // No preview link
              },
              {
                id: 6,
                title: "Wall of Advice",
                description: "A digital community board where people can anonymously share and discover wisdom through colorful sticky notes on an infinite canvas.",
                tags: ["React 18", "TypeScript", "NextJS", "Supabase", "Tailwind CSS"],
                githubLink: "https://github.com/rajdesai17/wall-of-advice",
                thumbnail: "/projects/wallofadvice.png",
                previewLink: "", // No preview link
              },
              {
                id: 7,
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