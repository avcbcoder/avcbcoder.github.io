import { PersonalInfo, Experience, Project, Achievement } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Ankit Verma",
  title: "Software Engineer",
  email: "ankitvermamat@gmail.com",
  phone: "+91 8700234342",
  location: "India",
  bio: "Software engineer with 5+ years of experience and a passion for AI and scalable systems—building products end-to-end, from idea to deployment. Ex-Google, Tripadvisor",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/ankitverma",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/ankitverma",
      icon: "github",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/ankitverma",
      icon: "twitter",
    },
  ],
};

export const projects = [
  {
    id: 1,
    title: "AI Powered Interview Simulator",
    description:
      "AI-driven platform that simulates real-time mock interviews, provides coding practice, and delivers personalized feedback using models like Llama and DeepSeek.",
    backgroundImage: "/static/rehearsalgpt.png",
    hoverImage: "/static/rehearsalgpt-landing.png",
    features: [
      "Real-time mock interview simulation",
      "Coding practice integration",
      "Personalized feedback system",
      "AI-powered assessment",
    ],
    technologies: [
      "AI/ML",
      "Llama",
      "DeepSeek",
      "React",
      "Flask",
      "TS",
      "Next",
      "Python",
      "WebSockets",
    ],
    metrics: {
      views: "500+",
      users: "2.1K",
      rating: 4.8,
      uptime: "99.9%",
      lastUpdated: "May'25",
      built: "Apr'25",
    },
    links: {
      demo: "https://rehearsalgpt.netlify.app/",
      github: "https://rehearsalgpt.netlify.app/",
    },
    status: "Live",
    featured: true,
  },
  {
    id: 2,
    title: "Lofi lens",
    description:
      "A calming web app that helps you focus by creating immersive ambient spaces with music, visuals, and productivity tools. Study, work, or think better, alone or with friends",
    backgroundImage: "/static/lofilens.png",
    // hoverImage: "/static/lofilens.png",
    features: [
      "Real-time synchronization",
      "Social watch parties",
      "Multi-platform support",
      "Cross-platform compatibility",
    ],
    technologies: [
      "React",
      "Node.js",
      "YouTube API",
      "Spotify API",
      "TS",
      "Tailwind",
    ],
    metrics: {
      views: "0",
      users: "1.5K",
      rating: 4.6,
      uptime: "98.5%",
      lastUpdated: "May'25",
      built: "Jun'25",
    },
    links: {
      demo: "",
      github: "",
    },
    status: "WIP",
    featured: false,
  },
  {
    id: 3,
    title: "Collab - Web App",
    description:
      "A collaborative web application enabling users to host watch parties, allowing them to watch YouTube videos and listen to Spotify songs with others in real time.",
    backgroundImage: "/static/collab.png",
    features: [
      "Real-time synchronization",
      "Social watch parties",
      "Multi-platform support",
      "Cross-platform compatibility",
    ],
    technologies: [
      "React",
      "Node.js",
      "WebSockets",
      "YouTube API",
      "Spotify API",
    ],
    metrics: {
      views: "0",
      users: "1.5K",
      rating: 4.6,
      uptime: "98.5%",
      lastUpdated: "May'20",
      built: "Jun'20",
    },
    links: {
      demo: "",
      github: "",
    },
    status: "Live",
    featured: false,
  },
];
