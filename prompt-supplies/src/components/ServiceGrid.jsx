/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import ServiceSliderCards from "./ServiceSliderCards";

function ServiceGrid({ sliderItems }) {
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

  return (
    <div className="w-full my-8">
      <div className="container mx-auto px-10">
        <div className="flex flex-col">
          <div className="my-5">
            {" "}
            Showing {itemOffset + 1}–
            {lastCount > items.length ? items.length : lastCount} of{" "}
            {items.length} results
          </div>

          <div className="grid grid-cols-4 gap-4">
            {sliderItems?.map((sliderItem, index) => (
              <div key={index}>
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
      </div>
    </div>
  );
}

export default ServiceGrid;
