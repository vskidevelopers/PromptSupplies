// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Autoplay,
  A11y,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useCallUsServicesFunctions } from "../utils/firebase";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, A11y]);

function CallUsAdvertSwiper() {
  let [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const { serviceItems } = useCallUsServicesFunctions();
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(item) {
    setIsOpen(true);
    setModalData(item);
    console.log("Modal Data >>", modalData);
  }
  console.log("Services Items >>", serviceItems);

  return (
    <>
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
              <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-50" />
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
                  <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                    <div className="absolute w-full z-10 flex justify-end">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="text-white/80 hover:text-whitefocus:outline-none mr-5 mt-5"
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

                    {/*  */}

                    <div className="my-0  bg-slate-950">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                          <img
                            src={modalData?.poster}
                            className="img-fluid rounded-top"
                            alt=""
                          />
                        </div>
                        <div className="w-full flex flex-col justify-center items-center p-4">
                          <h3 className="mb-3 text-xl font-medium  text-white">
                            {modalData?.jobTitle}
                          </h3>
                          <div className="py-4 mb-2">
                            <p className="text-sm text-gray-600 mb-2">
                              <strong>Description: </strong>{" "}
                              {modalData?.description}
                            </p>
                            <p className="text-sm text-gray-600 mb-2">
                              <strong>Email: </strong> {modalData?.email}
                            </p>
                            <p className="text-sm text-gray-600 mb-2">
                              <strong>Phone Number: </strong>
                              {modalData?.phone}
                            </p>
                            <p className="text-sm text-gray-600 mb-2">
                              <strong>Location: </strong> {modalData?.location}
                            </p>
                            <br />
                            <a
                              href={`tel:${modalData?.phone}`}
                              className="border border-[#FDB715] hover:bg-[#FDB714] py-2  px-6 my-2 text-white font-bold rounded"
                            >
                              Call Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {serviceItems?.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full">
              <div
                className="absolute inset-0 h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item?.poster})` }}
              ></div>
              <div className="absolute inset-0 bg-white/5 hover:bg-white/50 w-full h-full flex justify-center items-center transition duration-300">
                <button
                  onClick={() => openModal(item)}
                  className="border border-[#FDB715] hover:bg-[#FDB714] py-4 px-6 grid grid-cols-2 text-white"
                  onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
                  onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
                >
                  <div className="w-full h-full">
                    <PhoneArrowUpRightIcon className="h-5 w-5" />
                  </div>
                  <div className="w-max">Call Us</div>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CallUsAdvertSwiper;
