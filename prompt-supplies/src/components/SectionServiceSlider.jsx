/* eslint-disable react/prop-types */
import Slider from "react-slick";
// import ServiceSliderCards from "./ServiceSliderCards";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { createRef, useEffect, useState } from "react";
import ServiceSliderCards from "./ServiceSliderCards";

function SectionServiceSlider({
  sectionTitle,
  bgColor,
  sliderItems,
  dimentions,
  sectionHeight,
  slidesToDisplay,
  popular,
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
    dots: false,
    infinite: true,

    slidesToShow: slidesToDisplay,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    centerPadding: "60px",
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
        <div className={`w-full h-[${sectionHeight}] flex flex-col`}>
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
              <Slider {...settings} ref={sectionSliderRef}>
                {sliderItems?.map((sliderItem, index) => (
                  <div key={index}>
                    <ServiceSliderCards
                      sliderItem={sliderItem}
                      dimentions={dimentions}
                      popular={popular}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionServiceSlider;
