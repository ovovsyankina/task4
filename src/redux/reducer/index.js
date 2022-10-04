import { combineReducers } from "redux";
import data from "../reducer/data/data";
import currentData from "./currentData/currentData";

const rootReducer = combineReducers({ data, currentData });

export default rootReducer;
