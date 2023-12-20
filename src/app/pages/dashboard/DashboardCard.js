import React from "react";
import { FaSdCard } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { GiTimeTrap } from "react-icons/gi";
import CommonCard from "./CommonCard";

function DashboardCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
      <CommonCard
        icon={<IoIosCheckmarkCircle color="#448979" />}
        value="637"
        description="Approved"
        pr="+25%"
        className="absolute tracking-normal text-green-800 text-[13px] top-[2px] right-0"
      />
      <CommonCard
        icon={<GiTimeTrap color="red" />}
        value="741"
        description="Pending"
        pr="+10%"
        className="absolute tracking-normal text-green-800 text-[13px] top-[2px] right-0"
      />
      <CommonCard
        icon={<FaSdCard />}
        value="123"
        description="Expired"
        pr="-15%"
        className="absolute tracking-normal font-medium text-red-800 text-[13px] top-[2px] right-0"
      />
      <CommonCard
        icon={<FaSdCard />}
        value="50"
        description="Rejected"
        pr="-3%"
        className="absolute tracking-normal font-medium text-red-800 text-[13px] top-[2px] right-0"
      />
    </div>
  );
}

export default DashboardCard;
