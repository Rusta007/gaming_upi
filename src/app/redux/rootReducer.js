import { combineReducers } from "redux";
import persist from "./reducer/persist";
const rootReducer = combineReducers({
  persist
  // Add more reducers here if needed
});

export default rootReducer;
