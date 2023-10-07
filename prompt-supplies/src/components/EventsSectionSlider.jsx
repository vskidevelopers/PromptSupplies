/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { createRef, useEffect, useState } from "react";
import EventCard from "./EventCard";

export default function EventsSectionSlider({
  sectionTitle,
  bgColor,
  sliderItems,
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const sectionSliderRef = createRef();

  if (sliderItems) {
    console.log("sliderItems passed >>", typeof sliderItems);
    console.log("sliderItems passed >>", sliderItems);
  } else {
    console.log("sliderItems passed >> 0");
  }

  const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    dots: false,
    cssEase: "linear",
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const gotoNext = () => {
    sectionSliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sectionSliderRef.current.slickPrev();
  };
  return (
    <div className={`${bgColor}`}>
      <div className="container mx-auto  ">
        <div className={`w-full h-full flex flex-col`}>
          <div className="container mx-auto flex justify-between my-10 px-5">
            <h3 className="text-2xl font-semibold font-mono text-gray-800 ">
              {sectionTitle}
            </h3>
            <div className="flex items-center">
              <button
                onClick={() => gotoNext()}
                className="mr-4 bg-white py-2 px-2 rounded-full shadow-md text-black"
              >
                <ChevronLeftIcon className="h-4 w-4  text-slate-950" />
              </button>
              <button
                onClick={() => gotoPrev()}
                className="mr-4 bg-white py-2 px-2 rounded-full shadow-md text-black"
              >
                <ChevronRightIcon className="h-4 w-4  text-slate-950" />
              </button>
            </div>
          </div>

          <div className="slidersection relative w-full h-full">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                {/* Loading Spinner */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-gray-900"></div>
                </div>
              </div>
            )}

            <div className="h-[34rem] overflow-y-hidden">
              {sliderItems > 1 ? (
                <Slider {...settings} ref={sectionSliderRef}>
                  {sliderItems.map((sliderItem, index) => (
                    <div key={index}>
                      <EventCard event={sliderItem} />
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="flex justify-center items-center h-full">
                  <div className="absolute transform -translate-x-1/2 -translate-y-1/2">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-gray-900"></div>
                  </div>
                  <p className="text-gray-400 text-lg">No upcoming events</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
