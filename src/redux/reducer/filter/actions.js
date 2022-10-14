import { SEARCH_FILTER } from "./constants";
export const searchFilm = (filterValue) => ({
  type: SEARCH_FILTER,
  filterValue,
});
