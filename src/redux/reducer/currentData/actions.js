import { CURRENT_DATA, CURRENT_DATA_SUCCESS } from "./constants";
export const getCurrentData = (payload) => ({
  type: CURRENT_DATA,
  payload,
});

export const getCurrentDataSuccess = (payload) => ({
  type: CURRENT_DATA_SUCCESS,
  payload,
});
