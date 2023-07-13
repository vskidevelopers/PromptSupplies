import Slider from "react-slick";
import VipSliderCard from "./VipSliderCard";
import { createRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function HeroSlider() {
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

        <Slider {...settings} ref={vipSliderRef}>
          <div className="h-96 w-4/5">
            <VipSliderCard
              image="https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp"
              sliderIndex={0}
            />
          </div>
          <div className="h-96 w-full ">
            <VipSliderCard
              image="https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp"
              sliderIndex={1}
            />
          </div>
          <div className="h-96 w-full ">
            <VipSliderCard
              image="https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp"
              sliderIndex={2}
            />
          </div>
          <div className="h-96 w-full ">
            <VipSliderCard
              image="https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp"
              sliderIndex={3}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default HeroSlider;
