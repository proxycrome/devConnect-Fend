import { combineReducers } from "redux";
import devSignupReducer from "./devSignupReducer";
import devLoginReducer from "./devLoginReducer";
import empSignupReducer from "./empSignupReducer";
import empLoginReducer from "./empLoginReducer";
import postJobReducer from "./postJobReducer";
import getJobReducer from "./getJobReducer";

const rootReducer = combineReducers({
  devSignup: devSignupReducer,
  devLogin: devLoginReducer,
  empSignup: empSignupReducer,
  empLogin: empLoginReducer,
  postJob: postJobReducer,
  getJob: getJobReducer,
});

export default rootReducer;