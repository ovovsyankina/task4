import { CURRENT_DATA } from "./constants";

const defaultState = {};
const data = (state = defaultState, { type, dataFilm }) => {
  switch (type) {
    case CURRENT_DATA:
      return {
        id: dataFilm.id,
        title: dataFilm.title,
        image: dataFilm.image,
        description: dataFilm.description,
        yearRelease: dataFilm.yearRelease,
      };

    default:
      return state;
  }
};
export default data;
