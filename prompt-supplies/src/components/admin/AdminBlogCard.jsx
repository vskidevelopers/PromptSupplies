/* eslint-disable react/prop-types */
import {
  DocumentArrowUpIcon,
  DocumentCheckIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { useBlogFunctions } from "../../utils/firebase";

export default function AdminBlogCard({ blogItem }) {
  const { handleDeleteBlog, handlePublishBlog, handleMakeBlogFeatured } =
    useBlogFunctions();
  console.log("blogItem >>", blogItem);
  const [showDeleteModal, setShowDeleteModal] = useState({
    open: false,
    blogItemId: "",
  });
  const [showFeaturedModal, setShowFeaturedModal] = useState({
    open: false,
    blogItemId: "",
  });
  const [showPublishModal, setShowPublishModal] = useState({
    open: false,
    blogItemId: "",
  });

  const monthAbbreviations = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateString = blogItem.createdDate;
  const [day, monthIndex, year] = dateString.split("-");
  const monthAbbreviation = monthAbbreviations[parseInt(monthIndex, 10) - 1];

  const handleDeleteOnclick = (id) => {
    setShowDeleteModal({ open: true, id: id });
  };

  const handleOnDeleteConfirm = (blogItemId) => {
    console.log("item Id >>", blogItemId);
    try {
      handleDeleteBlog(blogItemId);
      alert("BlogPost deleted successfully");
    } catch (err) {
      console.log("the following error occured>> ", err);
    }
    setShowDeleteModal((prevState) => ({
      ...prevState,
      open: false,
    }));
    window.location.reload();
  };

  const handlePublishOnClick = (id) => {
    setShowPublishModal({ open: true, id: id });
  };

  const handleOnPublishConfirm = (blogItemId) => {
    console.log("item Id >>", blogItemId);
    try {
      handlePublishBlog(blogItemId);
      alert("BlogPost Published successfully");
    } catch (err) {
      console.log("the following error occured>> ", err);
    }
    setShowPublishModal((prevState) => ({
      ...prevState,
      open: false,
    }));
    window.location.reload();
  };

  const handleMakeFeaturedOnClick = (id) => {
    setShowFeaturedModal({ open: true, id: id });
  };

  const handleOnFeaturedConfirm = (blogItemId) => {
    console.log("item Id >>", blogItemId);
    try {
      handleMakeBlogFeatured(blogItemId);
      alert("BlogPost Featured successfully");
    } catch (err) {
      console.log("the following error occured>> ", err);
    }
    setShowFeaturedModal((prevState) => ({
      ...prevState,
      open: false,
    }));
    window.location.reload();
  };

  const handleOnCancel = () => {
    setShowDeleteModal(false);
    setShowFeaturedModal(false);
    setShowPublishModal(false);
  };

  return (
    <div className="flex gap-2 relative">
      {showDeleteModal.open && (
        <div className="absolute z-30 bg-gray-800/80  h-full w-full flex justify-center items-center ">
          <div className="bg-slate-900 border border-red-600 rounded shadow py-4 px-5 ">
            <p className="text-red-600">
              Are you sure you want to Delete this BlogPost?
            </p>
            <div className="w-full flex justify-between py-2 text-white">
              <button
                className="rounded border border-red-600 hover:bg-red-600 hover:text-white py-2 px-8"
                onClick={() =>
                  handleOnDeleteConfirm(showDeleteModal.blogItemId)
                }
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

      {showPublishModal.open && (
        <div
          onClick={handleOnCancel}
          className="absolute z-30 bg-gray-800/80  h-full w-full flex justify-center items-center "
        >
          <div className="bg-slate-900 border border-green-600 rounded shadow py-4 px-5 ">
            <p className="text-green-600">
              Are you sure you want to Publish this Blog Post?
            </p>
            <div className="w-full flex justify-between py-2 text-white">
              <button
                className="rounded border border-green-600 hover:bg-green-600 hover:text-white py-2 px-8"
                onClick={() =>
                  handleOnPublishConfirm(showPublishModal.blogItemId)
                }
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

      {showFeaturedModal.open && (
        <div
          onClick={handleOnCancel}
          className="absolute z-30  bg-gray-800/80  h-full w-full flex justify-center items-center "
        >
          <div className="bg-slate-900 border border-purple-700 rounded shadow py-4 px-5 ">
            {blogItem?.published ? (
              <>
                <p className="text-indigo-600">
                  Are you sure you want to make this Blog Post Featured?
                </p>
                <div className="w-full flex justify-between py-2 text-white">
                  <button
                    className="rounded border border-purple-600 hover:bg-indigo-600 hover:text-white py-2 px-8"
                    onClick={() =>
                      handleOnFeaturedConfirm(showFeaturedModal.blogItemId)
                    }
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
              </>
            ) : (
              <p className="text-red-600">
                You got to Publish This Blog Post First
              </p>
            )}
          </div>
        </div>
      )}

      <article className="flex max-w-2xl bg-white transition hover:shadow-xl">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
            <span>{year}</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>
              {monthAbbreviation}&nbsp; {day}
            </span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src={blogItem?.image}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900">
                {blogItem?.title}
              </h3>
            </a>

            <p className="mt-2 line-clamp-5 text-md/relaxed text-gray-700">
              {blogItem?.content}
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <a
              href="#"
              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
              Read Blog
            </a>
          </div>
        </div>
      </article>

      <div className="z-20 grid grid-cols-1 gap-2 h-full max-w-sm ">
        <div
          onClick={() => handlePublishOnClick(blogItem.id)}
          className="cursor-pointer py-3 px-2 flex items-center gap-3 transition-transform hover:scale-110 hover:bg-emerald-700 hover:text-white w-full h-full"
        >
          <DocumentCheckIcon className="h-6 w-6 text-emerald-700" />
          Publish
        </div>
        <div
          onClick={() => handleMakeFeaturedOnClick(blogItem.id)}
          className="cursor-pointer py-3 px-2 flex items-center gap-3 transition-transform hover:scale-110 hover:bg-sky-700 hover:text-white w-full h-full"
        >
          <DocumentArrowUpIcon className="h-6 w-6 text-sky-700 " />
          Featured
        </div>
        <div
          onClick={() => handleDeleteOnclick(blogItem.id)}
          className="cursor-pointer py-3 px-2 flex items-center gap-3 transition-transform hover:scale-110 hover:bg-red-700 hover:text-white w-full h-full"
        >
          <TrashIcon className="z-10 h-6 w-6 text-red-700" />
          Delete
        </div>
      </div>
    </div>
  );
}
