import React from "react";
// import { IoMdCreate, IoMdTrash } from "react-icons/io";
// import { Chip } from "@material-tailwind/react";
import reportTableData from "../../utils/reportTable.json";
// import invoiceTableData from "../../utils/invoiceTable.json";
import { useEffect, useState } from "react";
import DialogComponent from "../../common/component/DialogComponent";
import Pagination from "../../common/component/Pagination";
import ReportForm from "./ReportForm";
import { reportValidationSchema } from "../../utils/ValidationSchema";

function ReportTable() {
  const itemsPerPage = 10;
  const [tableRows, setTableRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [popup, setPopup] = useState(false);
  const initialValue = {
    reportname: "",
    reporttype: "",
    status: "",
    amount: "",
    user: "",
    startdate: "",
    enddate: ""
  };
  console.log(currentPage);
  // const [selectedButton, setSelectedButton] = useState(0);

  // const handleEdit = (id) => {
  //     console.log(id);
  // };

  // const handleDelete = (id) => {
  //     console.log(id);
  // };

  useEffect(() => {
    setTableRows(reportTableData);
  }, []);

  const totalPages = Math.ceil(tableRows.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = tableRows.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    console.log(newPage);
    setCurrentPage(newPage);
  };
  const handleCreate = () => {
    setPopup(true);
  };
  const handleClosePopup = () => {
    setPopup(false);
  };

  const handleSubmit = (values, { resetForm }) => {
    try {
      console.log("Form values:", values);
      handleClosePopup();
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      handleClosePopup();
      resetForm();
    }
  };

  //   const handleClosePopup = () => {
  //     setPopup(false);
  //   };
  // const handleButton = (index) => {
  //   // console.log("Button clicked!", index);
  //   setSelectedButton(index);
  // };

  return (
    <div>
      <div className="flex justify-between gap-8 md:items-baseline px-4 py-2 pb-6">
        <h1 className="text-lg font-body black">Reports</h1>
        <div>
          <div className="flex gap-4">
            <button
              className="bg-gradient-to-tr from-[#428777] to-[#428777]  text-white font-bold py-2 px-4 rounded-2xl"
              onClick={handleCreate}>
              Generate
            </button>
          </div>
        </div>
      </div>
      <DialogComponent
        showPopup={popup}
        onClose={handleClosePopup}
        title="Generate Report"
        initialValue={initialValue}
        buttonName="Generate"
        handleAction={handleSubmit}
        validation={reportValidationSchema}>
        <ReportForm />
      </DialogComponent>

      <div className="overflow-hidden overflow-x-auto">
        <table className="w-full min-w-max table-auto">
          <tr>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              #
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Platform
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Order ID
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Receipt ID
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Customer Name
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Amount
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Payment Status
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              UTR
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Type
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Payment Type
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Assigned To
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Assigned UPI
            </th>
            <th className="border-b border-blue-gray-100 p-4 text-sm text-left text-[#acb9cf] font-thin">
              Approverd By
            </th>
          </tr>
          {paginatedData.map(
            (
              {
                sr,
                platform,
                orderid,
                receiptid,
                customername,
                amount,
                paymentstatus,
                utr,
                type,
                paymenttype,
                assignedto,
                assignedupi,
                approvedby
              },
              index
            ) => {
              const isLast = index === tableRows.length - 1;
              const classes = isLast
                ? "p-4 text-[#555461]"
                : "p-4 border-blue-gray-50 text-[#555461]";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <div className="font-normal text-sm w-max">{sr}</div>
                  </td>
                  <td className={classes}>
                    <div className="font-normal text-sm">{platform}</div>
                  </td>
                  <td className={classes}>
                    <div className="font-normal text-sm">{orderid}</div>
                  </td>
                  <td className={classes}>
                    <div className="font-normal text-sm">{receiptid}</div>
                  </td>
                  <td className={classes}>
                    <div className="font-normal text-sm">{customername}</div>
                  </td>
                  <td className={classes}>
                    <div className="font-normal text-sm">{amount}</div>
                  </td>
                  <td className={classes}>
                    <div className="font-normal text-sm">{paymentstatus}</div>
                  </td>
                  <td className={classes}>
                    <div className="font-normal text-sm">{utr}</div>
                  </td>
                  <td className={classes}>
                    <div className="font-normal text-sm">{type}</div>
                  </td>
                  <td className={classes}>
                    <div className="font-normal text-sm">{paymenttype}</div>
                  </td>
                  <td className={classes}>
                    <div className="font-normal text-sm">{assignedto}</div>
                  </td>
                  <td className={classes}>
                    <div className="font-normal text-sm">{assignedupi}</div>
                  </td>
                  <td className={classes}>
                    <div className="font-normal text-sm">{approvedby}</div>
                  </td>
                </tr>
              );
            }
          )}
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

export default ReportTable;
