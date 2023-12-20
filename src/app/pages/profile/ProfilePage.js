import React from "react";
import { useSelector } from "react-redux";
import { updateProfile } from "../../redux/action/persistActions";
import { useDispatch } from "react-redux";
import ProfileContainer from "../../common/component/ProfileContainer";
import ProfileForm from "./ProfileForm";
import { ProfileSchema } from "../../utils/ValidationSchema";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const signupData = useSelector((state) => state.persist.signupData);
  const navigate = useNavigate();
  const initialValues = {
    firstName: signupData?.firstName || "abc",
    lastName: signupData?.lastName || "xyz",
    email: signupData?.email || "test@gmail.com",
    mobileNumber: signupData?.mobileNumber || "+91 123456789"
  };

  const handleUpdateProfile = (values) => {
    console.log(values);
    dispatch(updateProfile(values));
    navigate("/profileupdateotp");

    // Dispatch an action to update the profile
  };

  return (
    <ProfileContainer
      initialValues={initialValues}
      handleSubmit={handleUpdateProfile}
      submitButtonName="Update Profile"
      validationSchema={ProfileSchema}
      selectedTab="/profilepage">
      <ProfileForm />
    </ProfileContainer>
  );
};

export default ProfilePage;
