import { useVipServicesFunctions } from "../../utils/firebase";
import AdvertTableSection from "./AdvertTableSection";

export default function PendingVipAdverts() {
  const { pendingVipAdsItems } = useVipServicesFunctions();
  return (
    <div>
      <div className="overflow-auto">
        <AdvertTableSection
          sectionTitle="Pending Adverts"
          advertItems={pendingVipAdsItems}
          secondary={true}
          approved={false}
          vip={true}
        />
      </div>
    </div>
  );
}
