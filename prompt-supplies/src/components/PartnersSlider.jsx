import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Slider from "react-slick";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { A11y, Autoplay } from "swiper";

import "swiper/css";

import PartnersCard from "./PartnersCard";
import vista from "../assets/images/vista.jpg";
import vski from "../assets/images/vski.png";
import genize from "../assets/images/genize.png";
import positivessl from "../assets/images/positivessl.png";
import vista2 from "../assets/images/vista2.png";

export default function PartnersSlider() {
  const partnerLogos = [vista, vista2, genize, vski, positivessl];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="container mx-auto px-5 md:px-20 my-5">
      {/* Title */}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div
            className="relative flex flex-col justify-center items-center py-10"
            ref={ref}
          >
            <div className="w-full md:w-1/2 text-end">
              <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
                our partners
              </h2>
              <h1 className="text-3xl font-bold capitalize">
                Powerful Collaborations: Trusted Partnerships for Success
              </h1>
            </div>
            <div className="absolute top-0 left-0 h-full w-full flex justify-start items-center opacity-10">
              <motion.h1
                initial={{ x: -500, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  delay: 0.5,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 3,
                }}
                className="text-7xl md:text-9xl font-bold"
              >
                Partners
              </motion.h1>
            </div>
          </div>
        )}
      </InView>
      <div>
        {/* <Swiper
          modules={[Autoplay, A11y]}
          slidesPerView={2}
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="!w-full !h-full"
        >
          {partnerLogos.map((logoSrc, index) => (
            <SwiperSlide key={index} className="partner-slider">
              <PartnersCard logoSrc={logoSrc} />
            </SwiperSlide>
          ))}
        </Swiper> */}

        <Slider {...settings}>
          {partnerLogos.map((logoSrc, index) => (
            <div key={index} className="partner-slider">
              <PartnersCard logoSrc={logoSrc} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
