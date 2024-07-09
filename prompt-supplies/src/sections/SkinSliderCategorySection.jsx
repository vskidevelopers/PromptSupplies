/* eslint-disable react/prop-types */
import SkinDisplayCard from "@/components/SkinDisplayCard";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "swiper/css";

export default function SkinSliderCategorySection({ title }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          speed: 2000,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 2000,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const allSkins = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full flex flex-col my-6 container mx-auto">
      <div className="py-4 pl-10 font-semibold text-xl md:text-2xl lg:text-3xl text-gray-800">
        <h1>{title}</h1>
      </div>

      <Slider {...settings}>
        {allSkins?.map((skin, index) => (
          <div key={index} className="partner-slider px-2">
            <SkinDisplayCard category={title} />
          </div>
        ))}
      </Slider>

      <div className="py-6 flex justify-center">
        <Link
          to={`/skins/collections/${title}`}
          className="py-3 px-6 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
        >
          View More
        </Link>
      </div>
    </div>
  );
}
