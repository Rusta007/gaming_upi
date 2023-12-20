import React from "react";
import { COLOR_CODE } from "../../utils/Helper";
function WalletCommon({
  balance,
  status,
  receipt,
  clientName,
  createdAt,
  approvedAt,
  approvedBy,
  orderId,
  assignedTo,
  assignedUPI,
  clientUPI,
  utr,
  customerUtr,
  website
}) {
  return (
    <div className="bg-white shadow text-black rounded-lg w-full py-4 h-max">
      <div className="relative text-[11px] pt-2">
        <div className="absolute left-0 ml-4">
          <p>Balance</p>
          <p className="text-[18px] font-bold">{balance}</p>
        </div>

        <p
          style={{
            backgroundColor: COLOR_CODE?.[status?.[0]?.toLowerCase()]
          }}
          className="absolute tracking-normal rounded-md px-2 py-[5px]  z-10 border-red text-white text-[12px] top-[2px] right-3 ">
          <p>{status}</p>
        </p>
      </div>

      <div className="h-max flex flex-col ml-4 text-[11px] mt-16 font-semibold   gap-0 lg:flex-row lg:gap-48">
        <div className="mb-4 lg:mb-0">
          <p>
            RECIPT:
            <span className="text-[11px] ml-2 font-light">{receipt}</span>
          </p>
          <p>
            CLIENT NAME:
            <span className="text-[11px] ml-2 font-light">{clientName}</span>
          </p>
          <p>
            CREATED AT:
            <span className="text-[11px] ml-2 font-light">{createdAt}</span>
          </p>
          <p>
            APPROVED AT:
            <span className="text-[11px] ml-2 font-light">{approvedAt}</span>
          </p>
          <p>
            APPROVED BY:
            <span className="text-[11px] ml-2 font-light">{approvedBy}</span>
          </p>
        </div>

        <div className="mb-4 lg:mb-0">
          <p>
            ORDER ID:
            <span className="text-[11px] ml-2 font-light">{orderId}</span>
          </p>
          <p>
            ASSIGNED TO:
            <span className="text-[11px] ml-2 font-light">{assignedTo}</span>
          </p>
          <p>
            ASSIGNED UPI:
            <span className="text-[11px] ml-2 font-light">{assignedUPI}</span>
          </p>
          <p>
            CLIENT UPI:
            <span className="text-[11px] ml-2 font-light">{clientUPI}</span>
          </p>
          <p>
            UTR:
            <span className="text-[11px] ml-2 font-light">{utr}</span>
          </p>
          <p>
            CUSTOMER UTR:
            <span className="text-[11px] ml-2 font-light">{customerUtr}</span>
          </p>
          <p>
            WEBSITE:
            <span className="text-[11px] ml-2 font-light">{website}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WalletCommon;
