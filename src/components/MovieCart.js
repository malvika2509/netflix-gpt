import React, { useState, useEffect, useRef } from "react";
import { movie_card_image } from "../utils/constants";
import VideoDemo from "./VideoDemo";

const MovieCart = ({ movieID, posterPath, title, lang, desc, rel }) => {
  const [showVideoDemo, setShowVideoDemo] = useState(false);
  const modalRef = useRef(); // Create a ref for the modal content

  const handleImageClick = () => {
    setShowVideoDemo(true); // Open the VideoDemo modal
  };

  const handleCloseModal = () => {
    setShowVideoDemo(false); // Close the modal
  };

  // Close modal if click is outside the modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal(); // Close modal if clicked outside
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="w-52 pr-2 sm:w-32 md:w-44 lg:w-52">
        {/* Image Click */}
        <img
          src={movie_card_image + posterPath}
          alt="Movie Card"
          className="w-full h-auto rounded-lg cursor-pointer"
          onClick={handleImageClick}
        />
      </div>

      {/* Modal for VideoDemo */}
      {showVideoDemo && (
        <div className="fixed inset-0 flex justify-center items-center mt-24 z-50 overflow-y-auto no-scrollbar">
          <div
            ref={modalRef} // Attach ref to the modal content
            className="rounded-lg w-[70%] h-full relative bg-gradient-to-t from-black"
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-xl font-bold text-white hover:text-gray-600"
            >
              X
            </button>
            <div>
              <VideoDemo posterPath={posterPath} movieID={movieID} />

              <div className="relative -mt-10 z-10 bg-black text-white p-4  shadow-lg">
                {/* Movie Details */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                  {/* Left Column: Movie Details */}
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold mb-2">
                      {title || "Movie Title"}
                    </h1>
                    <p className="text-sm text-gray-400 mb-2">
                      Release Date:{" "}
                      <span className="text-gray-200">{rel || "2023"}</span>
                    </p>
                    <p className="text-sm text-gray-400 mb-2">
                      Language:{" "}
                      <span className="text-gray-200">{lang || "English"}</span>
                    </p>
                    <p className="text-sm text-gray-400 mb-4">
                      Description:{" "}
                      <span className="text-gray-200">
                        {desc || "Movie Description"}
                      </span>
                    </p>
                  </div>

                  {/* Right Column: Cast & Genre */}
                  <div className="flex-1 space-y-2 mt-10">
                    <p className="text-sm text-gray-400 flex">
                      Cast:{" "}
                      <span className="ml-2 text-gray-200">
                        Chris Rock, Martin Lawrence, Tracy Morgan, and more
                      </span>
                    </p>
                    <p className="text-sm text-gray-400 flex">
                      Genres:{" "}
                      <span className="ml-2 text-gray-200">
                        Satire, Comedy, US Movies
                      </span>
                    </p>
                    <p className="text-sm text-gray-400 flex">
                      This Movie is:{" "}
                      <span className="ml-2 text-gray-200">Goofy</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCart;
