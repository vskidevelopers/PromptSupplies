import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function IntroHero() {
  return (
    <div className="h-screen">
      <Swiper
        modules={[Navigation, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-full"
      >
        <SwiperSlide>
          {" "}
          <div className="relative h-full ">
            {/* Background Image */}
            <div
              className="absolute inset-0 h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://t3.ftcdn.net/jpg/02/18/65/58/360_F_218655870_yaQvQxD9n4mFIUFIx082pmhP4PqC4Elt.jpg')",
              }}
            >
              {/* Black Shade Overlay */}
              <div className="absolute inset-0 h-full w-full bg-[#181b1c]/75"></div>
            </div>
            <div className="absolute h-full container mx-auto px-5 md:px-20 text-white ">
              <div className="h-full flex justify-start items-center ">
                <div className="w-full md:w-3/4">
                  <h2 className="text-4xl md:text-7xl font-bold">
                    Choose right solution fot your business
                  </h2>
                  <p className="mt-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iusto neque aut facere saepe dicta sit nemo voluptatem,
                    ipsum mollitia minus suscipit fuga non quisquam? Fugit
                    quidem maxime possimus reprehenderit dolorem?
                  </p>
                  <div className="pt-5">
                    <button className="border border-[#FDB715] text-md text-[#FDB715] hover:text-black hover:border-white hover:bg-[#FDB715] py-4 px-8">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="w-1/4"></div>
              </div>
            </div>{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="relative h-full ">
            {/* Background Image */}
            <div
              className="absolute inset-0 h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/premium-photo/portrait-young-businessman-with-disability-participating-meeting-with-managers_236854-41118.jpg')",
              }}
            >
              {/* Black Shade Overlay */}
              <div className="absolute inset-0 h-full bg-[#181b1c]/75"></div>
            </div>
            <div className="absolute h-full container mx-auto px-5 md:px-20 text-white ">
              <div className="h-full flex justify-start items-center ">
                <div className="w-full md:w-3/4">
                  <h2 className="text-4xl md:text-7xl font-bold">
                    We will help you to grow your business
                  </h2>
                  <p className="mt-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iusto neque aut facere saepe dicta sit nemo voluptatem,
                    ipsum mollitia minus suscipit fuga non quisquam? Fugit
                    quidem maxime possimus reprehenderit dolorem?
                  </p>
                  <div className="pt-5">
                    <button className="border border-[#FDB715] text-md text-[#FDB715] hover:text-black hover:border-white hover:bg-[#FDB715] py-4 px-8">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="w-1/4"></div>
              </div>
            </div>{" "}
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <h2 className="font-bold text-5xl mt-20">Hello world</h2> */}
    </div>
  );
}
