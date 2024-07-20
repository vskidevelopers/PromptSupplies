import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SliderStyles.css";
import { useVipServicesFunctions } from "../utils/firebase";

export default function FeaturedVipSwiper() {
  const { featuredVipAdsItems } = useVipServicesFunctions();
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
          speed={2000}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper !w-full !h-full"
        >
          {featuredVipAdsItems?.map((adItem, index) => (
            <SwiperSlide key={index} className="swiper-height">
              <img
                src={adItem.poster}
                alt="image"
                className="!h-full !w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
