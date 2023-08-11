import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { format, parse } from "date-fns";
import { useUpcomingEventsFunctions } from "../utils/firebase";

export default function UpcomingEventForm() {
  const {
    eventImageURL,
    eventsLoading,
    uploadEventProgress,
    handlePostUpcomingEvent,
    uploadUpcomingEventPoster,
  } = useUpcomingEventsFunctions();
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
    console.log("upcoming event data >>", data);

    const timeValue = data.time;
    console.log("Original Time:", timeValue);

    const dateObject = parse(timeValue, "HH:mm", new Date());
    console.log("Date Object:", dateObject);

    const formattedTime = format(dateObject, "hh:mm a");
    console.log("Formatted Time:", formattedTime);

    // Your submission logic here

    if (eventImageURL) {
      console.log("Image Url >>", eventImageURL);
      const eventData = {
        author: data.author,
        email: data.email,
        phone: data.phoneNumber,
        poster: eventImageURL,
        description: data.description,
        venue: data.venue,
        title: data.title,
        approved: false,
        time: formattedTime,
        startDate: data.startdate,
        endDate: data.enddate,
      };
      console.log("service Data to upload >>", eventData);
      handlePostUpcomingEvent(eventData);
      alert("We have recieved your request. we'll be in touch shortly");
      reset();
    } else {
      console.log("No Image  ");
      alert("Uploading Files. Click Ok to continue");
      if (data.imagePoster) {
        uploadUpcomingEventPoster(data.imagePoster);
      }
    }
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

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="date">
                  Start Date:
                </label>
                <input
                  type="date"
                  id="startdate"
                  {...register("startdate", { required: true })}
                  className="w-full border border-yellow-400 rounded py-2 px-3"
                />
                {errors.date && <span>This field is required</span>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="date">
                  End Date:
                </label>
                <input
                  type="date"
                  id="enddate"
                  {...register("enddate", { required: true })}
                  className="w-full border border-yellow-400 rounded py-2 px-3"
                />
                {errors.date && <span>This field is required</span>}
              </div>
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
                {eventsLoading
                  ? `${uploadEventProgress} % Image uploading ...`
                  : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
