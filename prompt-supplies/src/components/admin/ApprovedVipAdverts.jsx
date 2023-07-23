import { useVipServicesFunctions } from "../../utils/firebase";
import AdvertTableSection from "./AdvertTableSection";

export default function ApprovedVipAdverts() {
  const { approvedVipAdsItems } = useVipServicesFunctions();
  return (
    <div>
      <div className="overflow-auto">
        <AdvertTableSection
          sectionTitle="Approved Vip Adverts"
          advertItems={approvedVipAdsItems}
          secondary={true}
          approved={true}
          vip={true}
        />
      </div>
    </div>
  );
}
