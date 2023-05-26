import React from "react";

export default function ServiceMiniCard({ icon, title }) {
  return (
    <div className="flex items-center gap-2 text-[#FDB715] px-4 py-2 rounded-lg shadow-md">
      <img src={icon} alt={icon} className="h-28" />
      <h3 className="text-sm font-semibold">{title}</h3>
    </div>
  );
}
