import CustomMoviesRow from "@/components/CustomMoviesRow";
import MovieRow from "../components/MovieRow";
import requests from "../utils/requests";
import VistaHubBanner from "@/components/VistaHubBanner";
import HubSideTrailers from "@/components/HubSideTrailers";

function VistaHub() {
  const categories = [
    "vista-top-picks",
    "top-movies-of-the-week",
    "latest-realease", // *** do not rename to release ***
  ];
  return (
    <div className="flex flex-col md:flex-row justify-between px-10 pt-16">
      {/* Hub side trailers */}
      <div className="w-full md:w-2/6 ">
        <HubSideTrailers
          moviescategory={"Trending"}
          fetchUrl={requests.fetchTrending}
        />
      </div>

      {/* hub main trailers */}
      <div className="w-full md:w-4/6 py-3 md:h-screen md:overflow-y-auto">
        {/* Banner */}
        <VistaHubBanner
          fetchUrl={requests.fetchActionMovies}
          moviescategory={categories[2]}
        />
        {/* MovieRow */}

        {/*
        TODOS:
      Vista top choices
      Today's Top Picks
       */}

        <CustomMoviesRow moviescategory={categories[1]} />

        <CustomMoviesRow moviescategory={categories[0]} />
        <MovieRow
          moviescategory={"Top Rated"}
          fetchUrl={requests.fetchTopRated}
        />

        <MovieRow
          moviescategory={"Documentaries"}
          fetchUrl={requests.fetchDocumentaries}
        />
        <MovieRow
          moviescategory={"Action Movies"}
          fetchUrl={requests.fetchActionMovies}
        />
        <MovieRow
          moviescategory={"Commedies"}
          fetchUrl={requests.fetchComedyMovies}
        />
        <MovieRow
          moviescategory={"Horror Movies"}
          fetchUrl={requests.fetchHorrorMovies}
        />
        <MovieRow
          moviescategory={"Romance"}
          fetchUrl={requests.fetchRomanceMovies}
        />
      </div>
    </div>
  );
}

export default VistaHub;
