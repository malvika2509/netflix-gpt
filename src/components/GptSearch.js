import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      {/* Background Image */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="Background"
        />
      </div>

      {/* Main Content */}
      <div className="relative w-full min-h-screen pt-1 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col">
        <GptSearchBar />
        {/* Add flex-grow to allow content to take available space */}
        <div className="flex-grow">
          <GptMovieSuggestions />
        </div>
      </div>
    </>
  );
};

export default GPTSearch;
