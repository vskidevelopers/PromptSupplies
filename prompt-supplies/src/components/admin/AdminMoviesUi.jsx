import { FilmIcon } from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";

function AdminMoviesUi() {
  return (
    <div className=" py-5 px-2">
      <div className="w-full py-4 flex justify-end items-center"></div>
      <div className="w-full px-2 py-16 sm:px-0 bg-slate-900 rounded shadow ">
        <div className="px-14">
          <h2 className="font-mono text-center md:text-left text-3xl md:text-5xl font-semibold text-white">
            <FilmIcon className="h-20" /> Movies and Series
          </h2>
        </div>
      </div>

      <div className="py-10 px-14  ">
        <div className="container mx-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminMoviesUi;
