import { useVipServicesFunctions } from "../../utils/firebase";
import AdvertTableSection from "./AdvertTableSection";

export default function FeaturedVipAdverts() {
  const { featuredVipAdsItems } = useVipServicesFunctions();
  return (
    <div>
      <div className="overflow-auto">
        <AdvertTableSection
          sectionTitle="Featured Adverts"
          advertItems={featuredVipAdsItems}
          secondary={false}
          vip={true}
        />
      </div>
    </div>
  );
}
