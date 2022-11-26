import { SEARCH_FILTER, SEARCH_FILTER_SUCCESS } from "./constants";
export const searchFilm = (searchValue) => ({
  type: SEARCH_FILTER,
  searchValue,
});
export const searchFilmSuccess = (searchValue) => ({
  type: SEARCH_FILTER_SUCCESS,
  searchValue,
});
