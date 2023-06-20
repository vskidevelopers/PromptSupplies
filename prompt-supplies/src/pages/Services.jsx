/* eslint-disable react/prop-types */
import HeroSection from "../components/HeroSection";
import ServicesCard from "../components/ServicesCard";
// import { services } from "../utils/services";

export default function Services({ serviceList }) {
  console.log("Services >>", serviceList);

  return (
    <div className="">
      <HeroSection
        tagline="Amplify Your Reach"
        title="Services"
        image="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="py-16 ">
        <div className="relative flex flex-col justify-center items-center mb-16">
          <div className="w-full md:w-1/2 pl-4 text-start md:text-center">
            <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
              Our Services
            </h2>
            <h1 className="text-3xl font-bold capitalize">
              Empowering Organizations through Result-Driven Solutions
            </h1>
          </div>
          <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center opacity-10 ">
            <h1 className="text-7xl md:text-9xl font-bold ">Services</h1>
          </div>
        </div>

        {/* SERVICE  GRID*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 container mx-auto px-5 md:px-20">
          {serviceList.map((service, i) => (
            <ServicesCard
              key={i}
              id={i}
              icon={service.icon}
              title={service.title}
              description={service.excerpt}
              backgroundImage={service.image}
              reasons={service.reasons}
              defination={service.definition}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
