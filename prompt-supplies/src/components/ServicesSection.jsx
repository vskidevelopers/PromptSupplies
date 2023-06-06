import React from "react";
import promotionalSmsIcon from "../assets/svgs/promotional_sms.svg";
import bulkEmailIcon from "../assets/svgs/bulk_email.svg";
import bulkSmsIcon from "../assets/svgs/bulk_sms.svg";
import apiIntergrationIcon from "../assets/svgs/api_intergration.svg";
import webDevIcon from "../assets/svgs/web_development.svg";
import systemDevIcon from "../assets/svgs/system_development.svg";
import merchandiseIcon from "../assets/svgs/merchandise.svg";
import ServiceMiniCard from "./ServiceMiniCard";

export default function ServicesSection() {
  const services = [
    { icon: promotionalSmsIcon, title: "Promotional Messages" },
    { icon: bulkSmsIcon, title: "Bulk SMS Services" },
    { icon: bulkEmailIcon, title: "Bulk Email Services" },
    { icon: apiIntergrationIcon, title: "API Integrations" },
    { icon: webDevIcon, title: "Web Development" },
    { icon: systemDevIcon, title: "System Development" },
    { icon: merchandiseIcon, title: "Merchandise Branding" },
    // Add more services as needed
  ];
  return (
    <div className="container mx-auto px-10 md:px-20">
      {/* Title */}
      <div className="relative flex flex-col justify-center items-center py-10">
        <div className="w-full md:w-1/2 md:text-end">
          <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
            our services
          </h2>
          <h1 className="text-3xl font-bold capitalize">
            Empowering Organizations through Result-Driven Solutions
          </h1>
        </div>
        <div className="absolute top-0 left-0 h-full w-full flex justify-start items-center opacity-10">
          <h1 className="text-7xl md:text-9xl font-bold">Services</h1>
        </div>
      </div>

      {/* Grid Div */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
        {services.map((service, i) => (
          <ServiceMiniCard key={i} title={service.title} icon={service.icon} />
        ))}
      </div>
    </div>
  );
}
