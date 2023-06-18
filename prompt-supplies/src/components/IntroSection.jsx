import { motion, useViewportScroll, useTransform } from "framer-motion";
import businessSvg from "../assets/svgs/business_analytics.svg";
import { InView } from "react-intersection-observer";

import promotionalSmsIcon from "../assets/svgs/promotional_sms.svg";
import bulkEmailIcon from "../assets/svgs/bulk_email.svg";
import bulkSmsIcon from "../assets/svgs/bulk_sms.svg";
import apiIntergrationIcon from "../assets/svgs/api_intergration.svg";
import webDevIcon from "../assets/svgs/web_development.svg";
import systemDevIcon from "../assets/svgs/system_development.svg";
import merchandiseIcon from "../assets/svgs/merchandise.svg";
import ServiceMiniCard from "./ServiceMiniCard";

export default function IntroSection() {
  const services = [
    {
      icon: promotionalSmsIcon,
      title: "Promotional Messages",
      image:
        "https://img.freepik.com/premium-photo/hand-businessman-using-smartphone-email-with-notification-alert_112554-914.jpg?w=740",
    },
    {
      icon: bulkSmsIcon,
      title: "Bulk SMS Services",
      image:
        "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063130.jpg?w=740&t=st=1686594005~exp=1686594605~hmac=dc30519a238aa14179d195e0e48b60a718214d3ae2cb6a7017ef66dff7ae8d09",
    },
    {
      icon: bulkEmailIcon,
      title: "Bulk Email Services",
      image:
        "https://img.freepik.com/premium-photo/electronic-communication-graphics-concept-business-using-laptop-with-email-icon-email-inbox_27634-686.jpg?w=740",
    },
    {
      icon: apiIntergrationIcon,
      title: "API Integrations",
      image:
        "https://img.freepik.com/premium-photo/api-application-programming-interface-development-technology-concept_524876-487.jpg?w=740",
    },
    {
      icon: webDevIcon,
      title: "Web Development",
      image:
        "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=740&t=st=1686600660~exp=1686601260~hmac=94bfbcdfb20f83c4be63906361a2562554b6c9b7566574d27cd5505ee59c1e93",
    },
    {
      icon: systemDevIcon,
      title: "System Development",
      image:
        "https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=740&t=st=1686594335~exp=1686594935~hmac=5d79a70781dcdf090fba8f888346aebb6ead279dc5be5fbd488de8d089fe7a61",
    },
    {
      icon: merchandiseIcon,
      title: "Merchandise Branding",
      image:
        "https://img.freepik.com/premium-photo/illustration-colorful-bulb-with-splash-colors-white-background-creativity-eureka-imagination-inspiration-generative-ai-idea-solution-concept_620624-6732.jpg?w=740",
    },
    // Add more services as needed
  ];

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
