/* eslint-disable react/prop-types */
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function VipSlider() {
  const images = [
    "https://img.freepik.com/free-psd/horizontal-banner-template-black-friday-clearance_23-2148745446.jpg?w=900&t=st=1686608963~exp=1686609563~hmac=ab842d50f5dcde032164ac300b7fb54935328fe0e0ae5e4b770603218aeeb02d",
    "https://img.freepik.com/free-psd/banner-corporate-ad-template_23-2148788938.jpg?w=900&t=st=1686609116~exp=1686609716~hmac=dc5c1b22d8386ac42b7f8e13ac7aa614c8c263f81d4ca2167b95229cade85761",
    "https://img.freepik.com/free-psd/business-company-banner-template_23-2148924998.jpg?w=900&t=st=1686609158~exp=1686609758~hmac=27806a2bfe6d9422dc4b7ee7923df6bddf37d70de22fb801dc22c3b5ce0f7d40",
    "https://img.freepik.com/free-vector/creative-hiring-landing-page-template_52683-44620.jpg?w=740&t=st=1686609279~exp=1686609879~hmac=35dd40078e71f2d29f0c8f79c1ef1f1d7b1bf676cb1fdfd9f4f4100456b17b01",
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="">
      <div className="h-96 w-[60vw] mb-20">
        <Slider {...settings} className="">
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default VipSlider;
