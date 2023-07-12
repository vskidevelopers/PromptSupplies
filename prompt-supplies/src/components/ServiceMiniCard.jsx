/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";

export default function ServiceMiniCard({ id, icon, title, backgroundImage }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`/service-detail/${id}`}>
      <div
        className="relative flex items-center gap-2 px-4 py-2 rounded-lg shadow-md overflow-hidden"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform ${
            isHovered ? "transform scale-125" : ""
          }`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div
          className={`absolute inset-0 h-full bg-black transition-opacity ${
            isHovered ? "opacity-80" : "opacity-70"
          }`}
        ></div>
        <div className="rounded-lg overflow-hidden z-10">
          <img src={icon} alt={icon} className="h-28 rounded-lg" />
        </div>
        <h3 className="text-md md:text-md font-semibold z-10 text-[#FDB715]">
          {title}
        </h3>
      </div>
    </Link>
  );
}
