/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import HubSideTrailerCards from "./HubSideTrailerCard";
import fetchInstance from "@/utils/fetchInstance";

function HubSideTrailers({ moviescategory, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const data = await fetchInstance(fetchUrl);
      setMovies(data.results);
      console.log(`category : ${moviescategory} || movies : `, data?.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Import Swiper styles

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(
    `movies Category >> ${moviescategory} || movies fetch url >> ${fetchUrl}`
  );

  return (
    <div className="w-full md:w-4/5 py-8 px-2 h-full md:h-screen">
      {/* Custom Scrollbar for Webkit-based browsers (Chrome, Safari) */}
      <style>
        {`
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #333; /* Darker background for the track */
        }

        ::-webkit-scrollbar-thumb {
          background-color: #888; /* Lighter thumb color */
          border-radius: 10px; /* Rounded corners */
          border: 2px solid #333; /* Matches the track background */
        }
      `}
      </style>

      <div className="w-full flex flex-col  glassmorphism h-full">
        {/* Title DIV */}
        <div className="w-full font-bold text-white py-5">
          <h2 className="pl-5">🔥 Trending Trailers This Week</h2>
        </div>

        {/* Movie Card div */}
        <div className="movieCol w-full flex flex-row md:flex-col items-center overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-600 scrollbar-track-gray-800 h-full">
          {movies?.map((movie, i) => (
            <div key={i} className="mb-2 mr-3">
              <HubSideTrailerCards movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HubSideTrailers;
