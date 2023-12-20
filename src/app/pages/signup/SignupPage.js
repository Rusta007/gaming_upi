import React from "react";
import AuthenticationPage from "../../common/component/AuthenticationContainer";
import SignupForm from "./SignupForm";
function SignupPage() {
  return (
    <AuthenticationPage>
      <SignupForm />
    </AuthenticationPage>
  );
}

export default SignupPage;
