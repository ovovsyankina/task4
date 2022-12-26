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

export const addData = (payload) => ({
  type: ADD_DATA,
  payload,
});

export const addDataSuccess = (payload) => ({
  type: ADD_DATA_SUCCESS,
  payload,
});

export const deleteDataItem = (payload) => ({
  type: DELETE_DATA_ITEM,
  payload,
});

export const deleteDataItemSuccess = (payload) => ({
  type: DELETE_DATA_ITEM_SUCCESS,
  payload,
});

export const putEditDataItem = (payload) => ({
  type: PUT_EDIT_DATA_ITEM,
  payload,
});

export const putEditDataItemSuccess = (payload) => ({
  type: PUT_EDIT_DATA_ITEM_SUCCESS,
  payload,
});

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const getDataSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  payload,
});

export const getFavoriteData = (payload) => ({
  type: GET_DATA_FAVORITE,
  payload,
});

export const getFavoriteDataSuccess = (payload) => ({
  type: GET_DATA_FAVORITE_SUCCESS,
  payload,
});

export const filteredFilm = (payload) => ({
  type: FILTERED_FAVORITE_FILM,
  payload,
});

export const favoriteFilmsCount = () => ({
  type: FAVORITE_FILM_COUNT,
});

export const favoriteFilmsCountSuccess = (payload) => ({
  type: FAVORITE_FILM_COUNT_SUCCESS,
  payload,
});
