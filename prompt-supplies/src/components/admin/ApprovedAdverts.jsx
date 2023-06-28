import { useCallUsServicesFunctions } from "../../utils/firebase";
import AdvertTable from "./AdvertTable";

export default function ApprovedAdverts() {
  const { approvedServiceItems } = useCallUsServicesFunctions();
  console.log("all Services >> ", approvedServiceItems);
  return (
    <div>
      <div className="overflow-x-auto">
        <AdvertTable
          serviceItems={approvedServiceItems}
          actions={true}
          pendingView={false}
        />
      </div>
    </div>
  );
}
