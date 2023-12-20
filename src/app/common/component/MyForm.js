import React from "react";
import Input from "../form/Input";

function MyForm() {
  return (
    <>
      <div>
        <Input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter your full name"
          label="Full Name"
        />
      </div>
    </>
  );
}

export default MyForm;
