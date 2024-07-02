/* eslint-disable no-unused-vars */
import HeroSection from "@/components/HeroSection";
import Pagination from "@/components/Pagination";
import SkinDisplayCard from "@/components/SkinDisplayCard";
import CategorySectionSkinSlider from "@/sections/CategorySectionSkinSlider";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SkinsCategory() {
  const mockSkins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15];
  const [randomLink, setRandomLink] = useState("");
  const [skins, setSkins] = useState(mockSkins);
  const [currentSkins, setCurrentSkins] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const skinsPerPage = 8;

  useEffect(() => {
    const endOffset = itemOffset + skinsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentSkins(skins.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(skins.length / skinsPerPage));
  }, [skins, itemOffset]);

  const lastCount = itemOffset + skinsPerPage;
  console.log("current Skins >> ", currentSkins);
  console.log("Last Count >>", lastCount);

  const links = [
    "https://e1.pxfuel.com/desktop-wallpaper/507/116/desktop-wallpaper-hypebeast-laptop-sticker-pack-off-white-gucci-kith-bape-supreme-1600x1200-for-your-mobile-tablet-gucci-bape.jpg",
    "https://wallpapercave.com/wp/wp3413268.jpg",
    "https://wallpaperaccess.com/thumb/447967.jpg",
    "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701969849.jpg",
    "https://wallpapercave.com/wp/wp2879819.jpg",
    "https://i.pinimg.com/originals/c8/ae/2a/c8ae2a058b065de0b9fc76f22238dc36.jpg",
  ];

  // Fisher-Yates (Knuth) Shuffle Algorithm
  const shuffleArray = (array) => {
    let shuffledArray = array.slice(); // Make a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    const shuffledLinks = shuffleArray(links);
    setRandomLink(shuffledLinks[0]);
  }, []);

  const category = useParams();
  console.log("category >> ", category);
  return (
    <div className=" w-full bg-slate-500/30">
      <HeroSection
        tagline="Build for perfection"
        title={category?.category}
        image={randomLink}
        skins={true}
      />
      <div className="h-full w-full bg-sky-600">
        <CategorySectionSkinSlider
          title={category?.category}
          sliderskins={skinsPerPage / 2}
        />
      </div>
      <div className="container mx-auto mt-10 py-10">
        <div className="w-full grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-4">
          {currentSkins?.map((data, i) => (
            <div key={i}>
              <SkinDisplayCard i={data} category={category?.category} />
            </div>
          ))}
        </div>
        {/* pagination */}
        <div>
          <div className="w-full flex justify-end my-4">
            <Pagination
              items={skins}
              pageCount={pageCount}
              setItemOffset={setItemOffset}
              itemsPerPage={skinsPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
