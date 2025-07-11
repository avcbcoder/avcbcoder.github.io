import React from "react";

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-10 left-10 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-ping opacity-20"></div>
      <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-indigo-400 rounded-full animate-ping opacity-20"></div>
    </div>
  );
};

export default FloatingElements;
