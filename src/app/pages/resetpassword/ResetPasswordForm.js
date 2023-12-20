import React from "react";
import { Formik, Form } from "formik";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../common/form/Input";
// import { resetPasswordRequest } from "../../redux/action/authActions";
function ResetPasswordForm() {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    newPassword: "",
    confirmPassword: ""
  };

  const handleResetPassword = (values) => {
    // dispatch(resetPasswordRequest(values));
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleResetPassword(values)}
      enableReinitialize>
      {({ errors, touched, setFieldValue, values }) => (
        <Form className="w-full max-w-md shadow-xl py-10 px-5 bg-white rounded border">
          <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
          <div className="mx-[-44px]">
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
          </div>

          <button
            type="submit"
            className="bg-[#428777] text-white px-10 py-2 my-3 rounded-md focus:outline-none focus:shadow-outline-blue">
            Reset Password
          </button>
          <p className="mt-4 text-sm">
            Remember your password?{" "}
            <button
              className="text-blue-500"
              onClick={() => {
                navigate("/login");
              }}>
              Log In
            </button>
          </p>
        </Form>
      )}
    </Formik>
  );
}

export default ResetPasswordForm;
