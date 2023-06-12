import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import background from "../assets/videos/background.mp4";

export default function IntroHero() {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 2,
        type: "spring",
        damping: 10,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 1,
        type: "spring",
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <div className="h-screen">
      <div className="relative h-full">
        {/* Video Background */}
        <div className="absolute inset-0 h-full w-full">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              {/* Placeholder Image */}
              <img
                src="https://img.freepik.com/premium-photo/portrait-young-businessman-with-disability-participating-meeting-with-managers_236854-41118.jpg"
                alt="Placeholder"
                className="w-full h-full object-cover"
              />

              {/* Loading Spinner */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-gray-900"></div>
              </div>
            </div>
          )}

          <video
            src={background}
            className={!isLoading ? "w-full h-full object-cover" : "hidden"}
            onLoadedData={handleVideoLoad}
            autoPlay
            loop
            muted
          />
          <div className="absolute inset-0 h-full bg-[#181b1c]/25"></div>
        </div>

        {/* Content */}
        {/* <div className="absolute h-full container mx-auto px-5 md:px-20 text-white">
          <div className="h-full flex justify-start items-center">
            <div className="w-full md:w-3/4">
              <h2 className="text-4xl md:text-7xl font-bold capitalize">
                Choose the right solution for your business
              </h2>
              <p className="mt-5">
                Unlock Business Potential with Effective Solutions: Seamlessly
                integrate Bulk SMS, Promotional SMS, Bulk Emailing, and more to
                elevate customer engagement and propel business growth
              </p>
              <div className="pt-5">
                <Link
                  to="about"
                  className="border border-[#FDB715] text-md text-[#FDB715] hover:text-black hover:border-white hover:bg-[#FDB715] py-4 px-8"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="w-1/4"></div>
          </div>
        </div> */}

        <div className="absolute h-full container mx-auto px-5 md:px-20 text-white">
          <motion.div
            className="h-full flex justify-start items-center"
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="w-full md:w-3/4">
              <motion.h2
                className="text-4xl md:text-7xl font-bold capitalize"
                variants={headingVariants}
              >
                Choose the right solution for your business
              </motion.h2>
              <motion.p className="mt-5" variants={paragraphVariants}>
                Unlock Business Potential with Effective Solutions: Seamlessly
                integrate Bulk SMS, Promotional SMS, Bulk Emailing, and more to
                elevate customer engagement and propel business growth
              </motion.p>
              <motion.div className="pt-5" variants={buttonVariants}>
                <Link
                  to="about"
                  className="border border-[#FDB715] text-md text-[#FDB715] hover:text-black hover:border-white hover:bg-[#FDB715] py-4 px-8"
                >
                  Read More
                </Link>
              </motion.div>
            </div>
            <div className="w-1/4"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
