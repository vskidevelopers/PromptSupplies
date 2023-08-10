import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import VipSlider from "./VipSlider";
import AdvertForm from "./AdvertForm";
// import FeaturedVipSlider from "./FeaturedVipSlider";
// import VipSlider from "./VipSlider";
import FeaturedVipSwiper from "./featuredVipSwiper";

export default function AdvertSlider() {
  const [isApprovalModalOpen, setIsApprovalModalOpen] = useState(false);
  const [isVipSelected, setIsVipSelected] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setIsApprovalModalOpen(false);
    setIsVipSelected(false);
  }

  function handleOpenModal() {
    setIsOpen(true);
  }

  function openApprovalModal() {
    setIsApprovalModalOpen(true);
  }

  function handleOpenVipModal() {
    setIsVipSelected(true);
    setIsOpen(true);
  }

  return (
    <>
      <div className="container mx-auto px-5 md:px-20 py-10">
        {/* Title */}
        <Transition appear show={isApprovalModalOpen} as={Fragment}>
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

                    {isOpen && <AdvertForm isVipSelected={isVipSelected} />}

                    {!isOpen && (
                      <>
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Choose the type of Advert you want to post
                        </Dialog.Title>

                        <div className="flex gap-5 w-full h-full py-6 px-5">
                          <button
                            onClick={handleOpenVipModal}
                            className="h-32 flex justify-center items-center w-1/2 border border-dashed text-teal-500 border-teal-500 hover:bg-teal-600  hover:text-white"
                          >
                            LandScape Advert
                          </button>
                          <button
                            onClick={handleOpenModal}
                            className="h-32 flex justify-center items-center w-1/2 border border-dashed text-[#FDB715] border-[#FDB715] hover:bg-[#FDB715]  hover:text-white"
                          >
                            Square Advert
                          </button>
                        </div>
                      </>
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <div
              className="relative flex flex-col justify-center items-center py-10"
              ref={ref}
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 text-center my-2">
                  <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
                    Advertise With Us
                  </h2>
                  <h1 className="text-xl md:text-3xl font-bold">
                    Amplify Your Reach: Unlock Growth Opportunities with
                    Effective Advertising
                  </h1>
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center z-10">
                  <button
                    onClick={openApprovalModal}
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

      <section className="py-5 md:py-10 bg-slate-200">
        <div className="container max-full mx-auto">
          <div className="flex flex-col items-center w-full rounded-md lg:h-full   dark:text-gray-100">
            <div className="!w-full">
              {/* <VipSlider /> */}
              {/* <FeaturedVipSlider /> */}
              <FeaturedVipSwiper />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
