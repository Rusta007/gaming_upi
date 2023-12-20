import React from "react";

function CommonCard({ icon, value, description, pr, className }) {
  return (
    <div className="p-3 bg-white shadow-sm rounded-lg h-28 sm:w-auto">
      <div className="relative text-lg pt-2">
        {icon}
        <p className={className}>{pr}</p>
      </div>

      <div className="flex">
        <p className="text-lg font-semibold mt-3">
          {value}
          <span className="flex text-[9px] pb-4 text-gray-500">{description}</span>
        </p>
      </div>
    </div>
  );
}
export default CommonCard;
