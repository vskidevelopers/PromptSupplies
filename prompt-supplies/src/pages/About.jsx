import React from "react";
import HeroSection from "../components/HeroSection";
import FloatingCards from "../components/FloatingCards";
import { StarIcon, EyeIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import LeaderDivider from "../components/LeaderDivider";
import Team from "../components/Team";

function About() {
  const coreValues = [
    "Innovation",
    "Customer-Centricity",
    "Excellence",
    "Collaboration",
    "Results-Driven",
    "Adaptability",
  ];
  return (
    <>
      <HeroSection
        tagline="Build On Teamwork"
        title="About us"
        image="https://images.pexels.com/photos/1181415/pexels-photo-1181415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="py-16 relative">
        <div className="container mx-auto px-5 md:px-20">
          <div className="initial md:absolute -top-32 left-10 container">
            <div className=" flex flex-col md:flex-row justify-between gap gap-3">
              <FloatingCards
                basis="basis-1/3"
                title="Our Mission"
                description="Empowering businesses through innovative marketing solutions for
          enhanced brand visibility, customer engagement, and accelerated
          growth. Exceptional services driving long-term success."
                icon={<StarIcon className="h-8 w-8 text-[#FDB715] mr-5" />}
              />
              <FloatingCards
                basis="basis-1/3"
                title="Our Vision"
                description="To be a global leader in transformative marketing solutions, revolutionizing the industry with innovative strategies and technologies. We are committed to delivering outstanding results, fostering excellence, and sustainable growth."
                icon={<EyeIcon className="h-8 w-8 text-[#FDB715] mr-5" />}
              />
              <FloatingCards
                basis="basis-1/3"
                list={true}
                title="Our Core Values"
                description={coreValues}
                icon={<LightBulbIcon className="h-8 w-8 text-[#FDB715] mr-5" />}
              />
            </div>
          </div>

          <div className="mt-16">
            <LeaderDivider />
            <Team />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
