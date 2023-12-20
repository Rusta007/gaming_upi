import React from "react";
import { Formik, Form } from "formik";
import { loginRequest } from "../../redux/action/persistActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../common/form/Input";
import { loginValidationSchema } from "../../utils/ValidationSchema";
function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: ""
  };

  const addValue = (values) => {
    // Perform login logic
    dispatch(loginRequest(values));
    navigate("/");
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => addValue(values)}
      validationSchema={loginValidationSchema}
      enableReinitialize>
      {({ errors, touched, setFieldValue, values }) => (
        <Form className="w-full max-w-md shadow-xl py-10 px-5 bg-white rounded border">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Gaming UPI</h2>
          <div className="mx-[-44px]">
            <Input
              name="email"
              id="email"
              placeholder="Enter your e-mail"
              label="E-mail"
              type="email"
            />
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              label="Password"
            />
          </div>

          <button
            type="submit"
            className="bg-[#428777] text-white px-10 py-2 my-3 rounded-md focus:outline-none focus:shadow-outline-blue w-full">
            Log In
          </button>
          <button
            className="inline-block align-baseline ml-2 text-sm text-blue-500"
            onClick={() => {
              navigate("/forgotpassword");
            }}>
            Forgot Password?
          </button>

          <p className="mt-4 ml-2 text-sm">
            {"Don't have an account? "}
            <button
              className="text-blue-500"
              onClick={() => {
                navigate("/signup");
              }}>
              Sign Up
            </button>
          </p>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
