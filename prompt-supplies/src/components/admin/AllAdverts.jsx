import { useCallUsServicesFunctions } from "../../utils/firebase";
import AdvertTable from "./AdvertTable";

export default function AllAdverts() {
  const { allServiceItems } = useCallUsServicesFunctions();
  console.log("all Services >> ", allServiceItems);

  return (
    <div>
      <div className="overflow-x-auto">
        <AdvertTable serviceItems={allServiceItems} />
      </div>
    </div>
  );
}
