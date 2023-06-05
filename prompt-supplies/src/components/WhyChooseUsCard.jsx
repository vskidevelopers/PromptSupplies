import React from "react";

function WhyChooseUsCard({ icon, reason, description }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row  items-start gap-4">
        <span className="shrink-0 rounded-lg bg-[#FDB715] p-4">{icon}</span>

        <div>
          <h2 className="text-lg font-bold">{reason}</h2>

          <p className="mt-1 text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUsCard;
