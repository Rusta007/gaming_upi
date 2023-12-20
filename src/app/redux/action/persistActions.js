export const loginRequest = (credentials) => ({
  type: "LOGIN_REQUEST",
  payload: credentials
});

// export const loginSuccess = (user) => ({
//   type: "LOGIN_SUCCESS",
//   payload: user
// });

// export const loginFailure = (error) => ({
//   type: "LOGIN_FAILURE",
//   payload: error
// });

export const logout = () => ({
  type: "LOGOUT"
});

export const persistSignupData = (data) => ({
  type: "PERSIST_SIGNUP_DATA",
  payload: data
});

export const updateProfile = (formData) => {
  // You can perform any additional logic here, such as making an API call
  // ...

  // Return an action to update the profile data in the Redux store
  return {
    type: "UPDATE_PROFILE",
    payload: formData
  };
};
