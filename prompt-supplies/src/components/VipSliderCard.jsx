/* eslint-disable react/prop-types */

function VipSliderCard({ sliderIndex, image }) {
  return (
    <div className="relative h-full w-full  text-white">
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Black Shade Overlay */}
        {/* <div className="absolute inset-0 h-full w-full bg-[#181b1c]/75"></div> */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black via-[#181b1c]/75 to-transparent"></div>
      </div>
      <div className=" absolute container mx-auto px-5 md:px-20  ">
        <div className="py-12 h-96 w-full flex items-center">
          <div className="max-w-xl pl-10">
            {" "}
            Vip Slider #{sliderIndex}
            <div className="font-mono text-4xl mb-5"> Service Title</div>
            <div className="mb-2">
              {" "}
              Service Description Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repudiandae rem earum nam fuga
            </div>
            <div className="mb-8 font-semibold"> Job Location</div>
            <div>
              <button className="  border font-bold border-[#FDB715] py-3 px-6 hover:bg-[#FDB715] text-[#FDB715] hover:text-white transition-all duration-300 ">
                {" "}
                Call Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VipSliderCard;
