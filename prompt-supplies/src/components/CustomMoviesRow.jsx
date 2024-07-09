/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail";
import { useMovieFunctions } from "@/utils/firebase";
import background from "../assets/videos/background.mp4";

export default function CustomMoviesRow({ moviescategory }) {
  const [isLoading, setIsLoading] = useState(true);

  const [movies, setMovies] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const { getAllMoviesByCategory } = useMovieFunctions();

  console.log("hoveredMovie >>", hoveredMovie);

  const fetchMovies = async () => {
    console.log("movies category to fetch from >> ", moviescategory);
    try {
      const data = await getAllMoviesByCategory(moviescategory);
      console.log("data recieved from fetch movies >> ", data);
      setMovies(data?.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };
  function handleMovieHover(movie) {
    setHoveredMovie(movie);
    console.log("SetHovered >>", hoveredMovie);
  }

  function handleMouseLeave() {
    setHoveredMovie(null);
  }

  return (
    <div className="text-white px-4 mt-10">
      <div className="my-3 font-bold ">
        <h2>
          {moviescategory === "vista-top-picks"
            ? "Vista Top Picks"
            : moviescategory === "top-movies-of-the-week"
            ? "This Week's Top Movies"
            : moviescategory}
        </h2>
      </div>
      <div className="movieRow flex overflow-x-auto ">
        {!movies || movies?.length === 0 ? (
          <div className="relative w-full py-14">
            <div className="absolute inset-0 h-full w-full">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  {/* Loading Spinner */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-gray-900"></div>
                  </div>
                </div>
              )}

              <video
                src={background}
                className={!isLoading ? "w-full h-full object-cover" : "hidden"}
                onLoadedData={handleVideoLoad}
                autoPlay
                loop
                muted
              />
              <div className="absolute inset-0 h-full bg-[#181b1c]/25"></div>
            </div>
            <div className="relative z-40 flex w-auto mb-2 mr-3 ">
              <p className="text-center font-semibold text-lg">
                No Movies Found For This Category
              </p>
            </div>
          </div>
        ) : (
          movies.map((movie, i) => (
            <div
              key={i}
              className="flex w-auto mb-2 mr-3"
              onMouseEnter={() => handleMovieHover(movie)}
              onMouseLeave={handleMouseLeave}
            >
              <MovieCard movie={movie} key={movie.id} no={i} />
              {hoveredMovie && hoveredMovie.id === movie.id && (
                <div
                  className={`opacity-0 transition-opacity ${
                    hoveredMovie ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <MovieDetail movie={movie} />{" "}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
