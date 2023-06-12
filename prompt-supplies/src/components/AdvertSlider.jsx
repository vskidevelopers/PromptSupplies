import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AdvertSlider() {
  const images = [
    "https://img.freepik.com/free-psd/horizontal-banner-template-black-friday-clearance_23-2148745446.jpg?w=900&t=st=1686608963~exp=1686609563~hmac=ab842d50f5dcde032164ac300b7fb54935328fe0e0ae5e4b770603218aeeb02d",
    "https://img.freepik.com/free-psd/banner-corporate-ad-template_23-2148788938.jpg?w=900&t=st=1686609116~exp=1686609716~hmac=dc5c1b22d8386ac42b7f8e13ac7aa614c8c263f81d4ca2167b95229cade85761",
    "https://img.freepik.com/free-psd/business-company-banner-template_23-2148924998.jpg?w=900&t=st=1686609158~exp=1686609758~hmac=27806a2bfe6d9422dc4b7ee7923df6bddf37d70de22fb801dc22c3b5ce0f7d40",
    "https://img.freepik.com/free-vector/creative-hiring-landing-page-template_52683-44620.jpg?w=740&t=st=1686609279~exp=1686609879~hmac=35dd40078e71f2d29f0c8f79c1ef1f1d7b1bf676cb1fdfd9f4f4100456b17b01",
  ];
  return (
    <>
      <div className="container mx-auto px-5 md:px-20 py-10">
        {/* Title */}
        <div className="relative flex flex-col justify-center items-center py-10">
          <div className="w-full md:w-1/2 text-start md:text-center">
            <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
              Advertise With Us
            </h2>
            <h1 className="text-3xl font-bold">
              Amplify Your Reach: Unlock Growth Opportunities with Effective
              Advertising
            </h1>
          </div>
          <div className="absolute top-0 left-0 h-full w-full flex justify-start items-center opacity-10">
            <h1 className="text-7xl md:text-9xl font-bold">Advertise</h1>
          </div>
        </div>
      </div>

      <section className="my-4">
        <div className="container max-full mx-auto">
          <div className="flex flex-col items-center w-full rounded-md lg:h-full   dark:text-gray-100">
            <div className="h-[15rem] md:h-[30rem] w-full ">
              <Swiper
                modules={[Navigation, Pagination, Navigation, Autoplay, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="h-full px-4"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-full">
                      <div
                        className="absolute inset-0 h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${image})` }}
                      ></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
