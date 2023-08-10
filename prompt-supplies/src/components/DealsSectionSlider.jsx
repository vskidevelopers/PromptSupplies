/* eslint-disable react/prop-types */
import { useState } from "react";
import CountDownTimer from "./CountDownTimer";
import background from "../assets/videos/background.mp4";
import DealsAdCards from "./DealsAdCards";

function DealsSectionSlider(props) {
  console.log("Props >>>", props);

  const [isLoading, setIsLoading] = useState(true);
  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full bg-slate-950 py-14">
      <div className="absolute inset-0 h-full w-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
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

      <div className=" container mx-auto  ">
        <div className="w-full h-[400px] flex flex-col md:flex-row gap-2">
          <div className="w-4/5 md:w-1/5 z-10 container mx-auto px-5 md:px-10 flex flex-col justify-center">
            <h3 className="  text-2xl font-semibold font-mono text-gray-300  mb-4">
              Deal of the Day
            </h3>
            <div>
              <CountDownTimer />
            </div>
          </div>

          <div className="w-4/5 md:w-3/5 h-full overflow-y-hidden">
            <DealsAdCards sliderItem={props.sliderItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealsSectionSlider;
