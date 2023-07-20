/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import {
  useCallUsServicesFunctions,
  useVipServicesFunctions,
} from "../utils/firebase";
import { useDropzone } from "react-dropzone";

export default function AdvertForm({ isVipSelected }) {
  const {
    uploadServicePoster,
    handlePostServiceData,
    imageURL,
    loading,
    uploadProgress,
  } = useCallUsServicesFunctions();

  const {
    vipImageURL,
    vipLoading,
    uploadVipProgress,
    uploadVipAdvertPoster,
    handlePostVipAdvert,
  } = useVipServicesFunctions();

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
    console.log(data);
    console.log("data.imagePoster >>", data.imagePoster.name);

    if (isVipSelected) {
      if (vipImageURL) {
        console.log("Image Url >>", vipImageURL);
        const vipAdData = {
          name: data.name,
          email: data.email,
          phone: data.phoneNumber,
          poster: vipImageURL,
          description: data.description,
          location: data.location,
          jobTitle: data.jobTitle,
          approved: false,
          featured: false,
        };
        console.log("service Data to upload >>", vipAdData);
        handlePostVipAdvert(vipAdData);
        alert("We have recieved your request. we'll be in touch shortly");
        reset();
      } else {
        console.log("No Image  ");
        alert(
          "An error occured during image upload. Try submitting the form again"
        );
        if (data.imagePoster) {
          uploadVipAdvertPoster(data.imagePoster);
        }
      }
    } else if (imageURL) {
      console.log("Image Url >>", imageURL);
      const serviceData = {
        name: data.name,
        email: data.email,
        phone: data.phoneNumber,
        poster: imageURL,
        description: data.description,
        location: data.location,
        jobTitle: data.jobTitle,
        approved: false,
        featured: false,
        popular: false,
        offer: false,
        sale: false,
      };
      console.log("service Data to upload >>", serviceData);
      handlePostServiceData(serviceData);
      alert("We have recieved your request. we'll be in touch shortly");
      reset();
    } else {
      console.log("No Image  ");
      alert(
        "An error occured during image upload. Try submitting the form again"
      );
      if (data.imagePoster) {
        uploadServicePoster(data.imagePoster);
      }
    }
  };

  return (
    <div className="relative h-full w-full">
      <div className="z-50">
        <div className="container mx-auto ">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Submit an Advert
            <br />
            <p>isVipSelected {isVipSelected ? "true" : "false"}</p>
          </h3>
          <h3>{isVipSelected}</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className="w-full border border-yellow-400 rounded py-2 px-3"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className=" grid grid-cols-1 gap-3 md:grid-cols-2">
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
            </div>

            <div className=" grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="jobTitle"
                >
                  Job Title:
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  {...register("jobTitle", { required: true })}
                  className="w-full border border-yellow-400 rounded py-2 px-3"
                />
                {errors.jobTitle && <span>This field is required</span>}
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Location:
                </label>
                <input
                  type="text"
                  id="location"
                  {...register("location", { required: true })}
                  className="w-full border border-yellow-400 rounded py-2 px-3"
                />
                {errors.location && <span>This field is required</span>}
              </div>
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
            <div className="text-right">
              <button
                disabled={loading}
                type="submit"
                className="bg-yellow-400 text-white py-2 px-4 rounded"
              >
                {loading || vipLoading
                  ? `${
                      uploadProgress || uploadVipProgress
                    } % Image uploading ...`
                  : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
