import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Header from "./Header"; // Assuming the Header component is in the same folder

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Movie Suggestions */}
      <div className="pt-16 p-4 m-4 bg-black text-white bg-opacity-90">
        {/* Full list, single column on small and medium screens, responsive */}
        <div className="space-y-6">
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
      </div>
    </>
  );
};

export default GptMovieSuggestions;
