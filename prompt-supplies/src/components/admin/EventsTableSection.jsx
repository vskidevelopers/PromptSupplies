/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import EventsTable from "./EventsTable";
import SnackBar from "../SnackBar";

export default function EventsTableSection({ sectionTitle, advertItems }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container mx-auto w-full ">
        <div className="w-full  py-10 flex flex-col bg-white px-10">
          <div className="flex py-5 flex-col gap-3">
            {/* Header Details */}
            <h2 className="text-4xl font-bold ">{sectionTitle}</h2>
            <h6 className="text-md font-semibold text-gray-600 ">
              {advertItems?.length} total
            </h6>
          </div>

          <div className="w-full  overflow-x-scroll">
            {/*Table Contents  */}
            {loading ? (
              <SnackBar status="loading" />
            ) : (
              <>
                {advertItems?.length > 0 ? (
                  <>
                    <EventsTable advertItems={advertItems} />
                  </>
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
