import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { personalInfo } from "@/data/ankit";
import Image from "next/image";
import { IS_PROD } from "@/config";

const ProfileAvatar = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <Image
          src={(IS_PROD ? "/anverma" : "") + "/profile.jpg"}
          alt="Ankit Verma"
          className="rounded-full object-cover"
          layout="fill"
        />
        <div className="absolute bottom-1 right-1 w-4 h-4 bg-gray-500 rounded-full shadow-lg border-2 border-white" />
      </div>
    </div>
  );
};

const LeftPanel: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "github":
        return <Github className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const gradient =
    "bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 d2:from-gray-900 d2:via-blue-900 d2:to-purple-900";

  return (
    <div className="border border-gray-300 rounded-lg d2:border-gray-700 h-full bg-white p-8 flex flex-col justify-center items-center text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Profile content */}
      <div className="relative z-10 text-center max-w-sm">
        {/* Avatar */}

        <div className="mb-2">
          <ProfileAvatar />
        </div>
        {/* Name and title */}
        <h1 className="text-3xl font-semibold mb-2 text-gray-900">
          {personalInfo.name}
        </h1>
        <p className="text-lg text-blue-100 mb-6 font-medium text-gray-600">
          {personalInfo.title}
        </p>

        {/* Bio */}
        <p className="text-sm text-blue-100/80 mb-8 leading-relaxed text-gray-600">
          {personalInfo.bio}
        </p>

        {/* Contact info */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-900 transition-colors">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-900 transition-colors">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-900 transition-colors">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Social links */}
        <div className="flex gap-4 justify-center">
          {personalInfo.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black hover:bg-black/90 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 backdrop-blur-sm border border-white/20"
            >
              {getIcon(link.icon)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
