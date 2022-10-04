import { ADD_DATA } from "./constants";

const defaultState = [];
const data = (state = defaultState, { type, dataFilm }) => {
  switch (type) {
    case ADD_DATA:
      return [
        ...state,
        {
          id: Date.now(),
          title: dataFilm.title,
          image: dataFilm.image,
          description: dataFilm.description,
          yearRelease: dataFilm.yearRelease,
        },
      ];

    default:
      return state;
  }
};
export default data;
