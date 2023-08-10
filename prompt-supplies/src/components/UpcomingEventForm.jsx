import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { format } from "date-fns";

export default function UpcomingEventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm();

  const handleImageDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setValue("imagePoster", file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: handleImageDrop,
  });

  const onSubmit = (data) => {
    const formattedTime = format(new Date(data.time), "hh:mm a");
    console.log("upcoming event data >>", data);
    console.log("formatted time >>", formattedTime);

    // Your submission logic here

    reset();
  };

  return (
    <div className="relative h-full w-full">
      <div className="z-50">
        <div className="container mx-auto">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Submit an Upcoming Event
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="title">
                Title:
              </label>
              <input
                type="text"
                id="title"
                {...register("title", { required: true })}
                className="w-full border border-yellow-400 rounded py-2 px-3"
              />
              {errors.title && <span>This field is required</span>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="date">
                Date:
              </label>
              <input
                type="date"
                id="date"
                {...register("date", { required: true })}
                className="w-full border border-yellow-400 rounded py-2 px-3"
              />
              {errors.date && <span>This field is required</span>}
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description:
              </label>
              <textarea
                id="description"
                {...register("description", { required: true })}
                className="w-full border border-yellow-400 rounded py-2 px-3"
              ></textarea>
              {errors.description && <span>This field is required</span>}
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="venue">
                  Venue:
                </label>
                <input
                  type="text"
                  id="venue"
                  {...register("venue", { required: true })}
                  className="w-full border border-yellow-400 rounded py-2 px-3"
                />
                {errors.venue && <span>This field is required</span>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="time">
                  Time:
                </label>
                <input
                  type="time"
                  id="time"
                  {...register("time", { required: true })}
                  className="w-full border border-yellow-400 rounded py-2 px-3"
                />
                {errors.time && <span>This field is required</span>}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="author"
                >
                  Author:
                </label>
                <input
                  type="text"
                  id="author"
                  {...register("author", { required: true })}
                  className="w-full border border-yellow-400 rounded py-2 px-3"
                />
                {errors.author && <span>This field is required</span>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  className="w-full border border-yellow-400 rounded py-2 px-3"
                />
                {errors.email && <span>This field is required</span>}
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                {...register("phoneNumber", { required: true })}
                className="w-full border border-yellow-400 rounded py-2 px-3"
              />
              {errors.phoneNumber && <span>This field is required</span>}
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="imagePoster"
              >
                Image Poster:
              </label>
              <div
                {...getRootProps()}
                className="w-full border border-yellow-400 rounded py-2 px-3 cursor-pointer"
              >
                <input {...getInputProps()} type="file" />
                <p>
                  {getValues("imagePoster")?.name ||
                    "Drag and drop an image here or click to browse"}
                </p>
              </div>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-yellow-400 text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
