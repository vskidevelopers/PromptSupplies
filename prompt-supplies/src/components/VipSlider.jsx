/* eslint-disable react/prop-types */
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { createRef } from "react";

function VipSlider() {
  // const images = [
  //   "https://img.freepik.com/free-psd/horizontal-banner-template-black-friday-clearance_23-2148745446.jpg?w=900&t=st=1686608963~exp=1686609563~hmac=ab842d50f5dcde032164ac300b7fb54935328fe0e0ae5e4b770603218aeeb02d",
  // ];

  const images = [
    "https://img.freepik.com/free-psd/horizontal-banner-template-black-friday-clearance_23-2148745446.jpg?w=900&t=st=1686608963~exp=1686609563~hmac=ab842d50f5dcde032164ac300b7fb54935328fe0e0ae5e4b770603218aeeb02d",
    "https://img.freepik.com/free-psd/banner-corporate-ad-template_23-2148788938.jpg?w=900&t=st=1686609116~exp=1686609716~hmac=dc5c1b22d8386ac42b7f8e13ac7aa614c8c263f81d4ca2167b95229cade85761",
    "https://img.freepik.com/free-psd/business-company-banner-template_23-2148924998.jpg?w=900&t=st=1686609158~exp=1686609758~hmac=27806a2bfe6d9422dc4b7ee7923df6bddf37d70de22fb801dc22c3b5ce0f7d40",
    "https://img.freepik.com/free-vector/creative-hiring-landing-page-template_52683-44620.jpg?w=740&t=st=1686609279~exp=1686609879~hmac=35dd40078e71f2d29f0c8f79c1ef1f1d7b1bf676cb1fdfd9f4f4100456b17b01",
  ];

  const featuredVipSliderRef = createRef();

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    speed: 2000,
    // autoplaySpeed: 2000,
    cssEase: "linear",
  };
  // const settings = {
  //   dots: true,
  //   fade: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  const gotoNext = () => {
    featuredVipSliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    featuredVipSliderRef.current.slickPrev();
  };

  return (
    <section className="py-5 md:py-10 bg-slate-200">
      <div className="container max-full mx-auto flex justify-center items-center">
        <div className="relative h-[30rem] md:h-96 w-full">
          <div className="absolute w-full h-48 md:h-96 flex justify-between my-6 px-5 z-10">
            <div className="w-full flex items-center justify-between">
              <button
                onClick={() => gotoNext()}
                className="mr-4 bg-white py-2 px-2 rounded-full shadow-md text-black"
              >
                <ChevronDoubleLeftIcon className="h-4 w-4  text-slate-950" />
              </button>
              <button
                onClick={() => gotoPrev()}
                className="mr-4 bg-white py-2 px-2 rounded-full shadow-md text-black"
              >
                <ChevronDoubleRightIcon className="h-4 w-4  text-slate-950" />
              </button>
            </div>
          </div>
          <div className="h-full w-full">
            <Slider {...settings} ref={featuredVipSliderRef}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slider ${index}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VipSlider;
