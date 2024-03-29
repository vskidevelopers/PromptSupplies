/* eslint-disable react/prop-types */
import { useState } from "react";
import AdminAdvertViewModal from "./AdminAdvertViewModal";
import AdminVipActionApprovalModel from "./AdminVipActionApprovalModel";

export default function VipAdvertSecondaryTable({ advertItems, approved }) {
  let [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isApprovalModalOpen, setIsApprovalModalOpen] = useState(false);
  const [isFeaturedModalOpen, setIsFeaturedModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  function openModal(item) {
    setIsViewModalOpen(!isViewModalOpen);
    setModalData(item);
    console.log("Modal Data >>", modalData);
  }

  const handleDeleteOnclick = (item) => {
    console.log("Modal Data >>", modalData);
    console.log("iTEM.id ==>", item.id);
    try {
      setModalData(item);
      console.log("isDeleteModalOpen >>", isDeleteModalOpen);
      setIsDeleteModalOpen(!isDeleteModalOpen);
    } catch (error) {
      console.log(error);
    }
    console.log("Modal Data >>", modalData);
    console.log("isModalOpen afterset >>", isDeleteModalOpen);
  };

  function handleApproveOnClick(item) {
    console.log("Modal Data >>", modalData);
    console.log("iTEM.id ==>", item.id);
    try {
      setModalData(item);
      console.log("isApprovalModalOpen >>", isApprovalModalOpen);
      setIsApprovalModalOpen(!isApprovalModalOpen);
    } catch (error) {
      console.log(error);
    }
    console.log("Modal Data >>", modalData);
    console.log("isModalOpen afterset >>", isApprovalModalOpen);
  }

  const handleFeaturedOnclick = (item) => {
    console.log("Modal Data >>", modalData);
    console.log("iTEM.id ==>", item.id);
    try {
      setModalData(item);
      console.log("isFeaturedModalOpen >>", isFeaturedModalOpen);
      setIsFeaturedModalOpen(!isFeaturedModalOpen);
    } catch (error) {
      console.log(error);
    }
    console.log("Modal Data >>", modalData);
    console.log("isModalOpen afterset >>", isFeaturedModalOpen);
  };

  return (
    <div>
      {isViewModalOpen && (
        <AdminAdvertViewModal open={isViewModalOpen} modalData={modalData} />
      )}

      {isApprovalModalOpen && (
        <AdminVipActionApprovalModel
          item={modalData}
          action="approve"
          message="Are You Sure You Want To Approve This Ad?"
        />
      )}

      {isFeaturedModalOpen && (
        <AdminVipActionApprovalModel
          item={modalData}
          action="featured"
          message="Are You Sure You Want To Make this Ad a Featured Service?"
        />
      )}

      {isDeleteModalOpen && (
        <AdminVipActionApprovalModel
          action="delete"
          item={modalData}
          message="Are You Sure You Want To Delete this Service?"
        />
      )}

      {/* Table */}

      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
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
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Status
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-full text-center">
              Primary Actions
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-full text-center">
              Secondary Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
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

              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.approved ? (
                  <div className="inline-block w-full  bg-emerald-600 px-4 py-2 text-xs font-medium text-white text-center hover:bg-emerald-700">
                    Approved
                  </div>
                ) : (
                  <div className="inline-block w-full  bg-red-600 px-4 py-2 text-xs font-medium text-white text-center hover:bg-red-700">
                    Pending
                  </div>
                )}
              </td>

              <td className="whitespace-nowrap px-4 py-2 ">
                <div className="flex gap-2 ">
                  <button
                    onClick={() => openModal(item)}
                    className="py-2 px-6 border border-sky-800 hover:bg-sky-800 text-sky-800 hover:text-white"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDeleteOnclick(item)}
                    className="py-2 px-4 border border-red-800 hover:bg-red-800 text-sky-800 hover:text-white"
                  >
                    Delete
                  </button>
                </div>
              </td>

              <td className="whitespace-nowrap px-4 py-2 ">
                {approved ? (
                  <div className="flex  w-60 justify-center ">
                    <div className=" w-full py-1 px-1">
                      <button
                        onClick={() => handleFeaturedOnclick(item)}
                        className="w-full py-2 px-4 border border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-white rounded-full "
                      >
                        Featured
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className=" grid grid-cols-1 gap-2 ">
                    {item.approved ? (
                      <button
                        disabled={true}
                        className="rounded-full py-2 px-4 bg-slate-600 text-white"
                      >
                        Approved
                      </button>
                    ) : (
                      <button
                        onClick={() => handleApproveOnClick(item)}
                        className="w-full py-2 px-4 border border-yellow-600 hover:bg-yellow-600 text-yellow-600 hover:text-white rounded-full "
                      >
                        Approve
                      </button>
                    )}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
