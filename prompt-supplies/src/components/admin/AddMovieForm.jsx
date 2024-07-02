/* eslint-disable no-unused-vars */
import { useMovieFunctions } from "@/utils/firebase";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AddMovieForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const { moviePosterURL, uploadMoviePoster, addMovie } = useMovieFunctions();
  const currentDate = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  const formattedDate = currentDate.toLocaleString("en-US", options);
  console.log(formattedDate);

  const onSubmit = async (data) => {
    console.log("submit data >> ", data);
    setLoading(true);

    try {
      if (moviePosterURL != null) {
        const movieData = {
          ...data,
          poster: moviePosterURL,
          createdAt: formattedDate,
        };
        const addMovieResponse = await addMovie(movieData);
        console.log("add_movie()_response >> ", addMovieResponse);
        reset();
        setLoading(false);
      } else {
        console.log("Poster is not uploaded yet.");
        console.log("movie_poster_url >> ", moviePosterURL);
      }
    } catch (error) {
      console.error("An error occurred: ", error);
      setLoading(false);
    }
  };

  const handlePosterUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        console.log("Uploading poster...");
        const uploadResult = await uploadMoviePoster(file);
        if (uploadResult?.status === "success") {
          console.log("Poster uploaded successfully");
          setImageUploaded(true);
        } else {
          console.error("Poster upload failed.");
        }
      } catch (error) {
        console.error("An error occurred during poster upload: ", error);
      }
    } else {
      console.error("No poster selected.");
    }
  };

  return (
    <div className="max-h-96 overflow-y-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
      >
        <div className="mb-4">
          <label className="block mb-2">Poster:</label>
          <input
            type="file"
            onChange={handlePosterUpload}
            className="block w-full border-sky-400 p-2 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="block w-full border-b border-sky-400 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 p-2"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Release Date:</label>
          <input
            type="date"
            {...register("releaseDate", { required: true })}
            className="block w-full border-b border-sky-400 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 p-2"
          />
          {errors.releaseDate && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Ratings:</label>
          <input
            type="number"
            {...register("ratings", { required: true, min: 0, max: 10 })}
            className="block w-full border-b border-sky-400 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 p-2"
          />
          {errors.ratings && (
            <span className="text-red-500">
              Ratings must be between 0 and 10
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description:</label>
          <textarea
            {...register("description", { required: true })}
            className="block w-full border-b border-sky-400 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 p-2"
            rows="4"
            placeholder="Enter description..."
          ></textarea>
          {errors.description && (
            <span className="text-red-500">Description is required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Trailer Link:</label>
          <input
            type="url"
            {...register("trailerLink", { required: true })}
            className="block w-full border-b border-sky-400 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 p-2"
          />
          {errors.trailerLink && (
            <span className="text-red-500">Trailer link is required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Type:</label>
          <select
            {...register("type", { required: true })}
            className="block w-full border-b border-sky-400 p-2 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          >
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
          {errors.type && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Genre:</label>
          <select
            {...register("genre", { required: true })}
            className="block w-full border-b border-sky-400 p-2 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          >
            <option value="animation">Animation</option>
            <option value="reality">Reality</option>
          </select>
          {errors.type && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Category:</label>
          <select
            {...register("category", { required: true })}
            className="block w-full border-b border-sky-400 p-2 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          >
            <option value="vista-top-picks">Vista Top Picks</option>
            <option value="top-movies-of-the-week">
              Top Movies of the Week
            </option>
          </select>
          {errors.category && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddMovieForm;
