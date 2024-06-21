/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import fetchInstance from "../utils/fetchInstance";
import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail";
import YouTube from "react-youtube";

export default function MovieRow({ moviescategory, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");

  console.log("hoveredMovie >>", hoveredMovie);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchInstance(fetchUrl);
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
    console.log("Movies >>", movies);
  }, [movies]);

  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    },
  };

  const handleTrailers = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const removeMovieTrailer = () => {
    if (trailerUrl) {
      setTrailerUrl("");
    }
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
            onClick={removeMovieTrailer}
          >
            <MovieCard movie={movie} key={movie.id} no={i} />
            {hoveredMovie && hoveredMovie.id === movie.id && (
              <div
                className={`opacity-0 transition-opacity ${
                  hoveredMovie ? "opacity-100" : "opacity-0"
                }`}
                onClic
                k={() => handleTrailers(movie)}
              >
                <MovieDetail movie={movie} />{" "}
              </div>
            )}
          </div>
        ))}
      </div>
      <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
    </div>
  );
}
