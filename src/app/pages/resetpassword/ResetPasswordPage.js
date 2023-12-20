import React from "react";
import AuthenticationPage from "../../common/component/AuthenticationContainer";
import ResetPasswordForm from "./ResetPasswordForm";

function ResetPasswordPage() {
  return (
    <AuthenticationPage>
      <ResetPasswordForm />
    </AuthenticationPage>
  );
}

export default ResetPasswordPage;
