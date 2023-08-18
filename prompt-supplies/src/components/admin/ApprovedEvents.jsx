import EventsTableSection from "./EventsTableSection";
import { useUpcomingEventsFunctions } from "../../utils/firebase";

export default function ApprovedEvents() {
  const { approvedUpcomingEvents } = useUpcomingEventsFunctions();
  return (
    <div>
      <div className="overflow-auto">
        <EventsTableSection
          sectionTitle="Approved Events"
          advertItems={approvedUpcomingEvents}
        />
      </div>
    </div>
  );
}
