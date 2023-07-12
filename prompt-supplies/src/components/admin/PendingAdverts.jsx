import { useCallUsServicesFunctions } from "../../utils/firebase";
import AdvertTableSection from "./AdvertTableSection";

export default function PendingAdverts() {
  const { pendingServiceItems } = useCallUsServicesFunctions();
  console.log("pending Adverts>> ", pendingServiceItems);
  return (
    <div>
      <div className="overflow-auto">
        <AdvertTableSection
          sectionTitle="Pending Adverts"
          advertItems={pendingServiceItems}
          secondary={true}
          approved={false}
        />
      </div>
    </div>
  );
}
