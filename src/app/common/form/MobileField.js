// import React from "react";
// import Select from "react-select";
// import { useField } from "formik";
// import Input from "./Input";

// const CountryCodeSelect = ({ name, label, options, ...props }) => {
//   const [field] = useField(name);

//   return (
//     <div className="mb-4">
//       <label htmlFor={name} className="block text-sm font-medium mb-1 text-[#4c4b59]">
//         {label}
//       </label>
//       <Select
//         id={name}
//         name={name}
//         options={options}
//         className="mb-2"
//         {...field}
//         {...props}
//       />
//     </div>
//   );
// };

// const MobileField = ({ countryCodeOptions, ...props }) => {
//   return (
//     <div className="flex">
//       <CountryCodeSelect
//         name="countryCode"
//         label="Country Code"
//         options={countryCodeOptions}
//         placeholder="Select Country Code"
//       />
//       <div className="flex-grow ml-2">
//         <Input type="tel" name="phoneNumber" label="Phone Number" placeholder="Enter your phone number" {...props} />
//       </div>
//     </div>
//   );
// };

// export default MobileField;
// import React from "react";
// import Select from "react-select";
// import { useField } from "formik";
// import Input from "./Input";

// const CountryCodeSelect = ({ name, label, options, ...props }) => {
//   const [field] = useField(name);

//   return (
//     <div className="mb-4">
//       <label htmlFor={name} className="block text-sm font-medium mb-1 text-[#4c4b59]">
//         {label}
//       </label>
//       <Select id={name} name={name} options={options} className="mb-2" {...field} {...props} />
//     </div>
//   );
// };

// const MobileField = ({ ...props }) => {
//   // Default list of country codes
//   const countryCodeOptions = [
//     { value: "+1", label: "+1 (United States)" },
//     { value: "+44", label: "+44 (United Kingdom)" },
//     { value: "+91", label: "+91 (India)" }
//     // Add more country codes as needed
//   ];

//   return (
//     <div className="flex">
//       <CountryCodeSelect
//         name="countryCode"
//         label="Country Code"
//         options={countryCodeOptions}
//         placeholder=""
//       />
//       <div className="flex-grow ml-2">
//         <Input
//           type="tel"
//           name="phoneNumber"
//           label="Phone Number"
//           placeholder="Enter your phone number"
//           {...props}
//         />
//       </div>
//     </div>
//   );
// };

// export default MobileField;
// import React, { useState, useEffect } from "react";
// import { useField } from "formik";

// const MobileField = () => {
//   const [field, meta] = useField("mobileNumber");
//   const [countryCodes, setCountryCodes] = useState([]);

//   useEffect(() => {
//     // Fetch the list of countries and dialing codes
//     fetch("https://restcountries.com/v2/all")
//       .then((response) => response.json())
//       .then((data) => {
//         const codes = data.map((country) => ({
//           value: `+${country.callingCodes[0]}`,
//           label: `+${country.callingCodes[0]} (${country.name})`
//         }));
//         setCountryCodes(codes);
//       })
//       .catch((error) => console.error("Error fetching country codes:", error));
//   }, []);

//   return (
//     <div className="mb-4">
//       <label htmlFor="mobileNumber" className="block text-sm font-medium mb-1 text-[#4c4b59]">
//         Mobile Number
//       </label>
//       <div className="flex">
//         <select
//           name="countryCode"
//           id="countryCode"
//           className="p-2 border rounded-md w-1/4"
//           onChange={(e) =>
//             field.onChange({ target: { name: "countryCode", value: e.target.value } })
//           }>
//           {countryCodes.map((code) => (
//             <option key={code.value} value={code.value}>
//               {code.label}
//             </option>
//           ))}
//         </select>
//         <input
//           type="tel"
//           id="mobileNumber"
//           name="mobileNumber"
//           placeholder="Enter your mobile number"
//           value={field.value}
//           onChange={(e) => field.onChange(e)}
//           className={`ml-2 p-2 border rounded-md w-3/4 ${
//             meta.touched && meta.error ? "border-red-500" : "border-[#ced4da]"
//           }`}
//         />
//       </div>
//       {meta.touched && meta.error && <div className="text-red-500 text-sm mt-1">{meta.error}</div>}
//     </div>
//   );
// };

// export default MobileField;

// MobileField.jsx
import React from "react";
import { Field, useField } from "formik";
import Select from "react-select";
import { countryCodes } from "../../utils/countryCodes";
import { decode } from "html-entities";

const MobileField = ({
  label,
  extraLabel,
  isRequiredField,
  labelRightContent,
  countryCodeValue,
  ...props
}) => {
  const [field, meta] = useField(props.name);

  return (
    <div className="mx-11 my-2">
      {label && (
        <div className="form-label flex justify-between">
          <label className="block text-sm font-medium mb-1 text-[#4c4b59]">
            {label} {extraLabel} {isRequiredField && <span className="text-danger">*</span>}
          </label>
          {labelRightContent}
        </div>
      )}
      <div className="relative ">
        <div
          className="absolute inset-y-2 left-0 flex items-center z-[9999] rounded-lg"
          style={{ width: 100 }}>
          <label htmlFor="countryCode" className="sr-only">
            Code
          </label>
          <Select
            menuPortalTarget={document.body}
            isDisabled={props.readOnly}
            value={countryCodeValue}
            styles={{
              input: (styles) => ({
                ...styles,
                border: "none",
                width: "40px",
                marginLeft: "0px",
                marginRight: "0px",
                margin: "0px"
              }),
              control: (styles) => ({
                ...styles,
                border: "none",
                padding: "0px",
                margin: "0px",
                marginLeft: "1px",
                marginRight: "0px",
                fontSize: "14px",
                boxShadow: "none",
                color: "#384252",
                backgroundColor: "transparent",
                borderRadius: 15
              }),
              singleValue: (styles) => ({
                ...styles,
                color: "#384252"
              }),
              indicatorSeparator: () => null,
              menu: (styles) => ({
                ...styles,
                width: "80px",
                backgroundColor: "white",
                maxHeight: "250px",
                overflowY: "hidden"
              }),
              menuPortal: (base) => ({ ...base, zIndex: 999 }),
              dropdownIndicator: () => null
            }}
            options={countryCodes}
            onChange={(e) => {
              props.setFieldValue("countryCode", e);
            }}
            getOptionLabel={(e) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginLeft: 5 }}>
                  <span>{decode(e.symbol)}</span> {e.value}
                </span>
              </div>
            )}
          />
        </div>
        <Field name={props.name}>
          {() => (
            <>
              <input
                maxLength="12"
                type="number"
                style={{ paddingLeft: 108 }}
                className={`intro-x w-full border rounded-md login__input form-control py-2 px-3 block ${
                  meta.touched && meta.error ? "border-red-500" : "border-[#428777]"
                }`}
                placeholder={props.placeholder ? props.placeholder : "123 456 789"}
                readOnly={props.readOnly}
                {...props}
                {...field}
                onPaste={(e) => {
                  if (props?.type === "number") {
                    const str = e.clipboardData.getData("Text");
                    const re = /^[0-9]*[.]?[0-9]*$/;
                    if (!re.test(str)) {
                      e.preventDefault();
                    }
                  }
                }}
              />
            </>
          )}
        </Field>
      </div>
      {meta.touched && meta.error && <p className="text-red-500 mt-2 ml-1">{meta.error}</p>}
    </div>
  );
};

export default MobileField;
