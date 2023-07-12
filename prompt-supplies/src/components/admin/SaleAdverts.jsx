import { useCallUsServicesFunctions } from "../../utils/firebase";
import AdvertTableSection from "./AdvertTableSection";

export default function SaleAdverts() {
  const { salesServiceItems } = useCallUsServicesFunctions();
  console.log("Sales Adverts >> ", salesServiceItems);

  return (
    <div>
      <div className="overflow-auto">
        <AdvertTableSection
          sectionTitle="Sales Adverts"
          advertItems={salesServiceItems}
          secondary={false}
        />
      </div>
    </div>
  );
}
