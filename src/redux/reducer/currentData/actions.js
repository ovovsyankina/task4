import { CURRENT_DATA } from "./constants";
export const currentData = (dataFilm) => ({
  type: CURRENT_DATA,
  dataFilm,
});
// export const deleteDataItem = (dataFilm) => ({
//   type: DELETE_DATA_ITEM,
//   dataFilm,
// });
