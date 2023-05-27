import React from "react";

export default function ChecklistItem({ icon, listItem }) {
  return (
    <div className="flex items-center py-2">
      <div className="mr-2">{icon}</div>
      <div>{listItem}</div>
    </div>
  );
}
