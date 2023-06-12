import React, { useState } from "react";
import { motion } from "framer-motion";
import background from "../assets/videos/background.mp4";

export default function IntroHero() {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
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
                <button className="border border-[#FDB715] text-md text-[#FDB715] hover:text-black hover:border-white hover:bg-[#FDB715] py-4 px-8">
                  Read More
                </button>
              </div>
            </div>
            <div className="w-1/4"></div>
          </div>
        </div> */}
        <div className="absolute h-full container mx-auto px-5 md:px-20 text-white">
          <div className="h-full flex justify-start items-center">
            <div className="w-full md:w-3/4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-7xl font-bold capitalize">
                  Choose the right solution for your business
                </h2>
                <p className="mt-5">
                  Unlock Business Potential with Effective Solutions: Seamlessly
                  integrate Bulk SMS, Promotional SMS, Bulk Emailing, and more
                  to elevate customer engagement and propel business growth
                </p>
                <div className="pt-5">
                  <button className="border border-[#FDB715] text-md text-[#FDB715] hover:text-black hover:border-white hover:bg-[#FDB715] py-4 px-8">
                    Read More
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
