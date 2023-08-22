import { useEffect, useState } from "react";
import { usePartnersFunctions } from "../../utils/firebase";
import PartnerCard from "./PartnerCard";

export default function AllPartners() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const { allPartners } = usePartnersFunctions();
  return (
    <div className="h-full w-full relative">
      {" "}
      {loading && (
        <div className="absolute h-96 w-96 inset-0 flex items-center justify-center bg-gray-200">
          {/* Loading Spinner */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-gray-900"></div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {allPartners?.map((partner, index) => (
          <>
            <div key={index}>
              <PartnerCard partner={partner} index={index + 1} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
