import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topratedmovies: null,
    upcomingmovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      // console.log("addNowPlayingMovies called", action.payload);
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      // console.log("addPopularMovies called", action.payload);
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      // console.log("addTopRated called", action.payload);
      state.topratedmovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      // console.log("addUpcomingMovies called", action.payload);
      state.upcomingmovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRated,
  addUpcomingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
