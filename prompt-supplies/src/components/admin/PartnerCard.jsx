import { Dialog, Transition } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { usePartnersFunctions } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function PartnerCard({ partner, index }) {
  const navigate = useNavigate();
  const { handleDeletePartnersData } = usePartnersFunctions();
  const [openViewModal, setopenViewModal] = useState(false);
  const [openDeleteModal, setopenDeleteModal] = useState(false);
  const closeModal = () => {
    setopenViewModal((prev) => !prev);
  };
  let [modalData, setModalData] = useState({});

  function openModal(itemParam) {
    setopenViewModal(true);
    setModalData(itemParam);
  }

  const handleDeleteOnclick = (partner) => {
    console.log("Modal Data >>", modalData);
    console.log("partner.id ==>", partner.id);
    try {
      console.log("openDeleteModal >>", openDeleteModal);
      setopenDeleteModal(!openDeleteModal);
    } catch (error) {
      console.log(error);
    }
    console.log("Modal Data >>", modalData);
    console.log("isModalOpen afterset >>", openDeleteModal);
  };

  const deletePartner = async () => {
    try {
      console.log("Deleting partner #", partner);
      await handleDeletePartnersData(partner.id);
      setopenDeleteModal(!openDeleteModal);
      navigate("/admin");
    } catch (error) {
      console.log("error occured >>", error);
    }
  };
  return (
    <div>
      <Transition appear show={openDeleteModal} as={Fragment}>
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
                      onClick={() => setopenDeleteModal(!openDeleteModal)}
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
                      className={`bg-slate-800 border border-red-800 rounded shadow py-16 px-10 `}
                    >
                      <p className="text-red-700">
                        Are You Sure You Want To Delete this Partner?
                      </p>
                      <div className="w-full flex justify-between py-2 text-white">
                        <button
                          className="rounded border border-red-800 hover:bg-red-800 hover:text-white py-2 px-8"
                          onClick={deletePartner}
                        >
                          Yes
                        </button>
                        <button
                          className="rounded border border-gray-600 py-2 px-8"
                          onClick={() => setopenDeleteModal(!openDeleteModal)}
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

      <Transition appear show={openViewModal} as={Fragment}>
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
                  <div className="flex justify-between mb-3">
                    <button
                      type="button"
                      onClick={handleDeleteOnclick}
                      className="text-red-600 hover:text-gray-900 focus:outline-none"
                    >
                      <TrashIcon className="text-red-800 h-5 w-5" />
                    </button>
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
                      {modalData.name}
                    </Dialog.Title>

                    <div className="">
                      <img
                        src={modalData?.image}
                        className="w-full img-fluid rounded-top"
                        alt=""
                      />
                    </div>
                  </>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="group block relative" onClick={() => openModal(partner)}>
        <div className="absolute text-2xl text-white -left-5">{index}</div>
        <div className="h-60 w-full flex justify-center items-center">
          <img
            src={partner.image}
            alt={`${partner.name}'s Logo `}
            className=""
          />
        </div>

        <div className="mt-3 flex justify-between text-sm">
          <div>
            <h3 className="text-gray-200 group-hover:underline group-hover:underline-offset-4">
              {partner.name}
            </h3>

            <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
              {partner.email}
            </p>
          </div>

          <p className="text-gray-200">{partner.phone}</p>
        </div>
      </div>
    </div>
  );
}
