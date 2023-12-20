import React from "react";
import { Formik, Form } from "formik";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../common/form/Input";
import { forgotPasswordValidationSchema } from "../../utils/ValidationSchema";
// import { forgotPasswordRequest } from "../../redux/action/authActions";
function ForgotPasswordForm() {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: ""
  };

  const handleForgotPassword = (values) => {
    // Dispatch the action to handle the forgot password logic
    // dispatch(forgotPasswordRequest(values));
    console.log(values);
    navigate("/forgotpasswordotppage");

    // You can add any additional logic or navigation here, such as showing a success message
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleForgotPassword(values)}
      validationSchema={forgotPasswordValidationSchema}
      enableReinitialize>
      {({ errors, touched, setFieldValue, values }) => (
        <Form className="w-full max-w-md shadow-xl py-10 px-5 bg-white rounded border">
          <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
          <div className="mx-[-44px]">
            <Input
              name="email"
              id="email"
              placeholder="Enter your e-mail"
              label="E-mail"
              type="email"
            />
          </div>

          <button
            type="submit"
            className="bg-[#428777] text-white px-10 py-2 my-3 rounded-md focus:outline-none focus:shadow-outline-blue">
            Get Otp
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

export default ForgotPasswordForm;
