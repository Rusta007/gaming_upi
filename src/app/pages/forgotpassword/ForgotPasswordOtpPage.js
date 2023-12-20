import React from "react";
import AuthenticationPage from "../../common/component/AuthenticationContainer";
import OtpForm from "../otp/OtpForm";

function ForgotPasswordOtpPage() {
  return (
    <AuthenticationPage>
      <OtpForm to="/resetpassword" />
    </AuthenticationPage>
  );
}

export default ForgotPasswordOtpPage;
