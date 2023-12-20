import React, { useEffect } from "react";
import { useField } from "formik";

function SelectInput({ label, id, name, placeholder, options, hidden, changeHandle }) {
  const [field, meta, helpers] = useField(name);

  useEffect(() => {
    const selectElement = document.getElementById(id);
    if (selectElement) {
      selectElement.style.color = field.value ? "black" : "#bdbdbd";
    }
  }, [field.value, id]);

  return (
    <div className="mx-11 my-2">
      <div className="mb-1">
        <label htmlFor={id} className="block text-sm font-medium mb-1 text-[#4c4b59]">
          {label}:
        </label>
        <select
          id={id}
          name={name}
          className={`border p-[11px] w-[100%] rounded border-[gray] text-[#bdbdbd] ${
            meta.touched && meta.error ? "border-red-500" : "border-[#428777]"
          }`}
          onChange={(e) => {
            helpers.setValue(e.target.value);
            changeHandle && changeHandle(e.target.value);
          }}
          value={field.value}>
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-black"
              hidden={hidden && hidden.includes(option.value)}>
              {option.label}
            </option>
          ))}
        </select>
        {meta.touched && meta.error && (
          <div className="text-red-500 text-sm mt-1">{meta.error}</div>
        )}
      </div>
    </div>
  );
}

export default SelectInput;
