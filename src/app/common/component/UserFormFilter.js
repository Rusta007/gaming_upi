import React from "react";
import Input from "../form/Input";
import SelectInput from "../form/SelectInput";

function UserFormFilter() {
  const statusOptions = [
    { value: "all", label: "All" },
    { value: "true", label: "Active" },
    { value: "false", label: "Inactive" }
  ];

  return (
    <>
      <Input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="Enter full name for filtering"
        label="Full Name"
      />
      <Input
        type="text"
        id="secretKey"
        name="secretKey"
        placeholder="Enter secret key for filtering"
        label="Secret Key"
      />
      <Input
        type="text"
        id="xKey"
        name="xKey"
        placeholder="Enter x key for filtering"
        label="X Key"
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

export default UserFormFilter;
