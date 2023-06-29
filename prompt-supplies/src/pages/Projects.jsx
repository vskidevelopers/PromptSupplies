/* eslint-disable react/prop-types */

import HeroSection from "../components/HeroSection";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import RightSideProjectCard from "../components/RightSideProjectCard";
import LeftSideProjectCard from "../components/LeftSideProjectCard";

export default function Projects({ projects }) {
  return (
    <div>
      <HeroSection
        tagline="Transforming Visions into Reality"
        title="Our Projects"
        image="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div>
        <section className="py-16 font-inter text-base text-white bg-slate-800">
          <div className="container mx-auto px-10 ">
            <InView triggerOnce>
              {({ inView, ref }) => (
                <div
                  className="relative flex flex-col justify-center items-center py-10"
                  ref={ref}
                >
                  <div className="w-full md:w-1/2 text-start">
                    <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
                      Our Projects
                    </h2>
                    <h1 className="text-3xl font-bold capitalize">
                      Unleashing Innovation and Driving Excellence: We Bring
                      Your Vision to Life through Our Remarkable Projects
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
                      className="text-7xl md:text-9xl font-bold text-[#FDB715]"
                    >
                      Projects
                    </motion.h1>
                  </div>
                </div>
              )}
            </InView>

            <h2 className="font-inter text-[#FDB715] text-2xl pb-10 capitalize">
              Web Projects that WeProjects we have completed
            </h2>
            {projects?.map((project, index) => {
              if (index % 2 === 0) {
                return <RightSideProjectCard key={index} project={project} />;
              } else {
                return <LeftSideProjectCard key={index} project={project} />;
              }
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
