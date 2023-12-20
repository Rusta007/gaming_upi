import React from "react";
import Input from "../../common/form/Input";
function ChangePasswordForm() {
  return (
    <>
      <Input
        name="oldPassword"
        id="oldPassword"
        placeholder="Enter your old password"
        label="Old Password"
        type="password"
      />
      <Input
        name="newPassword"
        id="newPassword"
        placeholder="Enter your new password"
        label="New Password"
        type="password"
      />
      <Input
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirm your new password"
        label="Confirm Password"
        type="password"
      />
    </>
  );
}

export default ChangePasswordForm;
