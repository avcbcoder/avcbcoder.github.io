import React, { useState } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import FloatingElements from "./FloatingElements";

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-500">
      <FloatingElements />

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <LeftPanel />
            <div className="mt-6">
              <RightPanel activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-5 lg:gap-6 lg:h-screen lg:max-h-screen">
            <div className="lg:col-span-2">
              <LeftPanel />
            </div>
            <div className="lg:col-span-3">
              <RightPanel activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
