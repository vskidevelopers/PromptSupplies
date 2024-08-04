/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import fetchInstance from "../utils/fetchInstance";
import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail";

export default function MovieRow({ moviescategory, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  console.log("hoveredMovie >>", hoveredMovie);

  const fetchMovies = async () => {
    try {
      const data = await fetchInstance(fetchUrl);
      setMovies(data.results);
      console.log(`category : ${moviescategory} || movies : `, data?.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

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
        <h2>{moviescategory}</h2>
      </div>
      <div className="movieRow flex overflow-x-auto ">
        {movies.map((movie, i) => (
          // <div key={movie.id}>
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
        ))}
      </div>
    </div>
  );
}
