/* eslint-disable react/prop-types */
import { motion, useViewportScroll, useTransform } from "framer-motion";
import businessSvg from "../assets/svgs/business_analytics.svg";
import { InView } from "react-intersection-observer";
import ServiceMiniCard from "./ServiceMiniCard";

export default function IntroSection({ services }) {
  const { scrollYProgress } = useViewportScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1.1]);

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-10 py-20 ">
        <InView triggerOnce>
          {({ inView, ref }) => (
            <div
              className="relative flex flex-col justify-center items-center py-10"
              ref={ref}
            >
              <div className="w-full md:w-1/2 text-start">
                <h2 className="text-[#FDB715] text-md font-semibold uppercase">
                  Discover Our Story
                </h2>
                <h1 className="text-3xl font-bold capitalize">
                  Empowering Organizations through Result-Driven Solutions
                </h1>
              </div>
              <div className="absolute top-0 left-0 h-full w-full flex justify-end items-center opacity-10">
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
                  Discover
                </motion.h1>
              </div>
            </div>
          )}
        </InView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Desc */}
          <div className="col-span-2">
            <div className="flex flex-col gap-3">
              <div id="body">
                <p className="text-gray-700">
                  Prompt Supplies Enterprise is a leading provider of innovative
                  marketing solutions, specializing in:{" "}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
                  {services.map((service, i) => (
                    <ServiceMiniCard
                      id={i}
                      key={i}
                      title={service.title}
                      icon={service.icon}
                      backgroundImage={service.image}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Svg/Image */}
          <motion.div style={{ opacity, scale }} className="h-full">
            <img src={businessSvg} alt=".." className="h-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
