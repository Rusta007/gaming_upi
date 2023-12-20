import React, { useState } from "react";
import { Field, useField } from "formik";
import { BiShow, BiHide } from "react-icons/bi";

const Input = ({ type, id, name, placeholder, label }) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mx-11 my-2">
      <label htmlFor={name} className="block text-sm font-medium mb-1 text-[#4c4b59]">
        {label}
      </label>
      <div className="relative">
        <Field
          type={showPassword ? "text" : type}
          id={id}
          name={name}
          className={`mt-1 p-2 border rounded-md w-full  ${
            meta.touched && meta.error ? "border-red-500" : "border-[#428777]"
          } text-${field.value ? "black" : "#bdbdbd"}`}
          placeholder={placeholder}
          // style={{
          //   color: field.value ? "black" : "#bdbdbd"
          // }}
          {...field}
        />
        {type === "password" && (
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
            onClick={togglePasswordVisibility}>
            {showPassword ? <BiShow /> : <BiHide />}
          </div>
        )}
      </div>
      {meta.touched && meta.error && <div className="text-red-500 text-sm mt-1">{meta.error}</div>}
    </div>
  );
};

export default Input;
