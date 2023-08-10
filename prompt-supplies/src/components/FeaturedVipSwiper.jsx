import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SliderStyles.css";

export default function FeaturedVipSwiper() {
  const images = [
    "https://img.freepik.com/free-psd/horizontal-banner-template-black-friday-clearance_23-2148745446.jpg?w=900&t=st=1686608963~exp=1686609563~hmac=ab842d50f5dcde032164ac300b7fb54935328fe0e0ae5e4b770603218aeeb02d",
    "https://img.freepik.com/free-psd/banner-corporate-ad-template_23-2148788938.jpg?w=900&t=st=1686609116~exp=1686609716~hmac=dc5c1b22d8386ac42b7f8e13ac7aa614c8c263f81d4ca2167b95229cade85761",
    "https://img.freepik.com/free-psd/business-company-banner-template_23-2148924998.jpg?w=900&t=st=1686609158~exp=1686609758~hmac=27806a2bfe6d9422dc4b7ee7923df6bddf37d70de22fb801dc22c3b5ce0f7d40",
    "https://img.freepik.com/free-vector/creative-hiring-landing-page-template_52683-44620.jpg?w=740&t=st=1686609279~exp=1686609879~hmac=35dd40078e71f2d29f0c8f79c1ef1f1d7b1bf676cb1fdfd9f4f4100456b17b01",
  ];
  return (
    <div className="w-full container  mx-auto">
      <div className="  md:h-[30rem] w-full">
        <Swiper
          slidesPerView={1}
          grabCursor={true}
          spaceBetween={30}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper !w-full !h-full"
        >
          {images.map((logoSrc, index) => (
            <SwiperSlide key={index} className="swiper-height">
              <img src={logoSrc} alt="image" className="!h-full !w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
