import React from "react";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import { Chip } from "@material-tailwind/react";
import invoiceTableData from "../../utils/invoiceTable.json";
import { useEffect, useState } from "react";
import Pagination from "../../common/component/Pagination";

function InvoiceTable() {
  const itemsPerPage = 10;
  const [tableRows, setTableRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  // const [selectedButton, setSelectedButton] = useState(0);

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    console.log(id);
  };

  useEffect(() => {
    setTableRows(invoiceTableData);
  }, []);

  const totalPages = Math.ceil(tableRows.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = tableRows.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    console.log(newPage);
    setCurrentPage(newPage);
  };

  // const handleButton = (index) => {
  //   // console.log("Button clicked!", index);
  //   setSelectedButton(index);
  // };

  return (
    <div>
      <div className="flex flex-col justify-between gap-8 lg:flex-row md:items-baseline px-4 py-2 pb-6">
        <div>
          <div className="text-lg font-body black">Latest Invoices</div>
        </div>
        {/* <div className="flex items-center w-max bg-[#efefef] rounded-3xl gap-0 text-center">
          <div
            className={`text-center p-2 px-3 text-[#cdd3dd]  rounded-3xl  ${
              selectedButton === 0 ? "bg-[#428777] !text-[white]" : ""
            }`}>
            <button className="text-sm pl-[4px]" onClick={() => handleButton(0)}>
              Monthly
            </button>
          </div>
          <div
            className={`text-center p-2 px-3 text-[#cdd3dd] rounded-3xl ${
              selectedButton === 1 ? "bg-[#428777] !text-[white]" : ""
            }`}>
            <button className="text-sm" onClick={() => handleButton(1)}>
              Weekly
            </button>
          </div>
          <div
            className={`text-center p-2 px-3 text-[#cdd3dd] rounded-3xl ${
              selectedButton === 2 ? "bg-[#428777] !text-[white]" : ""
            }`}>
            <button className="text-sm" onClick={() => handleButton(2)}>
              Today
            </button>
          </div>
        </div> */}
      </div>
      <div className="overflow-hidden overflow-x-auto">
        <table className="w-full min-w-max table-auto">
          <tr>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Client
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Date
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Email
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Amount
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Service Type
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Status
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Action
            </th>
          </tr>
          {paginatedData.map(({ img, client, date, email, amount, serviceType, status }, index) => {
            const isLast = index === tableRows.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-blue-gray-50 text-[#555461]";

            return (
              <tr key={index}>
                <td className={classes}>
                  <div className="flex items-center w-max gap-3">
                    <div className="flex flex-col">
                      <div className="font-normal text-sm  ">{client}</div>
                      <div className="text-[#b4c0d4] font-thin">{status}</div>
                    </div>
                  </div>
                </td>
                <td className={classes}>
                  <div className="font-normal text-sm w-max">{date}</div>
                </td>
                <td className={classes}>
                  <div className="font-normal text-sm">{email}</div>
                </td>
                <td className={classes}>
                  <div className="font-normal text-sm">{amount}</div>
                </td>

                <td className={classes}>
                  <div className="flex items-center gap-3">
                    <div className="text-sm text-[#b4c0d4] font-normal">{serviceType}</div>
                  </div>
                </td>
                <td className={classes}>
                  <div className="w-max">
                    <Chip
                      size="sm"
                      variant="outlined"
                      value={status}
                      className="font-thin"
                      color={status === "paid" ? "green" : status === "pending" ? "amber" : "red"}
                    />
                  </div>
                </td>
                <td className={`flex flex-row ${classes}`}>
                  <button
                    onClick={() => handleDelete()}
                    className="mr-3 bg-[#438677] text-white p-2 rounded-lg">
                    <IoMdCreate />
                  </button>
                  <button onClick={() => handleEdit()} className="bg-red-400 p-2 rounded-lg">
                    <IoMdTrash className="text-cyan-50" />
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          startIndex={startIndex}
          endIndex={endIndex}
          totalEntries={tableRows.length}
        />
      </div>
    </div>
  );
}

export default InvoiceTable;
