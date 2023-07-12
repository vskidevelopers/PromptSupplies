/* eslint-disable react/prop-types */
import Slider from "react-slick";
import ServiceSliderCards from "./ServiceSliderCards";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { createRef } from "react";

function SectionServiceSlider({ sectionTitle, bgColor }) {
  const vipSliderRef = createRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
  };

  const gotoNext = () => {
    vipSliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    vipSliderRef.current.slickPrev();
  };

  return (
    <div className={`${bgColor}`}>
      <div className="container mx-auto  ">
        <div className="w-full h-[450px] flex flex-col">
          <div className="container mx-auto flex justify-between my-10">
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

          <div>
            <Slider {...settings} ref={vipSliderRef}>
              <ServiceSliderCards image="https://img.freepik.com/free-vector/general-square-business-flyer-template_23-2148924498.jpg" />
              <ServiceSliderCards image="https://img.freepik.com/free-vector/general-square-business-flyer-template_23-2148924498.jpg" />
              <ServiceSliderCards image="https://img.freepik.com/free-vector/general-square-business-flyer-template_23-2148924498.jpg" />
              <ServiceSliderCards image="https://img.freepik.com/free-vector/general-square-business-flyer-template_23-2148924498.jpg" />
              <ServiceSliderCards image="https://img.freepik.com/free-vector/general-square-business-flyer-template_23-2148924498.jpg" />
              <ServiceSliderCards image="https://img.freepik.com/free-vector/general-square-business-flyer-template_23-2148924498.jpg" />
              <ServiceSliderCards image="https://img.freepik.com/free-vector/general-square-business-flyer-template_23-2148924498.jpg" />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionServiceSlider;
