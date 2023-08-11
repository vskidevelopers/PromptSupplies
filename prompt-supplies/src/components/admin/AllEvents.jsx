import { useUpcomingEventsFunctions } from "../../utils/firebase";
import AdvertTableSection from "./AdvertTableSection";

export default function AllEvents() {
  const { allUpcomingEvents } = useUpcomingEventsFunctions();
  return (
    <div>
      <div className=" ">
        <AdvertTableSection
          sectionTitle="All Events"
          advertItems={allUpcomingEvents}
          secondary={true}
          approved={false}
        />
      </div>
    </div>
  );
}
