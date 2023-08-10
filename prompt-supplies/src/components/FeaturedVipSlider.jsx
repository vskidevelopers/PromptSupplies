import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function FeaturedVipSlider() {
  const images = [
    "https://img.freepik.com/free-psd/horizontal-banner-template-black-friday-clearance_23-2148745446.jpg?w=900&t=st=1686608963~exp=1686609563~hmac=ab842d50f5dcde032164ac300b7fb54935328fe0e0ae5e4b770603218aeeb02d",
    "https://img.freepik.com/free-psd/banner-corporate-ad-template_23-2148788938.jpg?w=900&t=st=1686609116~exp=1686609716~hmac=dc5c1b22d8386ac42b7f8e13ac7aa614c8c263f81d4ca2167b95229cade85761",
    "https://img.freepik.com/free-psd/business-company-banner-template_23-2148924998.jpg?w=900&t=st=1686609158~exp=1686609758~hmac=27806a2bfe6d9422dc4b7ee7923df6bddf37d70de22fb801dc22c3b5ce0f7d40",
    "https://img.freepik.com/free-vector/creative-hiring-landing-page-template_52683-44620.jpg?w=740&t=st=1686609279~exp=1686609879~hmac=35dd40078e71f2d29f0c8f79c1ef1f1d7b1bf676cb1fdfd9f4f4100456b17b01",
  ];
  return (
    <section className="py-5 md:py-10 bg-slate-200">
      <div className="container max-full mx-auto flex justify-center items-center">
        <CarouselProvider
          naturalSlideWidth={450}
          naturalSlideHeight={300}
          totalSlides={3}
        >
          <Slider>
            {images.map((image, index) => (
              <Slide index={index} key={index}>
                <img
                  src={image}
                  alt={`Slider ${index}`}
                  className="h-full w-auto"
                />
              </Slide>
            ))}
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>
    </section>
  );
}
