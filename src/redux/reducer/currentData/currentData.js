import { VIEWING_DATA } from "./constants";

const defaultState = {};
const data = (state = defaultState, { type, dataFilm }) => {
  switch (type) {
    case VIEWING_DATA:
      return {
        id: Date.now(),
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
