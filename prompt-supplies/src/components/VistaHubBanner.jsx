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

export default function VistaHubBanner() {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [currentMovie, setCurrentMovie] = useState(null);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchInstance(requests.fetchTopRated);
        const fetchedMovies = data.results.slice(0, 10); // Select the first 10 movies

        setMovies(fetchedMovies);
        console.log("10 movies from fetch result >> ", fetchedMovies); // Save the 10 movies into the state
        setCurrentMovie(fetchedMovies[0]);
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
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
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

  return (
    <div className="relative">
      <div
        className="h-96 md:h-[32rem] bg-cyan-900 bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(
                        "https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}"
                        )`,
        }}
      >
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="flex flex-col justify-end md:justify-end h-4/5 w-full md:w-3/4 mx-2 ">
          {/* Title */}
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
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[EffectCube, Pagination, Autoplay]}
            className="mySwiper"
            onSlideChange={(swiper) =>
              setCurrentMovie(movies[swiper.activeIndex])
            }
          >
            {movies.map((movie, index) => (
              <SwiperSlide key={movie.id} style={swiperSlideStyle}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  alt={movie.title}
                  style={swiperSlideImgStyle}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    </div>
  );
}
