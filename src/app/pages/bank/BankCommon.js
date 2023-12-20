import React from "react";
import { Switch } from "@material-tailwind/react";

function BankCommon({ name, phoneNumber, dueDate, status }) {
  return (
    <>
      <div className="p-3 bg-[#e6eaf0] shadow-sm rounded-lg h-[171px] w-auto">
        <div className="relative text-lg pt-2">
          <div className="absolute left-0 ml-4">
            <p className="font-bold  text-[13px]">{name}</p>
          </div>

          <p className="absolute tracking-normal z-10 text-green-800 text-[13px] top-[2px]  right-0">
            <Switch color="green" />
          </p>
        </div>

        <div className=" relative">
          <div className=" absolute top-[3rem] text-[10px] text-gray-800 left-4 font-medium ">
            <p className="">Bank Name</p>
            <span className="text-[10px] text-gray-800 font-semibold ">
              <p className="flex items-center text-[12px]">SBI</p>
            </span>
          </div>

          <div className=" absolute top-[3rem] text-gray-800 left-36 text-[10px] font-medium ">
            <p> UPI ID</p>
            <span className="text-[10px] text-gray-800 font-semibold">
              <p className="flex items-center text-[12px]">{phoneNumber}</p>
            </span>
          </div>
          <div className="absolute w-[100%] flex align-middle justify-center top-[7rem] left-1">
            <div>
              <span className="absolute left-0 top-[9px] ml-3 text-[10px] text-gray-800">
                Date : {dueDate}
              </span>
            </div>
            <div
              className={`rounded-md absolute tracking-normal z-10 text-green-800 text-[13px] top-[2px]  right-0 ${
                status == "Approved"
                  ? "bg-[#428777]"
                  : status === "Rejected"
                    ? "bg-[#ee4444]"
                    : status === "Expired"
                      ? "bg-orange-500"
                      : status === "Pending"
                        ? "bg-[#f0ca43]"
                        : ""
              }`}>
              <p className="p-1 px-2 text-center  text-white text-[10px]">{status}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BankCommon;
