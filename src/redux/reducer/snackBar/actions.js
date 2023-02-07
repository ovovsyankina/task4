import { SET_SNACKBAR_TEXT } from "./constants";

export const setSnackBar = (payload) => ({
  type: SET_SNACKBAR_TEXT,
  payload,
});
