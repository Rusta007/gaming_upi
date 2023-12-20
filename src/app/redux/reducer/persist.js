// const initialState = {
//   isAuthenticated: false,
//   user: null
// };

// const persist = (state = initialState, action) => {
//   switch (action.type) {
//     case "LOGIN_SUCCESS":
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload
//       };
//     case "LOGOUT":
//       return {
//         ...state,
//         isAuthenticated: false,
//         user: null
//       };
//     default:
//       return state;
//   }
// };

// export default persist;
const initialState = {
  isAuthenticated: false,
  user: null,
  signupData: null
};

const persist = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      // const loginCredentialsMatchSignup =
      //   state.signupData &&
      //   action.payload.email === state.signupData.email &&
      //   action.payload.password === state.signupData.password;
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    case "PERSIST_SIGNUP_DATA":
      return {
        ...state,
        signupData: action.payload
      };
    case "UPDATE_PROFILE":
      return {
        ...state,
        signupData: action.payload
      };
    default:
      return state;
  }
};

export default persist;
