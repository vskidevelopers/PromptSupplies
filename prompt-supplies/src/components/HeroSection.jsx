import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ tagline, image, title }) => {
  return (
    <div className="relative h-96">
      {/* Background Image */}
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
      {/* Heading Tag */}
      <div className="absolute inset-0 flex pl-10 flex-col justify-center items-start text-white">
        <h1 className="text-5xl md:text-6xl font-bold  font-serif">
          {tagline ? tagline : title}
        </h1>
        {/* Breadcrumb */}
        <div className="py-2 text-[#FDB715] ">
          <Link to="/" className="text-white">
            Home
          </Link>{" "}
          | {title}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
