import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../customeHooks/useTrailerVideo";

const VideoBackground = (movie_id) => {
  useTrailerVideo(movie_id);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div>
      <iframe
        className="w-screen aspect-video mt-16 z-0"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
