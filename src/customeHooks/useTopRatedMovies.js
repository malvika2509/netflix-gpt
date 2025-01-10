import { useEffect } from "react";
import { topRated_api } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  // fetch data from tmdb api and update store
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      topRated_api
    );
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
