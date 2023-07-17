/* eslint-disable react/prop-types */
import Slider from "react-slick";
// import ServiceSliderCards from "./ServiceSliderCards";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { createRef, useEffect, useState } from "react";
import SnackBar from "./SnackBar";
import ServiceSliderCards from "./ServiceSliderCards";

function SectionServiceSlider({ sectionTitle, bgColor, sliderItems }) {
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
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
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
        <div className="w-full h-[450px] flex flex-col">
          <div className="container mx-auto flex justify-between my-10 px-5">
            <h3 className="text-2xl font-semibold font-mono text-gray-800 ">
              {sectionTitle}
            </h3>
            <div>
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

          <div className="slidersection">
            {loading ? (
              <SnackBar status="loading" />
            ) : (
              <div className="h-64 overflow-y-hidden">
                <Slider {...settings} ref={sectionSliderRef}>
                  {sliderItems?.map((sliderItem, index) => (
                    <div key={index}>
                      <ServiceSliderCards sliderItem={sliderItem} />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionServiceSlider;
