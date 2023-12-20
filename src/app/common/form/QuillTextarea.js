import React from "react";
import ReactQuill from "react-quill";
import { useField } from "formik";
import "react-quill/dist/quill.snow.css";

const QuillTextarea = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handleQuillChange = (content) => {
    helpers.setValue(content);
  };

  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium mb-1 text-[#4c4b59]">
        {label}
      </label>
      <ReactQuill
        theme="snow"
        value={field.value || ""}
        onChange={handleQuillChange}
        {...props}
        className={`mt-1 border rounded-md w-full ${
          meta.error && meta.touched ? "border-red-500" : "border-green-500"
        }`}
      />
      {meta.error && meta.touched && <p className="text-red-500 text-sm mt-[-1px]">{meta.error}</p>}
    </div>
  );
};

export default QuillTextarea;
