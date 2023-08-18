/* eslint-disable react/prop-types */

import { useBlogFunctions } from "../../utils/firebase";
import SnackBar from "../SnackBar";
import AdminBlogCard from "./AdminBlogCard";

export default function AdminBlogsSection({ sectionTitle, blogItems }) {
  const { blogLoading } = useBlogFunctions();
  return (
    <>
      <div className="container mx-auto w-full ">
        <div className="w-full  py-10 flex flex-col bg-white px-10">
          <div className="flex py-5 flex-col gap-3">
            {/* Header Details */}
            <h2 className="text-4xl font-bold ">{sectionTitle}</h2>
            <h6 className="text-md font-semibold text-gray-600 ">
              {blogItems?.length || 0} total
            </h6>
          </div>

          <div className="w-full  ">
            {/*Table Contents  */}
            {blogLoading ? (
              <SnackBar status="loading" />
            ) : (
              <>
                {blogItems?.length > 0 ? (
                  <div className=" flex flex-col gap-4">
                    {blogItems.map((blogItem, index) => (
                      <div
                        key={index}
                        className="container mx-auto px-8 relative"
                      >
                        <span
                          className="absolute text-6xl text-gray-300 left-4 w-full  z-10"
                          style={{
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                        >
                          {index + 1}
                        </span>

                        <AdminBlogCard blogItem={blogItem} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-full py-16">
                    <h2 className="text-2xl text-center font-semibold">
                      No{" "}
                      <span className="text-4xl font-bold">{sectionTitle}</span>{" "}
                      found in the database!
                    </h2>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
