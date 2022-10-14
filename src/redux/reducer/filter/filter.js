import { SEARCH_FILTER } from "./constants";

const defaultState = "";
const filter = (state = defaultState, { type, filterValue }) => {
  switch (type) {
    case SEARCH_FILTER:
      return filterValue;

    default:
      return state;
  }
};
export default filter;
