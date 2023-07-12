import { useCallUsServicesFunctions } from "../../utils/firebase";
import AdvertTableSection from "./AdvertTableSection";

export default function OfferAdverts() {
  const { offerServiceItems } = useCallUsServicesFunctions();
  console.log("Offer Adverts>> ", offerServiceItems);

  return (
    <div>
      <div className="overflow-auto">
        <AdvertTableSection
          sectionTitle="Offer Adverts"
          advertItems={offerServiceItems}
          secondary={false}
        />
      </div>
    </div>
  );
}
