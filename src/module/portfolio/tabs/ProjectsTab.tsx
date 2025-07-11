import React from "react";
import { ExternalLink, Github, Zap, Users } from "lucide-react";

const ProjectsTab: React.FC = () => {
  const projects = [
    {
      title: "AI Powered Interview Simulator",
      description:
        "AI-driven platform that simulates real-time mock interviews, provides coding practice, and delivers personalized feedback using models like Llama and DeepSeek.",
      technologies: ["AI/ML", "Llama", "DeepSeek", "React", "Node.js"],
      link: "#",
      github: "#",
      highlights: [
        "Real-time mock interview simulation",
        "Personalized feedback system",
        "Coding practice integration",
        "AI-powered assessment",
      ],
      color: "blue",
    },
    {
      title: "Collab - Web App",
      description:
        "A collaborative web application enabling users to host watch parties, allowing them to watch YouTube videos and listen to Spotify songs with others in real time.",
      technologies: [
        "React",
        "Node.js",
        "WebSockets",
        "YouTube API",
        "Spotify API",
      ],
      link: "#",
      github: "#",
      highlights: [
        "Real-time synchronization",
        "Multi-platform support",
        "Social watch parties",
        "Cross-platform compatibility",
      ],
      color: "purple",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
          Featured Projects
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Innovative solutions built with cutting-edge technology
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  const colorClasses = {
    blue: "from-blue-500 to-cyan-600",
    purple: "from-purple-500 to-pink-600",
  };

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-3">
            {project.description}
          </p>
        </div>
        <div className="flex items-center space-x-1 ml-2">
          <a
            href={project.link}
            className="p-1.5 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
          >
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={project.github}
            className="p-1.5 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
          >
            <Github className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="mb-3">
        <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Key Features
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {project.highlights.map((highlight: string, idx: number) => (
            <div
              key={idx}
              className="flex items-center text-xs text-gray-600 dark:text-gray-400"
            >
              <Zap className="w-2 h-2 mr-1 text-yellow-500" />
              {highlight}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech: string, idx: number) => (
          <span
            key={idx}
            className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTab;
