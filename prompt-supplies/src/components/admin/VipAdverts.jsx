import { useCallUsServicesFunctions } from "../../utils/firebase";
import AdvertTable from "./AdvertTable";

export default function VipAdverts() {
  const { vipServiceItems } = useCallUsServicesFunctions();
  console.log("all Services >> ", vipServiceItems);
  return (
    <div>
      <div className="overflow-x-auto">
        <AdvertTable serviceItems={vipServiceItems} vipView={true} />
      </div>
    </div>
  );
}
