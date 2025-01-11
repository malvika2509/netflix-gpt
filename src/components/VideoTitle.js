import React from "react";
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="flex flex-col items-start px-14 pt-16 sm:pt-52 lg:pt-72 text-white absolute bg-gradient-to-t from-black aspect-video z-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        {title}
      </h1>
      <h2 className="text-sm sm:text-lg md:text-xl text-gray-300 mb-4 w-1/4 line-clamp-2">
        {description}
      </h2>
      <div className="flex gap-4">
        {/* Play Button */}
        <button className="flex items-center gap-2 bg-white text-black font-medium py-1 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-gray-200 transition text-sm sm:text-base">
          <span className="text-lg sm:text-xl">
            <Play color="black" fill="black" />
          </span>
          Play
        </button>
        {/* More Info Button */}
        <button className="flex items-center gap-2 bg-gray-500 text-white font-medium py-1 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-gray-600 transition text-sm sm:text-base">
          <span className="text-lg sm:text-xl">
            <Info color="white" />
          </span>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
