import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Movie_API } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movie_id) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMoviesVideos = async () => {
    console.log("Video Fetched");
    const video = await fetch(
      `https://api.themoviedb.org/3/movie/
          ${movie_id.movie_id || movie_id}
          /videos?language=en-US`,
      Movie_API
    );
    const json = await video.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMoviesVideos();
  }, [movie_id.movie_id, trailerVideo]);
};

export default useTrailerVideo;
