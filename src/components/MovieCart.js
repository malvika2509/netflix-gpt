import React from "react";
import { movie_card_image } from "../utils/constants";

const MovieCart = ({ posterPath }) => {
  return (
    <div className="w-52 pr-2 sm:w-32 md:w-44 lg:w-52">
      <img
        src={movie_card_image + posterPath}
        alt="Movie Card"
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
};

export default MovieCart;
