import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Movie_API } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();

  // Fetch the trailer video for the specific movie ID
  const trailerVideo = useSelector((store) => store.movies.movieVideo);
  //   console.log("Current trailerVideo:", trailerVideo);

  const getMoviesVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
        Movie_API
      );
      const json = await response.json();

      // Filter for trailer videos
      const filteredData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filteredData.length ? filteredData[0] : null;

      if (trailer) {
        // console.log("Dispatching trailer:", trailer);
        dispatch(addMovieTrailer(trailer)); // Add the trailer to the Redux store
      } else {
        console.warn("No trailer found for movie ID:", movie_id);
      }
    } catch (error) {
      console.error("Error fetching trailer video:", error);
    }
  };

  useEffect(() => {
    if (!trailerVideo || trailerVideo.id !== movie_id) {
      getMoviesVideos(); // Fetch only if no trailer exists or it's a different movie
    }
  }, []);
};

export default useMovieTrailer;
