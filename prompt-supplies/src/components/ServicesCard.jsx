/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function ServicesCard({ id, icon, title, description, backgroundImage }) {
  return (
    <div>
      <div className="group relative block h-64 sm:h-80 lg:h-96">
        <span className="absolute inset-0 border-2 border-dashed border-[#FDB715]"></span>

        <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div
            className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <div className="absolute inset-0 h-full bg-gray-900/70"></div>
            <div className="absolute z-10 h-[100%] w-auto flex flex-col justify-center">
              <img src={icon} alt={icon} />
              <h2 className="mt-4 text-xl font-medium sm:text-2xl text-[#FDB715] capitalize">
                {title}
              </h2>
            </div>
          </div>

          <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
            <h3 className="mt-4 text-xl font-medium sm:text-2xl text-[#FDB715] capitalize">
              {title}
            </h3>

            <p className="mt-4 text-sm sm:text-base">{description}</p>

            <Link to={`/service-detail/${id}`}>
              <p className="mt-8 font-bold text-[#FDB715]">Read more</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
