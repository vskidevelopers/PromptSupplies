import React from "react";
import IntroHero from "../components/IntroHero";
import IntroSection from "../components/IntroSection";
import ServicesSection from "../components/ServicesSection";
import QuotationDivider from "../components/QuotationDivider";
import WhyChooseUs from "../components/WhyChooseUs";
import AdvertSlider from "../components/AdvertSlider";
import PartnersSlider from "../components/PartnersSlider";

export default function Home() {
  return (
    <div>
      <IntroHero />
      <IntroSection />
      <ServicesSection />
      <QuotationDivider />
      <AdvertSlider />
      <WhyChooseUs />
      <PartnersSlider />
    </div>
  );
}
