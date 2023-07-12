import { useCallUsServicesFunctions } from "../../utils/firebase";
import AdvertTableSection from "./AdvertTableSection";

export default function AllAdverts() {
  const { allServiceItems } = useCallUsServicesFunctions();
  console.log("all Services >> ", allServiceItems);

  return (
    <div>
      <div className=" ">
        <AdvertTableSection
          sectionTitle="All Call Us Adverts"
          advertItems={allServiceItems}
          secondary={true}
          approved={false}
        />
      </div>
    </div>
  );
}
