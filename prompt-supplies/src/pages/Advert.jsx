import React from "react";
import HeroSection from "../components/HeroSection";
import AdvertSlider from "../components/AdvertSlider";
import FloatingAddIcon from "../components/FloatingAddIcon";

function Advert() {
  return (
    <div className="relative">
      <HeroSection
        tagline="Unlock Growth Oppounities"
        title="Advertise"
        image="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div>
        <AdvertSlider />
      </div>
      {/* <FloatingAddIcon /> */}
    </div>
  );
}

export default Advert;
