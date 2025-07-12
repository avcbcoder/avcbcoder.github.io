import React from "react";
import { MapPin, Calendar, Award } from "lucide-react";

const ExperienceTab: React.FC = () => {
  const experiences = [
    {
      company: "Tripadvisor",
      position: "Software Engineer 2",
      location: "Remote, India",
      duration: "May 2023 - Present",
      highlights: [
        "Designed and implemented the Auto Selection of Cover Photos feature using ML models for 100K+ photo albums. Awarded Tripadvisor Engineering Hero Award.",
        "Upgraded billing system to generate invoices for 20K+ hotel partners, enhancing revenue margin by ~$2M (~2% increase).",
        "Re-architected on-premises Jobs architecture and migrated 100+ jobs to AWS modernized architecture.",
      ],
      isAwardWinner: true,
    },
    {
      company: "Google",
      position: "Software Engineer",
      location: "Bengaluru, India",
      duration: "May 2022 - May 2023",
      highlights: [
        "Worked on YouTube Ads Autocreative team, helping advertisers generate engaging video ads.",
        "Introduced distributed messaging queue to automate creation of short bumper ads (<6 seconds).",
        "Designed system to recommend bumper ads to advertisers for easier campaign integration.",
      ],
      isAwardWinner: false,
    },
    {
      company: "ShareChat",
      position: "Software Engineer",
      location: "Bengaluru, India",
      duration: "Jan 2021 - May 2022",
      highlights: [
        "Optimized engagement metrics processing, reducing computation time from 10 minutes to <20 seconds. Received Rookie Rockstar Award.",
        "Designed feed ranking models and optimized Redis caching, reducing feed computation time by 80%.",
        "Developed APIs for App Feed supporting multiple content feeds with category-specific access.",
      ],
      isAwardWinner: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 d2:text-white mb-1">
          Professional Experience
        </h2>
        <p className="text-sm text-gray-600 d2:text-gray-400">
          Building scalable systems at world-class companies
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 d2:from-blue-800 d2:via-purple-800 d2:to-green-800"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              experience={exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineItem: React.FC<{ experience: any; isLast: boolean }> = ({
  experience,
  isLast,
}) => {
  const getCompanyColor = (company: string) => {
    switch (company) {
      case "Tripadvisor":
        return "border-green-500 bg-green-500";
      case "Google":
        return "border-blue-500 bg-blue-500";
      case "ShareChat":
        return "border-purple-500 bg-purple-500";
      default:
        return "border-blue-500 bg-blue-500";
    }
  };

  return (
    <div className="relative flex items-start">
      {/* Timeline dot */}
      <div
        className={`relative z-10 flex items-center justify-center w-8 h-8 bg-white d2:bg-gray-800 border-2 ${
          getCompanyColor(experience.company).split(" ")[0]
        } rounded-full mr-4 flex-shrink-0`}
      >
        <div
          className={`w-3 h-3 ${
            getCompanyColor(experience.company).split(" ")[1]
          } rounded-full`}
        ></div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 d2:text-white mb-1">
              {experience.position}
            </h3>
            <div className="inline-block px-2 py-1 rounded-full text-sm font-medium bg-gray-100 d2:bg-gray-600 text-gray-700 d2:text-gray-300 mb-2">
              {experience.company}
            </div>
            <div className="flex items-center text-gray-600 d2:text-gray-400 text-sm space-x-4 mb-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {experience.location}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {experience.duration}
              </div>
            </div>
          </div>
          {experience.isAwardWinner && (
            <div className="flex items-center text-yellow-500 ml-4">
              <Award className="w-5 h-5" />
            </div>
          )}
        </div>

        <div className="space-y-3">
          {experience.highlights.map((highlight: string, idx: number) => (
            <div key={idx} className="flex items-start">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  getCompanyColor(experience.company).split(" ")[1]
                } mt-2 mr-3 flex-shrink-0`}
              ></div>
              <p className="text-gray-700 d2:text-gray-300 text-sm leading-relaxed">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTab;
