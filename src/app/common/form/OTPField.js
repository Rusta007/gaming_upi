import React from "react";
import { useField } from "formik";
import OTPInput from "otp-input-react";

function OTPField({ name, id }) {
  const [field, meta, helpers] = useField(name);

  const handleChange = (otp) => {
    helpers.setValue(otp); // Use setValue from helpers to update the field value
  };

  return (
    <>
      <OTPInput
        value={field.value} // Use field.value to get the current value
        onChange={handleChange}
        autoFocus
        OTPLength={6}
        otpType="number"
        disabled={false}
        inputClassName="intro-x form-control block border border-gray-500"
        className="intro-x mt-8 flex-1 justify-center lg:justify-between mx-11"
        inputStyles={{ width: 40, height: 40, marginRight: 5 }}
      />
      {meta.touched && meta.error && <div className="text-red-500 text-sm mt-1">{meta.error}</div>}
    </>
  );
}

export default OTPField;
