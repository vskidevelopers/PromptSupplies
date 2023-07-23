/* eslint-disable react/prop-types */
import { useState } from "react";
import AdminAdvertViewModal from "./AdminAdvertViewModal";
import AdminVipActionApprovalModel from "./AdminVipActionApprovalModel";

export default function VipAdvertPrimaryTable({ advertItems }) {
  let [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  function openModal(item) {
    setIsViewModalOpen(!isViewModalOpen);
    setModalData(item);
    console.log("Modal Data >>", modalData);
  }

  function handleDeleteOnClick(item) {
    setModalData(item);
    setIsDeleteModalOpen(!isDeleteModalOpen);
  }
  return (
    <div>
      {isViewModalOpen && (
        <AdminAdvertViewModal open={isViewModalOpen} modalData={modalData} />
      )}

      {isDeleteModalOpen && (
        <AdminVipActionApprovalModel
          action="delete"
          item={modalData}
          message="Are You Sure You Want To Delete this Service?"
        />
      )}

      {/* Table */}

      <table className=" min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="text-left ">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              #
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Job Title
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Phone
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Email
            </th>

            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-full text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200  ">
          {advertItems?.map((item, index) => (
            <tr key={index} className="odd:bg-white even:bg-slate-50">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {index}
              </td>
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

              <td className="whitespace-nowrap px-4 py-2 ">
                <div className=" flex gap-2 ">
                  <button
                    onClick={() => openModal(item)}
                    className="basis-1/2 py-2 px-4 bg-sky-600 hover:bg-sky-800 text-white"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDeleteOnClick(item)}
                    className="basis-1/2 py-2 px-4 border border-red-800 hover:bg-red-800 text-sky-800 hover:text-white"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
