import React from "react";
import { Download, Code, Database, Cloud, Zap } from "lucide-react";

const ResumeTab: React.FC = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "C++", "Python", "TypeScript", "JavaScript"],
      icon: <Code className="w-5 h-5" />,
      color: "blue",
    },
    {
      category: "Frontend Technologies",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
      icon: <Zap className="w-5 h-5" />,
      color: "green",
    },
    {
      category: "Backend & Databases",
      skills: ["Node.js", "MongoDB", "PostgreSQL", "Redis", "Snowflake"],
      icon: <Database className="w-5 h-5" />,
      color: "purple",
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Git", "Gradle"],
      icon: <Cloud className="w-5 h-5" />,
      color: "orange",
    },
    {
      category: "AI & ML",
      skills: ["LLM", "OpenAI API", "Langchain", "NLP", "AI Agents"],
      icon: <Zap className="w-5 h-5" />,
      color: "pink",
    },
  ];

  const colorClasses = {
    blue: "from-blue-500 to-cyan-600",
    green: "from-green-500 to-emerald-600",
    purple: "from-purple-500 to-indigo-600",
    orange: "from-orange-500 to-red-600",
    pink: "from-pink-500 to-rose-600",
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
          Technical Skills
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Comprehensive expertise across modern technology stack
        </p>
        <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md text-sm">
          <Download className="w-4 h-4 mr-1" />
          Download Resume
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        {skillCategories.map((category, index) => (
          <SkillCard
            key={index}
            category={category}
            colorClasses={colorClasses}
          />
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-4 mt-6">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
          Competitive Programming
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800 dark:text-white">
              Expert
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Codeforces
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              Rating: 1645
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800 dark:text-white">
              5 Star
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              CodeChef
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              Rating: 2049
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800 dark:text-white">
              2144
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              HackerRank
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              Best Rank: 141
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCard: React.FC<{ category: any; colorClasses: any }> = ({
  category,
  colorClasses,
}) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300">
      <div className="flex items-center mb-3">
        <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400 mr-3">
          {category.icon}
        </div>
        <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
          {category.category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill: string, idx: number) => (
          <span
            key={idx}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ResumeTab;
