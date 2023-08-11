import DealsSectionSlider from "../components/DealsSectionSlider";
import HeroSlider from "../components/HeroSlider";
import SectionServiceSlider from "../components/SectionServiceSlider";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { InView } from "react-intersection-observer";
import {
  useCallUsServicesFunctions,
  useUpcomingEventsFunctions,
  useVipServicesFunctions,
} from "../utils/firebase";
import { Fragment, useState } from "react";
import ServiceGrid from "../components/ServiceGrid";
import AdvertForm from "../components/AdvertForm";
import EventsSectionSlider from "../components/EventsSectionSlider";
import UpcomingEventForm from "../components/UpcomingEventForm";

export default function EfficientServices() {
  const [isApprovalModalOpen, setIsApprovalModalOpen] = useState(false);
  const [isVipSelected, setIsVipSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  const {
    approvedServiceItems,
    popularServiceItems,
    featuredServiceItems,
    dealsServiceItems,
    allServiceItems,
  } = useCallUsServicesFunctions();
  const { allUpcomingEvents } = useUpcomingEventsFunctions();

  const { allVipAdsItems } = useVipServicesFunctions();

  console.log(
    "Approved Ads from the Efficient Page >>",
    typeof approvedServiceItems
  );
  console.log("All Ads from the Efficient Page >>", popularServiceItems);
  console.log(
    "All Ads from the Efficient Page >>",
    Array.isArray(allServiceItems)
  );
  console.log("Approved Ads from the Efficient Page >>", featuredServiceItems);
  console.log("Deals Ads from the Efficient Page >>", dealsServiceItems);
  // console.log("Approved Ads from the Efficient Page >>", salesServiceItems);

  // const dealsItems = [...offerServiceItems, ...salesServiceItems];

  // console.log("Deals Items >>", dealsItems.length);

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

  function handleOpenEventModal() {
    setIsEventModalOpen(true);
  }

  return (
    <div className="mt-16 relative">
      <div className="">
        <HeroSlider sliderItems={allVipAdsItems} />
      </div>
      <div>
        <SectionServiceSlider
          sectionTitle="Popular Services"
          bgColor="bg-gray-100"
          sliderItems={popularServiceItems}
          dimentions={"30rem"}
          sectionHeight={"40rem"}
          slidesToDisplay={2}
          popular={true}
        />

        <div>
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
                      {isEventModalOpen && <UpcomingEventForm />}

                      {!isOpen && !isEventModalOpen && (
                        <>
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            Choose the type of Advert you want to post
                          </Dialog.Title>

                          <div className="flex flex-col gap-5 w-full h-full py-6 px-5">
                            <div className="w-full flex gap-3">
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

                            <div className="w-full flex justify-center">
                              <button
                                onClick={handleOpenEventModal}
                                className="h-32 flex justify-center items-center w-1/2 border border-dashed text-[#FDB715] border-sky-900 hover:bg-sky-900  hover:text-white"
                              >
                                Upcoming Event
                              </button>
                            </div>
                          </div>
                        </>
                      )}
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
                  <div className="flex flex-col gap-4 px-8 w-full md:flex-row ">
                    <div className="w-full  md:w-1/2 text-start md:text-center">
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
        </div>

        <EventsSectionSlider
          dimentions={"25rem"}
          sectionHeight={"30rem"}
          sectionTitle="Upcoming Events"
          bgColor="bg-gray-100"
          sliderItems={allUpcomingEvents}
        />

        <DealsSectionSlider
          sliderItems={dealsServiceItems[0]}
          dimentions={"20rem"}
          popular={true}
        />

        <ServiceGrid sliderItems={approvedServiceItems} dimentions={"25rem"} />
      </div>
    </div>
  );
}
