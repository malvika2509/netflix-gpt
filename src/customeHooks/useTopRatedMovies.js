import { useEffect } from "react";
import { Movie_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((store) => store.movies.topratedmovies);
  // fetch data from tmdb api and update store
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      Movie_API
    );
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
