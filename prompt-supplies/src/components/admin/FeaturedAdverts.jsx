import { useCallUsServicesFunctions } from "../../utils/firebase";
import AdvertTableSection from "./AdvertTableSection";

export default function FeaturedAdverts() {
  const { featuredServiceItems } = useCallUsServicesFunctions();
  console.log("featured Adverts>> ", featuredServiceItems);
  return (
    <>
      <div>
        <div className="overflow-auto">
          <AdvertTableSection
            sectionTitle="Featured Adverts"
            advertItems={featuredServiceItems}
            secondary={false}
          />
        </div>
      </div>
    </>
  );
}
