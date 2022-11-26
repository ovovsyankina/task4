import {
  CURRENT_DATA,
  CURRENT_DATA_SUCCESS,
  CLEAR_CURRENT_DATA,
} from "./constants";
export const getCurrentData = (payload) => ({
  type: CURRENT_DATA,
  payload,
});

export const getCurrentDataSuccess = (payload) => ({
  type: CURRENT_DATA_SUCCESS,
  payload,
});

export const clearCurrentData = {
  type: CLEAR_CURRENT_DATA,
};
