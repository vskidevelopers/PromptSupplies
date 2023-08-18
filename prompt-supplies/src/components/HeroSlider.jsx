/* eslint-disable react/prop-types */
import Slider from "react-slick";
import VipSliderCard from "./VipSliderCard";
import { createRef, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSlider({ sliderItems }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const vipSliderRef = createRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
  };

  const gotoNext = () => {
    vipSliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    vipSliderRef.current.slickPrev();
  };

  return (
    <div className=" ">
      <div className="relative h-96 w-full">
        <div className="absolute h-full  w-full !flex items-center justify-between px-4 md:px-2">
          <button
            onClick={() => gotoNext()}
            className="z-10 bg-white py-2 px-2 md:py-4 md:px-4 rounded-full shadow-md text-black"
          >
            <ChevronLeftIcon className="h-6 w-6  text-slate-950" />
          </button>
          <button
            onClick={() => gotoPrev()}
            className="z-10 bg-white py-2 px-2 md:py-4 md:px-4  rounded-full shadow-md text-black"
          >
            <ChevronRightIcon className="h-6 w-6  text-slate-950" />
          </button>
        </div>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            {/* Loading Spinner */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-gray-900"></div>
            </div>
          </div>
        )}
        <div>
          <Slider {...settings} ref={vipSliderRef}>
            {sliderItems?.map((sliderItem, index) => (
              <div key={index} className="h-96 w-4/5">
                <VipSliderCard sliderItem={sliderItem} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
