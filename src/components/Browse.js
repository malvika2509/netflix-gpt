import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "../customeHooks/useNowPlayingMovies";
import usePopularMovies from "../customeHooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../customeHooks/useTopRatedMovies";
import useUpcomingMovies from "../customeHooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header></Header>
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default Browse;
