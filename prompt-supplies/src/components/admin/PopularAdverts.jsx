// import { useState } from "react";
import { useCallUsServicesFunctions } from "../../utils/firebase";
import AdvertTableSection from "./AdvertTableSection";

export default function PopularAdverts() {
  const { popularServiceItems } = useCallUsServicesFunctions();
  console.log("Popular Adverts >> ", popularServiceItems);

  return (
    <div>
      <div className="overflow-auto">
        <AdvertTableSection
          sectionTitle="Popular Adverts"
          advertItems={popularServiceItems}
          secondary={false}
        />
      </div>
    </div>
  );
}
