import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {movieNames.map((movieName, index) => {
        const filteredMovies = movieResults[index]?.filter(
          (movie) => movie.poster_path // Filter movies with valid poster_path
        );

        if (!filteredMovies || filteredMovies.length === 0) {
          return null; // Skip rendering if no valid movies exist
        }

        return (
          <MovieList
            key={movieName}
            title={movieName}
            movies={filteredMovies}
          />
        );
      })}
    </div>
  );
};

export default GptMovieSuggestions;
