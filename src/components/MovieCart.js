import React from "react";
import { movie_card_image } from "../utils/constants";

const MovieCart = ({ posterPath }) => {
  return (
    <div className="w-52 pr-2">
      <img src={movie_card_image + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCart;
