import { useField } from "formik";
import React from "react";
import Select from "react-select";

function SearchDropDown({ id, name, options, placeholder, label, onChange }) {
  const [field, meta, helpers] = useField(name);

  const isFieldError = meta.touched && meta.error && !field.value;

  const customStyles = {
    placeholder: (styles) => ({
      ...styles,
      color: "#bdbdbd"
    }),
    control: (provided, state) => ({
      ...provided,
      minHeight: "42px"
    })
  };

  return (
    <div className="mx-11 my-2 ">
      <div className="mb-1">
        <label htmlFor={id} className="block text-sm font-medium mb-2 text-[#4c4b59]">
          {label}:
        </label>
      </div>
      <Select
        className={`border rounded-md text-black ${
          isFieldError ? "border-red-500" : "border-gray-300"
        }`}
        options={options}
        name={name}
        placeholder={placeholder}
        styles={customStyles}
        onChange={(selectedOption) => {
          helpers.setValue(selectedOption.value);
          onChange && onChange(selectedOption);
        }}
      />

      {isFieldError && <div className="text-red-500 text-sm mt-1">{meta.error}</div>}
    </div>
  );
}

export default SearchDropDown;
