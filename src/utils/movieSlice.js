import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      console.log("addNowPlayingMovies called", action.payload);
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      console.log("addPopularMovies called", action.payload);
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } =
  movieSlice.actions;

export default movieSlice.reducer;
