/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import ServiceSliderCards from "./ServiceSliderCards";
import SnackBar from "./SnackBar";

function ServiceGrid({ sliderItems }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 9;

  useEffect(() => {
    setItems(sliderItems);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const lastCount = itemOffset + itemsPerPage;
  console.log(currentItems);
  console.log("Last Count >>", lastCount);

  return (
    <div className="w-full my-8">
      <div className="container mx-auto px-10">
        {loading ? (
          <SnackBar status="loading" />
        ) : (
          <div className="flex flex-col">
            <div className="my-5">
              {" "}
              Showing {itemOffset + 1}–
              {lastCount > items.length ? items.length : lastCount} of{" "}
              {items.length} results
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sliderItems?.map((sliderItem) => (
                <div key={sliderItem.id}>
                  <ServiceSliderCards sliderItem={sliderItem} />
                </div>
              ))}
            </div>

            <div>
              <div className="w-full flex justify-end my-4">
                <Pagination
                  items={items}
                  pageCount={pageCount}
                  setItemOffset={setItemOffset}
                  itemsPerPage={itemsPerPage}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServiceGrid;
