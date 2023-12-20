import React from "react";
import ProfileContainer from "../../common/component/ProfileContainer";
import { otpValidationSchema } from "../../utils/ValidationSchema";
import OTPField from "../../common/form/OTPField";
import { useNavigate } from "react-router";
function ProfileOtpPage() {
  const navigate = useNavigate();
  const initialValues = { otp: "" };
  const handleSubmit = () => {
    navigate("/profilepage");
  };
  return (
    <ProfileContainer
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      submitButtonName="Submit OTP"
      validationSchema={otpValidationSchema}>
      <OTPField id="otp" name="otp" />
    </ProfileContainer>
  );
}

export default ProfileOtpPage;
