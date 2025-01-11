import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //   early return
  if (movies === null) return;

  const mainMovie = movies[0];

  return (
    <div>
      <VideoTitle
        title={mainMovie.original_title}
        description={mainMovie.overview}
      ></VideoTitle>
      <VideoBackground movie_id={mainMovie.id}></VideoBackground>
    </div>
  );
};

export default MainContainer;
