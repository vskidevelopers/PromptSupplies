import AdvertUiInfoCards from "./AdvertUiInfoCards";
import { useVipServicesFunctions } from "../../utils/firebase";
import { Outlet } from "react-router-dom";

function AdminVipAdvertsUi() {
  const {
    allVipAdsItems,
    featuredVipAdsItems,
    approvedVipAdsItems,
    pendingVipAdsItems,
  } = useVipServicesFunctions();
  try {
    console.log("allServiceItems >", allVipAdsItems);
  } catch (error) {
    console.error(error);
  }

  const advertStats = [
    {
      title: "Total Adverts",
      value: allVipAdsItems.length,
      theme: "sky-800",
    },
    {
      title: "Approved Adverts",
      value: approvedVipAdsItems.length,
      theme: "emerald-600",
    },
    {
      title: "Pending Adverts",
      value: pendingVipAdsItems.length,
      theme: "yellow-500",
    },
    {
      title: "Featured Adverts",
      value: featuredVipAdsItems.length,
      theme: "cyan-800",
    },
  ];

  return (
    <div>
      {" "}
      <div className=" py-5 px-2">
        <div className="w-full px-2 py-16 sm:px-0 bg-slate-900 rounded shadow ">
          <div className="px-14">
            <h2 className="font-mono text-center md:text-left text-3xl md:text-5xl font-semibold text-white">
              LandScape Adverts
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

export default AdminVipAdvertsUi;
