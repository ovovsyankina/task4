import { VIEWING_DATA } from "./constants";
export const viewportData = (dataFilm) => ({
  type: VIEWING_DATA,
  dataFilm,
});
