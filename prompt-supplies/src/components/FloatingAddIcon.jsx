import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function FloatingAddIcon() {
  return (
    <div className="absolute h-screen w-screen">
      <div className=" bottom-10 right-10 z-10">
        <div className="p-4 rounded-full bg-[#FDB715]">
          <PlusCircleIcon className="h-16 w-auto" />
        </div>
      </div>
    </div>
  );
}
