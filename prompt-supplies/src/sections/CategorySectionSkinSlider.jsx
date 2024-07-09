/* eslint-disable react/prop-types */
import SkinDisplayCard from "@/components/SkinDisplayCard";
import Slider from "react-slick";

import "swiper/css";

function CategorySectionSkinSlider({ title, sliderskins }) {
  sliderskins = [1, 2, 3, 4, 5];
  console.log("sliderskins for sliders >> ", sliderskins);
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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

  return (
    <div className="w-full flex flex-col my-6 container mx-auto py-10">
      <div className="py-4 pl-10 font-semibold text-xl md:text-2xl lg:text-3xl text-gray-800">
        <h1>{title}</h1>
      </div>

      <Slider {...settings}>
        {sliderskins?.map((index) => (
          <div key={index} className="partner-slider">
            <SkinDisplayCard category={title} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategorySectionSkinSlider;
