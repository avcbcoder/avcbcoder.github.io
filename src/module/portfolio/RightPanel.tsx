import React from "react";
import { Briefcase, Code, FileText, Trophy, Sun, Moon } from "lucide-react";
import ExperienceTab from "./tabs/ExperienceTab";
import ProjectsTab from "./tabs/ProjectsTab";
import ResumeTab from "./tabs/ResumeTab";
import AchievementsTab from "./tabs/AchievementsTab";
import { useTheme } from "@/context/ThemeContext";

interface RightPanelProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const RightPanel: React.FC<RightPanelProps> = ({ activeTab, setActiveTab }) => {
  const { theme, toggleTheme } = useTheme();

  const tabs = [
    {
      id: "experience",
      label: "Experience",
      icon: <Briefcase className="w-5 h-5" />,
    },
    { id: "projects", label: "Projects", icon: <Code className="w-5 h-5" /> },
    { id: "resume", label: "Resume", icon: <FileText className="w-5 h-5" /> },
    {
      id: "achievements",
      label: "Achievements",
      icon: <Trophy className="w-5 h-5" />,
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "experience":
        return <ExperienceTab />;
      case "projects":
        return <ProjectsTab />;
      case "resume":
        return <ResumeTab />;
      case "achievements":
        return <AchievementsTab />;
      default:
        return <ExperienceTab />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 lg:h-full border border-gray-200 dark:border-gray-700">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between overflow-x-auto scrollbar-hide">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <span className="mr-1">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="flex-shrink-0 px-4">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4 lg:p-6 lg:overflow-y-auto lg:h-full">
        <div className="animate-fadeIn">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default RightPanel;
