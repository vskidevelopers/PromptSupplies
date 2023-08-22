/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useUpcomingEventsFunctions } from "../../utils/firebase";

export default function AdminEventApprovalModal({ message, item, action }) {
  let [showModal, setShowModal] = useState(true);
  console.log("Action passed >>", action);
  const handleOnCancel = () => {
    setShowModal(false);
  };

  const { handleDeleteEvent, handleApproveUpcomingEvents } =
    useUpcomingEventsFunctions();
  const handleClick = (actionParameter) => {
    console.log("actionParameter >>", actionParameter);
    if (actionParameter === "approve") {
      try {
        console.log("Approved Item#", item.id);
        handleApproveUpcomingEvents(item.id);
        setShowModal(false);
      } catch (err) {
        console.log("the following error ocuured >>", err);
      }
    } else if (actionParameter === "delete") {
      try {
        console.log("3. function to run is >>", actionParameter);
        console.log("Deleting Item#", item.id);
        handleDeleteEvent(item.id);
        setShowModal(false);
      } catch (err) {
        console.log("the following error ocuured >>", err);
      }
    } else {
      setShowModal(false);
    }
  };

  return (
    <div>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={handleOnCancel}>
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
                      onClick={handleOnCancel}
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
                  <div className="  bg-gray-800/20  h-96 w-full flex justify-center items-center ">
                    <div
                      className={`bg-slate-800 border border-[#FDB715] rounded shadow py-16 px-10 `}
                    >
                      {item ? <p>item #{item.id}</p> : ""}
                      <p className="text-[#FDB715]">{message}</p>
                      <div className="w-full flex justify-between py-2 text-white">
                        <button
                          className="rounded border border-[#FDB715] hover:bg-[#FDB715] hover:text-white py-2 px-8"
                          onClick={() => handleClick(action)}
                        >
                          Yes
                        </button>
                        <button
                          className="rounded border border-gray-600 py-2 px-8"
                          onClick={handleOnCancel}
                        >
                          No
                        </button>
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
  );
}
