/* eslint-disable react/prop-types */
import IntroHero from "../components/IntroHero";
import IntroSection from "../components/IntroSection";
// import ServicesSection from "../components/ServicesSection";
import QuotationDivider from "../components/QuotationDivider";
import WhyChooseUs from "../components/WhyChooseUs";
import PartnersSlider from "../components/PartnersSlider";
import AdvertSlider from "../components/AdvertSlider";

export default function Home({ services }) {
  return (
    <div>
      <IntroHero />
      <IntroSection services={services} />
      {/* <ServicesSection /> */}
      <AdvertSlider />
      <QuotationDivider />
      <WhyChooseUs />
      <PartnersSlider />
    </div>
  );
}
