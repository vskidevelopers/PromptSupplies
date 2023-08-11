/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import Truncate from "../utils/Truncate";
import { format } from "date-fns";
import { Fragment, useState } from "react";

export default function EventCard({ event }) {
  const startDate = new Date(event.startDate);
  const formattedDate = format(startDate, "dd MMM");

  let [isOpen, setIsOpen] = useState(false);
  let [modalData, setModalData] = useState({});

  function openModal(itemParam) {
    setIsOpen(true);
    setModalData(itemParam);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 my-4" onClose={closeModal}>
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

          <div className="fixed inset-0 overflow-y-auto ">
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
                      <div className="flex items-center">
                        <img
                          src={modalData?.poster}
                          className="img-fluid rounded-top"
                          alt=""
                        />
                      </div>

                      <div className="w-full flex flex-col justify-center items-center p-4">
                        <h3 className="mb-3 text-xl font-medium  text-white">
                          {modalData?.title}
                        </h3>
                        <div className="py-4 mb-2">
                          <p className="text-sm text-gray-300 mb-2">
                            <strong>Description: </strong>{" "}
                            {modalData?.description}
                          </p>
                          <p className="text-sm text-gray-300 mb-2">
                            <strong>Email: </strong> {modalData?.email}
                          </p>
                          <p className="text-sm text-gray-300 mb-2">
                            <strong>Phone Number: </strong>
                            {modalData?.phone}
                          </p>
                          <p className="text-sm text-gray-300 mb-2">
                            <strong>Location: </strong> {modalData?.venue}
                          </p>
                          <p className="text-sm text-gray-300 mb-2">
                            <strong>Time: </strong> {modalData?.time}
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
      <div className="h-full flex justify-center items-center">
        <div
          onClick={() => openModal(event)}
          className="flex flex-col justify-between w-72 sm:w-96 h-96 bg-white text-gray-800 shadow-md overflow-hidden cursor-pointer  bg-cover bg-center"
          style={{ backgroundImage: `url(${event?.poster})` }}
        >
          <div className="flex justify-between items-center ml-4 pr-8">
            <div className="bg-[#FDB715] text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
              {event.author}
            </div>
            <div className="bg-slate-950 w-20 h-16 shadow flex justify-center items center  p-2 text-center font-bold text-white rounded-b-full">
              {formattedDate}
            </div>
          </div>
          <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
            <h3 className="text-xl font-bold pb-2">{event.title}</h3>
            <p className="truncate text-gray-500 text-sm">
              <Truncate str={event.description} n="75" />{" "}
              <span className="strong">...</span>
            </p>
            <div className="flex  items-center mt-2">
              <span className="text-gray-400 text-xs">
                {event.startDate} &nbsp;
              </span>{" "}
              -{" "}
              <span className="text-gray-400 text-xs">
                &nbsp;{event.endDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
