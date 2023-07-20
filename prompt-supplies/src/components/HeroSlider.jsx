/* eslint-disable react/prop-types */
import Slider from "react-slick";
import VipSliderCard from "./VipSliderCard";
import { createRef, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import SnackBar from "./SnackBar";

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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  const gotoNext = () => {
    vipSliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    vipSliderRef.current.slickPrev();
  };

  return (
    <div className=" ">
      <div className="relative ">
        <div className="absolute  h-96 w-full !flex items-center justify-between px-4 md:px-2">
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

        {loading ? (
          <SnackBar status="loading" />
        ) : (
          <div>
            <Slider {...settings} ref={vipSliderRef}>
              {sliderItems?.map((sliderItem, index) => (
                <div key={index} className="h-96 w-4/5">
                  <VipSliderCard sliderItem={sliderItem} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSlider;
