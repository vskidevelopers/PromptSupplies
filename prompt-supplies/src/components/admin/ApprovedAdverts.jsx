import { useCallUsServicesFunctions } from "../../utils/firebase";

import AdvertTableSection from "./AdvertTableSection";

export default function ApprovedAdverts() {
  const { approvedServiceItems } = useCallUsServicesFunctions();
  console.log("approved Adverts >> ", approvedServiceItems);

  return (
    <div>
      <div className="overflow-auto">
        <AdvertTableSection
          sectionTitle="Approved Adverts"
          advertItems={approvedServiceItems}
          secondary={true}
          approved={true}
        />
      </div>
    </div>
  );
}
