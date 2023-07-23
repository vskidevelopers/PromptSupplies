import AdvertTableSection from "./AdvertTableSection";
import { useVipServicesFunctions } from "../../utils/firebase";

function AllVipAdverts() {
  const { allVipAdsItems } = useVipServicesFunctions();
  return (
    <div>
      <div className=" ">
        <AdvertTableSection
          sectionTitle="All Vip Adverts"
          advertItems={allVipAdsItems}
          secondary={true}
          approved={false}
          vip={true}
        />
      </div>
    </div>
  );
}

export default AllVipAdverts;
