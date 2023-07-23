/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import RightSideSection from "../components/RightSideSection";
import LeftSideSection from "../components/LeftSideection";
import { useForm } from "react-hook-form";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

function ServiceDetail({ serviceList }) {
  let [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id } = useParams();

  // Find the service based on the id parameter
  const service = serviceList[id];

  console.log("Service ==>", service);

  if (!service) {
    // Handle invalid service id
    return <div>Service not found</div>;
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onSubmit = (data) => {
    // Handle form submission and quote request here
    console.log(data);
  };

  return (
    <>
      <HeroSection
        // eslint-disable-next-line react/prop-types
        title={service?.title}
        image="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <section>
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
                      Enter your details and we&apos;ll reach back
                    </Dialog.Title>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="max-w-md mx-auto"
                    >
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-sm font-bold mb-2"
                        >
                          Name:
                        </label>
                        <input
                          type="text"
                          id="name"
                          {...register("name", { required: true })}
                          className="w-full border border-yellow-400 rounded py-2 px-3"
                        />
                        {errors.name && (
                          <span className="text-red-500">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-bold mb-2"
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
                          <span className="text-red-500">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-bold mb-2"
                        >
                          Phone Number:
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register("phone", { required: true })}
                          className="w-full border border-yellow-400 rounded py-2 px-3"
                        />
                        {errors.phone && (
                          <span className="text-red-500">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="message"
                          className="block text-sm font-bold mb-2"
                        >
                          Message:
                        </label>
                        <textarea
                          id="message"
                          {...register("message", { required: true })}
                          className="w-full border border-yellow-400 rounded py-2 px-3"
                        ></textarea>
                        {errors.message && (
                          <span className="text-red-500">
                            This field is required
                          </span>
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
        <div className="bg-slate-800 text-white py-8">
          <div className="container mx-auto flex flex-col  my-12 md:my-24">
            <div className="flex flex-col w-full md:top-36  mt-2 md:mt-12 px-8">
              <p className="ml-2 text-[#FDB715] uppercase tracking-loose">
                {service?.title}
              </p>
              <p className="text-3xl font-bold md:text-4xl leading-normal md:leading-relaxed mb-2">
                {`What is ${service?.title} ?`}
              </p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                {service?.definition}
              </p>
            </div>

            <div className="ml-0 md:ml-12  sticky mt-5">
              <div className="container mx-auto w-full h-full">
                <div className="flex w-full justify-center">
                  <h3 className="mb-3 font-bold text-lg md:text-4xl text-[#FDB715]">
                    {`Why ${service?.title}`}
                  </h3>
                </div>
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="border-2-2 border-yellow-555 absolute h-full border border-[#FFC100] rounded -right-5 md:right-1/2"></div>
                  <div className="border-2-2 border-yellow-555 absolute h-full border border-[#FFC100] rounded left-5 md:left-1/2"></div>

                  {service?.reasons?.map((reason, index) => {
                    if (index % 2 === 0) {
                      return (
                        <RightSideSection
                          key={index}
                          title={reason?.reason_title}
                          description={reason?.reason_description}
                        />
                      );
                    } else {
                      return (
                        <LeftSideSection
                          key={index}
                          title={reason.reason_title}
                          description={reason.reason_description}
                        />
                      );
                    }
                  })}
                </div>
                <img
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                />
              </div>
            </div>
            <div className="flex justify-center items-center py-10 px-10 mt-5">
              <button
                onClick={openModal}
                className="border border-[#FDB715] text-[#FDB715] hover:bg-[#FDB715] hover:text-white py-5 px-8"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetail;
