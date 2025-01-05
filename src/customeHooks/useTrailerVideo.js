import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { trailerAPI } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movie_id) => {
  const dispatch = useDispatch();
  const getMoviesVideos = async () => {
    const video = await fetch(
      `https://api.themoviedb.org/3/movie/
          ${movie_id.movie_id} 
          /videos?language=en-US`,
      trailerAPI
    );
    const json = await video.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);
};

export default useTrailerVideo;
