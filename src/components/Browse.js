import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "../customeHooks/useNowPlayingMovies";
import usePopularMovies from "../customeHooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  );
};

export default Browse;
