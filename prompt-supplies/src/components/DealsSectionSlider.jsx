/* eslint-disable react/prop-types */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Slider from "react-slick";
import ServiceSliderCards from "./ServiceSliderCards";
import { createRef, useState } from "react";
import CountDownTimer from "./CountDownTimer";
import background from "../assets/videos/background.mp4";
// import SnackBar from "./SnackBar";
import { useCallUsServicesFunctions } from "../utils/firebase";

function DealsSectionSlider(props) {
  console.log("Props >>>", props);
  // const [loading, setLoading] = useState(true);
  const { dealsServiceItems } = useCallUsServicesFunctions();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  const dealsSliderRef = createRef();
  const [isLoading, setIsLoading] = useState(true);
  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
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
    dealsSliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    dealsSliderRef.current.slickPrev();
  };

  return (
    <div className="relative w-full bg-slate-950 py-14">
      <div className="absolute inset-0 h-full w-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            {/* Loading Spinner */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-gray-900"></div>
            </div>
          </div>
        )}

        <video
          src={background}
          className={!isLoading ? "w-full h-full object-cover" : "hidden"}
          onLoadedData={handleVideoLoad}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 h-full bg-[#181b1c]/25"></div>
      </div>

      <div className=" container mx-auto  ">
        <div className="w-full h-[400px] flex flex-col md:flex-row gap-2">
          <div className="w-4/5 md:w-1/5 z-10 container mx-auto px-5 md:px-10 flex flex-col justify-center">
            <h3 className="  text-2xl font-semibold font-mono text-gray-300  mb-4">
              Deals of the Day
            </h3>
            <div>
              <CountDownTimer />
            </div>
          </div>

          <div className="w-full md:w-4/5 h-full py-14 relative">
            <div className="absolute h-3/4 w-full md:w-full !flex items-center justify-between px-2">
              <button
                onClick={() => gotoNext()}
                className="z-10 bg-white py-2 px-2 rounded-full shadow-md text-black"
              >
                <ChevronLeftIcon className="h-4 w-4  text-slate-950" />
              </button>
              <button
                onClick={() => gotoPrev()}
                className="z-10 bg-white py-2 px-2 rounded-full shadow-md text-black"
              >
                <ChevronRightIcon className="h-4 w-4  text-slate-950" />
              </button>
            </div>

            <Slider {...settings} ref={dealsSliderRef}>
              {dealsServiceItems?.map((sliderItem, i) => {
                return (
                  <div key={i}>
                    <ServiceSliderCards sliderItem={sliderItem} />
                  </div>
                );
              })}
            </Slider>

            {/* <div className="flex gap-4">
              {dealsServiceItems?.map((sliderItem, i) => {
                return (
                  <div key={i}>
                    <ServiceSliderCards sliderItem={sliderItem} />
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealsSectionSlider;
