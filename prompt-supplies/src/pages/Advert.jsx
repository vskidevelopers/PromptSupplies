import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import HeroSection from "../components/HeroSection";
import AdvertSlider from "../components/AdvertSlider";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";

function Advert() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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

  return (
    <div className="relative">
      <HeroSection
        tagline="Unlock Growth Opportunities"
        title="Advertise"
        image="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div>
        <button
          className="fixed bottom-4 right-4 bg-yellow-400 text-white py-3 px-6 rounded-full shadow-lg z-50"
          onClick={openModal}
        >
          Request Advert
        </button>

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
                        {errors.phoneNumber && (
                          <span>This field is required</span>
                        )}
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
                          <input {...getInputProps()} />
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
                          type="submit"
                          className="bg-yellow-400 text-white py-2 px-4 rounded"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        <AdvertSlider />
      </div>
    </div>
  );
}

export default Advert;
