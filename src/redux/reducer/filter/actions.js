import { SEARCH_FILTER } from "./constants";
export const searchFilm = (searchValue) => ({
  type: SEARCH_FILTER,
  searchValue,
});
