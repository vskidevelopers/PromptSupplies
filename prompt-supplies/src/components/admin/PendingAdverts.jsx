import { useCallUsServicesFunctions } from "../../utils/firebase";
import AdvertTable from "./AdvertTable";

export default function PendingAdverts() {
  const { pendingServiceItems } = useCallUsServicesFunctions();
  console.log("all Services >> ", pendingServiceItems);
  return (
    <div>
      <div className="overflow-x-auto">
        <AdvertTable
          serviceItems={pendingServiceItems}
          actions={true}
          pendingView={true}
        />
      </div>
    </div>
  );
}
