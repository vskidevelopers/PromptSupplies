import React from "react";

export default function ServiceMiniCard({ icon, title, backgroundImage }) {
  return (
    <div className="relative flex items-center gap-2 px-4 py-2 rounded-lg shadow-md overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 h-full bg-gray-900/70"></div>
      <div className="rounded-lg overflow-hidden z-10">
        <img src={icon} alt={icon} className="h-28 rounded-lg" />
      </div>
      <h3 className="text-md md:text-md font-semibold z-10  text-[#FDB715]">
        {title}
      </h3>
    </div>
  );
}
