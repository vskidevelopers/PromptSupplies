/* eslint-disable react/prop-types */
import { CirclePlay } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function HubSideTrailerCard({ movie }) {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const imageUrl = `${baseUrl}${movie?.backdrop_path}`;

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

  return (
    <div className="relative w-72 h-40 rounded-lg overflow-hidden shadow-lg">
      <Dialog>
        {/* Background Image */}
        <img
          src={imageUrl}
          alt={movie.title || movie.name}
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        {/* Title and Play Button with Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black/50 rounded-md"></div>

          {/* Content */}
          <h2 className="relative text-white text-lg font-semibold">
            {movie.title || movie.name}
          </h2>
          <DialogTrigger
            className="flex items-center cursor-pointer my-4"
            onClick={() => handleTrailers(movie)}
          >
            <CirclePlay className="relative text-white w-8 h-8" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{movie.title || movie.name}</DialogTitle>

              <DialogDescription>
                <div>
                  <YouTube videoId={trailerUrl} opts={opts} />
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}

export default HubSideTrailerCard;
