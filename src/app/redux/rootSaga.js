import { all } from "redux-saga/effects";
import { watchLogin, watchLogout, watchPersistSignupData } from "./saga/persistSaga";

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchPersistSignupData()
    // Add more sagas here if needed
  ]);
}
