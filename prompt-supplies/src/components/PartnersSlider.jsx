import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import PartnersCard from "./PartnersCard";

export default function PartnersSlider() {
  const partnerLogos = [
    "https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png",
    "https://socialimpact.com/wp-content/uploads/2021/03/logo-placeholder.jpg",
    "data:image/png;base64,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",
    "https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png",
    "https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png",
    "https://cdn.dribbble.com/users/261302/screenshots/1361907/logoplaceholder.png",
  ];
  return (
    <div className="container mx-auto px-5 md:px-20 my-5">
      {/* Title */}
      <div className="relative flex flex-col justify-center items-center py-10">
        <div className="w-full md:w-1/2 text-end">
          <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
            our partners
          </h2>
          <h1 className="text-3xl font-bold capitalize">
            Powerful Collaborations: Trusted Partnerships for Success
          </h1>
        </div>
        <div className="absolute top-0 left-0 h-full w-full flex justify-start items-center opacity-10">
          <h1 className="text-7xl md:text-9xl font-bold">Partners</h1>
        </div>
      </div>

      <div>
        <Swiper
          modules={[Autoplay, A11y]}
          slidesPerView={3}
          spaceBetween={16}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {partnerLogos.map((logoSrc, index) => (
            <SwiperSlide key={index}>
              <PartnersCard logoSrc={logoSrc} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
