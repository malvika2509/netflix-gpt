import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../customeHooks/useMovieTrailer";

const VideoTrailer = ({ movieID }) => {
  // console.log("tired", movieID);

  // Call the useTrailerVideo hook to fetch trailer for the movieID
  useMovieTrailer(movieID);
  // Using the Redux store to fetch the movie trailers
  const trailerVideo = useSelector((store) => store.movies.movieVideo);
  // console.log("wdbfhgiguwref", trailerVideo);
  const [videoKey, setVideoKey] = useState(null);

  // Ensure trailer video key is fetched once movieID changes
  useEffect(() => {
    if (movieID && trailerVideo) {
      setVideoKey(trailerVideo.key); // Set the key when trailer video is fetched
    }
  }, [movieID, trailerVideo]);

  if (!videoKey) {
    return <div>Loading...</div>; // Show loading state if video is not ready
  }

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&loop=1&playlist=${videoKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const VideoDemo = ({ posterPath, movieID }) => {
  return (
    <div>
      <VideoTrailer movieID={movieID} />
    </div>
  );
};

export default VideoDemo;
