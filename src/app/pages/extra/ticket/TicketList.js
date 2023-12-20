import { Button } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ticketList from "../../../utils/ticketList.json";
import { IoEye } from "react-icons/io5";
import TicketForm from "./TicketForm";

function TicketList() {
  const navigate = useNavigate();

  const [showTableList, setShowTableList] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  console.warn(selectedIndex);

  useEffect(() => {
    setTableData(ticketList);
  }, []);

  const handleCreate = () => {
    setShowTableList(true);
    navigate("/extra/ticket/form");
  };

  const handleBack = () => {
    setShowTableList(false);
    setSelectedIndex(null);
  };

  const handleEyeClick = (index) => {
    const selectedData = tableData[index];
    setSelectedIndex(index);
    navigate(`/chatbot/${index}`, { state: { data: selectedData } });
  };

  return (
    <>
      {showTableList ? (
        <TicketForm onClose={handleBack} />
      ) : (
        <>
          <div className="flex justify-between gap-8 md:items-baseline px-4 py-2 pb-6">
            <h1 className="text-lg font-body black">Ticket List</h1>
            <div>
              <div className="flex gap-4">
                <Button variant="outlined" className="px-5 py-2 rounded-2xl">
                  Filter
                </Button>
                <button
                  onClick={handleCreate}
                  className="bg-gradient-to-tr from-[#428777] to-[#428777]  text-white font-bold py-2 px-4 rounded-2xl">
                  Create
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <>
              {tableData.map((data, index) => (
                <div key={index} className="relative border rounded-lg p-6 bg-[#e6eaf0]">
                  <div className="flex">
                    <div
                      onClick={() => handleEyeClick(index)}
                      className="absolute right-4 top-[13px] rounded-xl hover:bg-gray-900/10 p-2 cursor-pointer">
                      <div className="cursor-pointer text-gray-600 hover:text-gray-800">
                        {/* <Link to={`/chatbot/${index}`}> */}
                        <IoEye />
                        {/* </Link> */}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-3">
                        <div className="font-bold text-[14px]">{data.title}</div>
                      </div>
                      <div className="flex gap-3 md:pr-[64px]">
                        <div>
                          {data.imagesLink &&
                            Object.entries(data.imagesLink).map(([key, value], index) => (
                              <div key={index}>
                                <a
                                  href={value}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-black hover:text-gray-600">
                                  {value.length > 100 ? `${value.substring(0, 50)}...` : value}
                                </a>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          </div>
        </>
      )}
    </>
  );
}

export default TicketList;
