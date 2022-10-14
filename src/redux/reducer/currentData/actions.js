import { CURRENT_DATA } from "./constants";
export const currentData = (dataFilm) => ({
  type: CURRENT_DATA,
  dataFilm,
});
