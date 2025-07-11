import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const LeftPanel: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 transition-all duration-300 border border-gray-200 dark:border-gray-700">
      <div className="text-center">
        {/* Profile Picture */}
        <div className="relative mx-auto mb-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 dark:bg-gray-700 p-0.5">
            <img
              src="/profile.jpg"
              alt="Ankit Verma"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
        </div>

        {/* Name and Title */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
          Ankit Verma
        </h1>
        <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">
          Software Engineer
        </p>

        {/* Location */}
        <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-6">
          <MapPin className="w-3 h-3 mr-1" />
          <span className="text-xs">Remote, India</span>
        </div>

        {/* Bio */}
        <div className="mb-6">
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed text-center">
            Passionate software engineer with 3+ years of experience building
            scalable systems at top tech companies. Specialized in full-stack
            development, AI/ML integration, and system optimization.
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-3">
          <div className="flex items-center justify-center space-x-1">
            <SocialLink
              href="tel:+918700234342"
              icon={<Phone className="w-4 h-4" />}
              color="green"
            />
            <SocialLink
              href="mailto:ankitvermamat@gmail.com"
              icon={<Mail className="w-4 h-4" />}
              color="blue"
            />
            <SocialLink
              href="https://linkedin.com/in/ankitvermamat"
              icon={<Linkedin className="w-4 h-4" />}
              color="blue"
            />
            <SocialLink
              href="https://github.com/ankitvermamat"
              icon={<Github className="w-4 h-4" />}
              color="gray"
            />
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Java", "Python", "React", "AWS", "Node.js"].map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink: React.FC<{
  href: string;
  icon: React.ReactNode;
  color: "green" | "blue" | "gray";
}> = ({ href, icon, color }) => {
  const colorClasses = {
    green:
      "hover:bg-green-50 dark:hover:bg-green-900 hover:text-green-600 dark:hover:text-green-400",
    blue: "hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400",
    gray: "hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-200",
  };

  return (
    <a
      href={href}
      className={`flex items-center justify-center p-2 rounded-lg transition-all duration-200 text-gray-600 dark:text-gray-400 ${colorClasses[color]}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default LeftPanel;
