import React, { useEffect, useState } from "react";
import Bankjson from "../../utils/BankCard.json";
import BankCommon from "./BankCommon";
import { Button } from "@material-tailwind/react";
import { bankSchema } from "../../utils/ValidationSchema";
import DialogComponent from "../../common/component/DialogComponent";
import BankForm from "./BankForm";

function BankCard() {
  const [bankData, setBankData] = useState([]);
  const [popup, setPopup] = useState(false);
  const [selected, setSelected] = useState("");

  const initialValue = {
    bankName: "",
    upiID: "",
    userName: selected,
    status: "",
    currentDate: ""
  };

  const handleChange = (selectedOption) => {
    console.log(selectedOption);

    const { value } = selectedOption;
    // console.log(value,);
    setSelected(value);
  };

  const handleSubmit = (values, { resetForm }) => {
    const currentDate = new Date().toISOString().split("T")[0];
    const updatedValues = { ...values, currentDate };
    console.log("Form values:", updatedValues);
    try {
      handleClosePopup();
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      handleClosePopup();
      resetForm();
    }
  };

  console.warn(popup, setPopup);

  const handleCreate = () => {
    setPopup(true);
  };

  const handleClosePopup = () => {
    setPopup(false);
  };

  useEffect(() => {
    setBankData(Bankjson);
  }, []);

  return (
    <>
      <div className="flex justify-between gap-8 md:items-baseline px-4 py-2 pb-6">
        <h1 className="text-lg font-body black">Bank List</h1>
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

      <DialogComponent
        showPopup={popup}
        onClose={handleClosePopup}
        title="Bank Form"
        initialValue={initialValue}
        buttonName="Save"
        handleAction={handleSubmit}
        validation={bankSchema}>
        <BankForm onChange={handleChange} />
      </DialogComponent>

      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-4">
        {bankData.map((bank, index) => (
          <div key={index}>
            <BankCommon
              name={bank.name}
              sname={bank.sname}
              phoneNumber={bank.phoneNumber}
              email={bank.email}
              dueDate={bank.dueDate}
              icon={bank.icon}
              status={bank.status}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default BankCard;
