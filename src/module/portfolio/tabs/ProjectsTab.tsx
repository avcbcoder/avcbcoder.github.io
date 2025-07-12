import React from "react";
import { Github, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { projects } from "@/data/ankit";

// === ProjectCard Component ===
import { useRef } from "react";
import { URL_PREFIX } from "@/config";

const ProjectCard = ({ project, index, onHover, onLeave }) => {
  const containerRef = useRef<any>(null);

  const handleMouseMove = (e) => {
    if (
      containerRef.current == null ||
      containerRef.current.getBoundingClientRect == null
    )
      return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Clamp values between 0 and 100
    const clampedX = Math.min(100, Math.max(0, x));
    const clampedY = Math.min(100, Math.max(0, y));

    onHover(project.hoverImage, {
      x: Math.ceil(clampedX),
      y: Math.ceil(clampedY),
    });
  };

  return (
    <div
      ref={containerRef}
      className="group relative overflow-hidden bg-white border border-gray-200 hover:border-gray-200 transition-all duration-500 rounded-md overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={onLeave}
    >
      <div className="flex w-full">
        {/* Image Section */}
        <div className="relative w-2/5 overflow-hidden">
          <div className="relative h-full aspect-[16/9] overflow-hidden">
            <img
              src={`${URL_PREFIX}${project.backgroundImage}`}
              alt={project.title}
              className="w-auto h-full object-left transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
            <div className="absolute top-6 left-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-white text-sm font-medium">
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-3/5 p-8 flex flex-col">
          {/* Title and Description */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight">
              {project.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-4 gap-2 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {project.metrics.views}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Views
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">0 😔</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {project.metrics.built}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Built
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {project.metrics.lastUpdated}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Updated
              </div>
            </div>
            {/* <div className="flex items-center px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
              <Calendar className="w-4 h-4 text-gray-500 mr-2" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Built
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {project.metrics.built}
                </div>
              </div>
            </div>
            <div className="flex items-center px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
              <Clock className="w-4 h-4 text-gray-500 mr-2" />
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Updated
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {project.metrics.lastUpdated}
                </div>
              </div>
            </div> */}
          </div>

          {/* Tech Tags */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto flex items-center justify-between">
            <div className="flex space-x-4">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-200 group"
              >
                Open Project
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 border border-gray-300 text-gray-700 text-sm font-medium hover:border-gray-400 hover:text-gray-900 transition-colors duration-200"
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// === App Component ===
function App({ onProjectHover }: { onProjectHover: any }) {
  // const [hoveredImage, setHoveredImage] = React.useState(null);
  // const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleHover = (image, position) => {
    // setHoveredImage(image);
    // setMousePosition(position);
    onProjectHover(image, position);
  };

  const handleLeave = () => {
    // setHoveredImage(null);
    onProjectHover("", { x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600">
            {`A true engineer isn’t measured by the problems they solve, but by the products they build. I’ve created a few things outside of work. Let me know if any spark your interest.`}
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onHover={handleHover}
              onLeave={handleLeave}
            />
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              All projects are live and actively monitored
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>Live</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span>Open Source</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
