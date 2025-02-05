import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log("gvsdyhfgvwuegkwe", movies.upcomingmovies);

  return (
    <div className="bg-black">
      <div className="mt-0 sm:-mt-40 md:-mt-52  pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.upcomingmovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingmovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
