import React from "react";
import { useField } from "formik";

const Textarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium mb-1 text-[#4c4b59]">
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        rows="5"
        className={`mt-1 p-2 border rounded-md w-full ${
          meta.error && meta.touched ? "border-red-500" : "border-green-500"
        }`}
      />
      {meta.error && meta.touched && <p className="text-red-500 text-sm mt-[-1px]">{meta.error}</p>}
    </div>
  );
};

export default Textarea;
