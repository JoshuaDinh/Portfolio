import { combineReducers } from "redux";
import { aboutMeReducer } from "./aboutMeReducer";
import { mobileNavReducer } from "./mobileNavReducer";

export default combineReducers({
  aboutMe: aboutMeReducer,
  mobileNav: mobileNavReducer,
});
