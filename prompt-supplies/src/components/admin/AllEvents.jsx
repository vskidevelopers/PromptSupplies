import { useUpcomingEventsFunctions } from "../../utils/firebase";

import EventsTableSection from "./EventsTableSection";

export default function AllEvents() {
  const { allUpcomingEvents } = useUpcomingEventsFunctions();
  return (
    <div>
      <div className=" ">
        <EventsTableSection
          sectionTitle="All Events"
          advertItems={allUpcomingEvents}
        />
      </div>
    </div>
  );
}
