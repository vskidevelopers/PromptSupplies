import DealsSectionSlider from "../components/DealsSectionSlider";
import HeroSlider from "../components/HeroSlider";
import SectionServiceSlider from "../components/SectionServiceSlider";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { InView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { useCallUsServicesFunctions } from "../utils/firebase";
import { Fragment, useState } from "react";
import { useDropzone } from "react-dropzone";
import ServiceGrid from "../components/ServiceGrid";

export default function EfficientServices() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm();

  const {
    uploadServicePoster,
    handlePostServiceData,
    imageURL,
    loading,
    uploadProgress,
  } = useCallUsServicesFunctions();

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

  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onSubmit = (data) => {
    console.log(data);
    console.log("data.imagePoster >>", data.imagePoster.name);

    if (imageURL) {
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
        vip: false,
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
    <div className="mt-16 relative">
      <div className="">
        <HeroSlider />
      </div>
      <div>
        <SectionServiceSlider
          sectionTitle="Popular Services"
          bgColor="bg-gray-100"
        />

        <div>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={closeModal}
                          className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Submit an Advert
                      </Dialog.Title>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                          <label
                            className="block text-sm font-bold mb-2"
                            htmlFor="name"
                          >
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
                            <label
                              className="block text-sm font-bold mb-2"
                              htmlFor="email"
                            >
                              Email:
                            </label>
                            <input
                              type="email"
                              id="email"
                              {...register("email", { required: true })}
                              className="w-full border border-yellow-400 rounded py-2 px-3"
                            />
                            {errors.email && (
                              <span>This field is required</span>
                            )}
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
                            {errors.phoneNumber && (
                              <span>This field is required</span>
                            )}
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
                            {errors.jobTitle && (
                              <span>This field is required</span>
                            )}
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
                            {errors.location && (
                              <span>This field is required</span>
                            )}
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
                          {errors.description && (
                            <span>This field is required</span>
                          )}
                        </div>
                        <div className="text-right">
                          <button
                            disabled={loading}
                            type="submit"
                            className="bg-yellow-400 text-white py-2 px-4 rounded"
                          >
                            {loading
                              ? `${uploadProgress} % Image uploading ...`
                              : "Submit"}
                          </button>
                        </div>
                      </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>

          <div className="container mx-auto px-5 md:px-20 py-10">
            <InView triggerOnce>
              {({ inView, ref }) => (
                <div
                  className="relative flex flex-col justify-center items-center py-10"
                  ref={ref}
                >
                  <div className="flex">
                    <div className="w-full md:w-1/2 text-start md:text-center">
                      <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
                        Advertise With Us
                      </h2>
                      <h1 className="text-3xl font-bold">
                        Amplify Your Reach: Unlock Growth Opportunities with
                        Effective Advertising
                      </h1>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-end items-center z-10">
                      <button
                        onClick={openModal}
                        className="border border-[#FDB715] text-[#FDB715] hover:bg-[#FDB715] hover:text-white py-5 px-8"
                      >
                        Request Advert
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 h-full w-full flex justify-start items-center opacity-10">
                    <motion.h1
                      initial={{ x: -500, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : {}}
                      transition={{
                        type: "spring",
                        bounce: 0.5,
                        delay: 0.5,
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 3,
                      }}
                      className="text-7xl md:text-9xl font-bold"
                    >
                      Advertise
                    </motion.h1>
                  </div>
                </div>
              )}
            </InView>
          </div>
        </div>

        <SectionServiceSlider
          sectionTitle="Featured Services"
          bgColor="bg-gray-200"
        />
        <DealsSectionSlider />
        <ServiceGrid />
      </div>
    </div>
  );
}
