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
        thumbnail: "/projects/blcassets.png" // Update path
      },
      {
        id: 2,
        title: "ToDoMax",
        description: "A minimalist daily task tracking app built with React Native and Expo. Track your daily tasks, visualize progress, and share your achievements on social media. Unlike traditional to-do apps, this application provides a unique day-centric approach to productivity tracking",
        tags: ["React-native"],
        githubLink: "https://github.com/rajdesai17/ToDoMAX",
        thumbnail: "/projects/ToDoMax.jpg"
      },
      {
        id: 3,
        title: "Wall of Advice",
        description: "A digital community board where people can anonymously share and discover wisdom through colorful sticky notes on an infinite canvas.",
        tags: ["React 18", "TypeScript", "NextJS", "Supabase", "Tailwind CSS"],
        githubLink: "https://github.com/rajdesai17/wall-of-advice",
        thumbnail: "/projects/wallofadvice.png"
      },
      {
        id: 4,
        title: "Wall of Advice",
        description: "A digital community board where people can anonymously share and discover wisdom through colorful sticky notes on an infinite canvas.",
        tags: ["React 18", "TypeScript", "NextJS", "Supabase", "Tailwind CSS"],
        githubLink: "https://github.com/rajdesai17/wall-of-advice",
        thumbnail: "/projects/wallofadvice.png"
      }
    ].map((project) => (
      <ProjectCard
        key={project.id}
        title={project.title}
        description={project.description}
        tags={project.tags}
        githubLink={project.githubLink}
        previewLink="#"
        thumbnail={project.thumbnail || "/placeholder-image.jpg"}
      />
    ))}
  </div>
</section>
{/* Experience Section */}
<section id="resume" className="space-y-8">
  <h2 className="text-3xl font-bold">Experience</h2>
  <div className="relative">
    {/* Timeline Line */}
    <div className="absolute left-4 top-0 h-full w-1 bg-gray-700"></div>
    <div className="space-y-8">
      <div className="relative pl-12">
        {/* Connector Dot */}
        <div className="absolute left-0 top-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
        </div>
        <ExperienceCard
          title="Community Management Team"
          company="HackArCode"
          period="Aug 2024 - Sep 2024"
          description="Successfully managed and grew the Hackarcode Discord community, fostering a vibrant and engaged environment through interactive events, responsive communication, and proactive outreach."
        />
      </div>
      <div className="relative pl-12">
        {/* Connector Dot */}
        <div className="absolute left-0 top-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
        </div>
        <ExperienceCard
          title="Open Source Contributor"
          company="Social (Formerly Script Foundation)"
          period="Jun 2024 - Aug 2024"
          description="Contributed to open-source projects, enhancing my technical skills and contributing to the broader developer community."
        />
      </div>
      <div className="relative pl-12">
        {/* Connector Dot */}
        <div className="absolute left-0 top-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
        </div>
        <ExperienceCard
          title="Influencer Marketing"
          company="MyBranz"
          period="Jan 2023 - Jun 2023"
          description="Led influencer marketing campaigns, managed relationships with key influencers, and contributed to user acquisition strategies."
        />
      </div>
      <div className="relative pl-12">
        {/* Connector Dot */}
        <div className="absolute left-0 top-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
        </div>
        <ExperienceCard
          title="User Acquisition Specialist"
          company="Better Opinions"
          period="Aug 2022 - Oct 2022"
          description="Led user acquisition efforts, driving significant growth in user base."
        />
      </div>
    </div>
  </div>
</section>
        {/* Certificates Section */}
{/* Certificates Section */}
<section id="certificates" className="space-y-8">
  <h2 className="text-3xl font-bold">Certificates</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-xl font-bold">AWS APAC - Solutions Architecture Job Simulation</h3>
      <p className="text-gray-400">Issued Dec 2024</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-xl font-bold">I Love Hackathon: Pune Web3 Edition</h3>
      <p className="text-gray-400">Issued Dec 2024</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-xl font-bold">HTM 5</h3>
      <p className="text-gray-400">Issued Aug 2024</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-xl font-bold">Social Summer of Code</h3>
      <p className="text-gray-400">Issued Aug 2024</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-xl font-bold">Responsive Web Design</h3>
      <p className="text-gray-400">Issued May 2024</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-xl font-bold">Ninjacart Hackathon</h3>
      <p className="text-gray-400">Issued Apr 2024</p>
    </div>
  </div>
</section>
      </div>
    </div>
  );
};

export default Index;