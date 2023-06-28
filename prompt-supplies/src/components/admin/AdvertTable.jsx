import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

/* eslint-disable react/prop-types */
export default function AdvertTable({ serviceItems, actions, pendingView }) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showMakeVipConfirm, setShowMakeVipConfirm] = useState(false);
  const [showApproveConfirm, setShowApproveConfirm] = useState(false);
  const [itemId, setItemId] = useState("");
  let [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(item) {
    setIsOpen(true);
    setModalData(item);
    console.log("Modal Data >>", modalData);
  }

  const handleOnDelete = (id) => {
    setShowDeleteConfirm(true);
    setItemId(id);
  };

  const handleOnMakeVip = (id) => {
    setShowMakeVipConfirm(true);
    setItemId(id);
  };

  const handleOnAppoveConfirm = (id) => {
    setShowApproveConfirm(true);
    setItemId(id);
  };

  const handleOnApprove = (id) => {
    setShowApproveConfirm(true);
    setItemId(id);
  };

  const handleOnDeleteConfirm = () => {
    console.log("item Id >>", itemId);
    // handleDeleteMenuItem(itemId, category);
    setShowDeleteConfirm(false);
  };

  const handleOnVipConfirm = () => {
    console.log("item Id >>", itemId);
    // handleDeleteMenuItem(itemId, category);
    setShowApproveConfirm(false);
  };

  const handleOnCancel = () => {
    setShowDeleteConfirm(false);
    setShowApproveConfirm(false);
    setShowMakeVipConfirm(false);
  };

  return (
    <div className="relative">
      {showDeleteConfirm && (
        <div className="absolute  bg-gray-800/80  h-full w-full flex justify-center items-center ">
          <div className="bg-white rounded shadow py-4 px-5 ">
            <p className="text-red-600">Are you sure you want to delete?</p>
            <div className="w-full flex justify-between py-2">
              <button
                className="rounded border border-red-600 hover:bg-red-600 hover:text-white py-2 px-8"
                onClick={() => handleOnDeleteConfirm()}
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
      )}

      {showApproveConfirm && (
        <div className="absolute  bg-gray-800/80  h-full w-full flex justify-center items-center ">
          <div className="bg-slate-900 rounded shadow py-4 px-5 ">
            <p className="text-red-600">
              Are you sure you want to Approve this Ad?
            </p>
            <div className="w-full flex justify-between py-2 text-white">
              <button
                className="rounded border border-red-600 hover:bg-red-600 hover:text-white py-2 px-8"
                onClick={() => handleOnAppoveConfirm()}
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
      )}

      {showMakeVipConfirm && (
        <div className="absolute  bg-gray-800/80  h-full w-full flex justify-center items-center ">
          <div className="bg-slate-900 rounded shadow py-4 px-5 ">
            <p className="text-red-600">
              Are you sure you want to make this Ad VIP?
            </p>
            <div className="w-full flex justify-between py-2 text-white">
              <button
                className="rounded border border-red-600 hover:bg-red-600 hover:text-white py-2 px-8"
                onClick={() => handleOnVipConfirm()}
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
      )}

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

      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="text-left ">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Job Title
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Phone Email
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Email
            </th>
            {actions ? (
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Actions
              </th>
            ) : (
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Status
              </th>
            )}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {serviceItems.map((item, index) => (
            <tr key={index} className="odd:bg-white even:bg-slate-50">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {item.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.jobTitle}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.phone}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.email}
              </td>
              {actions ? (
                pendingView ? (
                  <td className="whitespace-nowrap px-4 py-2 flex gap-4">
                    <button
                      onClick={() => handleOnApprove(item?.id)}
                      className="py-2 px-4 bg-emerald-800 text-white "
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => openModal(item)}
                      className="py-2 px-4 bg-sky-800 text-white"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleOnDelete(item?.id)}
                      className="py-2 px-4 bg-red-800 text-white"
                    >
                      Delete
                    </button>
                  </td>
                ) : (
                  <td className="whitespace-nowrap px-4 py-2 flex gap-4 ">
                    <button
                      onClick={() => handleOnMakeVip(item?.id)}
                      className="py-2 px-4 bg-emerald-800 text-white"
                    >
                      Vip
                    </button>
                    <button
                      onClick={() => handleOnDelete(item?.id)}
                      className="py-2 px-4 bg-red-800 text-white"
                    >
                      Delete
                    </button>
                  </td>
                )
              ) : (
                <td className="whitespace-nowrap px-4 py-2">
                  {item.approved ? (
                    <div className="inline-block w-3/4  bg-emerald-600 px-4 py-2 text-xs font-medium text-white text-center hover:bg-emerald-700">
                      Approved
                    </div>
                  ) : (
                    <div className="inline-block w-3/4  bg-red-600 px-4 py-2 text-xs font-medium text-white text-center hover:bg-red-700">
                      Pending
                    </div>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
