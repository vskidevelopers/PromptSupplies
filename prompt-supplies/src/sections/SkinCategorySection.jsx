import { Link } from "react-router-dom";

function SkinCategorySection() {
  return (
    <div className="container mx-auto">
      <div className="py-6 text-center">
        <h1>CAREFULLY CREATED COLLECTIONS</h1>
        <h1>BROWSE OUR CATEGORIES</h1>
      </div>
      <div className="flex w-full justify-around">
        <div className="h-96 relative w-full mx-2 bg-black">
          {/* image */}
          <div className="absolute w-full h-full  top-0 left-0 bg-black/25 flex justify-center items-center">
            <Link to={"laptopskins"} className="bg-white py-3 px-6 shadow">
              Laptop Skins
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col justify-between">
          <div className="relative  h-44 bg-slate-900 w-full">
            {/* image */}
            <div className="absolute w-full h-full  top-0 left-0 bg-black/25 flex justify-center items-center">
              <Link className="bg-white py-3 px-6 shadow">Laptop Skins</Link>
            </div>
          </div>
          <div className="relative  h-44 bg-sky-600 w-full">
            {/* image */}
            <div className="absolute w-full h-full  top-0 left-0 bg-black/25 flex justify-center items-center">
              <Link t className="bg-white py-3 px-6 shadow">
                Laptop Skins
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-96 w-full mx-2 bg-orange-800">
          {/* image */}
          <div className="absolute w-full h-full  top-0 left-0 bg-black/25 flex justify-center items-center">
            <Link className="bg-white py-3 px-6 shadow">Laptop Skins</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkinCategorySection;
