import { useRef, useState } from "react";
import MovieCart from "./MovieCart";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef();
  const [scrollInterval, setScrollInterval] = useState(null);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -200 : 200;
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const startScroll = (direction) => {
    const interval = setInterval(() => {
      scroll(direction);
    }, 100); // Scroll every 100ms while holding the button
    setScrollInterval(interval);
  };

  const stopScroll = () => {
    clearInterval(scrollInterval);
  };

  return (
    <div className="px-2">
      <h1 className="text-xl py-4 text-white">{title}</h1>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-full w-12 bg-black opacity-50 p-2 text-white font-extrabold"
          onMouseDown={() => startScroll("left")}
          onMouseUp={stopScroll}
          onMouseLeave={stopScroll} // Stop scrolling if the mouse leaves the button
        >
          <ChevronLeft /> {/* Left Arrow */}
        </button>
        <div className="flex overflow-x-auto no-scrollbar" ref={scrollRef}>
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCart key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full w-12 bg-black opacity-50 text-white font-extrabold"
          onMouseDown={() => startScroll("right")}
          onMouseUp={stopScroll}
          onMouseLeave={stopScroll} // Stop scrolling if the mouse leaves the button
        >
          <ChevronRight /> {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default MovieList;
