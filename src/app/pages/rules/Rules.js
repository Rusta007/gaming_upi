import React, { useEffect, useState } from "react";
import SelectInput from "../../common/form/SelectInput";
import Input from "../../common/form/Input";
import SearchDropDown from "../../common/form/SearchDropDown";
import { Formik, Form } from "formik";
import { ruleValidationSchema } from "../../utils/ValidationSchema";
import { IoAddCircle } from "react-icons/io5";
import { IoMdTrash } from "react-icons/io";
import userCard from "../../utils/userCard.json";

const initialValuesObj = {
  upiId: "",
  userName: "",
  ruleName: "",
  rules: [{ type: "", condition: "", amount: "" }]
};

const Rules = () => {
  const [initialValues, setInitialValues] = useState(initialValuesObj);
  const [userOptions, setUserOptions] = useState([{ label: "123", value: "124" }]);
  const [selectedConditions, setSelectedConditions] = useState([]);

  useEffect(() => {
    const dropdownValue = userCard?.map((user) => ({
      value: user.name,
      label: user.name
    }));
    setUserOptions(dropdownValue || []);
  }, []);

  const onAddNewRule = (value) => {
    // const newCondition = value.rules[value.rules.length - 1]?.condition;
    // setSelectedConditions((prevConditions) => [...prevConditions, newCondition]);

    value.id = new Date();
    const customValue = [...value.rules];
    customValue.push({ type: "", condition: "", amount: "" });
    setInitialValues({
      userName: value?.userName,
      ruleName: value?.ruleName,
      upiId: value?.upiId,
      rules: customValue
    });
  };

  const submitRule = (values) => {
    console.log(values);
  };

  const ruleOptions = [{ value: "amount", label: "Amount" }];

  const conditionOptions = [
    { value: "<", label: "<" },
    { value: "<=", label: "<=" },
    { value: "=", label: "=" },
    { value: ">", label: ">" },
    { value: ">=", label: ">=" }
  ];

  const deleteRule = (index, values) => {
    const deleteRules = [...values.rules];
    const deletedCondition = deleteRules[index]?.condition;
    setSelectedConditions((prevConditions) =>
      prevConditions.filter((condition) => condition !== deletedCondition)
    );
    deleteRules.splice(index, 1);
    setInitialValues({
      userName: values?.userName,
      ruleName: values?.ruleName,
      upiId: values?.upiId,
      rules: deleteRules
    });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-2 md:items-baseline px-4 py-2 pb-6">
        <h1 className="text-lg font-body black">Create Rule</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={ruleValidationSchema}
        onSubmit={(values) => submitRule(values)}
        enableReinitialize>
        {({ errors, touched, setFieldValue, values }) => (
          <Form>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <Input
                  type="text"
                  id="ruleName"
                  name="ruleName"
                  placeholder="Rule Name"
                  label="Rule Name"
                />
              </div>
              <div className="w-full md:w-1/2">
                <SearchDropDown
                  id="userName"
                  name="userName"
                  options={userOptions}
                  placeholder="Select user name"
                  label="User name"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:mt-4">
              <Input
                type="text"
                id="upiId"
                name="upiId"
                placeholder="Enter your Upi ID"
                label="UPI ID"
              />
            </div>

            <div className="flex flex-row justify-between gap-7 lg:gap-1 md:items-baseline px-4 py-2 ">
              <h1 className="px-5 py-2">Rules Details</h1>
              <div className="flex gap-4">
                <button
                  className="px-5 py-2 rounded-2xl"
                  onClick={() => {
                    onAddNewRule(values);
                  }}>
                  <IoAddCircle className="w-[30px] h-[30px] text-[#428777] " />
                </button>
              </div>
            </div>
            {values?.rules.map((dropdown, index) => (
              <div
                key={dropdown?.id}
                className="flex flex-col border-t border-gray-500 md:border-hidden md:flex-row md:my-5">
                {/* {values.rules.length === 1 ? (
                 ""
               ) : (
                 <div className="relative md:hidden">
                   <button
                     onClick={() => {
                       deleteRule(index, values);
                     }}
                     className="bg-red-400 p-2 rounded-lg  w-[30px] h-[30px] ml-[350px] ">
                     <IoMdTrash className="text-cyan-50 " />
                   </button>
                 </div>
               )} */}
                <div className="flex md:w-1/3">
                  <div className="w-[90%] md:w-full md:mt-4">
                    <SelectInput
                      label="Rule Type"
                      id={`rules[${index}].type`}
                      name={`rules[${index}].type`}
                      placeholder="Select Type"
                      options={ruleOptions}
                    />
                  </div>
                  {values.rules.length === 1 ? (
                    ""
                  ) : (
                    <div className="w-[10%] md:hidden">
                      <button
                        onClick={() => {
                          deleteRule(index, values);
                        }}
                        className="bg-red-400 p-2 rounded-lg  w-[30px] h-[30px] mt-10 ml-[-2rem]">
                        <IoMdTrash className="text-cyan-50 " />
                      </button>
                    </div>
                  )}
                </div>
                {values.rules[index].type === "amount" && (
                  <>
                    <div className="w-full md:w-1/3 md:mt-4">
                      <SelectInput
                        label="Condition"
                        id={`rules[${index}].condition`}
                        name={`rules[${index}].condition`}
                        placeholder="Select Condition"
                        options={conditionOptions}
                        hidden={selectedConditions}
                        changeHandle={(v) => {
                          const updatedConditions = [...selectedConditions];

                          // Check if the condition is not in updatedConditions, then push it
                          if (!updatedConditions.includes(v)) {
                            updatedConditions[index] = v;
                          }

                          setSelectedConditions(updatedConditions);
                        }}
                      />
                    </div>
                    <div className="w-full md:w-1/3 md:mt-4 ">
                      <Input
                        type="number"
                        id={`rules[${index}].amount`}
                        name={`rules[${index}].amount`}
                        placeholder="Enter Amount"
                        label="Amount"
                      />
                    </div>
                  </>
                )}
                {values.rules.length === 1 ? (
                  ""
                ) : (
                  <div className="md:mt-14">
                    <button
                      onClick={() => {
                        deleteRule(index, values);
                      }}
                      className="bg-red-400 p-2 rounded-lg  w-[30px] h-[30px] hidden md:flex">
                      <IoMdTrash className="text-cyan-50 " />
                    </button>
                  </div>
                )}
              </div>
            ))}
            <div className="flex justify-between gap-8 md:items-baseline px-4 md:px-10 py-2 pb-6">
              <h1></h1>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-gradient-to-tr from-[#428777] to-[#428777]  text-white font-bold py-2 px-4 rounded-2xl">
                  Save
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Rules;
