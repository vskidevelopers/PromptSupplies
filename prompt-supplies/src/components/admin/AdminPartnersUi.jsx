import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import CreatePartnersForm from "./CreatePartnersForm";

export default function AdminPartnersUi() {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <div>
      {" "}
      <Transition appear show={openModal} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
                  <>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Choose the type of Advert you want to post
                    </Dialog.Title>

                    <div className="flex flex-col gap-5 w-full h-full py-6 px-5">
                      <CreatePartnersForm />
                    </div>
                  </>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className=" py-5 px-2">
        <div className="w-full py-4 flex justify-end items-center">
          <button
            onClick={() => setOpenModal((prev) => !prev)}
            className="border-2 border-[#FDB715] py-3 px-4 text-center flex items-center text-slate-900 font-semibold hover:bg-[#FDB715] hover:text-white"
          >
            <PlusIcon className="h-4 w-4 mr-2 font-bold" />
            Add a partner
          </button>
        </div>
        <div className="w-full px-2 py-16 sm:px-0 bg-slate-900 rounded shadow ">
          <div className="px-14">
            <h2 className="font-mono text-center md:text-left text-3xl md:text-5xl font-semibold text-white">
              Partners
            </h2>
          </div>
          <div className="py-10 px-14  ">
            <div className="container mx-auto ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
