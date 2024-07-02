import SkinSliderCategorySection from "@/sections/SkinSliderCategorySection";
import SkinCategorySection from "../sections/SkinCategorySection";

function SkinsCollection() {
  return (
    <div className="mt-20 bg-gradient-to-r from-[#e66465] to-[#9198e5]">
      {/* 
      todo:
      Categories Section
      Slider Category:
            Top Trending
            LaptopSkins
            MobileSkins
            CameraSkins
            Accessories
      Offer Banner Section
    */}

      <SkinCategorySection />
      <SkinSliderCategorySection title={"Top Trending"} />
      <SkinSliderCategorySection title={"Laptop Skins"} />
      <SkinSliderCategorySection title={"Mobile Skins"} />
      <SkinSliderCategorySection title={"Camera Skins"} />
      <SkinSliderCategorySection title={"Accessories"} />
    </div>
  );
}

export default SkinsCollection;
