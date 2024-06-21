import HubBanner from "../components/HubBanner";
import MovieRow from "../components/MovieRow";
import requests from "../utils/requests";

function VistaHub() {
  return (
    <div>
      {/* Banner */}
      <HubBanner />
      {/* MovieRow */}

      {/*
        TODOS:
      Vista top choices
      Today's Top Picks
       */}

      <MovieRow moviescategory={"Trending"} fetchUrl={requests.fetchTrending} />
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
  );
}

export default VistaHub;
