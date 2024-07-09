import { Link } from "react-router-dom";

function SkinCategorySection() {
  return (
    <div className="container mx-auto px-4">
      <div className="py-6 text-center">
        <h1 className="text-xl font-bold">CAREFULLY CREATED COLLECTIONS</h1>
        <h1 className="text-lg">BROWSE OUR CATEGORIES</h1>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-around">
        <div className="h-96 relative w-full mx-2 mb-4 md:mb-0 group overflow-clip">
          {/* image */}
          <img
            src="https://www.uidownload.com/files/658/513/183/laptop-sticker-skin-mockup-free-psd.jpg"
            alt="Laptop Skins"
            className="absolute w-full h-full top-0 left-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          {/* overlay */}
          <div className="absolute w-full h-full top-0 left-0 bg-black/25 flex justify-center items-center transition duration-500 ease-in-out group-hover:bg-black/50">
            <Link
              to="laptopskins"
              className="bg-white py-3 px-6 shadow transition duration-500 ease-in-out transform group-hover:scale-105"
            >
              Laptop Skins
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between">
          <div className="relative h-44 w-full mb-4 md:mb-0 group overflow-clip">
            {/* image */}
            <img
              src="https://m.media-amazon.com/images/I/81ILYmOV-yL._AC_UF1000,1000_QL80_.jpg"
              alt="Camera Skins"
              className="absolute w-full h-full top-0 left-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            {/* overlay */}
            <div className="absolute w-full h-full top-0 left-0 bg-black/25 flex justify-center items-center transition duration-500 ease-in-out group-hover:bg-black/50">
              <Link
                to="cameraskins"
                className="bg-white py-3 px-6 shadow transition duration-500 ease-in-out transform group-hover:scale-105"
              >
                Camera Skins
              </Link>
            </div>
          </div>

          <div className="relative h-44 w-full group overflow-clip">
            {/* image */}
            <img
              src="https://cdn.shopify.com/s/files/1/0534/7849/0267/files/Screenshot_20200811-142621_2_1_480x480.jpg"
              alt="Accessories Skins"
              className="absolute w-full h-full top-0 left-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            {/* overlay */}
            <div className="absolute w-full h-full top-0 left-0 bg-black/25 flex justify-center items-center transition duration-500 ease-in-out group-hover:bg-black/50">
              <Link
                to="accessoriesskins"
                className="bg-white py-3 px-6 shadow transition duration-500 ease-in-out transform group-hover:scale-105"
              >
                Accessories Skins
              </Link>
            </div>
          </div>
        </div>

        <div className="h-96 relative w-full mx-2 mb-4 md:mb-0 group overflow-clip">
          {/* image */}
          <img
            src="https://www.skinslegend.com/cdn/shop/products/1fVVNYJaCH5yGGOCIfrfuVkbwpXUR3n91_05a4cb07-d5fd-4a8b-aa75-4f38edbafd5b.jpg"
            alt="Laptop Skins"
            className="absolute w-full h-full top-0 left-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          {/* overlay */}
          <div className="absolute w-full h-full top-0 left-0 bg-black/25 flex justify-center items-center transition duration-500 ease-in-out group-hover:bg-black/50">
            <Link
              to="laptopskins"
              className="bg-white py-3 px-6 shadow transition duration-500 ease-in-out transform group-hover:scale-105"
            >
              Phone Skins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkinCategorySection;
