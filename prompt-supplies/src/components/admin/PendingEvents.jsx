import { useUpcomingEventsFunctions } from "../../utils/firebase";
import EventsTableSection from "./EventsTableSection";

export default function PendingEvents() {
  const { pendingUpcomingEvents } = useUpcomingEventsFunctions();
  return (
    <div>
      <div className="overflow-auto">
        <EventsTableSection
          sectionTitle="All Events"
          advertItems={pendingUpcomingEvents}
        />
      </div>
    </div>
  );
}
