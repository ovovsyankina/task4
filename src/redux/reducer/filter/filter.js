import { SEARCH_FILTER, SEARCH_FILTER_SUCCESS } from "./constants";

const defaultState = "";
const filter = (state = defaultState, { type, searchValue }) => {
  switch (type) {
    case SEARCH_FILTER_SUCCESS:
      return searchValue;
    case SEARCH_FILTER:
      return state;

    default:
      return state;
  }
};
export default filter;
