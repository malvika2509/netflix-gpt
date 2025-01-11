import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import gemAI_Key from "../utils/gemAI";
import { Movie_API } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      Movie_API
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    if (!searchText.current.value) {
      console.error("Search text is empty");
      return;
    }

    try {
      const model = gemAI_Key.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt =
        "Act as a Movie Recommendation system and suggest some movies for the query: " +
        searchText.current.value +
        ". Only give me names of 5 movies, comma-separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const result = await model.generateContent(prompt);
      const gptMovies = result.response.text().split(",");

      // For each movie, fetching the Tmdb API
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center px-4 sm:px-6 md:px-8 lg:px-12">
      <form
        className="w-full max-w-2xl bg-black grid grid-cols-12 gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-12 sm:col-span-9 bg-white text-gray-600 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="button"
          className="col-span-12 m-4 sm:col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
