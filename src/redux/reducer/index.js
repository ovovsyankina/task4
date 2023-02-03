import { combineReducers } from "redux";
import data from "./data/data";
import currentData from "./currentData/currentData";
import filter from "./filter/filter";
import snackBar from "./snackBar/snackBar";

const rootReducer = combineReducers({
  data,
  currentData,
  filter,
  snackBar,
});

export default rootReducer;
