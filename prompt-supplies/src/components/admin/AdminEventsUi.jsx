import { Outlet } from "react-router-dom";
import { useUpcomingEventsFunctions } from "../../utils/firebase";
import AdvertUiInfoCards from "./AdvertUiInfoCards";

export default function AdminEventsUi() {
  const { allUpcomingEvents, approvedUpcomingEvents, pendingUpcomingEvents } =
    useUpcomingEventsFunctions();

  const eventsStats = [
    {
      title: "Total Events",
      value: allUpcomingEvents.length,
      theme: "sky-800",
    },
    {
      title: "Approved Events",
      value: approvedUpcomingEvents.length,
      theme: "emerald-600",
    },
    {
      title: "Pending Events",
      value: pendingUpcomingEvents.length,
      theme: "yellow-500",
    },
    // {
    //   title: "Past Events",
    //   value: popularServiceItems.length,
    //   theme: "red-800",
    // }
  ];

  return (
    <div>
      {" "}
      <div className=" py-5 px-2">
        <div className="w-full px-2 py-16 sm:px-0 bg-slate-900 rounded shadow ">
          <div className="px-14">
            <h2 className="font-mono text-center md:text-left text-4xl md:text-5xl font-semibold text-white">
              Events
            </h2>
          </div>
          <div className="py-10 px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {eventsStats.map((advert, index) => (
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
