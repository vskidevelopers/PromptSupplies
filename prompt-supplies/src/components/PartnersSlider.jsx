import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Slider from "react-slick";

import "swiper/css";

import PartnersCard from "./PartnersCard";

import { usePartnersFunctions } from "../utils/firebase";

export default function PartnersSlider() {
  const { allPartners } = usePartnersFunctions();
  console.log("allPartners >>", allPartners);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
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
        <Slider {...settings}>
          {allPartners?.map((partner, index) => (
            <div key={index} className="partner-slider">
              <PartnersCard partner={partner} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
