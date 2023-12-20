import React from "react";
import ChangePasswordForm from "./ChangePasswordForm";
import { changePasswordValidationSchema } from "../../utils/ValidationSchema";
import ProfileContainer from "../../common/component/ProfileContainer";

function ChangePasswordPage() {
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  };

  const handleChangePassword = (values) => {
    console.log(values);
  };
  return (
    <ProfileContainer
      handleSubmit={handleChangePassword}
      initialValues={initialValues}
      submitButtonName="Change Password"
      validationSchema={changePasswordValidationSchema}
      selectedTab="/changepassword">
      <ChangePasswordForm />
    </ProfileContainer>
  );
}

export default ChangePasswordPage;
