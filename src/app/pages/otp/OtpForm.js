// import React from "react";
// import { Formik, Field, Form } from "formik";
// import { useNavigate } from "react-router-dom";
// import { otpValidationSchema } from "../../utils/ValidationSchema";

// function OtpForm({ to, handleSubmit }) {
//   const navigate = useNavigate();

//   const initialValues = {
//     otp: ["", "", "", "", "", ""]
//   };

//   const handleVerifyOtp = (values) => {
//     const otpValue = values.otp.join("");
//     console.log(otpValue);
//     navigate(to);
//     if (handleSubmit) {
//       handleSubmit();
//     }

//     // You can add any additional logic or navigation here, such as showing a success message
//   };

//   const handlePaste = (e, setFieldValue) => {
//     const pastedData = e.clipboardData.getData("Text");
//     const pastedDigits = pastedData.split("");

//     pastedDigits.forEach((char, idx) => {
//       if (idx < initialValues.otp.length) {
//         setFieldValue(`otp[${idx}]`, char);
//       }
//     });
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={(values) => handleVerifyOtp(values)}
//       validationSchema={otpValidationSchema}
//       enableReinitialize>
//       {({ setFieldValue, values, errors, touched }) => (
//         <Form className="w-full max-w-md shadow-xl py-10 px-5 bg-white rounded border">
//           <h2 className="text-2xl font-semibold mb-4">Verify OTP</h2>
//           <div
//             className="flex justify-center items-center"
//             onPaste={(e) => handlePaste(e, setFieldValue)}>
//             {values.otp.map((digit, index) => (
//               <Field
//                 key={index}
//                 name={`otp[${index}]`}
//                 type="text"
//                 inputMode="numeric"
//                 pattern="[0-9]{1}"
//                 maxLength="1"
//                 className="mt-1 mr-3 py-3 border rounded-md w-full text-center"
//                 onChange={(e) => {
//                   if (values?.otp[index] === "" || e.target.value === "") {
//                     setFieldValue(`otp[${index}]`, e.target.value);
//                   }
//                   if (e.target.value !== "" && index < values.otp.length - 1) {
//                     document.getElementsByName(`otp[${index + 1}]`)[0].focus();
//                   }
//                   if (e.target.value === "" && index > 0) {
//                     document.getElementsByName(`otp[${index - 1}]`)[0].focus();
//                   }
//                 }}
//               />
//             ))}
//           </div>
//           {touched?.otp && errors?.otp && (
//             <div className="text-red-500 text-sm mt-1">{errors?.otp}</div>
//           )}
//           <button
//             type="submit"
//             className="bg-[#428777] text-white px-10 py-2 my-3 rounded-md focus:outline-none focus:shadow-outline-blue">
//             Verify OTP
//           </button>

//           <p className="mt-4 text-sm">
//             {"Didn't receive the OTP?"}
//             <span className="text-blue-500 cursor-pointer">Resend OTP</span>
//           </p>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default OtpForm;
import React from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { otpValidationSchema } from "../../utils/ValidationSchema";
import OTPInput from "otp-input-react";

function OtpForm({ to, handleSubmit }) {
  const navigate = useNavigate();

  const initialValues = {
    otp: ""
  };

  const handleVerifyOtp = (values) => {
    // const otpValue = values.otp.join("");
    console.log(values.otp);
    navigate(to);
    if (handleSubmit) {
      handleSubmit();
    }

    // You can add any additional logic or navigation here, such as showing a success message
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleVerifyOtp(values)}
      validationSchema={otpValidationSchema}
      enableReinitialize>
      {({ setFieldValue, values, errors, touched }) => (
        <Form className="w-full max-w-md shadow-xl py-10 px-5 bg-white rounded border">
          <h2 className="text-2xl font-semibold mb-4">Verify OTP</h2>
          {/* <div
            className="flex justify-center items-center"
            onPaste={(e) => handlePaste(e, setFieldValue)}>
            {values.otp.map((digit, index) => (
              <Field
                key={index}
                name={`otp[${index}]`}
                type="text"
                inputMode="numeric"
                pattern="[0-9]{1}"
                maxLength="1"
                className="mt-1 mr-3 py-3 border rounded-md w-full text-center"
                onChange={(e) => {
                  if (values?.otp[index] === "" || e.target.value === "") {
                    setFieldValue(`otp[${index}]`, e.target.value);
                  }
                  if (e.target.value !== "" && index < values.otp.length - 1) {
                    document.getElementsByName(`otp[${index + 1}]`)[0].focus();
                  }
                  if (e.target.value === "" && index > 0) {
                    document.getElementsByName(`otp[${index - 1}]`)[0].focus();
                  }
                }}
              />
            ))}
          </div> */}
          <OTPInput
            value={values.otp}
            onChange={(otp) => setFieldValue("otp", otp)}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
            inputClassName="intro-x form-control block border border-gray-500"
            className="intro-x mt-8 flex-1 justify-between"
            inputStyles={{ width: 40, height: 40, marginRight: 5 }}
          />
          {touched?.otp && errors?.otp && (
            <div className="text-red-500 text-sm mt-1">{errors?.otp}</div>
          )}
          <button
            type="submit"
            className="bg-[#428777] text-white px-10 py-2 my-3 rounded-md focus:outline-none focus:shadow-outline-blue">
            Verify OTP
          </button>

          <p className="mt-4 text-sm">
            {"Didn't receive the OTP?"}
            <span className="text-blue-500 cursor-pointer">Resend OTP</span>
          </p>
        </Form>
      )}
    </Formik>
  );
}

export default OtpForm;
