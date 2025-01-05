import React from "react";
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="flex flex-col items-start px-14 pt-72 text-white absolute bg-gradient-to-t from-black aspect-video z-0">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <h2 className="text-lg text-gray-300 mb-4 w-1/4 line-clamp-2">
        {description}
      </h2>
      <div className="flex gap-4">
        {/* Play Button */}
        <button className="flex items-center gap-2 bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-gray-200 transition">
          <span className="text-xl">
            <Play color="black" fill="black" />
          </span>
          Play
        </button>
        {/* More Info Button */}
        <button className="flex items-center gap-2 bg-gray-500 text-white font-medium py-2 px-4 rounded-md hover:bg-gray-600 transition">
          <span className="text-xl">
            <Info color="white" />
          </span>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
