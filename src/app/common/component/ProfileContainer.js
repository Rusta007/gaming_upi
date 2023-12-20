import React from "react";
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function ProfileContainer({
  initialValues,
  handleSubmit,
  validationSchema,
  submitButtonName,
  selectedTab,
  children
}) {
  const navigate = useNavigate();
  const signupData = useSelector((state) => state.persist.signupData);
  console.log(signupData);
  const { firstName, lastName, email } = signupData
    ? signupData
    : { firstName: "abc", lastName: "xyz", email: "test@gmail.com" };
  const getInitials = () => {
    const { firstName, lastName } = signupData
      ? signupData
      : { firstName: "Rahul", lastName: "Rumi" };
    return (firstName[0] + lastName[0]).toUpperCase();
  };
  return (
    <div className="flex  flex-col lg:flex-row min-h-full overflow-y-hidden overflow-x-hidden">
      <div className="flex flex-col  items-center lg:w-1/2 space-y-4">
        <div className="bg-[#428777] w-24 h-24 mt-11 flex items-center justify-center rounded-full shadow-md">
          {signupData?.profilePic ? (
            <img
              src={signupData?.profilePic || ""}
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
          ) : (
            <span className="text-lg font-bold text-[white]">{getInitials()}</span>
          )}
        </div>
        <div className="text-lg font-semibold text-black">
          {firstName} {lastName}
        </div>
        <div className="text-black">{email}</div>
      </div>

      <div className="flex lg:w-1/2 flex-col mx-5 my-11 bg-[#f0f1f3] py-8 rounded-lg shadow-lg">
        <div className="flex space-x-2 mb-4 mt-[-43px] mx-3">
          <button
            className={`${
              selectedTab === "/profilepage" ? "bg-[#428777] text-white" : "bg-gray-300 text-black"
            }  py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue `}
            onClick={() => {
              navigate("/profilepage");
            }}>
            My Profile
          </button>
          <button
            className={`${
              selectedTab === "/changepassword"
                ? "bg-[#428777] text-white"
                : "bg-gray-300 text-black"
            }  py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue`}
            onClick={() => {
              navigate("/changepassword");
            }}>
            Change Password
          </button>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}>
          <Form className="">
            {children}
            {/* <div>
              <button
                type="submit"
                className="bg-[#428777] text-white py-2 px-6 rounded-md focus:outline-none focus:shadow-outline-blue my-4 ml-3 lg:ml-11">
                {submitButtonName}
              </button>
            </div> */}
            <div className="flex items-center justify-center lg:justify-start">
              <button
                type="submit"
                className="bg-[#428777] text-white py-2 px-6 rounded-md focus:outline-none focus:shadow-outline-blue my-4 lg:ml-11">
                {submitButtonName}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ProfileContainer;
