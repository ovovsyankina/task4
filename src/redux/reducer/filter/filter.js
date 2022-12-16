import { SEARCH_FILTER } from "./constants";

const defaultState = "";
const filter = (state = defaultState, { type, searchValue }) => {
  switch (type) {
    case SEARCH_FILTER:
      return searchValue;

    default:
      return state;
  }
};
export default filter;
