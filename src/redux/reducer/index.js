import { combineReducers } from "redux";
import data from "../reducer/data/data";
import currentData from "./currentData/currentData";
import filter from "./filter/filter";

const rootReducer = combineReducers({ data, currentData, filter });

export default rootReducer;
