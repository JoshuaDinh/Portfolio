import { combineReducers } from "redux";
import { aboutMeReducer } from "./aboutMeReducer";

export default combineReducers({
  aboutMe: aboutMeReducer,
});
