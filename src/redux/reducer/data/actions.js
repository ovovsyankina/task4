import { ADD_DATA, DELETE_DATA_ITEM, EDIT_DATA_ITEM } from "./constants";
export const addData = (dataFilm) => ({
  type: ADD_DATA,
  dataFilm,
});
export const deleteDataItem = (id) => ({
  type: DELETE_DATA_ITEM,
  id,
});
export const editDataItem = (dataFilm, id) => ({
  type: EDIT_DATA_ITEM,
  dataFilm,
  id,
});
