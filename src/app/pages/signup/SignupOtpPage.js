import React from "react";
import AuthenticationPage from "../../common/component/AuthenticationContainer";
import OtpForm from "../otp/OtpForm";
import { useSelector } from "react-redux";
function SignupOtpPage() {
  const signupData = useSelector((state) => state?.persist?.signupData);
  function handleSubmit() {
    console.log(signupData);
  }
  return (
    <AuthenticationPage>
      <OtpForm to="/login" handleSubmit={handleSubmit} />
    </AuthenticationPage>
  );
}

export default SignupOtpPage;
