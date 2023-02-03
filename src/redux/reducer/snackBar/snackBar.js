import { SET_SNACKBAR_TEXT } from "./constants";
const snackBar = (state = "", { type, payload }) => {
  switch (type) {
    case SET_SNACKBAR_TEXT:
      return payload;

    default:
      return state;
  }
};

export default snackBar;
