import { put, takeLatest } from "redux-saga/effects";
// import api from '../../api'; // Your API utility

function* loginSaga(action) {
  try {
    // const user = yield call(api.login, action.payload);
    console.log(action);
    yield put({ type: "LOGIN_SUCCESS", payload: action.payload });
  } catch (error) {
    // console.log(error);
    console.error("Login failed:", error.message);
  }
}

function logoutSaga() {
  // Additional logout logic (e.g., clearing local storage, etc.)
  //   yield put({ type: "LOGOUT" });
  console.log("logout");
}
function persistSignupDataSaga(action) {
  try {
    console.log("sala call: ", action.payload);
  } catch (error) {
    // console.log(error);
    console.error("signup failed:", error.message);
  }
}
export function* watchLogin() {
  yield takeLatest("LOGIN_REQUEST", loginSaga);
}

export function* watchLogout() {
  yield takeLatest("LOGOUT", logoutSaga);
}

export function* watchPersistSignupData() {
  yield takeLatest("PERSIST_SIGNUP_DATA", persistSignupDataSaga);
}
