import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "../customeHooks/useNowPlayingMovies";
import usePopularMovies from "../customeHooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../customeHooks/useTopRatedMovies";
import useUpcomingMovies from "../customeHooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  );
};

export default Browse;
