// import React from "react";
// import { Formik, Form } from "formik";
// // import { signupRequest } from "../../redux/action/persistActions";
// // import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Input from "../../common/form/Input";
// import MobileField from "../../common/form/MobileField";
// function SignupForm() {
//   //   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   };

//   const addValue = (values) => {
//     // Perform signup logic
//     // dispatch(signupRequest(values));
//     alert("account created");
//     console.log(values);
//     navigate("/login"); // Redirect to login page after signup
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={(values) => addValue(values)}
//       enableReinitialize>
//       {({ errors, touched, setFieldValue, values }) => (
//         <Form className="w-full max-w-md shadow-xl py-10 px-5 bg-white rounded border">
//           <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
//           <div className="mx-[-44px] ">
//             <div className="flex gap-2">
//               <div className="mr-[-40px]">
//                 <Input
//                   name="firstName"
//                   id="firstName"
//                   type="text"
//                   placeholder="Enter your first name"
//                   label="First Name"
//                 />
//               </div>
//               <div className="ml-[-40px]">
//                 <Input
//                   name="lastName"
//                   id="lastName"
//                   type="text"
//                   placeholder="Enter your last name"
//                   label="Last Name"
//                 />
//               </div>
//             </div>
//             <Input
//               name="email"
//               id="email"
//               type="email"
//               placeholder="Enter your e-mail"
//               label="E-mail"
//             />
//             <MobileField />
//             <Input
//               name="password"
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               label="Password"
//             />
//             <Input
//               name="confirmPassword"
//               id="confirmPassword"
//               type="password"
//               placeholder="Confirm your password"
//               label="Confirm Password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-[#428777] text-white px-10 py-2 mt-2 rounded-md focus:outline-none focus:shadow-outline-blue">
//             Sign Up
//           </button>

//           <a
//             className="inline-block align-baseline ml-2 font-bold text-sm text-blue-500"
//             href="/login">
//             Already have an account? Log In
//           </a>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default SignupForm;
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Input from "../../common/form/Input";
import MobileField from "../../common/form/MobileField";
import { signupValidationSchema } from "../../utils/ValidationSchema";
import { persistSignupData } from "../../redux/action/persistActions";
const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [acceptTerms, setAcceptTerms] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    countryCode: { code: "IN", flag: "🇮🇳", name: "India", value: "+91" }
  };

  const addValue = (values) => {
    const { countryCode, ...valuesWithoutCountryCode } = values;
    const fullMobileNumber = `${countryCode.value} ${values.mobileNumber}`;
    console.log({ ...valuesWithoutCountryCode, mobileNumber: fullMobileNumber });
    // Perform signup logic
    // window.localStorage.setItem(
    //   "signupFormData",
    //   JSON.stringify({ ...valuesWithoutCountryCode, mobileNumber: fullMobileNumber })
    // );

    dispatch(persistSignupData({ ...valuesWithoutCountryCode, mobileNumber: fullMobileNumber }));

    navigate("/signupotppage"); // Redirect to login page after signup
  };

  return (
    <div className="flex justify-center items-center ">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => addValue(values)}
        validationSchema={signupValidationSchema}
        enableReinitialize>
        {({ errors, touched, setFieldValue, values }) => (
          <Form className="w-full max-w-md shadow-xl px-5 bg-white rounded border">
            <h2 className="text-2xl font-semibold my-4">Sign Up</h2>
            <div className="mx-[-44px] ">
              <div className="flex gap-2">
                <div className="mr-[-40px]">
                  <Input
                    name="firstName"
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    label="First Name"
                  />
                </div>
                <div className="ml-[-40px]">
                  <Input
                    name="lastName"
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    label="Last Name"
                  />
                </div>
              </div>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="Enter your e-mail"
                label="E-mail"
              />
              <MobileField
                name="mobileNumber"
                label="Mobile Number"
                countryCodeValue={values.countryCode}
                setFieldValue={setFieldValue}
              />
              <Input
                name="password"
                id="password"
                type="password"
                placeholder="Enter your password"
                label="Password"
              />
              <Input
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                label="Confirm Password"
              />
            </div>
            <div className="flex items-center my-2">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
                className="mr-2"
              />
              <label htmlFor="acceptTerms" className="text-sm">
                I accept the Terms and Conditions
              </label>
            </div>
            <button
              type="submit"
              disabled={!acceptTerms}
              className={`${
                acceptTerms
                  ? "bg-[#428777] w-full text-white px-8 py-2 mt-2 rounded-md focus:outline-none focus:shadow-outline-blue"
                  : "bg-gray-300 w-full text-gray-500 cursor-not-allowed px-8 py-2 mt-2 rounded-md focus:outline-none focus:shadow-outline-blue"
              } flex items-center justify-center`}>
              Sign Up
            </button>
            {/* className="bg-[#428777] text-white px-10 py-2 mt-2 rounded-md focus:outline-none focus:shadow-outline-blue" */}
            <p className="my-4 text-sm">
              {" Already have an account? "}
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
    </div>
  );
};

export default SignupPage;
