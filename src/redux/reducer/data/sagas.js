import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  deleteFilmApi,
  getFavoriteFilmsApi,
  getFavoriteFilmsCountApi,
  getFilmsApi,
  postFilmApi,
  putFilmApi,
} from "../../../api";
import {
  addDataSuccess,
  addToFavoriteFilm,
  deleteDataItemSuccess,
  favoriteFilmsCountSuccess,
  filteredFilm,
  getDataSuccess,
  getFavoriteDataSuccess,
  putEditDataItemSuccess,
} from "./actions";
import {
  ADD_DATA,
  DELETE_DATA_ITEM,
  FAVORITE_FILM_COUNT,
  GET_DATA,
  GET_DATA_FAVORITE,
  PUT_EDIT_DATA_ITEM,
} from "./constants";

function* getFilms({ payload }) {
  try {
    const response = yield call(getFilmsApi, payload);
    yield put(getDataSuccess(response));
  } catch (err) {
    yield console.error(err);
  }
}
function* getFavoriteFilms({ payload }) {
  try {
    const response = yield call(getFavoriteFilmsApi, payload);
    yield put(getFavoriteDataSuccess(response));
  } catch (err) {
    yield console.error(err);
  }
}
function* getFavoriteFilmsCount() {
  try {
    const response = yield call(getFavoriteFilmsCountApi, {});
    yield put(
      favoriteFilmsCountSuccess(
        response && response.length > 0 ? response.length : ""
      )
    );
  } catch (err) {
    yield console.error(err);
  }
}
function* postFilm({ payload }) {
  try {
    const response = yield call(postFilmApi, payload);
    yield put(addDataSuccess(response));
  } catch (err) {
    yield console.error(err);
  }
}

function* putFilm({ payload }) {
  try {
    const response = yield call(putFilmApi, payload);
    yield put(putEditDataItemSuccess(response));
    if (response.isFavorite === false) {
      yield put(filteredFilm(response.id));
    } else {
      yield put(addToFavoriteFilm(response));
    }
  } catch (err) {
    yield console.error(err);
  }
}

function* deleteFilm({ payload }) {
  try {
    yield call(deleteFilmApi, payload);
    yield put(deleteDataItemSuccess(payload));
  } catch (err) {
    yield console.error(err);
  }
}

export default function* dataSagas() {
  yield all([takeEvery(GET_DATA, getFilms)]);
  yield all([takeEvery(ADD_DATA, postFilm)]);
  yield all([takeEvery(PUT_EDIT_DATA_ITEM, putFilm)]);
  yield all([takeEvery(DELETE_DATA_ITEM, deleteFilm)]);
  yield all([takeEvery(GET_DATA_FAVORITE, getFavoriteFilms)]);
  yield all([takeEvery(FAVORITE_FILM_COUNT, getFavoriteFilmsCount)]);
}
