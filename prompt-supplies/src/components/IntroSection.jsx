import React from "react";
import ChecklistItem from "./ChecklistItem";
import businessSvg from "../assets/svgs/business_analytics.svg";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function IntroSection() {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-10 py-20 ">
        <div className="relative flex flex-col justify-center items-center py-10">
          <div className="w-1/2 text-start">
            <h2 className="text-[#FDB715] text-md font-semibold uppercase ">
              Discover Our Story
            </h2>
            <h1 className="text-3xl font-bold">
              Empowering Organizations through Result-Driven Solutions
            </h1>
          </div>
          <div className="absolute top-0 left-0 h-full w-full flex justify-end items-center opacity-10">
            <h1 className="text-9xl font-bold">Discover</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Desc */}
          <div className="col-span-2">
            <div className="flex flex-col gap-3">
              <div id="body">
                <p className="text-gray-700">
                  Prompt Supplies Enterprise is a leading provider of innovative
                  marketing solutions, specializing in:{" "}
                </p>
                <span className="grid grid-cols-2 gap w-3/5">
                  <ChecklistItem
                    listItem="promotional messages"
                    icon={<CheckCircleIcon className="h-4 w-4 text-sky-600" />}
                  />
                  <ChecklistItem
                    listItem="bulk SMS services"
                    icon={<CheckCircleIcon className="h-4 w-4 text-sky-600" />}
                  />
                  <ChecklistItem
                    listItem="bulk email services"
                    icon={<CheckCircleIcon className="h-4 w-4 text-sky-600" />}
                  />
                  <ChecklistItem
                    listItem=" API integration"
                    icon={<CheckCircleIcon className="h-4 w-4 text-sky-600" />}
                  />
                  <ChecklistItem
                    listItem="web development"
                    icon={<CheckCircleIcon className="h-4 w-4 text-sky-600" />}
                  />
                  <ChecklistItem
                    listItem=" system development"
                    icon={<CheckCircleIcon className="h-4 w-4 text-sky-600" />}
                  />
                  <ChecklistItem
                    listItem=" merchandise branding"
                    icon={<CheckCircleIcon className="h-4 w-4 text-sky-600" />}
                  />
                </span>
                <p>
                  With our comprehensive range of services, we help businesses
                  of all sizes amplify their reach and engage with their target
                  audience effectively
                </p>
              </div>
            </div>
          </div>

          {/* Right Svg/Image */}
          <div className="h-full ">
            <img src={businessSvg} alt=".." height="500px" />
          </div>
        </div>
      </div>
    </div>
  );
}
