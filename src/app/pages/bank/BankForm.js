import React from "react";
import SelectInput from "../../common/form/SelectInput";
import Input from "../../common/form/Input";
import userCard from "../../utils/userCard.json";
import SearchDropDown from "../../common/form/SearchDropDown";

function BankForm({ onChange }) {
  const userOptions = userCard.map((user) => ({
    value: user.name,
    label: user.name
  }));

  const statusOptions = [
    {
      value: "active",
      label: "Active"
    },
    {
      value: "inactive",
      label: "Inactive"
    }
  ];

  return (
    <>
      <Input
        type="text"
        id="bankName"
        name="bankName"
        placeholder="Enter your bank name"
        label="Bank Name"
      />
      <Input type="text" id="upiID" name="upiID" placeholder="Enter your UPI id" label="UPI ID" />
      <SearchDropDown
        id="userName"
        name="userName"
        options={userOptions}
        placeholder="Select user name"
        label="User name"
        onChange={onChange}
      />
      <SelectInput
        id="status"
        name="status"
        options={statusOptions}
        placeholder="Select status"
        label="Status"
      />
    </>
  );
}

export default BankForm;
