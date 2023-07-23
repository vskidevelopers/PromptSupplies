import AdvertUiInfoCards from "./AdvertUiInfoCards";
import { useCallUsServicesFunctions } from "../../utils/firebase";
import { Outlet } from "react-router-dom";

export default function AdminNormalAdvertsUi() {
  const {
    allServiceItems,
    approvedServiceItems,
    pendingServiceItems,
    popularServiceItems,
    featuredServiceItems,
    offerServiceItems,
    salesServiceItems,
  } = useCallUsServicesFunctions();
  try {
    console.log("allServiceItems >", allServiceItems);
  } catch (error) {
    console.error(error);
  }

  const advertStats = [
    {
      title: "Total Adverts",
      value: allServiceItems.length,
      theme: "sky-800",
    },
    {
      title: "Approved Adverts",
      value: approvedServiceItems.length,
      theme: "emerald-600",
    },
    {
      title: "Pending Adverts",
      value: pendingServiceItems.length,
      theme: "yellow-500",
    },
    {
      title: "Popular Adverts",
      value: popularServiceItems.length,
      theme: "red-800",
    },
    {
      title: "Featured Adverts",
      value: featuredServiceItems.length,
      theme: "cyan-800",
    },
    {
      title: "Offer Adverts",
      value: offerServiceItems.length,
      theme: "yellow-500",
    },
    {
      title: "Sales Adverts",
      value: salesServiceItems.length,
      theme: "red-800",
    },
  ];

  return (
    <div>
      {" "}
      <div className=" py-5 px-2">
        <div className="w-full px-2 py-16 sm:px-0 bg-slate-900 rounded shadow ">
          <div className="px-14">
            <h2 className="font-mono text-center md:text-left text-4xl md:text-5xl font-semibold text-white">
              Square Adverts
            </h2>
          </div>
          <div className="py-10 px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {advertStats.map((advert, index) => (
              <AdvertUiInfoCards
                key={index}
                title={advert.title}
                value={advert.value}
                theme={advert.theme}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
