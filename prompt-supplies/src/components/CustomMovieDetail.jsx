/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import YouTube from "react-youtube";
import { PlayCircleIcon, StarIcon } from "@heroicons/react/24/solid";
import Truncate from "../utils/Truncate";
import { useState } from "react";
import movieTrailer from "movie-trailer";

function CustomMovieDetail({ movie }) {
  const [trailerUrl, setTrailerUrl] = useState(null);

  const handleTrailers = (movie) => {
    if (trailerUrl != null) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          const newTrailerUrl = urlParams.get("v");
          setTrailerUrl(newTrailerUrl);
          console.log("new trailerr url >> ", newTrailerUrl);
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "350",
    width: "99%",
    playerVars: {
      autoplay: 0,
    },
  };
  console.log("MOVIE >>", movie);
  console.log("trailer url >> ", movie?.trailerLink);
  return (
    <div className="relative -left-8 w-80 px-10 py-5 rounded-lg bg-slate-900 text-white ">
      <Dialog>
        <h2>{movie.title || movie.name}</h2>
        <div className="flex my-2 mx-2">
          <div className="w-1/2  flex items-center">
            <StarIcon className="w-4 h-4 text-yellow-500" />
            <h2 className="ml-2">{movie?.ratings}</h2>
          </div>
          <div className="w-1/2 flex justify-end">
            {movie?.type ? (
              <div className="bg-yellow-700 w-max px-2 rounded-full">
                {" "}
                <h2>{movie?.type || `movie`}</h2>
              </div>
            ) : null}
          </div>
        </div>
        <Truncate str={movie?.description} n="100" />
        <div>
          <h2>
            Rerelease_date :{" "}
            {movie.releaseDate ? movie.release_date : movie.first_air_date}
          </h2>
        </div>
        <DialogTrigger
          className="flex items-center cursor-pointer my-4"
          onClick={() => handleTrailers(movie)}
        >
          <PlayCircleIcon className="text-yellow-700 h-7 w-7" />{" "}
          <h1>watch trailer</h1>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{movie?.title || movie?.name}</DialogTitle>

            <DialogDescription>
              <div>
                <YouTube videoId={trailerUrl} opts={opts} />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CustomMovieDetail;
