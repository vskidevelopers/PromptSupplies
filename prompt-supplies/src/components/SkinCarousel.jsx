/* eslint-disable react/prop-types */
import "./styles/skinCarousel.css";

function SkinCarousel({ images }) {
  const totalImages = images.length;
  const angle = 360 / totalImages;

  return (
    <div
      className="scope relative w-[200px] h-80 transform-style-3d animate-slid"
      role="region"
      aria-label="3D rotating image carousel"
    >
      {images.map((src, index) => (
        <span
          key={index}
          className="absolute top-0 left-0 w-full h-full transform-origin-center transform-style-3d"
          style={{
            transform: `rotateY(${index * angle}deg) translateZ(450px)`,
          }}
        >
          <img
            src={src}
            alt={`Carousel image ${index + 1}`}
            loading="lazy"
            className="absolute z-10 top-0 left-0 w-full h-full rounded-lg object-cover transition-transform duration-2000 hover:translate-y-[-50px] hover:scale-170"
          />
        </span>
      ))}
    </div>
  );
}

export default SkinCarousel;
