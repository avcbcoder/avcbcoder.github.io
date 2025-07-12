import React, { useState } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import FloatingElements from "./FloatingElements";
import ProjectOverlay from "./ProjectOverlay";

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [overlayProject, setOverlayProject] = useState({
    image: "",
    position: { x: 0, y: 0 },
  });

  const handleProjectHover = (image: string, position: { x: any; y: any }) => {
    setOverlayProject({ image, position });
  };

  return (
    <div className="w-screen h-screen bg-gray-200 d2:bg-gray-900 transition-all duration-500 lg:overflow-hidden p-0">
      <FloatingElements />
      <ProjectOverlay overlayProject={overlayProject} />

      <div className="w-full h-full lg:p-4">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <LeftPanel />
          <div className="mt-6">
            <RightPanel
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onProjectHover={() => {}}
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-6 lg:gap-6 lg:h-full">
          <div className="lg:col-span-2">
            <LeftPanel />
          </div>
          <div className="lg:col-span-4 lg:overflow-hidden">
            <RightPanel
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onProjectHover={handleProjectHover}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
