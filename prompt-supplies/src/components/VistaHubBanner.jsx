/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { PlayIcon, StopIcon } from "@heroicons/react/24/solid";
import fetchInstance from "../utils/fetchInstance";
import requests from "../utils/requests";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import { useMovieFunctions } from "@/utils/firebase";

export default function VistaHubBanner({ fetchUrl, moviescategory }) {
  const [movies, setMovies] = useState([]);
  const [imdbMovies, setImdbMovies] = useState(false);

  const [trailerUrl, setTrailerUrl] = useState("");
  const [currentMovie, setCurrentMovie] = useState(null);
  const { getAllMoviesByCategory } = useMovieFunctions();

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const fetchImdbMovies = async () => {
    console.log("initiating imbd backup fetch request ... ");

    try {
      const data = await fetchInstance(fetchUrl);
      const fetchedMovies = data.results.slice(0, 10);
      console.log("Imdb fetch request >> ", fetchedMovies);
      setMovies(fetchedMovies);
      setImdbMovies(true);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getAllMoviesByCategory(moviescategory);
        console.log(
          "data recieved from fetch movies fromvista hub banner >> ",
          data
        );
        if (data.success) {
          setMovies(data.data);
        } else {
          console.error(
            "Error fetching movies from store, switching to IMDB",
            data.message
          );
          fetchImdbMovies();
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const opts = {
    height: "500",
    width: "99%",
    playerVars: {
      autoplay: 0,
    },
  };

  const handleTrailers = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      if (imdbMovies) {
        movieTrailer(movie?.title || movie?.name)
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            const newTrailerUrl = urlParams.get("v");
            setTrailerUrl(newTrailerUrl);
            console.log("new trailerr url >> ", newTrailerUrl);
          })
          .catch((error) => console.log(error));
      } else {
        const trailerLink = movie?.trailerLink;
        console.log("movie trailer url >> ", trailerLink);

        const urlParams = new URLSearchParams(new URL(trailerLink).search);
        const newTrailerUrl = urlParams.get("v");

        setTrailerUrl(newTrailerUrl);
        console.log("new trailerr url >> ", newTrailerUrl);
      }
    }
  };

  const swiperContainerStyle = {
    width: "80%",
    maxWidth: "300px",
    height: "auto",
    position: "absolute",
    right: "10%",
    top: "10%",
    margin: "0 auto",
  };

  const swiperContainerSmallScreenStyle = {
    width: "90%",
    maxWidth: "250px",
    top: "15%",
    right: "5%",
  };

  const swiperContainerSmallerScreenStyle = {
    width: "95%",
    maxWidth: "200px",
    top: "20%",
    right: "2.5%",
  };

  const swiperSlideStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const swiperSlideImgStyle = {
    display: "block",
    width: "100%",
    height: "auto",
    objectFit: "cover",
  };

  const getFormattedDate = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date().toLocaleDateString(undefined, options);
  };

  return (
    <div className="relative">
      <div
        className="h-96 md:h-[32rem] bg-cyan-900 bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(
                          ${
                            imdbMovies
                              ? `
                              "https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}"
                              `
                              : currentMovie?.poster
                          }
                          )`,
        }}
      >
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="flex flex-col justify-end md:justify-end h-4/5 w-full md:w-3/4 mx-2 ">
          {/* Title */}
          <div className="pt-10 md:p-0 relative z-20 my-8">
            <h1 className="text-2xl md:text-4xl font-medium pt-3">
              Latest Releases :{" "}
              <span className="font-bold text-yellow-500 rounded-2xl py-1 px-4 bg-white">
                {getFormattedDate()}{" "}
              </span>
            </h1>
          </div>
          <div className="pt-10 md:p-0 relative z-20">
            <h1 className="text-3xl md:text-5xl font-medium pt-3">
              {currentMovie?.title ||
                currentMovie?.name ||
                currentMovie?.original_name}
            </h1>
          </div>

          {/* buttons */}
          <div className="text-xl my-2 z-50 w-max">
            <button
              onClick={() => handleTrailers(currentMovie)}
              className={`cursor-pointer ${
                trailerUrl ? "bg-transparent text-5xl" : "text-yellow-400"
              }  font-bold  mr-2 hover:text-white`}
            >
              {trailerUrl ? (
                <div className="flex items-center">
                  <StopIcon className="w-16 md:w-32 h-16 md:h-32" />
                  <h1 className="text-5xl">Stop</h1>
                </div>
              ) : (
                <div className="flex items-center">
                  <PlayIcon className="w-16 md:w-32 h-16 md:h-32" />
                  <h2 className="text-white">Play Trailer</h2>
                </div>
              )}
            </button>
          </div>

          {/* Description */}
          <div className="w-4/5 relative z-10">
            {truncate(currentMovie?.overview, 150)}
          </div>
        </div>
        {trailerUrl && (
          <YouTube
            videoId={trailerUrl}
            opts={opts}
            className="absolute top-0 w-full z-20"
          />
        )}

        <div className="absolute w-full bottom-0 h-2/5 bg-gradient-to-t from-[#111] to-[rgba(37, 37, 37, 0.612)]"></div>
      </div>
      <>
        <div
          style={{
            ...swiperContainerStyle,
            ...(window.innerWidth <= 768 && swiperContainerSmallScreenStyle),
            ...(window.innerWidth <= 480 && swiperContainerSmallerScreenStyle),
          }}
        >
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            speed={2000}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[EffectCube, Pagination, Autoplay]}
            className="mySwiper"
            onSlideChange={(swiper) =>
              setCurrentMovie(movies[swiper.activeIndex])
            }
          >
            {imdbMovies ? (
              <div>
                {movies?.map((movie, index) => (
                  <SwiperSlide key={movie.id} style={swiperSlideStyle}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}`}
                      alt={movie.name || movie?.title}
                      style={swiperSlideImgStyle}
                    />
                  </SwiperSlide>
                ))}
              </div>
            ) : (
              <div>
                {movies?.map((movie, index) => (
                  <SwiperSlide key={movie.id} style={swiperSlideStyle}>
                    <img
                      src={movie?.poster}
                      alt={movie.name}
                      style={swiperSlideImgStyle}
                    />
                  </SwiperSlide>
                ))}
              </div>
            )}
          </Swiper>
        </div>
      </>
    </div>
  );
}
