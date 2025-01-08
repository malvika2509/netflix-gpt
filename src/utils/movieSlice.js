import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingMovies: null, trailerVideo: null },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      console.log("addNowPlayingMovies called", action.payload);
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;
