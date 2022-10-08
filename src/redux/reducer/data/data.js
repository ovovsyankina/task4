import { ADD_DATA, DELETE_DATA_ITEM, EDIT_DATA_ITEM } from "./constants";

const defaultState = [];
const data = (state = defaultState, { type, dataFilm, id }) => {
  switch (type) {
    case ADD_DATA:
      return [
        ...state,
        {
          id: new Date().getTime(),
          title: dataFilm.title,
          image: dataFilm.image,
          description: dataFilm.description,
          yearRelease: dataFilm.yearRelease,
        },
      ];
    case DELETE_DATA_ITEM:
      return [...state].filter((elem) => elem.id !== id);
    case EDIT_DATA_ITEM:
      return state.map((data) => {
        if (data.id === id) {
          data.title = dataFilm.title;
          data.image = dataFilm.image;
          data.description = dataFilm.description;
          data.yearRelease = dataFilm.yearRelease;
        }
        return data;
      });
    default:
      return state;
  }
};
export default data;
