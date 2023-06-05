import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AdvertSlider() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiguBneqOgOx1MUqJ3lq9kJhJGodCTB-5bcDQiheOVeZWThRtalkAsZCr7mbRDTeJ4Wm0",
    "https://thememiles.com/blog/wp-content/uploads/2020/05/go-for-better-advertise-with-us-840x740-1.jpg",
    "https://thumbs.dreamstime.com/b/cropped-view-business-partners-shaking-hands-background-cropped-view-investor-businessman-shaking-hands-208074434.jpg",
    "https://media.tegna-media.com/assets/WOI/images/8b9a0239-cae0-4e66-81ba-6b3b65c324ac/8b9a0239-cae0-4e66-81ba-6b3b65c324ac_750x422.png",
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
