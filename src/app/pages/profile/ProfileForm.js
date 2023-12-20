import React from "react";
import Input from "../../common/form/Input";

function ProfileForm() {
  return (
    <>
      {/* Form Fields */}
      <Input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="Enter First Name"
        label="First Name"
        className="mb-4"
      />
      <Input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Enter Last Name"
        label="Last Name"
        className="mb-4"
      />
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Enter email"
        label="Email"
        className="mb-4"
      />
      <Input
        type="text"
        id="mobileNumber"
        name="mobileNumber"
        placeholder="Enter Mobile Number"
        label="Mobile Number"
        className="mb-4"
      />

      {/* Submit Button */}
    </>
  );
}

export default ProfileForm;
