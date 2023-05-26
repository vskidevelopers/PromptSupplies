import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ChecklistItem({ listItem }) {
  return (
    <div className="flex items-center py-2">
      <div className="mr-2">
        <CheckCircleIcon className="h-4 w-4 text-sky-600" />
      </div>
      <div>{listItem}</div>
    </div>
  );
}
