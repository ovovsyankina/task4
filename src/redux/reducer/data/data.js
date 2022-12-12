import {
  ADD_DATA,
  ADD_DATA_SUCCESS,
  DELETE_DATA_ITEM,
  DELETE_DATA_ITEM_SUCCESS,
  PUT_EDIT_DATA_ITEM,
  PUT_EDIT_DATA_ITEM_SUCCESS,
  GET_DATA,
  GET_DATA_SUCCESS,
  FAVORITE_FILM,
  FAVORITE_FILM_SUCCESS,
} from "./constants";

const defaultState = [];
const data = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_DATA:
      return state;

    case ADD_DATA_SUCCESS:
      return [
        ...state,
        {
          id: payload.id,
          isFavorite: false,
          title: payload.title,
          image: payload.image,
          description: payload.description,
          yearRelease: payload.yearRelease,
        },
      ];
    case PUT_EDIT_DATA_ITEM:
      return state;
    case PUT_EDIT_DATA_ITEM_SUCCESS:
      return state.map((data) => {
        if (data.id === payload.id) {
          data.title = payload.title;
          data.image = payload.image;
          data.description = payload.description;
          data.yearRelease = payload.yearRelease;
          data.isFavorite = payload.isFavorite;
        }
        return data;
      });
    case GET_DATA:
      return state;

    case GET_DATA_SUCCESS:
      return [...payload];

    // return [...payload];

    case DELETE_DATA_ITEM:
      return state;
    case DELETE_DATA_ITEM_SUCCESS:
      return [...state].filter((data) => data.id !== payload);

    default:
      return state;
  }
};
export default data;
