import {
  ADD_DATA,
  ADD_DATA_SUCCESS,
  DELETE_DATA_ITEM,
  DELETE_DATA_ITEM_SUCCESS,
  PUT_EDIT_DATA_ITEM,
  PUT_EDIT_DATA_ITEM_SUCCESS,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAVORITE_SUCCESS,
  GET_DATA_FAVORITE,
  FILTERED_FAVORITE_FILM,
  FAVORITE_FILM_COUNT,
  FAVORITE_FILM_COUNT_SUCCESS,
} from "./constants";

const defaultState = {
  data: [],
  favoriteData: [],
  favoriteCount: 0,
};
const data = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_DATA:
      return state;

    case ADD_DATA_SUCCESS:
      return {
        data: [
          ...state.data,
          {
            id: payload.id,
            isFavorite: false,
            title: payload.title,
            image: payload.image,
            description: payload.description,
            yearRelease: payload.yearRelease,
          },
        ],
        favoriteData: [...state.favoriteData],
        favoriteCount: state.favoriteCount,
      };

    case PUT_EDIT_DATA_ITEM:
      return state;

    case PUT_EDIT_DATA_ITEM_SUCCESS:
      return {
        data: [...state.data].map((data) => {
          if (data.id === payload.id) {
            return payload;
          }
          return data;
        }),
        favoriteData: [...state.favoriteData].map((data) => {
          if (data.id === payload.id) {
            return payload;
          }
          return data;
        }),
        favoriteCount: state.favoriteCount,
      };

    case GET_DATA:
      return state;

    case GET_DATA_SUCCESS:
      return {
        data: [...payload],
        favoriteData: [...state.favoriteData],
        favoriteCount: state.favoriteCount,
      };
    case GET_DATA_FAVORITE:
      return state;

    case GET_DATA_FAVORITE_SUCCESS:
      return {
        data: [...state.data],
        favoriteData: [...payload],
        favoriteCount: state.favoriteCount,
      };

    case DELETE_DATA_ITEM:
      return state;

    case DELETE_DATA_ITEM_SUCCESS:
      return {
        data: [...state.data].filter((data) => data.id !== payload),
        favoriteData: [...state.favoriteData].filter(
          (data) => data.id !== payload
        ),
        favoriteCount: state.favoriteCount,
      };

    case FILTERED_FAVORITE_FILM:
      return {
        data: [...state.data],
        favoriteData: [...state.favoriteData].filter(
          (data) => data.id !== payload
        ),
        favoriteCount: state.favoriteCount,
      };

    case FAVORITE_FILM_COUNT:
      return state;
    case FAVORITE_FILM_COUNT_SUCCESS:
      return {
        data: [...state.data],
        favoriteData: [...state.favoriteData],
        favoriteCount: payload,
      };

    default:
      return state;
  }
};
export default data;
