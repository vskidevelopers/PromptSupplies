/* eslint-disable react/prop-types */
import Truncate from "../utils/Truncate";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function CustomMovieCard({ movie, no }) {
  return (
    <>
      <div className="flex flex-col justify-end bg-gray-800 max-h-60">
        <span className="mb-2">
          <h4
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
            }}
          >
            <Truncate str={movie.title || movie.name} n="21" />
            {/* {movie.title || movie.name} */}
          </h4>
        </span>
        <span>
          <h1 className="font-bold">{no + 1}</h1>
        </span>
      </div>

      <div className="">
        <LazyLoadImage
          className="h-[240px] max-w-xs"
          src={movie?.poster}
          alt="..."
        />
      </div>
    </>
  );
}
