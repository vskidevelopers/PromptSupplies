import IntroHero from "../components/IntroHero";
import IntroSection from "../components/IntroSection";
// import ServicesSection from "../components/ServicesSection";
import QuotationDivider from "../components/QuotationDivider";
import WhyChooseUs from "../components/WhyChooseUs";
import PartnersSlider from "../components/PartnersSlider";
import AdvertSlider from "../components/AdvertSlider";

export default function Home() {
  return (
    <div>
      <IntroHero />
      <IntroSection />
      {/* <ServicesSection /> */}
      <AdvertSlider />
      <QuotationDivider />
      <WhyChooseUs />
      <PartnersSlider />
    </div>
  );
}
