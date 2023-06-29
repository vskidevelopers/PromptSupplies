/* eslint-disable react/prop-types */

import {
  ArrowTopRightOnSquareIcon,
  CubeTransparentIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function RightSideProjectCard({ project }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-28">
      <div className="py-4 md:p-0 bg-inherit rounded-md order-last lg:order-first">
        <h2 className="font-bold text-xl text-[#FDB715] md:text-inherit">
          {project?.title}
        </h2>

        <p className="bg-inherit py-4 w-full md:w-5/6 md:p-0 md:pb-4">
          {project?.description}
        </p>

        <div className="grid md:gap-0">
          <ul className="font-mono sm:pt-6 md:text-inherit pt-8 flex flex-wrap items-center justify-start gap-4">
            {project?.technology_stack?.map((stack, index) => (
              <li key={index} className="flex items-center">
                <LightBulbIcon className="h-6 w-auto text-[#FDB715]" /> {stack}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-start gap-5 pt-10">
          {project?.githubLink ? (
            <Link
              href={project?.githubLink}
              className="hover:text-[#FDB715] text-sm transition-all duration-200 flex gap-2 items-center"
            >
              <CubeTransparentIcon className="h-6 w-auto " />
              View on Github
            </Link>
          ) : (
            <span className="hover:text-red-700 text-sm transition-all duration-200 flex gap-2 items-center">
              <CubeTransparentIcon className="h-6 w-auto " />
              This GitHub is Private
            </span>
          )}

          <Link
            to={project?.liveLink}
            className="hover:text-[#FDB715] text-sm transition-all duration-200 flex gap-2 items-center"
          >
            <ArrowTopRightOnSquareIcon className="h-6 w-auto" />
            View Live
          </Link>
        </div>
      </div>
      <div className="border border-[#FDB715] transform transition-all duration-300 hover:bg-[#FDB715] h-full  group order-first lg:order-last">
        <img
          className="border border-[#FDB715] w-full h-full md:mr-auto rounded md:self-center cursor-pointer ease-linear hover:-translate-x-4 hover:translate-y-4 hover:z-10 transition-all duration-200"
          src={project?.imageUrl}
          alt={`Screenshot of ${project?.title} website website`}
        />
      </div>
    </div>
  );
}
