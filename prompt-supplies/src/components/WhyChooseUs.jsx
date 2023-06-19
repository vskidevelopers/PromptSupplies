import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import WhyChooseUsCard from "./WhyChooseUsCard";

import {
  LightBulbIcon,
  WrenchScrewdriverIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Expertise and Experience",
      description:
        "With years of experience in the marketing solutions industry, we have developed deep expertise and knowledge to understand the unique needs and challenges of businesses. Our experience allows us to provide effective and innovative solutions tailored to your specific requirements.",
      icon: <LightBulbIcon className="text-white h-5" />,
    },
    {
      title: "Comprehensive Range of Services",
      description:
        "We offer a comprehensive suite of marketing services, including promotional messages, bulk SMS and email services, API integration, web services, system development, and merchandise branding. Our diverse range of services ensures that we can address your various marketing needs under one roof.",
      icon: <WrenchScrewdriverIcon className="text-white h-5" />,
    },
    {
      title: "Result-Driven Approach",
      description:
        "Our primary goal is to help your business achieve tangible results. We take a data-driven approach, leveraging analytics and insights to develop strategies that drive meaningful outcomes. From increasing brand visibility to generating leads, we are committed to delivering measurable results for your organization.",
      icon: <PresentationChartLineIcon className="text-white h-5" />,
    },
    {
      title: "Client-Centric Collaboration",
      description:
        "We believe in a client-centric approach where we work closely with you to understand your goals, challenges, and vision. Our team collaborates with your organization to develop customized solutions that align with your unique requirements. We value open communication and transparency throughout the partnership.",
      icon: <UserGroupIcon className="text-white h-5" />,
    },
    {
      title: "Commitment to Quality and Innovation",
      description:
        "We are committed to delivering solutions that are of the highest quality and at the forefront of innovation. Our team stays updated with the latest industry trends and technologies to ensure that we provide cutting-edge solutions that give you a competitive edge. We strive for excellence in everything we do.",
      icon: <RocketLaunchIcon className="text-white h-5" />,
    },
  ];
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
                <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
                  Why Choose Us
                </h2>
                <h1 className="text-3xl font-bold capitalize">
                  Experience the Difference: Elevate Your Business with Our
                  Expertise
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
                  Experts
                </motion.h1>
              </div>
            </div>
          )}
        </InView>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <WhyChooseUsCard
              key={i}
              icon={reason.icon}
              reason={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
