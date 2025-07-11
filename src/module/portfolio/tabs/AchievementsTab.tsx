import React from "react";
import { Trophy, Award, Medal, Star } from "lucide-react";

const AchievementsTab: React.FC = () => {
  const achievements = [
    {
      title: "Tripadvisor Engineering Hero Award",
      description:
        "Recognized for designing and implementing the Auto Selection of Cover Photos feature using ML models.",
      year: "2024",
      category: "Professional",
      icon: <Award className="w-6 h-6" />,
      color: "gold",
    },
    {
      title: "ShareChat Rookie Rockstar Award",
      description:
        "Awarded for optimizing engagement metrics processing, reducing computation time from 10 minutes to <20 seconds.",
      year: "2021",
      category: "Professional",
      icon: <Star className="w-6 h-6" />,
      color: "blue",
    },
    {
      title: "ACM ICPC Regionals Qualifier",
      description:
        "Cleared online preliminary round and qualified for ACM ICPC Regionals 2019-2020 as one of the top teams.",
      year: "2019-2020",
      category: "Competitive Programming",
      icon: <Trophy className="w-6 h-6" />,
      color: "purple",
    },
    {
      title: "Google Kickstart Top Ranks",
      description:
        "Secured global ranks 325th and 321st in Google Kickstart 2018 and 2019 respectively.",
      year: "2018-2019",
      category: "Competitive Programming",
      icon: <Medal className="w-6 h-6" />,
      color: "green",
    },
    {
      title: "TCS Codevita Global 6th Rank",
      description:
        "Achieved 6th global rank in TCS Codevita programming competition.",
      year: "2019",
      category: "Competitive Programming",
      icon: <Trophy className="w-6 h-6" />,
      color: "orange",
    },
    {
      title: "Facebook Hackercup Round 2",
      description:
        "Qualified for Round 2 of Facebook Hackercup 2018 programming contest.",
      year: "2018",
      category: "Competitive Programming",
      icon: <Medal className="w-6 h-6" />,
      color: "blue",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
          Achievements & Awards
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Recognition for excellence in engineering and competitive programming
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} achievement={achievement} />
        ))}
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-4 mt-6">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 flex items-center">
          <Trophy className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
          Career Highlights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800 dark:text-white">
              $2M+
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Revenue Impact
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800 dark:text-white">
              100K+
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Users Impacted
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800 dark:text-white">
              3+
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800 dark:text-white">
              20+
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Technologies
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AchievementCard: React.FC<{ achievement: any }> = ({ achievement }) => {
  const colorClasses = {
    gold: "from-yellow-400 to-yellow-600",
    blue: "from-blue-500 to-cyan-600",
    purple: "from-purple-500 to-indigo-600",
    green: "from-green-500 to-emerald-600",
    orange: "from-orange-500 to-red-600",
  };

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center mb-1">
            <div className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400 mr-2">
              {achievement.icon}
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800 dark:text-white">
                {achievement.title}
              </h3>
              <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                <span className="mr-2">{achievement.year}</span>
                <span className="px-1.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300">
                  {achievement.category}
                </span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
            {achievement.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AchievementsTab;
