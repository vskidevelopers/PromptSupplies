import { useCallUsServicesFunctions } from "../../utils/firebase";
import AdvertTable from "./AdvertTable";

export default function ApprovedAdverts() {
  const { approvedServiceItems } = useCallUsServicesFunctions();
  console.log("all Services >> ", approvedServiceItems);
  const nonVip = approvedServiceItems.filter(
    (service) => service.vip === false
  );
  return (
    <div>
      <div className="overflow-x-auto">
        <AdvertTable
          serviceItems={nonVip}
          actions={true}
          pendingView={false}
          vipView={false}
        />
      </div>
    </div>
  );
}
