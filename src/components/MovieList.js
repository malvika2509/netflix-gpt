import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-2 ">
      <h1 className="text-md py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto ">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCart key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
