import { Link } from "react-router-dom";
import vista from "../assets/vista-logo.png";

export default function VistaWelcome() {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://w0.peakpx.com/wallpaper/663/269/HD-wallpaper-movie-poster-poster-collage-movie-cg.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white p-6">
        <h1 className="text-6xl text-center md:text-8xl font-bold mb-4">
          Welcome to
        </h1>
        <div className="flex w-full justify-center items-center">
          <img src={vista} alt="" className="w-4/5" />
        </div>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6">
          At Vista Videos, we bring you the latest, hottest, and most exciting
          movies. Check out our editors picks and best movies from popular
          categories, complete with trailers.
        </p>
        <Link
          to="hub"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
